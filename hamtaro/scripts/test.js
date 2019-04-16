function( CTX, ARG ) {
//Main{
    const Jstf = _ => JSON.stringify( _ ),
        Jprs = _ => JSON.parse( _ ),
        crpt = [ 0
            , 161, 162, 164
            , 166, 167, 168, 169, 170
            , 193, 195
        ]
    //
    var timer = {
            _TO , _ST , _END,
            runtime: _ => ( Date.now() - _ST ),
            left: _ => ( _TO - timer.RN )
    }
    Object.defineProperty(timer, 'RN', { 
        get:timer.runtime,
        enumerable:true
    })
    Object.defineProperty(timer, 'TL', {
        get:timer.left,
        enumerable:true
    })
    //
    let last = 0,
        id = IT(),
        O = new CLer( ARG.T )
    //
    O.Dial()
    O.Dial( {} )
    if ( ARG.d ) Dbg()
    return O
// } Main
//
// Functions {
function Dbg() {
    let line = "-".repeat( 16 )
    for ( let i of [ CTX , O.log.full , timer ] ) {
        #D( i )
        #D( line )
    }
}
//
function* IT( x ) {
    var i = 0
    while ( 1 ) {
        yield i++
    }
}

    //
function CLer( tgt ) {
    if ( !tgt ) throw Error( "No Target" )
    
    var self = tgt ,
        cnter = IT() ,
        { name, call } = tgt
    //
    Object.defineProperty( self, 'self', {
        get : _ => self ,
        enumerable:false
    } )
    self.log = { q: [], a: [], t: [], full: [], last: null }
    self.Dial = Q => {
        let log = self.log
        var q = Jstf( Q ) || null,
            a = call( q ),
            t = a.constructor.name,
            i = cnter.next().value,
            full = {
                q, a, t, i,
                r: ( _ => self.Dial.bind( self, Jprs( q ) ) )()
            }
        //var
        for ( let x of "qat" ) log[ x ].push( full[ x ] )
        log.full.push( full )
        log.last = i
        return full
    }    
    return self
}
// } Functions
}
