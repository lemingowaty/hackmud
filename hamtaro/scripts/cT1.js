function(C,A){
  const
    { 
      Dialer ,
      Timer  , 
    } = #fs.hamtaro.lib(),
    Q = { },
    T = Dialer(A.T),
    { Dial , log } = T,
    Att = _=>Dial({ Q , f:1 }),
    lckrgx = /`N([_A-Za-z0-9]+)`/,
    Glckrgx = /`N([_A-Za-z0-9]+)`/g

    
  return { 
    wo:"`Nc001` lock".match(lckrgx),
    G:"`Nc001` lock".match(Glckrgx)
  }
  let 
    { last } = T,
    ans = Att(A.T),
    a = ans.a.split("\n").reverse(),
    
    lckname = a[0].match(lckrgx)[1]
  return {a,last,lckname}
   
   
   
   
  function EZx (ver) {
    let words = [ "open" , "unlock" , "release" ]
  }
  
  function c00x (color,ver){
    let 
      wheel = [
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "blue",
        "magenta"
      ],
      n = wheel.indexOf(color),
      pick_color = c=>{
        if ( c > 7 ) c -= 7
          else if ( c < 0 ) c += 8
        return wheel[c]
      }
  }      

}