function(C,A){
//LMAOS 3.11 @ Stay Vigilant
const B = #fs.scripts.lib()
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
const F = {
  WTFis : that=>that.constructor.name,
  getLongest : arr => {
	var longest = 0
  var llength = 0
    for (let i in arr){
      if (arr[i].length>llength) {
        longest = arr[i]
        llength = longest.length
    }
  }
   return longest;
 },
  getShortest : arr => {
  var shortest = F.getLongest(arr)
  var slength = shortest.length
  for (let i in arr){
   if (arr[i].length<shortest.length ) {
    shortest = arr[i];
    slength = shortest.length;
   }
  }
  return shortest
},
  line2arr : (str,div="\n") => {
      var arr = str.split(div)
      return arr
  }
}
var WordArr = F.line2arr(STR,/\W*\s+\W*/)
var TextArr = F.line2arr(STR)
var TWArr = F.line2arr(STR)
var InfArr = []
for (let i in TWArr){
  if (TWArr[i]=="") {TWArr.splice(i,1)}
  TWArr[i] = F.line2arr(TWArr[i],/\W*\s+\W*/)
  #D(TWArr[i])
  InfArr[i] = {
    shortest : F.getShortest(TWArr[i]),
    longest : F.getLongest(TWArr[i])
  }
  InfArr[i].shortlen = InfArr[i].shortest.length
  InfArr[i].longlen = InfArr[i].longest.length
  #D(InfArr[i])
}
return 0
}
