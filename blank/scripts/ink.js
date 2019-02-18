function(C,A){
  if(!A) throw Error("Enter argument: T:#s.__.__")
  var B = #fs.scripts.lib(),
  OS=new #ms.blank.os(),
  RGX = {
    unwantedG : /[^a-z^0-9_\s]+/gi,
    unwantedN : /[^a-z^0-9_\s\.<>]+/gi,
    navword : /([\w]+):"(\w+)"/,
    navword2 : /"([\w]+)"\s"([\w]+)"/,
    navwordB : /(\w+)\s\|\s(\w+)/,
    normal : /^[\xA1-\xAA\xC1-\xC3]/gi,
    shift : /(\d+)s/
   },
  Time = {
    start : _ST,
    get now(){
     return Date.now()
    },
    get op(){
      return Time.now - _ST
    },
    get left(){
      return _TO - Time.op
    }
  },
  Line = {
    split : line=>line.split(""),
    join : line=>line.join(""),
    compareLen : (A,B)=>{
      if (A.length>B.length) return B
      if (A.length<B.length) return A
      return A
    }
  },
  chEveryFalse = crmap=>crmap.every(cr=>cr===false), //Check if every element is false
  chCr = arr=>arr.map(OS.checkCorrupt),
  target = new OS.callScriptor(A.T),
  results = target.calls ,
  Tcall = (q=>target.call(q,"\n",1)).bind(target)
  /////////////////////////// Global Functions
  function decorrupt(that,$old){
    if (Time.left<500) throw  Error("Timeout " + Time.op)

    if (!$old) {
      //#D("CLEANOLD :" + that.A)
      $old =  that.A.map(OS.deColorize)
    }
    var cr$old = chCr($old) //Check lines for corruption
    //#D("$old : " + $old)
  if ( chEveryFalse(cr$old)===true ) return $old
    //First check
    that = that.recall()
    //#D("CLEANNEW : " + that.A)
    var $new = that.A.map(OS.deColorize)
    //#D("$new : " + $new)
    cr$old.forEach((corr,i)=>{
      // If old -line- isn't corrupt, transport/assign to -new line-
      //(Just in case new line is already corrupt)
      if (corr===false) $new[i] = $old[i]
    })
    var cr$new = chCr($new)
    if ( chEveryFalse(cr$new) ) return $new
    //Second Check

    //If checks failed attempt decorruption
    $old = $old.map(Line.split) //Split lines into characters
    $new = $new.map(Line.split)
    cr$old = $old.map(line=>chCr(line))
    cr$new = $new.map(line=>chCr(line)) //Check each -character- for corruption
    cr$new.forEach(
      (line,i)=>line.forEach(
        (corr,j)=>{
          //If -character- in line is corrupt, replace it with one from the old string
          if (corr !== false ) $new[i][j] = $old[i][j]
        })
      )
      $new = $new.map(Line.join)
  return decorrupt(that,$new)//Recurse
  }

  function getNav() {
    var nav
    if (answer.length === 3){
      var match1 = answer[0].match(RGX.navword),
       match2 = answer[1].match(RGX.navword2)
      nav = {
           choice:match1[1],
           project:match1[2],
           about:match2[1],
           news:match2[2]
         }
      } else {
        var half1 = answer[0].match(RGX.navword)
        do{
          answers[1] = Tcall().A.map(OS.deColorize)
          var cr = chCr(answers[1])
        } while (cr[0]!==false)
        var half2 = answers[1][0].match(RGX.navwordB)
        nav = {
          choice:half1[1],
          project:half1[2],
          news:half2[1],
          about:half2[2]
        }
      }
  return nav
  }
  function getPage (name,Q = {}) {
    Q = Object.assign(Q,{ [nav.choice]:nav[name] })
    return Tcall(Q)
  }
//Function END
///////////////////////////////////////MAIN LOOP
  Tcall({})
  if ( results[-1].ok !== undefined ) throw  Error(results[-1].A[0])

  var answer = decorrupt(results[-1]),
  answers = [answer], nav = getNav(),
  output = {
    answers , Time , nav ,
    timesCalled : target.timesCalled ,
    about:decorrupt(getPage("about")) ,
    [-1]:results[-1]
    }
  return output
}