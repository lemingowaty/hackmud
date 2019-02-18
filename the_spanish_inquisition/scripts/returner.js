function(CTX, AR)
{	
	var B = #s.scripts.lib()
	var RTN = {}
	var R
	RTN.Specs = (()=>{
		R = #s.sys.specs();
					return R.split("\n")})()
	RTN.Accts = (()=>{
		R = #s.accts.transactions({count:30});
					return R})()
	RTN.date = Date()
	return RTN
}
