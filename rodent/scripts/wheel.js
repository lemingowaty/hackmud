function(C,A){

let { t:
	T = ( A.T || ( $=>{throw Error("No Target")} )() ) 
 } = A = A || { } 
, { call , name } = T
, knock = _=>{
  	let A = call(_)
	  T.list.push({
	   A , Q:(JSON.stringify(_)||null) ,
		 type:A.constructor.name , id:T.timesCalled++ 
	 })
	 return  A }//\knock
//\let
T.list = []
T.timesCalled = 0
knock()
knock({})

return T
}