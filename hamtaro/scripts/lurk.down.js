function (C,A){
	var { t , project , pwd ,q} = A || {},
	Q = {},
	result = {
		nav1:t.call().split("\n").reverse()[0].split(" | "),
		nav2:t.call(Q).split("\n").reverse()[0].split(/(\s|:|")/g)
	}
	return result
}