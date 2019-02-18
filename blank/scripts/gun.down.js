function(CT, AR){


	function CR(args){
		if (!args) return #hs.blank.hit()
		args.shh = 1
		return #hs.blank.hit(args)
	}
var results = []

if (!AR) return CR({})

var Count = 0
while(AR[Count+1]) Count++
Count++
AR.length = Count
var Tlist = Array.from(AR)
for (let i = 0;i<AR.length;i++){
		results[i] = CR( { T:Tlist[i] } )
	}


	var B = #fs.scripts.lib()
	return { R:results , T:Tlist }
}
