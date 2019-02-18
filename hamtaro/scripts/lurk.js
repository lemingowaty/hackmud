function( C, A ) {
  var B = #fs.scripts.lib()
  , { t, project, pwd, q } = A || {}
  , Q = {}
  , nav1 = t.call().split( "\n" ).reverse()[ 0 ].split( " | " )
  , nav2 = t.call( Q ).split( "\n" ).reverse()[ 0 ].split( /\s|:|"/gm )
  , corrupted = [ 0 , 161 , 162 , 164 , 166 , 167 , 168 , 169 , 170 , 193 , 195 ]
  , ChMap = []
  for ( let i in corrupted ) corrupted[i] = String.fromCharCode(corrupted[i])
  for (let i = 0; i<256; i++) ChMap[i] = i + " : " + String.fromCharCode(i) + " | "

  let R = { nav1 
    , nav2 
    , [ JSON.stringify( q ) ]: t.call( q ) 
  }
  return [
    R
    , "uszkodzone", corrupted 
    , "wszystkie", ChMap
  ]
}