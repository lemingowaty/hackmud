function(context, args)
{
	
	var B = #fs.scripts.lib()
	if(args) { var t = args.t }
	
	function clat(str){ // ACCTS Solver
		var r = #hs.accts.transactions({count:16})
		for (let i in r){
			r[i].id = i
			r[i].otime = r[i].time
			r[i].time = B.to_game_timestr(r[i].time)
		}
		var dates = str.match(/\d{4,6}/g)
		for (let i in r){
			r[i].hour = String(/\d{4}$/.exec(r[i].time))
			r[i].date = String(/^\d{6}/.exec(r[i].time))
		}
		
		r.push(dates,str)
		return r
	}
	
	function ngrm(s, str) {  //Magnara solver /
		if (str.length == 1) { return [s + str]  }
	
		var returnResult = Array();
		for (var i = 0; i < str.length; i++) {
			var result = ngrm(str[i], str.substr(0, i) + str.substr(i + 1))
			for (var j = 0; j < result.length; j++){returnResult.push( s + result[j] ) }
		}
		returnResult = new Set(returnResult)
		returnResult = Array.from(returnResult)
		return returnResult
	}
	
	function Csc(path){ // CON SPEC SOLVER

	
	}

	function myObj(smth){ // Constructor
		if(!smth){ var smth = {} }
		smth.that = ()=>{ return smth }
		var that = smth.that()
		B.log("I exist")
		that.log = B.get_log()
		return smth
	}
	B.log(ngrm("bartholomew"))
	var test1 = "Need to know the total spent on transactions without memos between 170411.0510 and 170417.1038"
	var test2 = "Need to know the total earned on transactions without memos between 170410.0632 and 170411.1709"
	var x = clat(test1) ; B.log(x)
	var y = clat(test2) ; B.log(y)
	return B.get_log()
}
