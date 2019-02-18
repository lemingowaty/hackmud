function(C,A)
{
	if (!A){return "{d:0,s:'00100'}"}
	var l = #s.scripts.lib();
	var cn = 0
	for (let i in A.s ){
		if (A.d==A.s.charAt(i)){ cn++ }
	}
	return cn
}
