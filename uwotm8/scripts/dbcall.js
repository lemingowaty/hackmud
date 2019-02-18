function(ctx, ar)
{ 
	var y = {vname:"crackt1"} ; var s = {vname:"scrapet1"}
	
	function ip(n){
				if (n%2===0){return false;}
				for(var i = 3; i<n;i+=2) {	if(n%i===0){return false;} }
				 return true
	}

		
		y.clr=["purple","blue","cyan","green","lime","yellow","orange","red"];
		y.ow = ["open","unlock","release"];
		y.ppp = ["password","pass","p"];
		y.prn = [2];
		y.lcks = ["21","35","40","01","02","03","l0"];
		y.pn = ["color_digit","_complement","_triad_1","_triad_2"];

		
		var a = 97;

		for(var i = 3; i<=a ;i+=2){
			if(ip(i)===true){y.prn.push(i);}
		}

		var x = #db.f({vname:"crackt1"}).first() || "none";
		if (x != null) { #db.r({_id:x["_id"]}) }
		#db.i(y);
		x = #db.f({vname:"scrapet1"}).first()
		if (x != null) { #db.r({_id:x["_id"]}) }
		#db.i(s)
		var ret = {}
		ret.a = #db.f({vname:"crackt1"}).first() || "none"
		ret.b = #db.f({vname:"scrapet1"}).first() || "none"
	return ret
}