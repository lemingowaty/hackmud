function(context, args)
{ // matchs:"TestString"
	var b = #s.scripts.lib();
	var d = args.matchs ;
	var versions = ["21","35","40","01","02","03"];
	function checkver(){
		for(var i = 0; i<versions.length;i++){
			var t = d.indexOf(versions[i]);
			if (t >= 0){
			break;}
		}
		y(versions[i]);
		return versions[i];
	}
	
	var y = checkver();
	b.log (y)
	b.log("!Test! +string+ -is- : "+d, {ok:true});
	b.log("`XEZ` !version! !is! : "+ x, {ok:true});
	var x = b.get_log();
	return x
}
