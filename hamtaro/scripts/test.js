function ( CTX, ARG ) {
  const 
    {
      CharInfo,
      CrptStr,
      Timer,
      Dialer
    } = #fs.hamtaro.lib(),
    hasLen = _ => _ ? ( _.length ? true : false ) : undefined,
    realLen = (x,y) => x-(y.length*4 - y.length),
    ODP = Object.defineProperties,
    
    Target = ARG.T,
    Time = Timer(),
    
    makeLine = _=>_.repeat( (CTX.cols / _.length) / 2 ),
    Output = [ makeLine("**BEGIN**") ],
    Log = _ => Output.push( 
      ( _.constructor.name == "Array"
       ? [..._]
       : _ ),
      makeLine("-=")
    )
  
  Main()
  Log( makeLine("END \/\/ ") )
  Log( Time )
  return { Output , Target }  
//}
//=-={
  function Main(){
    let 
      { Dial , log } = Dialer(Target),
      query = { Q:{} , f:1 },
      answer = Dial(query),
      { last } = Target,
      info = makeInfo( answer.a, answer )
  
    if (info.corrupt) Decorrupt(answer)    
    Log( info )
  }
  
  function Decorrupt ( last ){
    let 
      { Dial } = Target,
      query = { Q:JSON.parse(last.q) , f:1 },
      fresh = Dial(query),
      info = makeInfo(fresh.a,fresh)
  
    if (!info.corrupt) return info
    let fr_cr = [] , ol_cr = [] , attempt
    info.crArr.forEach(e=>fr_cr.push(
      e.beg.i , e.colr.i,e.crpt.i,e.end.i
      )
    )
    last.info.crArr.forEach(e=>ol_cr.push(
      e.beg.i , e.colr.i,e.crpt.i,e.end.i
      )
    )
    let
      Fcl = Array.from(genClean(fresh.a)),
      Ocl = Array.from(genClean(last.a))
    #D(Fcl.join(""))
    #D(Ocl.join(""))
    fr_cr.forEach(e=>Fcl[e]=Ocl[e])
    #D(Fcl.join(""))
    #D(Ocl.join(""))    
  }
  
  function makeInfo( text  , here ){
    let
      { length } = text,
      crArr = Array.from( genCrpt(text) ),
      arr = text.split("\n").map(RowMap),
      info = ODP( {
        length,
        rows: arr.length ,
        corrupt: hasLen( crArr ),
        realLen: length - ( crArr.length*4 - crArr.length ) 
       },
       {
        arr: { value: arr },
        text: { value: text },
        crArr: { value: crArr }
       }
      )
    
    if ( here && here.constructor.name == "Object" ) here.info = info
    return info
  }
  
  function RowMap(row,i){
    let 
      { length } = row,
      crArr = Array.from( genCrpt( row ) ),
      arr = row.split(/\s+/g).map(WordMap)
   
    return ODP(
      {
       row, i, length,
       realLen: realLen(length,crArr),
       words: arr.length,
       corrupt: hasLen( crArr )
      },
      {
       crArr: { value: crArr },
       arr: { value: arr }
      }
    )
  }
  
  function WordMap(word){
    let
      { length } = word ,
      crArr = Array.from( genCrpt(word) )
   
    return ODP(
      {
       word, length,
       realLen: realLen(length,crArr) ,
       corrupt: hasLen( crArr )
      },
      {
       crArr: { value: crArr }
      }
    )
  }
  
  function* genCrpt( text ) {
    let chMap = [ ...text ].map( CharInfo )
    for ( let i = 2 ; i < chMap.length - 1 ; i++ ) {
      if ( CrptStr.includes(chMap[i].c) ) {
        yield {
          beg: chMap[ i - 2 ],
          colr: chMap[ i - 1 ],
          crpt: chMap[ i ],
          end: chMap[ i + 1 ]
         } //yield
        i++
      }
    }
    return chMap
  }
  function* genClean( text ){
    let chMap = [ ...text ].map( CharInfo )
    for ( let i = 0 ; i < chMap.length - 1 ; i++ ){
      // #D(chMap[i])
      if (chMap[i].c == "`" && CrptStr.includes(chMap[i+2].c) ){
        yield null
        i+=3
      }
      else {
        yield chMap[i].c
      }
    }
  }
}