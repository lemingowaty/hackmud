function(C,A){
 let Time = { 
		limit:_TO ,
		start:_ST 
	 },
 cpShift = (oArr,n=-1,$2str=true)=>{
 	let nArr = [...oArr]
	while (n>0){
	 	 nArr.unshift(nArr.pop())
	 	 n-- }
	while (n<0){
 		nArr.push(nArr.shift())
 		n++ } 
 	if ($2str) return nArr.join("")	
 	return nArr
 	}

return cpShift("ABCD",-1)
}