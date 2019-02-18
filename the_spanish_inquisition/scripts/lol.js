function(C,A){
	function WTFis(that){
		return	that.constructor.name}
	function TEST1(){}
	var ret = [
		WTFis("that"),
		WTFis(1234),
		WTFis({a:1,b:2,c:3,d:4}),
		WTFis(TEST1)
	 ]
	return ret
}