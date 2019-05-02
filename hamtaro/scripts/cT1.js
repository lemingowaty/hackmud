function(C,A){

   let wheel = [
      "red",
      "orange"
      "yellow",
      "lime",
      "green",
      "cyan"
      "blue"
      "magenta"
      ]
   , pick_color = c=>{
      if ( c > 7 ) c -= 7
      else if ( c < 0 ) c += 8
      return wheel[c]
   }


}