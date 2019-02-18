function(context, args)
{
	function KonR(B){
		var r = B[0].concat(B[1].concat(B[2])) || B[0].concat(B[1]) || B[0]	
		return r
	}
	function TyAl(A){
		var r = []
		var c = {spc:0,scp:0}
		for(let i in A){
			switch(A[i].type){
					case "script_space": c.spc++; break;
					case "script": c.scp++
			}
		}
		A.sort(function(a,b){if(a.type<b.type){return 1}if(a.type>b.type){return -1}	return 0})
		r[0] = A.splice(0,c.spc)
		r[1] = A.splice(0,c.scp)
		r[2] = A
		for (let i in r){
		r[i].sort(function(a,b){
			if(a.name<b.name)
			{return 1}
			if(a.name>b.name)
			{return -1}	
			return 0})
		}
		return r
	}
	////////////////////////////////////////////
	function Ti(A){
		var r = []
		var c = {t4:0,t3:0,t2:0}
		for(let i in A){
			c["t"+A[i].tier]++
		}
		A.sort(function(a,b){
		if(a.tier<b.tier){return 1}
		if(a.tier>b.tier){return -1}
		return 0})
		r[0] = A.splice(0,c.t2)
		r[1] = A
		for (let i in r){	r[i] = TyAl(r[i])	}
		var ret = KonR(r)
		return r
	}
	////////////////////////////////////////////////////////////////////////
	function Rare(A){
		var r = []
		var c = {r1:0, r2:0, r3:0}
		for (let i in A){
			c["r"+String(A[i].rarity)]++
		}
		A.sort(function(a,b){return b.rarity - a.rarity})
		r[0] = A.splice(0,c.r2)
		r[1] = A.splice(0,c.r1)
		r[2] = A
		for (let i in r){r[i] = Ti(r[i])}
		var ret = KonR(r)
		return ret
	}
	//////////////////////////////////////////////////////////////////////////
	var b = #s.scripts.lib();
	var q = {}
	var t = #s.sys.upgrades({})
	var x = []
	var y = 0
	for(let i in t)
	{
		t[i].Oldi = i;
	}
	var z = Rare(t)
	
	return z
}
