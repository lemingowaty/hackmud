function(CTX, AR)
{	
	var B = #fs.scripts.lib()
	var L = #hs.leming.lemlib()
	var RTN = { OS:#ns.blank.os()}
	var R
	RTN.Specs = (()=>{
		R = #hs.sys.specs();
					return R})()
	RTN.Accts = (()=>{
		R = #hs.accts.transactions({count:30});
					return R})()
	RTN.date = Date()
	return Object.keys(L)
	return RTN
}
