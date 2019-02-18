function(C, A)
{
var SP = #fs.sys.specs()
var CLR = C.caller
var B = #fs.scripts.lib()
if(A) { var t = A.t }

function clat(str){
//Accts | I HATE THIS
	var dates = str.match(/\d{4,6}/g)
	var stra = str.split(/\s/)
	var op = stra[5]
	var oper
	var valid = new Set()
	if (op=="spent"){ oper = "from"} else {oper = "to"}
	var q = { [oper]:CLR , count:20 }
	var r = #ms.accts.transactions(q)
	for (let i in r){

		if (r[i].memo === undefined && r[i][oper] == CLR) { valid.add(r[i]) }
	}
	valid.forEach( (a)=>{ B.log(a) } )
	var acct = { teststring:str , dates:dates , operation:op , opc:oper , myset:B.get_log() }
	return acct
}

function CSb(cin){
	var rng = cin.length - 1
	var chodes = []
	for (let i in cin) { chodes[i] = cin.charCodeAt(i) }
	var diffs = []
	for (let i = 1; i < chodes.length; i++){
		var dif = chodes[i] - chodes[i-1]
		diffs.push(dif)
	}
	var l = chodes[rng]
	cin = diffs.map( (a)=>{ l += a ; return String.fromCharCode(l) }).join("")

	return cin.substr(0,3)
}

function ngrm(s, str) {
//Magnara
	if (str.length == 1) { return [s + str]  }

		var returnResult = Array();
		for (var i = 0; i < str.length; i++) {
			var result = ngrm(str[i], str.substr(0, i) + str.substr(i + 1))
			for (var j = 0; j < result.length; j++)
				{ returnResult.push( s + result[j] ) }
		}
		returnResult = new Set(returnResult)
		returnResult = Array.from(returnResult)
		return returnResult
	}

	//var test1 = "Need to know the total spent on transactions without memos between 170411.0510 and 170417.1038"
	//var test2 = "Need to know the total earned on transactions without memos between 170410.0632 and 170411.1709"
	//var x = clat(test1)
	//var y = clat(test2)
	return ngrm("","kapybara")
}
