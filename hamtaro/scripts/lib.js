function( C, A ) {
    if ( (A||{}).quine ) return #fs.scripts.quine()
    let self = {} ,
        $self = _ => self,
        $ = self
    $.$self = $self
    //
    $.char2num = _ => _.charCodeAt()
    $.CharInfo = ( c, i ) => ( {
     c, i,
     n: c.charCodeAt()
     }
    )
    $.CrptNum = [
        161, 162,
        164,
        166, 167, 168, 169, 170,
        193,
        195
    ]
    $.CrptStr = String.fromCharCode(...$.CrptNum)
    $.Dialer = T => {
        if ( !T ) throw Error( "No Target" )
        T.log = [ ]
        T.Dial = ({ Q=null, f } = { }) => {
            let i = T.log.length,
                q = JSON.stringify( Q ),
                a = T.call( Q ),
                t = a.constructor.name,
                ent = { i, q, a, t }
            if ( t==="Object" && a.ok === false ) throw Error( a.msg )
            T.log.push( ent )
            return ( f ? ent : a )
        }
        Object.defineProperty(T, "last", { get:_=>T.log[T.log.length-1] })
        return T
    }
    $.Jprs = JSON.parse
    $.Jstf = JSON.stringify
    $.num2char = String.fromCharCode
    $.Range = ( st, end, offset = 0 ) => Array.from(
        Array( end - st + 1 ).keys( ) ,
        ( e, i ) => ( i + st + offest )
    )
    $.Timer = ( $ = {} ) => {
        let Omap = { _TO, _ST, _END },
            gtrs = {
             RN: _ => ( Date.now( ) - _ST ),
             TL: _ => ( _TO - $.RN ),
             DN: Date.now
            }
        for ( let p in Omap ) Omap[ p ] = { value: Omap[ p ], enumerable: true }
        for ( let p in gtrs ) Omap[ p ] = { get: gtrs[ p ], enumerable: true }
        // #D(Omap)
        return Object.defineProperties( $, Omap )
    }
    $.WTFis = _ => _.constructor.name
    $.acc_lvl = _ => #fs.scripts.get_access_level( { name:_ } )
    $.sec_lvl = _ => #fs.scripts.get_level( { name:_ } )
    $.quine_lib = _ => #fs.scripts.quine()
    if ( !C.calling_script ) return Object.getOwnPropertyNames($)
    return $
}