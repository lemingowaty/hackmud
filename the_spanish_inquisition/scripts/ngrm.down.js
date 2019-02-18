function(C,A){
	let B = #fs.scripts.lib(),
	Time = { 
		limit:_TO ,
		start:_ST 
	},
	cpShift = (oArr,
	           n=-1,
	           $2str=true
	           )=>{
		let nArr = [...oArr]
		while (n>0){ 
			nArr.unshift(nArr.pop())
			n--  }
			while (n<0){ nArr.push(nArr.shift()) ;	n++ } 
			if ($2str) nArr = nArr.join("")	
				return nArr
		},
	mixer = s=>[ 
		s , s[0] + s[2] + s[1],
		s[1] + s[0] + s[2] , s[1] + s[2] + s[0],
		s[2] + s[0] + s[1], s[2] + s[1] + s[0] 
		],
	skipChar = s=>[ s[0] , s.substring(1)] ,
	word = A ? A.word : "dupa"
 //////////////////////////////////////////////////
 function spreadCat (w,x="",res=[]){
 	if (w.length==3) return mixer(w).forEach(e=>res.push(x+e)) 
 	let nArr = new Array()
 	for (let i in w) {
 		nArr[i] = cpShift(w,-1*i)
 		nArr[i] = [ x+nArr[i][0] , skipChar(nArr[i])[1] ]
 		if (nArr[i][1].length>=3) nArr[i][1] = spreadCat(nArr[i][1],nArr[i][0],res)
 	}
  return nArr
}
//////////////////////////////////////////////////Main
if (typeof(A.word)=="string") A.word = [ A.word ]
let R = {
	Time , words:A.word,
	
	Res : (()=>{
		let x = A.word.map(e=>{
			let tmp = []
			spreadCat(e,"",tmp)	
			return {
				word:e,
				len:tmp.length ,
				setlen: new Set(tmp).size 
				}
			})

		return x
		})()
 }
////////////////////////////////////////////////////
Time.exec = Date.now() - Time.start
Time.left = Time.limit - Time.exec
Time.end = Date.now()

return R
}