function(ctx, arg)//t:"target", p:"projectname",d:0,1,2
{	
	var b = #s.scripts.lib(); 
	var t = arg.t || 0; var p = arg.p || 0;	var d = arg.d||0;
	if(t===0){return {ok:false, msg:"No target."}} 																							
	var p = arg.p||""; 				
	
	function cl(a){
		var r = t.call(a) || t.call(); 									
		return r}
	function gc(a){
		var p = a.split(/\W+|[#/]+|\s+|\r+|\f+|\t+|\v+|\n+|\d+/).reverse(); 					
		var r = [p[1],p[2]] ;
		return r}
	function gp(a){
		var p = a.split(/\s/).reverse();
		var r = [p[1],p[2]];
		return r}
	function ps(a){
		var r = a.split(/egy\s|\sand\s/).reverse();
		return r[1]}	
	function ln(){
		var ppp = ["password","pass","p"] ;
		for (let x in ppp){
			t.q = {[t["cm"]]:t["pm"][0],[ppp[x]]:t["pas"],project:p};
			var r = cl(t.q);
			if(b.is_arr(r)===true){return r}
			}
		return -1}
	function unic(a,b,c){
			
			if (a.search(rgx)>=0) {return true}
			else {return false}
	}
#
	t.q = {};	
	t.echo =  cl();
	t.pm = gp(t.echo);
	t.cm = gc( cl(t.q) ); 
	t.pm.unshift( t.cm.shift() );
	t.q = {[t["cm"]]: t["pm"][1] };
	t.pas = ps( cl(t.q) );
	t.npc = ln();
	if(t.npc===-1){
		t.q = {[t["cm"]]:t["pm"][2]};
		var r = cl(t.q);
		return r
	}
	switch(d){
	case 1:	for(let x in t.npc){t.npc[x] = "	ezcrack{t:#s." + t.npc[x]+"}"} break;
	case 2: for(let x in t.npc){t.npc[x] = t.npc[x]+"{}"} return t;
	}
	t.npc = t.npc.join('\n');
 return t.npc
}