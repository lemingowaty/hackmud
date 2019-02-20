function( C, A ) {
  var B = #fs.scripts.lib()
  , { t, project, pwd, q } = A || {}
  , Q = {}
  , nav1 = t.call().split( "\n" ).reverse()[ 0 ].split( " | " )
  , nav2 = t.call( Q ).split( "\n" ).reverse()[ 0 ].split( /\s|:|"/gm )
  , corrupted = [ 0 , 161 , 162 , 164 , 166 , 167 , 168 , 169 , 170 , 193 , 195 ].map(
      (e,i)=>(
        "`"+i+String.fromCharCode(e)+"`"
      )
    )
  // , ChMap = [ ...Array(256).keys() ].map(
  //     ( e ,i )=>( i + "=" + String.fromCharCode(e) )
  //   ).join("\n")
  // for (let i = 0; i<256; i++) ChMap[i] = i + " : " + String.fromCharCode(i) + " | "

  let R = {
    nav1 , nav2
    , [ JSON.stringify( q ) ]: t.call( q )
  }
  return [ R , corrupted ]
  // return { R
  //   , cr:corrupted.join("") , ChMap:ChMap.join("")
  // }
}