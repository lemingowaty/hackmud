function( C, A ) {
  var B = #fs.scripts.lib(),
    { T, project, pwd, q } = A || {},
    CL = ( qry = null ) => {
      let a = T.call( qry )
      calls.push( {
        [ Stfy( qry ) ]: a
      } )
      return a
    },
    Stfy = O => JSON.stringify( O ),
    calls = [],
    nav = [
      CL( ).split( "\n" ).reverse()[ 0 ]
      .split( " | " )
      ,
      CL( {} ).split( "\n" ).reverse()[ 0 ]
      .split( /\s|:|"/ )
    ]
  // , crpt = [ 0 , 161 , 162 , 164 , 166 , 167 , 168 , 169 , 170 , 193 , 195 ].map(
  //     e=>( String.fromCharCode(e) )
  //   )

  nav[ 0 ].pop()
  nav = [
    nav[ 1 ][ 4 ],
    ...nav[ 0 ],
    nav[ 1 ][ 6 ]
  ]

  CL( {
    [ nav[ 0 ] ]: nav[ 2 ]
  } )
  CL( {
    [ nav[ 0 ] ]: nav[ 1 ]
  } )
  CL( {
    [ nav[ 0 ] ]: nav[ 3 ],
    p: pwd,
    pass: pwd,
    password: pwd,
    project
  } )

  return [
    ...calls,
    nav ,
    (Date.now()-_ST+"ms")
  ]
}
