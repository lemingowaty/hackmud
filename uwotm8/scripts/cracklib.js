function(cx, ar)
{
 var RMe = {}
 RMe.Deb = #s.uwotm8.debby({ cmd:"dbf",que:{vname:"crackt1"},password:"ihaveasmallpenis" })
 var Deb = RMe.Deb

 function ezc(here){
  here.LNum++
	var ep = "ez_"+here.LockName;
	for(let i in Deb.ow){
		here.Query[ep] = Deb.ow[i];
		RMe.Move(here);
		if(RMe.LookFor("mand",here.Answer[0])===-1){
			break
		}
	}
	switch(here.LockName){
		case "35":
			for(let i=0;i<10;i++){
				here.Query.digit = i;
				RMe.Move(here);
				if(RMe.LookFor("digit",here.Answer[0])===-1){break}
			}
		break;
		case "40":
		for (let i in Deb.prn){
			here.Query.ez_prime = Deb.prn[i];
			RMe.Move(here);
			if(RMe.LookFor("corr",here.Answer[0])===-1){
				break}
			}
	}
}
function locket(here){
	here.LNum++
	var K3  =  #s.uwotm8.debby({ cmd:"dbf",que:{vname:"k3ys"}, password:"ihaveasmallpenis"})
	K3 = K3.keys
	for (let i in K3){
		here.Query["l0cket"] = K3[i]
		RMe.Move(here)
		if(RMe.LookFor(K3[i],here.Answer[0])==-1){
			here.Alog = [("l0cket cracked with " + K3[i]),...here.Alog]
			return
		}
	}
}
function col(here){
	var ep = "c0"+here.LockName;
	var x = 0;
	for (let i in Deb.clr){
		here.Query[ep] = Deb.clr[i]
		x = i
		RMe.Move(here)
		if(RMe.LookFor('nam',here.Answer[0])==-1){break}
	}
	switch(here.LockName){
	case "01" :
			here.Query.color_digit = Deb.clr[x].length;
			RMe.Move(here)
			break;
	case "02" :
		for(let i in Deb.clr){
			here.Query[ [ep] + Deb.pn[1] ] = Deb.clr[i]
			RMe.Move(here)
			if(RMe.LookFor("comp",here.Answer[0])===-1){break}
		}
		break;
	case "03":
			for(let i in Deb.clr){
			here.Query[[ep]+Deb.pn[2]] = Deb.clr[i];
			RMe.Move(here)
			if(RMe.LookFor("firs",here.Answer[0])===-1){break}
			}
			for(let i in Deb.clr){
			here.Query[[ep]+Deb.pn[3]] = Deb.clr[i];
			RMe.Move(here)
			if(RMe.LookFor("seco",here.Answer[0])===-1){break}
			}
	}
	return
}
//----------------------------------------------------------------------------------------
function LookFor(that,here){
	return here.indexOf(that)
}
function WTFis(that) {
	return that.constructor.name
}
function Knock(T, Query){
	var Answer = T.call(Query)||T.call()
	if (RMe.WTFis(Answer)=="String") return Answer.split("\n")
	return Answer
}
function Move(it){
	if (it.Alog.indexOf(it.Action)<0) {
		it.Alog = [it.Action, ...it.Alog]
	}
	var tmp = Object.assign({},it.Query)
	it.Loop++
	it.Answer = RMe.Knock(it.Target,it.Query)
  let ans = it.Answer
	it.AnsLog  = [{Q:tmp,A:ans},...it.AnsLog]
	it.FrstLine  = ans[0]
	switch(RMe.WTFis(ans)){
    case "Array": ans.reverse(); break
    case "String": ans = [ ans ]
  }
	// !!!

}
function Recognize(that,here){
  if(RMe.WTFis(that)=="Object") return that
  if ( that[0].includes("breached")||that[0].includes("terminated")){
		here.LockID = -1
		return that[0]
	}
	if (that[1] && that[1].includes("LOCK_ERROR")){
		let locklist = Deb.lcks
		for (let i in locklist){
			if(RMe.LookFor(locklist[i],that[0])>=0){
				here.LockID = Number(i)
				here.LockName = Deb.lcks[i]
				return ("Lock Encountered : " + here.LockName)
				}
		}
		here.LockID = -2
		return "Unrecognized/Unsupported Lock"
	}
	here.LockID = -3
	return "Unrecognized Response"
}

RMe.ezc = ezc
RMe.col = col
RMe.locket = locket

RMe.Move = Move
RMe.Recognize = Recognize
RMe.WTFis = WTFis
RMe.Knock = Knock
RMe.LookFor = LookFor

return RMe
}
