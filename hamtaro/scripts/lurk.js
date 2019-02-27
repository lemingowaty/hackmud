function( C, A ) { // hamtaro.lurk { T:#s.cmp.public , project:"name" , pwd:"password" }
  var { T, project, pwd, q } = A || {}
  ,   crpt = [
        0
        , 161
        , 162
        , 164
        , 166
        , 167
        , 168
        , 169
        , 170
        , 193
        , 195
      ].map( _ => String.fromCharCode( _ ) )
  ,   CLog = [ ]
  ,   $line = "-".repeat(16)
  ,   outp = [ $line ]
  ,   Output = _ => outp.push( _ , $line )
  ,   Stfy = _ => JSON.stringify( _ )
  ,   CL = ( qry = null ) => {
        let a = T.call( qry )
        if (a.ok===false) throw Error("O chuj!" + a.msg)
        CLog.push( {
          [ Stfy( qry ) ]: a
        } )
        return a
      }
  ,   nav = [
        CL( )
        .split( "\n" )
          .reverse( )[ 0 ]
            .split( " | " )
        ,
        CL( {} )
        .split( "\n" )
          .reverse( )[ 0 ]
            .split( /\s|:|"/ )
      ]

  nav[ 0 ].pop( )
  nav = [
    nav[ 1 ][ 4 ]
    , ...nav[ 0 ]
    , nav[ 1 ][ 6 ]
  ]

  let pick = nav[ 0 ]
  ,   News = CL.bind( {} , {
        [ pick ]: nav[ 1 ]
      } )
  ,   Abot = CL.bind( {}, {
        [ pick ]: nav[ 2 ]
      } )
  ,   Drct = CL.bind( {}, {
        [ pick ]: nav[ 3 ]
        , p: pwd
        , pass: pwd
        , password: pwd
        , project
      } )

  [
    // ...CLog,
    nav
    , News( )
    , Abot( )
    , Drct( )
    , ( Date.now( ) - _ST + "ms" )
  ].forEach(Output)

  return outp
}