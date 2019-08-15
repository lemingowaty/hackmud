function ( CTX, ARG ) {
  const 
    {
      CharInfo,
      CrptStr,
      Timer,
      Dialer
    } = #fs.hamtaro.lib(),
    hasLen = _ => _ ? ( _.length ? true : false ) : undefined,
    OUT = ["=".repeat( CTX.cols / 2 )],
    OUTp = _ => OUT.push(
      ( _.constructor.name == "Array" ? [ ..._ ] : _ ),
        "-".repeat( CTX.cols / 2 )
    )
  // ,   dbg = _ =>`R: ${_} T: ${ typeof(_) } Nan: ${ isNaN(_)} null: ${ Boolean(_===null) }`
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  function Uncorrupt(OLD,Dial) {
    let 
      OutCorr = row=> {
        if (row.corrupt) {
          OUTp(row)
          row.arr.forEach(word=>{
            if (word.corrupt) OUTp(word)
          })
        }
      },
      q = { Q:JSON.parse(OLD.q) , f:1 },
      NEW = Dial(q)
    strOp(NEW.a , NEW)
    for ( let x of [OLD,NEW] ) { x.info.rows.forEach(OutCorr) ; OUTp("===") }
  }
  
  function* CrptItr( chMap ) {
    for ( let i = 2; i < chMap.length - 1; i++ ) {
      if ( CrptStr.includes( chMap[ i ].c ) ) {
        yield {
          beg: chMap[ i - 2 ],
          colr: chMap[ i - 1 ],
          crpt: chMap[ i ],
          end: chMap[ i + 1 ]
        } //yeild
        i++ //Skip one character ahead
      } //if
    } //for
  }

  function strOp( text, here ) {
    let { length } = text,
      chMap = [ ...text ].map( CharInfo ),
      crArr = Array.from( CrptItr( chMap ) ),
      arr = toRows( text ),
      txt = Object.defineProperties( {
        length,
        rows: arr.length,
        corrupt: hasLen( crArr )
       },
       {
        arr: { value: arr },
        text: { value: text },
        chMap: { value: chMap },
        crArr: { value: crArr }
       }
      ),
      info = {
        txt,
        rows: arr,
        words: []
      }
    arr.forEach( row => info.words.push( ...row.arr ) )
    if ( here && here.constructor.name == "Object" ) here.info = info
    return info
  }

  function toRows( txt ) {
    let mapRow = ( row, i ) => {
      let { length } = row, chMap = [ ...row ].map( CharInfo ),
      crArr = Array.from( CrptItr( chMap ) ),
      arr = toWords( row, i )
      return Object.defineProperties( {
        row,
        i,
        length,
        words: arr.length,
        corrupt: hasLen( crArr )
      }, {
        chMap: { value: chMap },
        crArr: { value: crArr },
        arr: { value: arr }
      } )
    },
    rows = txt.split( "\n" ).map( mapRow )
    return rows
  }
  
  function toWords( txt, rowi ) {
    let mapWord = ( word, i ) => {
      let chMap = [ ...word ].map( CharInfo )
      chMap.forEach( chinfo => {
        chinfo.row = rowi
        chinfo.word = i
      } )
      let crArr = Array.from( CrptItr( chMap ) )
      return Object.defineProperties(
       {
        word,
        pos: [ rowi, i ],
        length: word.length,
        corrupt: hasLen( crArr )
       },
       {
        chMap: { value: chMap },
        crArr: { value: crArr }
       }
      )
    },
    words = txt.split( /\s+/g ).map( mapWord )
    return words
  }
// === === === === ===
  function Main(query=null) {
    query = { Q:query }
    let 
      O = Dialer( ARG.T ),
      { Dial, log  } = O,
      answer = Dial(query),
      info = strOp( answer , O.last )
      Uncorrupt(O.last,Dial)
    return OUT
  }

  let 
    Time = Timer( {} ),
    Me = (ARG || {}).quine ? #fs.scripts.quine() : [ Main(ARG.q) , Time ]
  
  return Me
}