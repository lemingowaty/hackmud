function( CTX, ARG ) {
//Main{
    const Jstf = _ => JSON.stringify( _ ),
        Jprs = _ => JSON.parse( _ ),
        crpt = [ 0
            , 161, 162
            , 164
            , 166, 167, 168, 169, 170
            , 193
            , 195
        ]

    let O = CLer( ARG.T ),
        DL = O.Dial,
        Time = Timer(),
        a1 = DL( ),
        a2 = DL( { } )

    if ( ARG.d ) Dbg( ARG.dbg ) // Accepts Arrays
    return
// } Main
//-----------|
// Functions {
    function Dbg($ = [ ]) {
        let line = "-".repeat( CTX.cols )
        for ( let i in $ ) $[i] = [ $[i]  ]
        for ( let v of [ CTX , ...$ ] ) {
            #D( v )
            #D( line )
        }
    }

    function* IT( x ) {
        let i = 0
        while ( 1 ) {
            yield i++
        }
    }

    function CLer( self ) {
        if ( !self ) throw Error( "No Target" )
        let { call } = self,
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

    function Timer($) {
        $ = {
            _TO , _ST, _END,
            runtime: _ => ( Date.now() - _ST ),
            left: _ => ( _TO - $.RN )
        }
        Object.defineProperties( $, {
            RN : {
                get: $.runtime,
                enumerable: true
            },
            TL : {
                get: $.left,
                enumerable: true
            },
            DN : {
                get: Date.now,
                enumerable : true
            }
        } )

        return $
    }
//} Functions
}