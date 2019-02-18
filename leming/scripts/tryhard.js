function(CTX, A){
var B = #s.scripts.lib()
var CR = #s.uwotm8.cracklib()
var F  ; F = {
ini : (T,R)=>{
R = {
Target:T,	name : T.name , 	Query,
Start:Date(_START),
newStart:new Date(_START),
SecLvl : #s.scripts.get_level({name:T.name}),
Loop : 0,
LNum : 0,
	}
	R.Answer = CR.Knock(R.Target , R.Query)
	return R
},
main:(R)=>{
	R = F.ini(R)
	let ans = R.Answer
	switch( CR.WTFis(ans) ){
	 case "Array": ans.reverse(); break
	 case "String": ans = [ ans ]; break
	 default: return ans
  }
	R.FrstLine = ans[0]
	let tmp = Object.assign({},R.Query)
	R.AnsLog   = [{Q:tmp,A:ans}]
	R.Action = CR.Recognize(ans,R)
	R.Alog = [R.Action]
	#D(R.Query)
	#D(ans)
	while(R.LockID>=0){
		switch(R.LockID){
		case 0: case 1: case 2:
		CR.ezc(R,R.Query)
		break
		case 3: case 4: case 5:
		CR.col(R,R.Query) ;
		break
		case 6:
				CR.locket(R,R.Query)
				}
				R.Action = CR.Recognize(ans,R)
				#D(R.Action)
			}
			if (T.LockID<-1||!A.shh) return R
		return {ok:true,msg:"`XCracked`" + R.name}
	}
	}
	//////////
	var T =  A.T || A.t || ""
	var TList = (T.name) ? { "0":T } : T
	if (!TList["0"]||!TList["0"].name) return "\t leming.tryhard { T:#s.___.___ , Q:{} }"
	var Query = A.Q ? A.Q : {}
	for (var k in TList){
		
		var X = TList[k]
		Query = {}
		X = F.main(X)
	}
	return TList
}
