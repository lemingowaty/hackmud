function (C,A){// T:#s.script.name
  var B = #fs.scripts.lib(), OS=#ms.blank.os(), 
  error = {
    msgs : [
      "Sorry! The script is shifting, ",
      "Unsupported Pattern"
      ],
    get shifting(){
      var err = { ok:false ,
       msg:error.msgs[0]+results[-1].A.match(RGX.shift)+" remain." }
      return err
    }
  },
  RGX = {
    unwantedG : /[^a-z^0-9_\s]+/gi,
    unwantedN : /[^a-z^0-9_\s\.<>]+/gi,
    navword : /([\w]+):"(\w+)"/,
    navword2 : /"([\w]+)"\s"([\w]+)"/,
    navwordB : /(\w+)\s\|\s(\w+)/,
    notCorr : /^[\xA1-\xAA\xC1-\xC3]/gi,
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
  chEveryFalse = crmap=>crmap.every(cr=>cr===false),
  chCr = arr=>arr.map(OS.checkCorrupt),
  target = new OS.callScriptor(A.T), results = target.calls ,
  Tcall = (q=>target.call(q,"\n",1)).bind(target),
  
  //Main
  Tcall({})
  if ( results[-1].ok === false || results[-1]===undefined ){  
    return results[-1]
  }
  let output = {target, org:results[-1], dcr:decorrupt(results[-1]), Time, TC:target.timesCalled };
  return  output
  //MainEnd


  function decorrupt(that,$old){
    if ($old===undefined) $old =  that.A.map(OS.deColorize)
    
    var cr$old = chCr($old)
    //#D("Old: \n" + $old)
    //#D(cr$old)
     if ( chEveryFalse(cr$old) ) return $old
    
    that.recall()
    that = results[-1]

    var $new = that.A.map(OS.deColorize),
    cr$new = chCr($new)
    //#D("New \n" +$new)
    //#D(cr$new)
     if ( chEveryFalse(cr$new) ) return $new
    
    
    cr$new.forEach((elm,ind)=>{
     if (elm !== false) $new[ind] = $old[ind] })
    //#D("NewOld: \n" +$new) ;
    cr$new = chCr($new)
    if ( chEveryFalse(cr$new) ) return $new

    return decorrupt(that,$new)
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
}