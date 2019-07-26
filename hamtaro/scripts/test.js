function( CTX, ARG ) {
//Globals {
    const
        lib = #fs.hamtaro.lib( ),
        {
            CharInfo,
            CrptStr,
            Timer,
            Dialer,
        } = lib,
        nl = "\n"
        // rgx = {
        //     color: /`([0-9A-Za-z])(.+)`/gm
        // }
// return "`TOK`"
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

    function strOp( s, row, ref ) {

        let { length } = s,
        afs = [ ...s ],
            chMap = afs.map( CharInfo ),
            div = s.includes( nl ) ?
                s.split( nl ).map( strOp ) :
                ( _ => {
                    row += 1
                    if ( isNaN(row) ) return [ s ].map(strOp)
                } )( ),
            crArr
        if (!row && !(s.includes(nl) ) ||
            div && div.length > 0 && div.length <= 3 ||
            ref && ref.length <= 3 ||
            row && ( row > ref.length - 3 )
        ) crArr = Array.from( CrptItr( chMap ) )
        row = row || 0
        return Object.defineProperties( {
            div,
            length,
            row,
            corrupt: crArr ? (
                crArr.length ? true
                    : false
             ) : undefined

        }, {
            s: { value: s },
            chMap: { value: chMap },
            afs: { value: afs },
            crArr: { value: crArr }
        } )
    }
// } Functions
}