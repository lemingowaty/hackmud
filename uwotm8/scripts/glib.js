function(C, A){	
var B = #s.scripts.lib()
 
var RM = {
	PriN : n=>{ // Number
		if (n<2){return false}
		if (n===2){return true}
		if (n%2===0){return false}
		for (let i = 3; i<n; i+=2){
			if ((n%i)===0){return false}
			}
		return true
		},

	uHex : Ob=>String.fromCharCode(parseInt(Ob.ch,16)),
	
	dLine : Ob=>{  // (ch)aracter, (re)peats
		var R = Ob.ch
		for (var i = 1;i<Ob.re;i++) {R += Ob.ch}
		if (Ob.spl) {R = R.split(Ob.spl)}
		return R	
		},
	
	gWindow : (Ob)=>{
		
		var R = {
			IM:"Window",
			x : Ob.x || 10,
			y : Ob.y || 10,
			Ob
		}
		
	return R
	},
	
	gContainer : (Ob)=>{
		var R = {
			IAm			: "container" , 
			IHold		: Ob["constructor"]["name"] ,
			contains	: Ob
			}
		R.constructedBy = RM.gContainer.name
		R.that = ()=>R
	return R
	},
		
	gMark : (Ob)=>{
		var R = {
			IM	 	: "MarkerGrid",
			IHold  	: Ob["constructor"]["name"] ,
			hand : Ob
		}
		
		R.that = ()=>R
	return R	
	}
}
////////////////////////////
if(A){
	if (A.debug){
		var test1 = RM.gContainer("Example")
		var test2 = RM.gMark(test1)
		var test0 = RM.gWindow(test2)
		return { test1 , test2, test0 }
	}
	var myA = A.param , myCmd = A.cmd
	let x = RM[myCmd](myA)
	return x
	}
 return "No Argument"
}