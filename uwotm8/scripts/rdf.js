function(CTX, A)
{  
	var B = #s.scripts.lib()
	var STR = { 	
		intro : "`L\x00 Raise` `JDa` `DFloor` \n`J\x00`\t`ACheapest upgrade bulk buyer / reseller` \n`D\x00`\t\t\t\t\tjack_napier.rdf{name:\"Upgrade\",rarity:0`V-5`}  ",
		noarg : "Missing Argument" 
		}
	if (!A){return STR.intro}
	var un = A.name || 0 
	var rar = A.rarity || 0
	if( un===0 )  { return STR.noarg }
	var MR = {}
	MR.query = { name:un , rarity:rar }
	var tmp = { i : 0 }
	MR.call = #s.market.browse(MR.query)
	MR.detail = MR.call.map( (a)=>{
		tmp = #s.market.browse({i:a.i});
		return tmp
		})
	MR.output = MR.detail.map( (a)=>{
		tmp = a.i + " " + B.to_gc_str(a.cost) + "\n" + a.seller
		if (a.upgrade.hasOwnProperty("k3y")){ tmp += "\n\t \u2049" + a.upgrade["k3y"] + "\n"}
		return tmp
		})
	var MR.UI = 
	return MR.output
}
