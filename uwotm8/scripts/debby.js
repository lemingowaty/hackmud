function(C,A){
	var Sudo = #db.f({vname:"sudolist"}).first().sudos,
	root = #db.f({vname:"root"}).first().list,
	STR = [ " scan / add / rem / display k3ys ᔐ filldb ♣ showdb ⠢ add/remove showsudo " ],
	cscr = C.calling_script,
	caller = C.caller,
	B = #fs.scripts.lib(),
	U = #fs.sys.upgrades({
			"filter":{
				full:true,
				"k3y" : {
				 "$ne":false 
				}
			} 
		}),
	gkys = #db.f({vname:"k3ys"}).first()

	/////////////////// Functions
function sudo(act,name){
	if (root.indexOf(caller) < 0){return "No admin rights"}
	if (!act){return "Action not declared"}
	var gsu = #db.f({vname:"sudolist"}).first()
	if (!name && gsu==null){return "Empty"}
	if (!name){return gsu}
	if (gsu == null) {gsu = {vname:"sudolist",sudos:[]} }
	var nsudos = new Set(gsu.sudos)
	#db.r(gsu)
	if (act=="addsudo") nsudos.add(name)  
		else if (act=="remsudo") nsudos.delete(name)
	gsu.sudos = Array.from(nsudos)
	#db.i(gsu)
	return gsu
	}

function dbprep(){

	var y = {vname:"crackt1"} ,
		s = {vname:"scrapet1"}

	function ip(n)	{
		if (n%2===0) return false
		for(let i = 3; i<n;i+=2) if(n%i===0) return false 
		return true
		}
	s.pname = ["101010","Ap_calypse","delete_me_first","dev_nul","ende.exe",
		"ESCHATOLOGI.EXE","ex)(cution0r","Free_BFG","giant_spidr","H0meEntert4inment",
		"judgeme_nt","ls_rites","ragnaroxx.sh","semordnilap.sh","thefloood",
		"tmp","omegabyte_03.23_final_final","W3rlD3NDER","Vy_for_russ"]

	y.clr=["purple","blue","cyan","green","lime","yellow","orange","red"];
	y.ow = ["open","unlock","release"];
	y.ppp = ["password","pass","p"];
	y.prn = [2];
	y.lcks = ["21","35","40","01","02","03","l0"];
	y.pn = ["color_digit","_complement","_triad_1","_triad_2"];

	var a = 97;

	for(var i = 3; i<=a ;i+=2) if(ip(i)===true)y.prn.push(i)

	var x = #db.f({vname:"crackt1"}).first() || "none"
	if (x != null)  #db.r({_id:x["_id"]}) 
	#db.i(y)
	x = #db.f({vname:"scrapet1"}).first()
	if (x != null)  #db.r({_id:x["_id"]}) 
	#db.i(s)
	ret.a = #db.f({vname:"crackt1"}).first() || "none"
	ret.b = #db.f({vname:"scrapet1"}).first() || "none"
	return ret
}
function scanner(key){

	switch(A.cmd){
	case "displaykey":
		if (Sudo.indexOf(caller) < 0) return { ok:true, msg: "So Long ☢ Thank you for all the k3ys!"}
		return gkys
	case "addkey":
		#db.u1({vname:"k3ys"},{$addToSet:{keys:key}}) ;
		break;
	case "remkey":
		#db.u1({vname:"k3ys"},{$pull:{keys:key}}) ;
		break
	default :
		var kys = new Set()
		for (let i in U)	kys.add( U[i]["k3y"] )	
		if(kys==null) return {ok:false,msg:"Nothing to add"}
		if(gkys==null){
			kys = Array.from(kys)
			#db.i({vname:"k3ys",keys:kys})
			return kys
		}else{
			var big = new Set(gkys.keys)
			#db.r(gkys)
			kys.forEach((val)=>{big.add(val)})
			big.forEach((val)=>{ B.log(val) } )
			kys = Array.from(big)
			#db.i({vname:"k3ys",keys:kys})
		}
	}
	gkys = #db.f({vname:"k3ys"}).first()
	if (Sudo.indexOf(caller) < 0) {return { ok:true, msg: "☢ Thank you!"}}
	return gkys
}

function DBHan(cmd = A.cmd,que,all = 0){

	PassCheck:{
		if (A.password === "ihaveasmallpenis"||root.indexOf(caller) > -1) break PassCheck
		return {ok:false , msg:"☢"}
		}
	let x
	switch (cmd){
		case "dbf": break
		case "dbi": case"dbr": all = 1
		default :
			x = { cmd , que , all	}
			x.item = all ? DBHan("dbf",que,1) : DBHan("dbf",que)
	}
	switch (cmd){
   case "dbi" :
    x.ret = #db.i(que)
		x.ins = que
    break
	 case "dbu" :
	  x.ret = #db.u(que,A.change)
    x.change = A.change
    break
	 case "dbu1" :
	  x.ret = #db.u1(que,A.change)
	  x.change = A.change
	  break
	 case "dbr" :
	  x.ret = #db.r(que)
	  break
	 case "dbf":
	  all = (!que||all) ? "array" : "first"
	  x = #db.f(que,A.pro)[all]()
	}
 return x
}

	//////////////////Main Switch

	if (!A){return {ok:false , msg:STR[0]}}
	switch(A.cmd){
		case "dbi" : case "dbu" : case "dbu1" : case "dbr" : case "dbf" :
			return DBHan(A.cmd,A.que,A.all)
		case "addkey" :
		case "remkey":
		case "scankey":
		case "displaykey" :
			return scanner(A.key)
		case "filldb": return dbprep()
		case "showsudo" : return sudo(A.cmd)
		case "addsudo":
		case "remsudo": return sudo(A.cmd,A.name)
		default: return STR[0]
	}
}