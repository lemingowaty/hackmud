function(CTX, A){
	var B = #s.scripts.lib()
	var CR = #s.uwotm8.cracklib()
	var T = A.T || A.t || ""
	if (!T.name) return "\t leming.tryhard { T:#s.___.___ , Q:{} }"
	let Query = A.Q ? A.Q : {}
	var iniT = (T)=>T = {
	 Target:T , Query,
	 SecLvl : #s.scripts.get_level({name:T.name}),
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
	if (T.LockID<-1||!A.shh) return T
	return {ok:true,msg:T.Target.name}
}
