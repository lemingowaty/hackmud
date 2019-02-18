function(c,ar){
	if(!ar){return "No arguments"}
	var B = #s.scripts.lib()
	function uni(cu){
		var ret = String.fromCharCode(parseInt(cu,16))
		B.log(ret)
		return ret
	}
	function DrawLine(chl,r,nl,cl){
		var ret = chl
		for (var i = 1;i<r;i++){ret = ret + chl}
		if (cl){ret = "`"+cl+ret+"`"}
		if(nl){ret = ret + "\n"}
		return ret
	}
	function DrawRect(h,w,cl,chr,f,txt){
		var ret = DrawLine(chr,w,1,cl)
		if(!f){ for (var i = 2; i < h;i++) 
			{ret = ret + DrawLine(chr,w,1,cl)}
		} 
		else {
			for (var i = 2; i < h;i++){
				ret = ret + DrawLine(chr,1,0,cl) + DrawLine(f,(w-1),0) + DrawLine(chr,1,1,cl)
				} 
			}
		ret = ret + DrawLine(chr,w,1,cl)
		
		return	ret
	}
	// Main Debug Loop
	if (ar.f) { 
		B.log( DrawRect(ar.a, ar.b || ar.a , ar.cl , uni(ar.ch), ar.f)) }
	else {0
		B.log( DrawRect(ar.a, ar.b || ar.a , ar.cl , uni(ar.ch) ) ) }
	return DrawRect(ar.a, ar.b || ar.a , ar.cl , uni(ar.ch), uni(ar.f) )
}