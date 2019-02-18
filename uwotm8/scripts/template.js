function(C,A)
{
	
var SP = #s.sys.specs()
var B = #s.scripts.lib()
	
	function myObj(smth){ // Constructor
		if(!smth){ var smth = {} }
		smth.that = ()=>{ return smth }
		var that = smth.that()
		B.log("I exist")
		that.log = B.get_log()
		return smth
	}
	
return Object.keys(B)
}
	