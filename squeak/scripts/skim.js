function(C,A){

  var st = new Date(_START)
  var pname = A.P || A.p || 0
  var B = #fs.scripts.lib()
  var T = {} , Q = {} , QA = new Set()
  T.tgt = A.T || A.t || 0
  var QAt= ()=>Array.from(QA)
  var Tgt = T.tgt
  var Rgx = {
    emptw : /with\s(\w+)\:\"(\w+)\"/,
    nullw : /(\w+)\s\|\s(\w+)\s/,
    passw : /egy\s(w+)\sand/
  }
  var F = {
    TL: ()=>5000-F.EX() ,  //TimeLeft
    EX: ()=>Date.now()-st ,// Exec time
    CL : q=>Tgt.call(q),
    LC : q=>{
      let R
      switch(Tgt){
        case 1: R = #fs.skimmerite.public(q) ; break
        case 2: R = #fs.amal_robo.public(q) ; break
        case 3: R = #fs.subject_object.public(q) ; break
        default : R = "No Target"
        }
      return R
    },
    TAP : e=>{
      var R = CL(e)
      var q = e || {"null":"null"}
      QA.add({Q:Object.assign({},q),A:R})
      T.QA = QAt()
      return R
    },
    Lrn : ()=>{
      T.W.dir = T.W.cmd[2]
      T.W.cmd = T.W.cmd[1]
      T.W.abt = T.W.nws[2]
      T.W.nws = T.W.nws[1]
    },
    show : (p)=>{
     switch(p){
       case "news" :
         Q[T.W.cmd] = T.W.nws
         break
       case "project" :
         Q = {[T.W.cmd]:pname}
         let x = TAP(Q)
         if (x.constructor.name=="Array") return x
         else Q = {
           [T.W.cmd]:T.W.dir ,
           p:T.W.pwd , pass:T.W.pwd , password:T.W.pwd,
           project:pname
          }
       }
     return TAP(Q)
   },
   results : ()=>{
     var R = (A.p==="0") ? F.show("news") : F.show("project")
     if (R.constructor.name=="String") return "Empty"
     else {
       let mtch = /[^a-z^0-9_\s\.<>]+/
       let pfect = R
       while(pfect.some(a=>{
         if (a.search(mtch)>=0) return true
         else return false   })) { //While Begin
         R = F.show("project")
         for(let cn = 0; cn < pfect.length; cn++ ){
    				if (unid(R[cn]) == false)
    				{ pfect[cn] = R[cn]	}
          }
        }// While End
        R = pfect
      }
    return R
    }
  //MainLoop
  var TAP = F.TAP
  var CL = Tgt.constructor.name=="Object" ? F.CL : F.LC
  var set
  while(!set){
    TAP(null)
    TAP(Q)
    T.W = {
      nws : T.QA[0].A.match(Rgx.nullw,"g"),
      cmd : Rgx.emptw.exec(T.QA[1].A)
    }
    if (F.TL()<=100) return {ok:false , msg:T.W}
    if (!(T.W.nws||!T.W.nws)) continue
    if (T.W.nws&&T.W.cmd&&T.W.nws[2]&&T.W.cmd[2]) break
  }
  F.Lrn()
  Q[T.W.cmd] = T.W.abt
  T.W.pwd = /egy\s(\w+)\s/.exec(TAP(Q))[1]
  if(pname) return F.results()
  return {ok:true , msg:[T,"\n  Execution time:", F.EX()]}
  }
