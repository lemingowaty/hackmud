function(C,A){
if( !A || A == {} ) return "\nblank.lurk{ T : Target,\n\t\tP: Project_Name }"
var st = new Date(_START),
 pname = A.P || A.p || null,
  B = #fs.scripts.lib(),
  T = {tgt : (A.T || A.t || 0)} , Q = {} , QA = new Set(),
 QAt = ()=>Array.from(QA),
 Tgt = T.tgt,
 RGX = {
  emptw : /with\s(\w+)\:\"(\w+)\"/,
  nullw : /(\w+)\s\|\s(\w+)\s/,
  passw : /.gy\s(\w+)\san./
 } 
//FUNCTIONS START
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
      case 4: R = #fs.tyrell.public(q) ; break
      case 5: R = #fs.tandoori.public(q) ; break
      default : R = "No Target"
    }
    return R
  },
  TAP : e=>{
    var R = CL(e),
     q = e || {"null":"null"}
    QA.add({Q:Object.assign({},q),A:R})
    T.QA = QAt()
    //#D({Q:e, A:R})
    return R
  },
  Lrn : ()=>{
    T.W.dir = T.W.cmd[2]
    T.W.cmd = T.W.cmd[1]
    T.W.abt = T.W.nws[2]
    T.W.nws = T.W.nws[1]
    T.W.pwd = RGX.passw.exec( F.show("pwdsrc") )[1]
  },
  show : p=>{
   switch(p){
	 case "news" :
	  Q[T.W.cmd] = T.W.nws
      break
     case "project" :
       Q = {[T.W.cmd]:pname}
       let x = TAP(Q)
       if (x.constructor.name=="Array") return x 
       else  Q = { 
       		 [T.W.cmd]:T.W.dir ,
       		 p:T.W.pwd , pass:T.W.pwd , password:T.W.pwd,
       		 project:pname 
       		} ;
       	break
     case "pwdsrc" :
	    Q[T.W.cmd] = T.W.abt
	  }
	 return TAP(Q)
   },
 results : ()=>{
   var R = (A.p==="0") ? ( ()=>F.show("news") )() : F.show("project")
   if (R.constructor.name=="String") return "Empty"
   else {
     let mtch = /[^a-z^0-9_\s\.<>]+/
	 let unid = (a, b, c) => {
	//NPC lists case
		var s = /[^a-z^0-9_\s\.<>]+/gi
		if (a.search(s)>=0) {return true}
		return false
	}
     let pfect = R
     while(pfect.some(a=>{ if (a.search(mtch)>=0) return true
		else return false   } ) ) { //While Begin
			R = F.show("project")
			for(let cn = 0; cn < pfect.length; cn++ ){
  				if (unid(R[cn]) == false)
  				{ pfect[cn] = R[cn]	}
			}
      }// While End
      R = pfect
    }
  var Pres = [], guns = 0
  R.forEach((el,ind,arr)=>{
		 if (el[0] == "<") {
			arr[ind] = "BRAK";
			Empty++
			return
		  }
		 else {
			if (!Pres[guns]) Pres[guns] = [];
		   Pres[guns].push(el);
		   if (Pres[guns].length == 4) guns++ ;
		   return
		 }		 
    })
  Pres.forEach( (arra,x,BigArr)=>{
    arra.forEach( (el,ind,SmallArr)=> {
		SmallArr[ind] =  " " + ind + ":#s." + el + " "  
	}) 
	BigArr[x] = [ "gun{" , String(arra) , "}" ].join("")
   } )

 return Pres.join("	\n\n")
 }
}
//FUNCTIONS END
//MainLoop
var TAP = F.TAP,
CL = Tgt.constructor.name=="Object" ? F.CL : F.LC,
Empty = 0

while(true){
  if (F.TL()<=100) return {ok:false , msg:T.W}
  TAP(null)
  TAP(Q)
  T.W = {
    nws : T.QA[0].A.match(RGX.nullw,"g"),
    cmd : RGX.emptw.exec(T.QA[1].A)
	}
  
  if (T.W.nws&&T.W.cmd&&T.W.nws[1]&&T.W.cmd[1]) {
  	do {F.Lrn()} while (!T.W.pwd)
  	break
  }
  
  }

if (pname) return "\n"+F.results() + "\n\nfired{"+Empty+"}\n"
return {ok:true , msg:[T,"\n  Execution time:", F.EX()] , T}
}
