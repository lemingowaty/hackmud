function(CX, A)
{
	//SuperLib!
	const LemLib = {

		LookF:(that, here)=>{
			if (MLib.WTF(here)=="Array"){
				return here[0].indexOf(that) }
			return here.indexOf(that)
		},

		WTFis:that=>that.constructor.name,

		Knock:(target,query)=>{
			var R = target.call(query)
			return R
		},

		TimeAddDif:	(A = 2)=>A.setHours(date.getHours()+A) ,


		seanLib	: #fs.scripts.lib()
  }
	if (!A) return LemLib
	// else return MLib[A.cmd](A.arg)
	const UpgLib = {
	  DivCnt: (upg,i) => {//Callback Function
		let counter = CNT.counter
		for(let key in CNT){

			if (key == "counter"||key == "UPG") continue

			counter[key][upg[key]] = counter[key][upg[key]] + 1 || 1
			if(CNT[key][upg[key]]) CNT[key][upg[key]].push(i)
			else CNT[key][upg[key]] = [i]
			}
		},
	  TrimKeys : (upg,omitme) => {
			upg = UPG[upg]
			if(!omitme) return upg

			var R = {}
			for(let key in upg){
				if(omitme.indexOf(key)>=0) continue
				R[key] = upg[key]
			}
		return R
		}
	}
	function DivCnt(upg,i){
		let counter = CNT.counter
		for(let key in CNT){

			if (key == "counter"||key == "UPG") continue

			counter[key][upg[key]] = counter[key][upg[key]] + 1 || 1
			if(CNT[key][upg[key]]) CNT[key][upg[key]].push(i)
			else CNT[key][upg[key]] = [i]
		}
	}
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
		}
	}
	var DVL = ["type"]
	var DET = {}
	UPG.forEach(UpgLib.DivCnt)
	return Array.from(CNT)
}
