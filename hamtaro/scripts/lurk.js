function( C, A ) { // hamtaro.lurk { T:#s.cmp.public , project:"name" , pwd:"password" }
  var { T, project, pwd, q } = A || {}
    , crpt =[
        0
        , 161, 162, 164
        , 166, 167, 168, 169, 170
        , 193, 195
      ]
    , CLog = [ ]
    , $line = "-".repeat( 16 )
    , outp = [ $line ]
    , Output = _ => outp.push( _ , $line )
    , Stfy = _ => JSON.stringify( _ )
    , CL = ( qry, full ) =>{
        let ans , a = T.call( qry )
        if ( a.ok===false ) throw Error( a.msg )
        ans = {
          a
          , qry: ( qry ?
              Stfy( qry )
              : null )
          , cstr: a.constructor.name
          , retry: CL.bind( {}, qry )
        }
        CLog.push( ans )
        return ( full ? ans : a )
      }
    , nav
  //

  FindCmds()
  Output(nav)
  Output( Date.now() - _ST + "ms" )

  return outp
  //------------------------------------------------------------
  //Functions
  function FindCmds( ){
    nav = [
        CL( null , 1 )
      , CL( { } , 1 )
    ]

    let charmap = nav.map(
          e => Array.from(
              e.a.split( "\n" )
              .reverse()[ 0 ]
            )
          .map( char => char.charCodeAt(0) )
        )
    Output(charmap[0])
    Output(charmap[1])
  }
}