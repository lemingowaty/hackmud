function(CX, AR)
{
var B = #fs.scripts.lib(),
date = new Date()
var MLib = {
	LookF : (that, here)=>{
		if (that.constructor.name=="Array") return here[0].indexOf(that)
		return here.indexOf(that) 
	},
	WTFis : that=>that.constructor.name,
	Knock : (target,query)=>{
		var R = target.call(query) || target.call() ;
		return R 
	},
	TimeAddDif:(A = 2)=>date.setHours(date.getHours()+A) 
	}
MLib.TimeAddDif()
return date
}
