function( CTX, ARG ) {
//Globals {
    const
        lib = #fs.hamtaro.lib( )
    ,   nl = "\n"
    , {
        CharInfo,
        CrptStr,
        Timer,
        Dialer
    } = lib
    // ,   dbg = _ =>`R: ${_} T: ${ typeof(_) } Nan: ${ isNaN(_)} null: ${ Boolean(_===null) }`,
//} Globals
//---------------------------------------------------------------
//Main {
    if ( ( ARG || {} ).quine ) return #fs.scripts.quine( )

    let Time = Timer( {} ),
        O = Dialer( ARG.T ),
        { Dial, log } = O,
        OUT = [ ],
        OUTp = _ => OUT.push(
            O.last,
            info,
            "-".repeat(CTX.cols)
            ),
        atak, info

    do {
        atak = Dial( )
        info = strOp( atak )
        info.div.reverse( )
    } while ( info.div[ 0 ].corrupt || info.div[ 1 ].corrupt )
    OUTp( )
    do {
        atak = Dial( { Q: {} } )
        info = strOp( atak )
        if ( Time.TL <= 200) break
    } while ( info.corrupt )
    OUTp( )

    return [
        ...OUT,
        `\t\`G${O.log.length} tries\``,
        Time
    ]
// } Main
//----------------------------------------------------------------
// Functions {
    function* CrptItr( chMap ) {
        for ( let i = 2; i < chMap.length - 1; i++ ) {
            if ( CrptStr.includes( chMap[ i ].c ) ) {
                yield {
                    beg: chMap[ i - 2 ],
                    colr: chMap[ i - 1 ],
                    crpt: chMap[ i ],
                    end: chMap[ i + 1 ]
                }
                i++
            }
        }
    }
    function CrpCheck(){

    }
    function toRows ( txt , rownum , pageref ) {

    }
    function toWords ( row , wordnum , rowref ){

    }
    function strOp( s, row, ref ) {

        let { length } = s,
        chMap = [ ...s ].map( CharInfo ),
            div = s.includes( nl ) ?
                s.split( nl ).map( strOp ) :
                ( _ => {
                    row += 1
                    if ( isNaN(row) ) return [ s ].map(strOp)
                } )( ),
            crArr
        
        if( !row || !s.includes(nl) ) crArr = Array.from( CrptItr( chMap ) )
        // #D( dbg(row) )
        // #D( arguments.length )
        return Object.defineProperties({
            div,
            length,
            row,
            corrupt: crArr ? (crArr.length ? true // If ,
                : false ) : undefined // IfElse , Else
          },{
            s: { value: s },
            chMap: { value: chMap },
            afs: { value: afs },
            crArr: { value: crArr }
        })
    }
// } Functions
}
