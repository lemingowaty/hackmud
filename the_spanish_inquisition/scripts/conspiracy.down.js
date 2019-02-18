function(C, args)
{
var SP = #hs.sys.specs(),
  CLR = C.caller,
  B = #fs.scripts.lib(),
  // OS = #hs.blank.os(),
  log = A=>{
    var a = (typeof A == "string") ? [A] : A
    a.forEach(elem=>B.log(elem))
  }
//gOPN = O=>Object.getOwnPropertyNames(O)
// if(args) {
// 	var t = args.t,
// 	q = args.q||{}
// 	}
function clat(str){
//Accts
	var dates = str.match(/\d{4,6}/g),
	 stra = str.split(/\s/),
	 op = stra[5],
	 oper = (op=="spent") ? "from" : "to" ,
	 valid = new Set(),
   q = { [oper]:CLR , count:20 },
	 r = #hs.accts.transactions(q)

	for (let i in r) if (r[i].memo === undefined && r[i][oper] == CLR)  valid.add(r[i])

  valid.forEach( (a)=>{ B.log(a) } )

  var acct = { teststring:str , dates:dates , operation:op , opc:oper , myset:B.get_log() }
	return JSON.stringify(acct)
}

// function CSb(cin){
// 	var rng = cin.length - 1

// 	var chodes = []
// 	for (let i in cin) { chodes[i] = cin.charCodeAt(i) }
// 	var diffs = new Set()
// 	for (let i = 1; i < chodes.length; i++){
// 		var dif = chodes[i] - chodes[i-1]
// 		diffs.add(dif)
// 	}


// 	dif = []
// 	diffs.forEach( (a)=>{ dif.push(a) } )
// 	dif.push(dif[0])

// 	var l = chodes[rng]
// 	var cout = dif.map( (a)=>{ l += a ; return String.fromCharCode(l) }).join("")

// 	return { first:chodes[0] , last:l , string:cin , valus:chodes , diff:dif, red:cout }
// }

function ngrm(str, s) {
//Magnara
	s = (s === undefined) ? "" : s
	if (str.length == 1) return [s + str] ;

	var rRes = Array();
	for (var i = 0; i < str.length; i++) {
			let result = ngrm(str[i], str.substr(0, i) + str.substr(i + 1))
			for (var j = 0; j < result.length; j++)
				{ rRes.push( s + result[j] ) }
		}
		rRes = new Set(rRes)
		rRes = Array.from(rRes)
	return rRes
	}
	log(["ngrm",ngrm("tes1")])

	var test1 = "Need to know the total spent on transactions without memos between 180518.0610 and 180518.1100\n",
	test2 = "Need to know the total earned on transactions without memos between 180516.0632 and 180418.1000\n",
	x = clat(test1),
	y = clat(test2)
  log ([test1, x])
	log ([test2, x])
	return B.get_log()
}
