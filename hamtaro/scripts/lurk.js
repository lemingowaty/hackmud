function( C, A ) { // hamtaro.lurk { T:#s.cmp.public , project:"name" , pwd:"password" }
  var { T, project, pwd, q } = A || {}
    , timer = {
      limit:_TO
    }
    , crpt =[
        0
        , 161, 162, 164
        , 166, 167, 168, 169, 170
        , 193, 195
      ]
    , isCrpt = _ => {
        let i 
          , j
          , $crp = false
        Mloop:
        for (let i in _ ) for (let j in crpt ){
          if ( _[i] === crpt[j] ){
            $crp = true
            break Mloop
          }
        }
        return $crp
      }  
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
          , qry: qry ?
              Stfy( qry )
              : null 
          , cstr: a.constructor.name
          , retry: CL.bind( {}, qry, full )
        }
        CLog.push( ans )
        return ( full ? ans : a )
      }
    , nav
  //


  FindCmds()

  return FindCmds()

  Output( Date.now() - _ST + "ms" )
  return outp
  //------------------------------------------------------------
  //Functions
  function FindCmds( ) {
    nav = [
        CL( null , 1 )
      , CL( { } , 1 )
    ]
    Uncorrupt(nav[0])
  }

  function Uncorrupt ( that ) {
    let charMap = Array.from(
          that.a
          .split( "\n" )
          .reverse()[ 0 ]
        )

    if ( !isCrpt (
         charMap.map( char => char.charCodeAt(0) ) 
    ) ) return charMap.join("").split(" | ")
    
    #D( 
      that.a
      .split("\n")
      .reverse()[0]
    , charMap.join(" | ")
    , charMap.length
    , String.fromCharCode(...charMap)
    )
    return Uncorrupt( that.retry() )
  } 
}