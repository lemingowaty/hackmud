function(context, args){//the_spanish_inquisition{n:2}
var B = #fs.scripts.lib() ,
 word = "0123" ,
 WTFis = t=>t.constructor.name,
 STFY = t=>JSON.stringify(t),
 Fact = (n=1)=>{//SILNIA
   if (n>2) return ( n * Fact(--n) )
   else return n
 },
 cpShift = (oArr,n=-1)=>{
 	let nArr = [...oArr]
 	while (n>0){
 	  nArr.unshift(nArr.pop())
 	  n-- 
 	}
 	while (n<0){
 		nArr.push(nArr.shift())
 		n++
 	}
 	return nArr
 },
 TIME = { _ST, 	_TO } //CZAS
 Object.defineProperty( TIME, 'EXEC', 
 	{ enumerable:true , 
 		get(){ 
 		return Date.now() - _ST } 
 	}
  )
///////
function angrm(word){
	let result = [],
		wordArr = Array.from(word)
	for (let i in word){
		result[i] = [word[i], []]
		for (let j in word) if (result[i][0]!==word[j]) result[i][1].push(word[j])
	}
	return result
}
//**MAIN




let R = angrm("ABCD")
//CZAS
TIME.left = _TO - TIME.EXEC	
TIME.END = Date.now()
//CZAS
//#D({R , TIME })
return { R , TIME } 
}
