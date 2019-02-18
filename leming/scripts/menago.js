function(CX,AR){//{ UPG:#s.sys.upgrades , MNG:#s.sys.manage, DEL:#s.sys.cull }

var B = #fs.scripts.lib()

if(!AR){AR = {}}
//if(!AR) return ("`AFor this script to work, you need pass scriptors:`\n"+"{UPG:#s.sys.upgrades , MNG:#s.sys.manage, DEL:#s.sys.cull }")
//
var def_hrch = ["up_class","type","name","rarity"]
function OrdBy(keyname){}
function DivCnt(upg,i){ // Prepare indexes for CNT Object
	let counter = CNT.counter
	for(let key in CNT){

		if (key == "counter"||key == "UPG") continue

		counter[key][upg[key]] = counter[key][upg[key]] + 1 || 1
		if(CNT[key][upg[key]]) CNT[key][upg[key]].push(i)
		else CNT[key][upg[key]] = [i]
	}
}
function Detailed (upg,omitme){ // Map Upgrade object properties, omit strings contained in omitme array
	upg = UPG[upg]
	if(!omitme) return upg


	var R = {}
	for(let key in upg){
		if(omitme.indexOf(key)>=0) continue
		R[key] = upg[key]
	}
	return R
}
function Fmat(a,i,arr){ // Output Formatting.
	msg.push( "`J╠═``"+ a.rarity +"►-----"+ a.name + " "+a.i+" -----" + "`" )
	for (let sk in a) msg.push("`J╠``"+a.rarity+"|` "+sk +" : "+ a[sk] )
	msg.push("`J╠``" + a.rarity +"└"+"``J­-----------------------"+ a.i +"-­┘"+"`")
}


//var UPG = AR.UPG.call({full:1})
var UPG = #hs.sys.upgrades({full:true})
var CNT = {
	type:{}  ,
	name:{}  ,
	rarity:{},
	tier:{}	 ,
	loaded:{},
	up_class:{},
	counter:{
			total:UPG.length,
			type:{},
			name:{},
			rarity:{},
			tier:{},
			up_class:{},
			loaded:{}
		},
	UPG : ()=>UPG
}

var order = AR.order || 0
UPG.forEach(DivCnt)
var res = CNT
var DET = {} //Detailed for formatting upgrade list
if(AR&&AR.showme) {
	let sme = AR.showme
	let defomit = [ "sn", "description" ]
	let omit = AR.omit ? [...AR.omit , ...defomit ] : defomit //Omit keys

	DET[sme] = {}
	for(let k in CNT[sme]){
		DET[sme][k] = CNT[sme][k].map( El=>Detailed(El, omit) )
	}
	res = AR.sub ?  DET[sme][AR.sub] : DET[sme] // If no sub selection return whole object.showme
}
var msg = (AR.f) ? [] : res
if (AR.f) { //formatting
	for (let k in res){
		msg.push("`J╔═════════════════════"+AR.showme +" : ` `A"+ k + "`")
		msg.push("`J╚════-``jEnd of "+AR.showme +" :` `W"+k+"`")
	}
}
return { ok:true , msg:B.columnize(msg) }
}
