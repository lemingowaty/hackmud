function( CTX, ARG ) {
//Main{
    const Jstf = _ => JSON.stringify( _ ),
        Jprs = _ => JSON.parse( _ )
    var crpt = String.fromCharCode(
            0
            , 161, 162
            , 164
            , 166, 167, 168, 169, 170
            , 193
            , 195
        ),
        nl = "\n"

    let O = CLer( ARG.T ),
        DL = O.Dial,
        Time = Timer(),
        a1 = DL( ),
        a2 = DL( { } ),
        alog = [ a1 , a2 ]

    if ( ARG.d ) Dbg( ARG.dbg )
    return O
// } Main
//-----------|
// Functions {
    function Dbg() {
        let line = "-".repeat( CTX.cols )
        for ( let v of [ CTX , crpt , Time ,...alog ] ) {
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
            if ( t == "Object" && a.ok === false )
                throw Error(a.msg) // Script shifting
            if ( t == "String" )
            full.strinfo = strOp( a )
            log.full.push( full )
            for ( let x of "qat" ) log[ x ].push( full[ x ] )
            log.last = i
            return full
        }

        return self
    }

    function strOp (s) {
        let nline = 0 ,
            crp = 0,
            chMap , divn
        
        for (let c of crpt){ 
            if ( s.includes(c) ) { crp = c ; break }
        }

        if (c) 
            { chMap = Array.from(s).map(MapCRPT).join(" ") }
        
        if ( s.includes(nl) ){
            nline = 1
            divn = s.split("\n")
        }
        
        return { nline , crp , chMap , divn }
    }

    function MapCRPT (ch) {
        return {
            ch ,
            code : ch.charCodeAt(0),
            cr : ( _=>{
                for (let c of crpt) {
                    if (c === ch) return true
                    else return false
                }
            }) ()
        }
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