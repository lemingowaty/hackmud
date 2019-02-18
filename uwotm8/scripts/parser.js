function(C,AR){
// { a:0, b:[0], cl:"color", ch:"character",f:"fill"}

var B = #s.scripts.lib()
var output = []
var RM = {}
RM.unihex = function (ch){
		var ret = String.fromCharCode(parseInt(ch,16))
		B.log(ret)
		return ret
	}
	
RM.IP = (numb)=>{
	if (numb<2){return false}
	if (numb==2){return true}
	if (numb%2===0){return false}
	for (let i = 3; i<numb; i+=2){
		if (numb%i===0){return false}
	}
	return true
}	
RM.DrawLine = function (ch,r,nl,cl){ 
// Character, Range,  Newline, color
		var ret = ch
		for (var i = 1;i<r;i++){ret += ch}
		if (cl){ret = "`"+cl+ret+"`"}
		if(nl){ret = ret + "\n"}
		return (ret.split("\n"))
	}
RM.DrawRect = function (h,w,cl,ch,f,txt){ 
//Height Width Color Character Fill Text
		var ret = RM.DrawLine(ch,w,1,cl) //First Line
		let i = 2
		if(f==undefined){ f = " " }
		for ( i ; i < h;i++){	ret += RM.DrawLine(ch,1,0,cl) + RM.DrawLine(f,(w-2),0,cl) + RM.DrawLine(ch,1,1,cl)	} 
		ret += RM.DrawLine(ch,w,1,cl) // Last Line
		
		if(txt){
			ret = ret.split("\n")
			let ins, rem
			if ((h%2)===1){ 
				ins =  (h/2) - 0.5
				rem = 1
			} else { ins = (h/2) ; rem = 0 }
			let fx = ((w-2)-(txt.length-3))/2
			ret.splice( ins, rem,  RM.DrawLine(ch,1,0,cl)+RM.DrawLine(f,fx,0,cl)+txt+RM.DrawLine(f,fx,0,cl)+RM.DrawLine(ch,1,0,cl) )
		}
		return	ret
	}
RM.Emark= function (a,parent){
	var R = {type:"marker"}
	R.that = ()=>{return R}
	R.BT = parent.type || undefined
	return R
}
RM.Ecol = function (a,clr,parent){
		#D("Ecol")
		var R = {type:"column"}
		R.BT = parent.type || null ;
		R.that = ()=>{return R}
		if(!parent){R.parent = R.that} else {R.parent = parent}
		R.content = a
		R.clr = clr || undefined
		return R
	}
RM.Erow = function (x,y,parent){
		#D("Erow")
		var R = {type:"row", markers:[]}
		R.that = ()=>{return R}
		if(!parent){R.parent = R.that()} else {R.parent = parent}
		R.BT = parent.type || undefined
		R.content = new Array(x).fill().map( (a,b)=>{  return RM.Ecol("Blah", undefined ,R.that)  }) // Seperate columns in a row
		let Rc = R.content
		for(let i = 0; i<x;i++) {
			Rc[i].x = x
			Rc[i].y = y
			}
			
	return R
	}
RM.Emat = function (dx,dy,parent,content){
		#D("EMat")
		#D(typeof arguments)
		var R = {type:"layer",cntr:0}
		R.that = ()=>{return R}
		if(!parent){parent = R.that}
		R.BT = parent.type || undefined
		if (!dy) { dy = dx } 
		if (!dx) { dx = dy }
		R.inf = {dx : dx ,
		            dy : dy,
					marknum:dx*dy,
					markers:[] } ; let inf = R.inf  //Shortcut
		inf.col = new Array(dx).fill()
		inf.col = inf.col.map(()=>[])
		inf.row = new Array(dy).fill()
		inf.row = inf.row.map(()=>[])
		if(!content){
			R.content = new Array(dy).fill().map( (a,b)=>{return RM.Erow(dx,b,parent)} )
		} else { R.content = content
		content.forEach(a=>}
		for (let i = 0; i<inf.markers.length;i++){inf.markers[i].id = i}
        //R.Gdisp = (nl)=>{R.display = RM.EDisplay(R,nl)}
	return R
}
RM.TF = function (star){
		var wh = star.type || typeof star
		return wh
}
	// Main Debug Loop
	let hex = RM.unihex
	if(!AR){var AR = {x:5,y:5, cl:"L", ch:"A1", f:"2",txt:"`99Test9`"} }
	#D(AR)
	var test1 = RM.Emat(AR.x,AR.y,0,RM.DrawRect(AR.y,AR.x,"J","O"))
	#D(test1)
	return RM
}