function( C, A ) {
  var B = #fs.scripts.lib(),
    { T, project, pwd, q } = A || {},
    Stfy = O => JSON.stringify( O ),
    CL = ( qry = null ) => {
      let a = T.call( qry )
      CLog.push( {
        [ Stfy( qry ) ]: a
      } )
      return a
    },
    CLog = [],
    crpt = [ 0 , 161 , 162 , 164 , 166 , 167 , 168 , 169 , 170 , 193 , 195 ].map(
      e=>( String.fromCharCode(e) )
    ),
    nav = [
      CL().split( "\n" ).reverse()[ 0 ]
      .split( " | " ),
      CL( {} ).split( "\n" ).reverse()[ 0 ]
      .split( /\s|:|"/ )
    ]

  nav[ 0 ].pop()
  nav = [
    nav[ 1 ][ 4 ],// Choice
    ...nav[ 0 ],  // NewsList , PasswordPage
    nav[ 1 ][ 6 ] // ProjectDir
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

  return [ ...calls, nav,
    ( Date.now() - _ST + "ms" )
  ]
}