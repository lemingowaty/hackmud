function( CTX, ARG ) {
//Main{
    const Jstf = _ => JSON.stringify( _ ),
        Jprs = _ => JSON.parse( _ ),
        crpt = [ 0
            , 161, 162, 164
            , 166, 167, 168, 169, 170
            , 193, 195
        ]
    let timer = new Timer(),
        O = new CLer( ARG.T )
    
    O.Dial()
    O.Dial( {} )
    if ( ARG.d ) Dbg()
    return  { log : O.log.full , timer }
// } Main
//-----------|
// Functions {
    function Dbg() {
        let line = "-".repeat( CTX.cols )
        for ( let i of [ CTX, ARG.T, timer ] ) {
            #D( i )
            #D( line )
        }
    }

    function* IT( x ) {
        var i = 0
        while ( 1 ) {
            yield i++
        }
    }

    function CLer( tgt ) {
        if ( !tgt ) throw Error( "No Target" )
        var self = tgt,
            { call } = self,
            cnter = IT()
        Object.defineProperties( self, {
            self : {
                get: _ => self,
                enumerable: false
            },
            log : { 
                value : {
                    q: [], a: [], t: [], full: [], 
                    last: null
                },
                enumerable : true
            },
            cnter
        } )
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
            log.full.push( full )
            for ( let x of "qat" ) log[ x ].push( full[ x ] )
            log.last = i
            return full
        }
        return self
    }

    function Timer() {
        let self = {
            _TO,
            _ST,
            _END,
            runtime: _ => ( Date.now() - _ST ),
            left: _ => ( _TO - self.RN )
        }
        Object.defineProperties( self, {
            RN : {
                get: self.runtime,
                enumerable: true
            },
            TL : {
                get: self.left,
                enumerable: true
            } 
        } )
        return self
    }
// } Functions
}