function(CTX, A){
	 
	if (CTX.caller!="blank") return {ok:false,msg:"Maybe later."}

	var B = #fs.scripts.lib(),
	CR = #hs.uwotm8.cracklib()


	if(!A) return "{ T:#s.___.___ ,\v Q:{} }"
	var T = A.T || A.t || ""
	if (T=="") return "hit { T:#s.___.___ ,\n\t\v Q:{} }"
	let Query = A.Q ? A.Q : {}


	T = {
	Target:T , Query,
	SecLvl : #fs.scripts.get_level({name:T.name}),
	Loop : 0,
	LNum : 0,
	Answer : CR.Knock(T,Query)
	}


	let ans = T.Answer
	switch(CR.WTFis(ans)){
		case "Array": ans.reverse(); break
		case "String": ans = [ ans ]; break
		default: return ans
	}


	let tmp = Object.assign({},T.Query)
	T.FrstLine = ans[0]
	T.AnsLog   = [{Q:tmp,A:ans}]
	T.Action = CR.Recognize(ans,T)
	T.Alog = [T.Action]
// --------------------------------------------------------------


while(T.LockID>=0){
	switch(T.LockID){
		case 0: case 1: case 2:
			CR.ezc(T)
			break
		case 3: case 4: case 5:
			CR.col(T) ;
			break
		case 6:
			CR.locket(T)
	}
	T.Action = CR.Recognize(T.Answer,T)
}

if (T.LockID<-1||!A.shh)  return T
return {ok:true ,msg:T.Target.name +  " 'Gcracked'"}
}
