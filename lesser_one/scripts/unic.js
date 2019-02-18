function(ctx, arg)//{t:"#s.targetname" , p:"p_name"}
{
	var b = #s.scripts.lib();  // Library
	var t = arg.t || 0; var p = arg.p || 0;	var d = arg.d||0;
	

	function cl(a){ //Calling / Dialing
		var r = t.call(a) || t.call(); 									
		return r	}
		

	function divn(a,rg){ // Divide into Array
		var r = a.split(rg).reverse()
		return r	
	}
		
	function unic(a, b, c){
		var s = /[^a-z^0-9_\s]+/gi
		if (a.search(s)>=0) {return true}
		return false
	}
	function unid(a, b, c){
		var s = /[^a-z^0-9_\s\.<>]+/gi
		if (a.search(s)>=0) {return true}
		return false
	}
	
	function gp(a){
		b.log(a)
		var r = divn(a,/\s|:|"/)
		var r = [r[1],r[3]]
		return r	
	}	
	function gc(a){ 
		var r = divn(a,/\s|\n/)
		r = [r[2],r[4]]
		return r	
	}
	function ps(a){
		var r = a.split(/egy\s|\sand\s/).reverse();
		return r[1]
	}
	
	function ln(){
		var ppp = ["password","pass","p"] ;
		for (let x in ppp){
			t.q = {[t["li"][3]]:t["li"][2],[ppp[x]]:t["pas"],project:p};
			var r = cl(t.q);
			if(b.is_arr(r)===true){return r}
			}
		return -1 // If no array found
	}

	var re = true
	while (re == true)
	{
		t.q = {};	
		t.zero = cl(t.q)
		t.echo =  cl();
		t.cm = gc(t.echo);
		t.pm = gp( t.zero );
		t.li = t.cm.concat(t.pm);
		b.log(t.li)
		if (t.li.some(unic) != true) {re = false;}
	}
	
	t.q = {[t["li"][3]]: t["li"][0] };
	t.pas = ps( cl(t.q));
	while (unic(t.pas)==true){
		t.pas = ps( cl(t.q));
	}
	
	
	t.ln = ln()
	if (t.ln != -1){
	t.ml = t.ln
	while(t.ml.some(unid)==true){
	t.ln = ln()
		for (var cn = 0; cn < t.ml.length; cn++ )
			{
				if(unid(t.ln[cn]) == false){
					t.ml[cn] = t.ln[cn]
					}
			}
	}} else { d = 2 }
	switch(d){
	case 0:	for(let x in t.ml){t.ml[x] = x + '      ezcrack{t:#s.' + t.ml[x]+"}    "} return t.ml
	case 2: t.q = {[t["li"][3]] : t["li"][0]} ; t.n = cl(t.q);
	case 1: return {ok:false , msg:"Not Found"}
	}

}
	
