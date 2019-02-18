function(C,A){

let { 
	t:T = ( A.T || ( $=>{throw Error("No Target")} )() ) ,
	q:Q = null ,
	} = A = A || { } 
,{ call , name } = T

T.list = []
T.timesCalled = 0
T.knock = (query=null, div=null, rev=false)=>{
	let A = call(query),
	$ = { Q:query , A 
	, type:A.constructor.name 
	, id:T.timesCalled++ 
	}
	T.list.push($)
	return  A }

return { T }
}