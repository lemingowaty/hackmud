function(C,A){
//LMAOS 3.11 @ Stay Vigilant
const scr_width = C.cols
var STR = `Joy, beautiful spark of the gods,
Daughter from Elysium,
We enter, drunk with fire,
Heavenly One, thy sanctuary!
Your magic binds again
What convention strictly divides;*
All people become brothers,*
Where your gentle wing abides.

Who has succeeded in the great attempt,
To be a friend's friend,
Whoever has won a lovely woman,
Add his to the jubilation!
Indeed, who calls even one soul
Theirs upon this world!
And whoever never managed, shall steal himself
Weeping away from this union!

All creatures drink of joy
At nature's breast.
Just and unjust
Alike taste of her gift;
She gave us kisses and the fruit of the vine,
A tried friend to the end.
[Even] the worm has been granted sensuality,
And the cherub stands before God!

Gladly, as His heavenly bodies fly
On their courses through the heavens,
Thus, brothers, you should run your race,
Joyful, like a hero going to conquest.

You millions, I embrace you.
This kiss is for all the world!
Brothers, above the starry canopy
There must dwell a loving Father.
Do you fall in worship, you millions?
World, do you know your creator?
Seek him in the heavens
Above the stars must He dwell.`

function WTFis (that) {return that.constructor.name}

function _reChop (content, width) {//Break text into smaller subarrays defined by width
content = content.split("\n")
#D(content)
 let H = Math.ceil(content.length / width)
// #D(H)
 var R = [],RET = []
 for (let row = 0 ; row<H ; row++){
   R[row] = []
   for (let col = 0 ; col<width ; col++) {
     R[row][col] = content[row][col]
   }
 //#D(R[row])
  RET[row] = R[row]	
 }
 //#D(RET)
 return RET
}

function _Box (title,content,width=scr_width){// string, string, number
  let RE = []
  RE[0] = title +"\n\n"
  content = _reChop(content,width)
  RE = [RE[0],...content]
  return RE
}
 var R1 = _Box("Ode to J0Y",STR,10)

 return R1.join("")
}
