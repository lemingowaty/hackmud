function (C, A) {//blank.os{ func:"help"}
	var OUT , B =  #fs.scripts.lib() ,
	corrupt =  /[\xA1-\xAA\xC1-\xC3]/gi,
	colrgx = /(`[A-Z0-9])([\xA1-\xAA\xC1-\xC3\w]+)`/i,
	Time = {
	 start : _ST,
	 get now(){
		return Date.now()
	 },
	 get op(){
		 return Time.now - _ST
	 },
	 get left(){
		 return _TO - Time.op
	 }
  },
	UTIL = {
		addPadding($string = A.$string , padsize=A.padsize||20 ,side = A.side||"right", padchar=A.padchar||" "){
			let newstring, padding
			if (padsize<0) return $string

			padding = Array(padsize+1).join(`${padchar}`)
			if (side == "right") newstring = $string + padding
			else newstring = padding + $string
			return newstring
		},
		callScriptor: function (S)  {
	    var XS = {
	      name : S.name,
	      timesCalled : 0,
	      calls : []
	    }
			Object.defineProperty(XS, "getTimesCalled" , {
	      get : function () {return XS.timesCalled}
	    })
	    Object.defineProperty(XS.calls, "-1" , {
	      get : function () {return (XS.calls[XS.calls.length - 1]||null)}
	    })

	    XS.call = ( (that,Q,div,rev)=>{
	      var result = {
	        Q:JSON.stringify(Q)||"null" ,
	        A : S.call(Q)
	      }
	      that.timesCalled++
	      that.calls.push(result)
	      result.pos = that.calls.length - 1
	      result.id = that.timesCalled
	      result.recall = ()=>that.call(Q,div,rev)
	      result.stamp = Time.now
	      result.WTFis = result.A.constructor.name
	      result.ArrPos = that.calls.length - 1
				if (result.WTFis == "Object" && result.A.ok!==undefined){
					result.ok = result.A.ok
					result.A = result.A.msg
					result.WTFis = "String"
				}
	      if (result.WTFis=="String"&&div) {
	        result.A = result.A.split(div)
	        result.div = div
	      }
	      if (Array.isArray(result.A)&&rev) result.A = result.A.reverse()
	      return result
	    }).bind(XS,XS)
	    return XS
	 },
		checkChan: ( channel = A.channel)=>{
			let userchans = #ms.chats.channels(),
			found = userchans.indexOf( channel )
			return found
		},
		checkCorrupt : string=>{
			var x = string.search(corrupt)
			if (x>=0) return x
			return false
		},
		columnize : B.columnize,
		cullUpgRange: (a = A.a, b = A.b) => {
			let indexes = Array.apply(null , Array(b-a+1))
			indexes = indexes.map((elm,ind)=>{ return a+ind })
			#ls.sys.cull({i:indexes,confirm:1})
		},
		deColorize : string=>string.replace(colrgx,"$2"),
		getObjInfo:(obj = A.obj)=>{
			let info = { type:obj.constructor.name }
			info.length = obj.length
			return Object.values(String.constructor)
		},
		getXSec:(level = A.level,sector = A.sector||null)=>{
			let list = "Digits from 0 to 4" //Wrong digit case
			if ( typeof(sector)=="number"||(sector >= 1 && sector <=8)) {
				var Seclist = UTIL.getXSec(level,null),
				Scrlist = []
				for (let i = 0;i<sector;i++) {
					list = UTIL.getXSec(level, Seclist[i])
					Scrlist = [...Scrlist, `\`T${Seclist[i]}\`` ,...list]
				}
				return Scrlist
			}
			sector = (sector) ? sector.replace(/\s/g,"_").toUpperCase() : null
			if (sector) {
				var joined = UTIL.checkChan(sector)+1
				if (!joined) #ms.chats.join({channel:sector})
			}
			switch(level){
					case 0 : list = #fs.scripts.nullsec({sector}); break
					case 1 : list = #fs.scripts.lowsec({sector}); break
					case 2 : list = #fs.scripts.midsec({sector}); break
					case 3 : list = #fs.scripts.highsec({sector}); break
					case 4 : list = #fs.scripts.fullsec({sector}); break
			}
			if (sector && !joined) #ms.chats.leave({channel:sector})

			return list
		},
		getObjKeys : obj=>Object.keys(obj),
		getObjValues : obj=>Object.values(obj),
		help: ()=>{
			let funcList = Object.keys(UTIL)
			funcList = funcList.map(elem=>UTIL.addPadding(elem))
			return funcList
		},
		showUpgrades: (full = A.full)=>{
			var list = #ms.sys.upgrades({full:true}) , Addpad = UTIL.addPadding
			if (full) return list
			var maxTypeLen = 0 , maxNameLen = 0
			list.forEach(elm=>{
				if (elm.type.length > maxTypeLen) maxTypeLen = elm.type.length
				if (elm.name.length > maxNameLen) maxNameLen = elm.name.length
			})

			list = list.map( (e,ind)=>{
				let i = Addpad( ind.toString() , 3 , 1 , "0" ), upg
				i = (e.loaded) ? `\`J${i}\`` : `\`f${i}\``
				upg = `\`T${Addpad( e.k3y||e.type , maxTypeLen , 1)}\` ${i} \`${e.rarity}${Addpad(e.name,maxNameLen)}\``

				return `>${upg}<`
			} )

			return list
		}
	}
	if(C.calling_script!==null) return UTIL

	if (A) OUT = UTIL[ A["func"] ]()
	else return `blank.os{func:"help"}`

	if (Array.isArray(OUT)) OUT = B.columnize(OUT)
	return OUT
}
