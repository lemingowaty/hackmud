function(ctx, arg)//{t:target_name.access,d:""}
{
	var sudo = #db.f({vname:"sudolist"}).first().sudos
	if (sudo.indexOf(ctx.caller) < 0) {return "☢"}
	var gkys =  #db.f({vname:"k3ys"}).first()
	gkys = gkys.keys
	var ws = #db.f({vname:"crackt1"}).first(); // Database entry
	var b = #s.scripts.lib();
	var lck = ws.lcks; // limiting characters
	var t = arg.t || 0;
	var q = {};
	function col(lt){
		//Color lock Brute Forcer (Algorithm TBD)
		var ep = "c0"+lt;
		var x = 0;
		for (let i in ws.clr){
			q[ep] = ws.clr[i];
			x = i;
			cycle();
			if(t.lkrs('nam')===-1){break}
		}
		switch(lt){
		case "01" :
				q[ws.pn[0]] = ws.clr[x].length;
				cycle();
		break;
		case "02" :
		for(let k in ws.clr){
			q[ [ep] + ws.pn[1] ] = ws.clr[k]	
			cycle()
			if(t.lkrs('comp')===-1){break}
		}
		break;
		case "03":
			for(let k in ws.clr){
			q[[ep]+ws.pn[2]] = ws.clr[k];
			
			cycle()
			if(t.lkrs("firs")===-1){break}
			}
			for(let k in ws.clr){
			q[[ep]+ws.pn[3]] = ws.clr[k];			
			cycle()
			if(t.lkrs("seco")===-1){break}
			}
		}			
	}
	function ezc(lt){ 
	//EZ Cracker
		var ep = "ez_"+lt;
		for(let i in ws.ow){
			q[ep] = ws.ow[i];
			cycle();
			if(t.lkrs('mand')===-1){
			break}
		}
		switch(lt){
		case "35":
			for(var j=0;j<10;j++){
				q.digit = j;
				cycle();
				if(t.lkrs("dig")===-1){break}
			}
		break;
		case "40":
			for (let i in ws.prn){
				q.ez_prime = ws.prn[i];
				cycle();
				if(t.lkrs('corr')===-1){break}
			}
		}
	}
	function locket(){
		for (let it in gkys){
			q["l0cket"] = gkys[it]
			
			cycle()
			if(t.lkrs('corr')==-1){break}		
		}
	}
	function glt(a){
	//Get Lock Type
		if (a==undefined){return -1}
		if (t.lkrs("breach")!== -1){return -2}
		for (let d in lck){
			if(a.indexOf(lck[d])>=0){return Number(d)}}
		return -1
	}
	function cl(a){
		if (a===0){return t.call({})}
		var r = t.call(a);
		r = r.split("\n").reverse();
		return r
		}
	// Cycling function, updating t using a new query unless an exception argument is provided.
	function cycle(y){
	b.log(t.loop);b.log(q);
	t.loop++;
	t.rs = cl(q);
	t.lkrs = function(a){if (b.is_arr(t.rs)===true){return t.rs[0].indexOf(a)}return t.rs.indexOf(a)};
	if(y===-1){
		t.li = glt(t.rs[0]);
		t.ln = lck[t.li]} 	
	t["?"] = function Terminate(){if(t.lkrs("ction") >= 0 ||t.lkrs("eached") >= 0||t.li<0){return true}return false}
	t.term = t["?"]();
	return }
	// - - - - - -
	// Main loop
	t.loop = 0;
	while (t.term===false||t.term===undefined){
		cycle(-1);
		if (t.li===-2){return {ok:false, msg:"Breach detected, cancelling attempt"}}
		if (t.li===-1){break}
		if (t.li<=2) {ezc(t.ln)} else if(t.li<6){col(t.ln)}else{locket()}
		
	}
	// End Of Main Loop
		t.log = b.get_log()
	if (arg.d!==undefined){return t}
}