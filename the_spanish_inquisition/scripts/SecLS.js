function(context,arguments){

function getXSec(level = arguments.level, sector =arguments.sector){
{
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
}
return getXSec()
}


}