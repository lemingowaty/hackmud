function(C, A){//the_spanish_inquisition{n:2}
var B = #fs.scripts.lib() ,
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
 Fact = (n=1)=>{//SILNIA
   if (n>2) return ( n * Fact(--n) )
   else return n
 },
 skipChar = t=>t.substring(1),
 STFY = t=>JSON.stringify(t),
 TIME = { _ST, 	_TO } //CZAS
 Object.defineProperty( TIME, 'EXEC', 
 	{ enumerable:true , 
 		get(){ 
 		return Date.now() - _ST } 
 	}
  )
///////
function angrm(word){
	let R , nests

}
//**MAIN
// #D(YDiv(Array.from("ABCD")))



let R = {
	exp1:angrm("ABCD"),
	exp2:angrm(word)
}
//CZAS
TIME.left = _TO - TIME.EXEC	
TIME.END = Date.now()
//CZAS
//#D({R , TIME })
return { R , TIME } 
}
