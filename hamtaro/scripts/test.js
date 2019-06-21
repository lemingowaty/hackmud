function( CTX, ARG ) {
//Globals {
    const
        isStr = _ => Boolean( _.constructor.name == "String" ) ,
        Jstf = _ => JSON.stringify( _ ) ,
        Jprs = _ => JSON.parse( _ ) ,
        ch2n = _ => _.charCodeAt( 0 ) ,
        n2ch = String.fromCharCode ,
        CrptNum = [
            // 0
            161, 162,
            164,
            166, 167, 168, 169, 170,
            193,
            195
        ] ,
        CrptStr = n2ch(...CrptNum) ,
        nl = "\n" ,
        rgx = {
            color : /`([0-9A-Za-z])(.+)`/gm
         }
//} Globals|
//------/-//
//Main {
    let
        O = CLer( ARG.T ),
        Time = new Timer( O ),
        alog = [],
        DL = _=>{
            _ = O.Dial(_)
            alog.push(_)
            return _
        },
        reDL = _=>{
            _ = _.r()
            alog.push(_)
            return _
        },
        OUT = []

    // DL()
    DL({})

    for ( let x of alog )
        if ( isStr(x.a) )
            x.info = strOp(x.a)

    return O
// } Main

//-----------|
// Functions {
function* CrptItr(chMap){
    for ( let i = 2 ; i < chMap.length-1 ; i++ ){
        if ( CrptStr.includes(chMap[i].c) ){
            yield {
             beg : chMap[i-2],
             colr : chMap[i-1],
             crpt : chMap[i],
             end : chMap[i+1]
             }
            i++
        }
    }
}
function* IT() {
    let i = 0
    while ( 1 ) yield i++
}
function CharInfo(c,i){
    return {
     c, i,
     n : ch2n(c)
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

        log.full.push( full )
        // log.last = full
        // for ( let x of "qat" ) log[ x ].push( full[ x ] )
        return full
    }

    return self
}

function strOp ( s, row="main" ) {
    let
        { length } = s ,
        afs = [...s] ,
        chMap = afs.map(CharInfo) ,
        crArr = Array.from( CrptItr(chMap) ) ,
        div = s.includes(nl)
            ? s.split(nl).map(strOp)
            : undefined ,
        real_length = length - (crArr.length * 3)
    
    return Object.defineProperties(
      { div , length , row , real_length },
      { 
        chMap: { value:chMap } ,
        afs:{ value:afs } ,
        crArr:{ value:crArr }
      }
    )
}

function Timer($={}) {
    let Omap = { _TO , _ST , _END },
        gtrs = {
            RN : _ => ( Date.now() - _ST ),
            TL : _ => ( _TO - $.RN ) ,
            DN : Date.now
        }

    for ( let p in Omap) Omap[p] = 
     {
        value:Omap[p] , enumerable:true 
     }

    for ( let p in gtrs ) Omap[p] = 
     {
        get:gtrs[p] , enumerable:true
     }
    // #D(Omap)

    return Object.defineProperties( $ , Omap )
}
//} Functions
}