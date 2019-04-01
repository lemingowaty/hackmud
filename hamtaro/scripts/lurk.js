function( C, A ) { // hamtaro.lurk { T:#s.cmp.public , project:"name" , pwd:"password" }

  var { T, project, pwd, q } = A || {},
    timer = {
      _TO,
      _ST,
      _END,
      runtime: _ => ( Date.now( ) - _ST ),
      left: _ => ( _TO - timer.runtime )
    },
  //////////////////
    line = "-".repeat( 16 ),
    outp = [ line ],
    Output = _ => outp.push( _, line ),
  //////////////////
    Stfy = _ => JSON.stringify( _ ),
    Fish = _ => _.a.split( "\n" ).reverse( )[ 0 ],
  //////////////////
    crpt = [ 0,
      161, 162, 164,
      166, 167, 168, 169, 170,
      193, 195
    ],
  //////////////////
    CLog = [ ],
    CL = ( qry = null, full ) => {
      let ans, a = T.call( qry )

      if ( a.ok === false ) throw Error( a.msg )
      ans = {
        a,
        qry: qry ? Stfy( qry ) : null,
        cstr: a.constructor.name || "NULL",
        retry: CL.bind( {}, qry )
      }

      CLog.push( ans )
      return ( full ? ans : a )
    }
  //// var end var end var end var end var end var

  Output( FindCmds( ) )
  Output( timer.left( ) + "ms" )
  return outp

  // main end } /// main end } /// main end } /// main end } /// main end } /// main end /// main end //

  //Functions
  function FindCmds( ) {
    var nav = [
        CL( null, 1 ),
        CL( {}, 1 )
      ],
      R = [
        Uncorrupt(  Fish( nav[ 0 ] )  ),
        Uncorrupt(  Fish( nav[ 1 ] )  )
      ]
    //var end
    return R
  }

  function Uncorrupt( str, getnew ) {

    ( !rmCrpt( str ) ) return charMap.join( "" ).split( " " )

    return Uncorrupt(
      Fish( getnew( ) ), getnew
    )
  }
  function CLer( tgt ) {
   var self = tgt,
     that = _ => self,
     { name, call } = tgt,
     log = [ ],
     alog = [ ],
     Dial = q => {
       var
         $q = Stfy( q ) || null,
         $a = call( q ),
         $t = $a.constructor.name,
         $r
       $r = _ => {
         _ = call.bind( self, $q )
         var $ta = _( )
         alog.push( $ta )
         log.push( { $q: Stfy( $q ), $a: $ta, $r, $t: $ta.constructor.name } )
         return $ta
       }
       alog.push( $a )
       log.push( { $q, $a, $r, $t } )
       return $a
     }
   Object.assign( self, {
     that,
     log,
     Dial,
     alog
   } )
    return self
}

}