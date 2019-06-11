function( CTX, ARG ) {
//Globals {
    const
        isStr = _ => new Boolean( _.constructor.name == "String" ) ,
        Jstf = _ => JSON.stringify( _ ) ,
        Jprs = _ => JSON.parse( _ ) ,
        ch2n = _ => _.charCodeAt( 0 ) ,
        n2ch = _ => String.fromCharCode( _ )
    var
        CrptNum = [
            0
            , 161, 162
            , 164
            , 166, 167, 168, 169, 170
            , 193
            , 195
        ],
        CrptStr = n2ch(...CrptNum),
        nl = "\n",
        rgx = {
            color : /`([0-9A-Za-z])(.+)`/gm
        }
//} Globals
//Main {

    let
        O = CLer( ARG.T ),
        alog = [],
        Time = new Timer( O ),
        DL = _=>{
            _ = O.Dial(_)
            alog.push(_)
            return _
        },
        reDL = _=>{
            _ = _.r()
            alog.push(_)
            return _
        }

    DL()
    DL({})
    for ( let x of  alog )
        if ( isStr(x.a) ) x.info = strOp(x.a)

    return alog.map(e=>[
        '-'.repeat(CTX.cols) ,
        e.info
    ])
// } Main
//-----------|
// Functions {

    function* IT() {
        let i = 0

        while ( 1 ) {
            yield i++
        }
    }
    function CharInfo(c,i){
        let $ = {
            c, i,
            n : ch2n(c)
        }
        return $
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

            log.full.push( full )
            log.last = i
            // for ( let x of "qat" ) log[ x ].push( full[ x ] )
            return full
        }

        return self
    }

    function strOp ( s, row ) {
        let
            { length } = s ,
            nline = s.includes(nl) ,
            afs = [...s],
            crMap = [],
            chMap = afs.map(CharInfo)
            
        chMap.forEach( (e,j)=>{
            // if (e.skip == true) return
            for (let n of CrptNum ) {
                if ( e.n == n ) {
                    crMap.push([
                        chMap[j-2],
                        chMap[j-1],
                        e,
                        chMap[j+1]
                    ])
                    break
                }
            }
        })

        let div = nline ? ( _=>s.split(nl).map(strOp) )()
                : ( _=> crMap
                    .forEach( crArr => crArr
                        .forEach( e=>{ e.row = row } )
                    )
                )() 

        return Object.defineProperties(
            { s, crMap , div , length , row },
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

        return Object.defineProperties( $ , Omap )
    }
//} Functions
}