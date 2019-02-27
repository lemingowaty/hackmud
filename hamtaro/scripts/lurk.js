function( C, A ) { // hamtaro.lurk { T:#s.cmp.public , project:"name" , pwd:"password" }
  var { T, project, pwd, q } = A || {}
    , crpt = [
        0
        , 161, 162, 164
        , 166, 167, 168, 169, 170
        , 193, 195
      ].map( _ => String.fromCharCode( _ ) )
    , CLog = []
    , nav = []
    , $line = "-".repeat( 16 )
    , outp = [ $line ]
    , Output = _ => outp.push( _ , $line )
    , Stfy = _ => JSON.stringify( _ )
    , CL = ( qry , full ) => {
        let A
          , a = T.call( qry )
        if ( a.ok === false ) throw Error( "O chuj!" + a.msg )
        A = {
            a
          , qry: ( Stfy( qry ) || undefined )
          , cstr: a.constructor.name
          , retry: CL.bind( {}, qry )
        }
        CLog.push( A )
        
        return ( full ? A : a )
      }
  //end var
  
  findCmds()
  let tmp = [
    nav
    , (Date.now() - _ST) + "ms"
  ]
  tmp.forEach( Output )
  
  
  return outp
  //----------------------------------------

  function findCmds() {
    nav = [
      CL( null, 1)
       .split( "\n" )
        .reverse()[ 0 ]
         // .split( " | " )        
      ,
      CL( {}, 1 )
       .split( "\n" )
        .reverse()[ 0 ]
         // .split( /\s|:|"/ )
    ]
    #D(nav)
    
    // let pick = nav[ 0 ]
    //   , News = CL.bind( {}, {
    //         [ pick ]: nav[ 1 ]
    //   } )
    //   , Abot = CL.bind( {}, {
    //         [ pick ]: nav[ 2 ]
    //   } )
    //   , Drct = CL.bind( {}, {
    //         [ pick ]: nav[ 3 ]
    //     , p: pwd
    //     , pass: pwd
    //     , password: pwd
    //     , project
    //   } )
  }
}