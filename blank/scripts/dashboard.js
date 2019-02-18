function (C, A) { // { blank.dashboard }
	var B =  #fs.scripts.lib(),
	specs = {
		name: C.caller,
		cash: B.to_gc_str( #hs.accts.balance() ),
		specs: {},
		scripts:  #ms.scripts.user()
	},
	specstr =  #hs.sys.specs(),
	colrgx = /(`\w)(\w+\s?\w+?)(`)/g,
	specrgxG = /(\w+)\s?[:(]\s?(\d+)/g,
	specrgx1 = /(\w+)\s?[:(]\s?(\d+)/

	specstr = specstr.replace(colrgx, "$2")

	var matchAll = specstr.match(specrgxG),match
	matchAll.forEach(elem=>{
		match = elem.match(specrgx1)
		specs.specs[match['1']] = parseInt(match[2])
		})
	
	return specs
}