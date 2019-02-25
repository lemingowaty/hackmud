function( C, A ) { // { T:#s.cmp.public , project:"name" , pwd:"password" }
  var { T, project, pwd, q } = A || {},
    // B = #fs.scripts.lib(),
    Stfy = O => JSON.stringify( O ),
    CL = ( qry = null ) => {
      let a = T.call( qry )
      CLog.push( {
        [ Stfy( qry ) ]: a
      } )
      return a
    },
    CLog = [],
    crpt = [ 0, 161, 162, 164, 166, 167, 168, 169, 170, 193, 195 ].map(
      e => ( String.fromCharCode( e ) )
    ),
    nav = [
      CL().split( "\n" ).reverse()[ 0 ]
      .split( " | " ),
      CL( {} ).split( "\n" ).reverse()[ 0 ]
      .split( /\s|:|"/ )
    ]

  nav[ 0 ].pop()
  nav = [
    nav[ 1 ][ 4 ], // Choice
    ...nav[ 0 ]  , // NewsList , PasswordPage
    nav[ 1 ][ 6 ] // ProjectDir
  ]
  let pick = nav[ 0 ] //,
  //   news = nav[1],
  //   abot = nav[2],
  //   drct = nav[3]

  CL( {
    [ pick ]: nav[ 2 ]
  } )
  CL( {
    [ pick ]: nav[ 1 ]
  } )
  CL( {
    [ pick ]: nav[ 3 ],
    p: pwd,
    pass: pwd,
    password: pwd,
    project
  } )

  return [ ...calls, nav,
    ( Date.now() - _ST + "ms" )
  ]
}