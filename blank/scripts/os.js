function (C, A) {//blank.os{ func:"help"}
	var OUT , B =  #fs.scripts.lib() ,
	corrupt =  /`?[\xA1-\xAA\xC1-\xC3]+`?/gi,
	colrgx = /(`\w)(.*)(`)/g,
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
  self = me=>me,
  CSTR = function CTSR(that){
  	var SELF = self.bind(that,that),
  	that = {
	addPadding($string = A.$string , padsize=A.padsize||20 ,side = "right", padchar=A.padchar||" "){
			let newstring, padding
			padsize = padsize - $string.length
			if (padsize<0) return $string

			padding = Array(padsize+1).join(`${padchar}`)
			if (side == "right") newstring = $string + padding
			 else newstring = padding + $string
			
			return newstring
		},
	callScriptor : function SOR (S){
	    var XS = {
	      name : S.name,
	      timesCalled : 0,
	      calls : []
	      }
	    Object.defineProperty(XS.calls, "-1" , {
	      get : function () {return (XS.calls[XS.calls.length - 1]||null)} })
		Object.defineProperty(XS, "last" , {
	      get : function () {return (XS.calls[XS.calls.length - 1]||null)} })
		XS.call = ((that,Q,div,rev)=>{
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
		      if (result.WTFis=="String"&&div) {
		        result.A = result.A.split(div)
		        result.div = div
		      }
		      if (result.WTFis=="Object"&&result.A.ok!==undefined){
		        result.ok = result.A.ok
		        result.A = result.A.msg
		        return result.A
		      }
		      if (Array.isArray(result.A)&&rev) result.A = result.A.reverse()
		      return result.A
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
	test : ()=>SELF.help()		,
	columnize : #fs.scripts.lib().columnize,
	deColorize : string=>string.replace(colrgx,"$2"),
	getObjInfo:(obj = A.obj)=>{
			let info = { 
				type   :obj.constructor.name , 
				length : obj.length ,
				stuff : Object.getOwnPropertyNames()
			}
			return Object.values(String.constructor)
		},
	getObjKeys : obj=>Object.keys(obj),
	getObjValues : obj=>Object.values(obj),
 }
 that.self=SELF()
 that.getXSec = (level = A.level,sector = A.sector||null)=>{
			let list = "Digits from 0 to 4" //Wrong digit case
			if ( typeof(sector)=="number"||(sector >= 1 && sector <=8)) {
				var Seclist = me.getXSec(level,null),
				Scrlist = []
				for (let i = 0;i<sector;i++) {
					list = that.getXSec(level, Seclist[i])
					Scrlist = [...Scrlist, `\`T${Seclist[i]}\`` ,...list]
				}
				return Scrlist
			}
			sector = (sector) ? sector.replace(/\s/g,"_").toUpperCase() : null
			if (sector) {
				var joined = that.checkChan(sector)+1
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
		}
 that.showUpgrades = (full = A.full)=>{
			var list = #ms.sys.upgrades({full:true}) , Addpad = that.addPadding
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
 that.help = ()=>{
			let funcList = Object.keys(that)
			return funcList.join("	")
		}
 return that
},
UTIL = new CSTR({})
if(C.calling_script!==null)	return UTIL

if (A) OUT = UTIL[ A["func"] ]()
else return `blank.os{func:"help"}`
if (Array.isArray(OUT)) OUT = B.columnize(OUT)
return OUT
}