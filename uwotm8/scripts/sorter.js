function(context, ARGS){
	function Typ(A){
		var r = []
		var c = {bb:0,sc:0,sp:0,tl:0,oth:0,lck:0} //Upgrade Type Counter
		for (let i in A){
			c[A[i]["type"]]++
		}
		A.sort( (a,b)=>{if(a.type>b.type){return -1} if(a.type<b.type){return 1} return 0} )
		r[0] = A.splice(0, c.tl)
		r[1] = A.splice(0, c.sp)
		r[2] = A.splice(0, c.sc)
		r[3] = A.splice(0, c.lck)
		r[4] = A.splice(0, c.bb)
		r[5] = A
		for (let i in r) { r[i].sort( (a,b)=>{if(a.name>b.name){return 1} 
		 if (a.name<b.name){return -1} 
		return 0 } ) }
		r = [...r[0] , ...r[1] , ...r[2] , ...r[3] , ...r[4] , ...r[5]]
		return r
	}
	function Ti(A){
		var r = []
		var c = {t3:0,t2:0}
		for (let i in A){
			c["t"+String(A[i].tier)]++
		}
		A.sort( function(a,b) {return b.tier-a.tier})
		r[0] = A.splice(0, c.t3)
		r[1] = A.splice(0, c.t2)
		r[2] = A
		for (let i in r){r[i] = Typ(r[i])}
		r = [...r[0] , ...r[1] , ...r[2]]
		return r
	}
	//1
	function Rare(A){
		var r = []
		var c = { r1:0 , r2:0 , r3:0 , r4:0 }
		for (let i in A){
			c[("r"+A[i].rarity)] = (c["r"+A[i].rarity] + 1) | 0
			}
		A.sort( (a,b)=>{return (b.rarity - a.rarity)} ) ;
		r[0] = A.splice(0, c.r4);
		r[1] = A.splice(0, c.r3);
		r[2] = A.splice(0, c.r2);
		r[3] = A.splice(0, c.r1);
		r[4] = A
		for (let i in r){ r[i] = Ti(r[i]) }
		r = [...r[0] , ...r[1] , ...r[2] , ...r[3] , ...r[4]]
		return r
	}
	
	//// Crud
	function frmt(A){
		var r = []
		let j = 0
		for (let ite in A){
			r[j++] = ite + " `"+A[ite].rarity+A[ite].name+"` | " +"`"+A[ite].tier+"T"+A[ite].tier+"`"
			r[j++] ="`jID"+ A[ite].i+" ----- "+A[ite].type+" -----`" + "Current:"+ A[ite].current + "Target:" + A[ite].shouldbe	}	
		return r
	}	
	

	/////Main Loop
	var RM = #fs.uwotm8.parser()
	var B = #fs.scripts.lib();
	if(!ARGS){var ARGS = {}}
	var UPG = #hs.sys.upgrades({full:true})
	var UNS = [] 
	var startfrom = ARGS.a || 0  
	var endat = ARGS.b || UPG.length
	for (var i = startfrom; i<endat ;i++){
		UPG[i].current = Number(i)	
		UNS.push( UPG[i] ) 
		}
	var AIM = Rare(UNS)
	for ( i = 0;i<AIM.length;i++){	AIM[i].shouldbe = i+startfrom }
	
	
	var listq = [] ;  var unsorted = AIM ; unsorted.reverse()
	for (var it = 0 ; it < AIM.length ; it++){
	    B.log(it +" ")
		var cmd = {from:AIM[it].current , to:startfrom}
		listq.push(cmd)
		for (var j in unsorted){
			if ( AIM[j].current < AIM[it].current) { AIM[j].current++  }
		}
		AIM[it].current = startfrom
	}
	var q = {reorder:listq}
	var MNG = #ms.sys.manage(q)
	var f_UPG = frmt(UPG)
	var f_AIM = frmt(AIM)
	return MNG
}