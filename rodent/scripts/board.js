function(C,A){

let { cols , rows } = C,

makeThat = (O={})=>{
	let that = O.that = (o=>o).bind(O,O)
	Object.defineProperty(O, 'self', {
		get() { return that() } 
	})
	return O
}


function Cell ( parent , pos , mark , id  ){
 let that = makeThat() 
}
function Line ( parent , child , orient , struct ){

	return { }
}
function Screen ( width = cols, height = rows){
 	// #D({ x, y })
	let	info = { height, width , area:height*width },
	 board = {
		struct:()=>{
			let i , j , id = 0 
			for (i = 0; i<height ; i++){
				plane[i] = []
				for (j = 0; j<width ; j++)	plane[i][j] = { y:i, x:j, c:String.fromCharCode((42+id)) , _id:id++ };		
 			}
 		}	
	 }
	return makeThat({ info , board })
}

 //Board(er) end
////MAIN
let test1 = Screen() 
return test1
}