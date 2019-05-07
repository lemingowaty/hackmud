function( CTX, ARG ) {
//Main{
    const AF = _ => Array.from(_),

        Jstf = _ => JSON.stringify( _ ),
        Jprs = _ => JSON.parse( _ ),
        ch2n = _ => _.charCodeAt(0),
        n2ch = String.fromCharCode

    var CrptNum = [
            0
            , 161, 162
            , 164
            , 166, 167, 168, 169, 170
            , 193
            , 195
        ],
        CrptStr = n2ch(...CrptNum),
        nl = "\n"

    let O = CLer( ARG.T ),
        alog = [],
        Time = Timer( O ),
        DL = _=>{
            _ = O.Dial(_)
            alog.push(_)
            return _
        }

    DL( )
    DL( { } )

    return O
// } Main
//-----------|
// Functions {

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
            cnter ,
            self : {
                get: _ => self,
                enumerable: false
            } ,
            log : {
                value : {
                //  q: [], a: [], t: [],
                    full: [],
                    last: null
                },
                enumerable : true
            },
        } )
        self.Dial = Q => {
            let log = self.log,
                q = Jstf( Q ) || null,
                a = call( q ),
                t = a.constructor.name,
                i = cnter.next().value,
                full = {
                    q, a, t, i,
                    r: self.Dial.bind( self, Jprs(q) )
                }
            //let
            if ( t == "Object" && a.ok === false )
                throw Error(a.msg) // Script shifting
            if ( t == "String" )
                full.strinfo = strOp( a )
            log.full.push( full )
            log.last = i
            // for ( let x of "qat" ) log[ x ].push( full[ x ] )
            return full
        }

        return self
    }

    function strOp (s) {
        let { length } = s ,
            nline = s.includes(nl) ,
            afs = AF(s),
            crMap = [],
            chMap = afs.map(
                (c,i)=>({ i, c, n:ch2n(c) })
            ),
            divs = s.split("\n"),
            div = { divs , crMap:[] }
            chMap.forEach( _=>{
                for (let n of CrptNum ) {
                    if ( _.n === n ) {
                        crMap.push(_)
                    }
                }
            })

            Object.defineProperty( div, "afs", { value : divs.map( p=>AF(p) ) })
            Object.defineProperty( div, "chMap", {
                value : div.afs.map(
                    (D,j)=>D.map(
                        (c,i)=>({ j , i, c, n:ch2n(c) })
                    )
                )
            })
            div.chMap.forEach(
                D => D.forEach(
                    _ => {
                        for ( let c of CrptStr ) {
                            if ( _.c === c ) div.crMap.push(_)
                        }
                    }
                )
            )

        return Object.defineProperties(
            { crMap , nline , crMap , div , length  },
            { chMap:{ value:chMap } , afs:{ value:afs } }
        )
    }

    function Timer($={}) {
        let Omap = { _TO , _ST , _END },
            gtrs = {
                RN : _ => ( Date.now() - _ST ),
                TL : _ => ( _TO - $.RN ) ,
                DN : Date.now
            }

        for ( let p in Omap) Omap[p] = {
            value:Omap[p] , enumerable:true }

        for ( let p in gtrs ) Omap[p] = {
            get:gtrs[p] , enumerable:true }
        // #D(Omap)
        Object.defineProperties( $ , Omap )

        return $
    }
//} Functions
}