function(CX,AR){
	var B = #fs.scripts.lib()

//////Default values
	if(!AR){
		var AR = {q : 0 , lf:"public" , sl:"4" }  
		}
	if (!AR.sect) AR.sect = "NONE"
	var q = AR.q || 0  
	var sl = String(AR.sl) || "4"
	var lf = AR.lf || "public" 
	var sect = AR.sect;
////////////Caller	
	function CL (p,sec,sector) {
		 var R, p = (p===0) ? p : (p*=128);
		 switch(sec){
			case "0" : R = #ns.scripts.nullsec({start:p,sector}); break;
			case "1" : R = #ls.scripts.lowsec({start:p,sector}); break;
			case "2" : R = #ms.scripts.midsec({start:p,sector}); break;
			case "3" : R = #hs.scripts.highsec({start:p,sector}); break;
			case "all" : R = [] ; 
			R[0] = #ns.scripts.nullsec({start:p,sector});
			R[1] = #ls.scripts.lowsec({start:p,sector});
			R[2] = #ms.scripts.midsec({start:p,sector});
			R[3] = #hs.scripts.highsec({start:p,sector});
			R[4] = #fs.scripts.fullsec({start:p,sector});
			default  : R = #fs.scripts.fullsec({start:p,sector}); }
		return R
	}
/////////////////////////////////////////////Main Begin
	if(sect == "NONE"){
		var SectList;
		SectList = CL(0,sl);
		sect = SectList[0];
		return B.columnize(SectList)
	}
	var ScriptList = [];
	var fcl , lsa = 0;
	#ms.chats.join({channel:sect});
	if ( lsa.constructor.name!=="Array" ){
		lsa = CL(q,sl,sect)
		return lsa 
		var i = 0
		while(ScriptList){
			ScriptList = CL(++q,sl,sect);
			if(ScriptList.length==0||i==3){break}
			lsa = [ ...lsa , ...ScriptList]
			i++
			}
		#ms.chats.leave({channel:sect});
	}
	if(lsa.length == 0){return ":("}
	
	
return lsa
}