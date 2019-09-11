function ( CTX, ARG ) {
//Globals{
  const 
    { CharInfo,
      CrptStr,
      Timer,
      Dialer
    } = #fs.hamtaro.lib(),
    ODP = Object.defineProperties,
    badchar = String.fromCharCode(215)
    
    Target = Dialer(ARG.T),
    Time = Timer(),
    
    Dial = _ => Target.Dial({Q:_,f:1}),
    Trim = _ => _.split("\n").splice(-2,2).join("\n") ,
    hasLen = _ => _.length !== undefined ? ( _.length>0 ? true : false ) : null,
    realLen = (x,y) => x.length-y.length,
    makeLine = _ => _.repeat( (CTX.cols / _.length) / 2 ),
    log = _ => Output.push( _ , makeLine("-=") ),
    Output = [ makeLine("**BEGIN**") ]
//}Globals
//Main{
  let
    clean = [],
    answer , info

  answer = Dial({})
    info = makeInfo( answer.a , answer )
    clean.push( info.corrupt ? Decorrupt( answer ) : answer )
  
  answer = Dial(null)
    answer.a = Trim(answer.a)
    info = makeInfo( answer.a , answer )
    clean.push( info.corrupt ? Decorrupt( answer , true ) : answer )
  
  log(clean)
  log(clean[1])
  
  log( makeLine("END \/\/ ") )
  log( Time )
  return Output 
//}Main
//Functions{  
  function Decorrupt ( last , trim=false ){
    let _,
      fresh = Dial( JSON.parse(last.q) )
    if (trim) fresh.a = Trim(fresh.a)
    _ = makeInfo(fresh.a,fresh)
    if (!_.corrupt) return fresh
    
    let 
      crp = last.info.crArr.map( e=>e.i ),
      Fcl = [...genClean(fresh.a)],
      Ocl = [...genClean(last.a)]
    crp.forEach( e=>Ocl[e]=Fcl[e] )
    Fcl = Ocl
    
    let 
      { i , q , t } = fresh,
      attempt = {
        a:Fcl.join(""),
        q , t , i  
      }
    _ = makeInfo( attempt.a , attempt )
    return ( _.corrupt ? Decorrupt(attempt,trim) : attempt)
  }
  
  function makeInfo( text  , here ){
    let
      { length } = text,
      crArr = [...genCrpt(text)],
      arr = text.split("\n").map(RowMap),
      info = ODP(
       {
        length,
        rows: arr.length ,
        corrupt: hasLen( crArr ),
        realLen: realLen(text,crArr)
       },
       {
        arr: { value: arr },
        text: { value: text },
        crArr: { value: crArr }
       }
      )    
    if ( here ) here.info = info
    return info
    // RowMap
    function RowMap(row,i){
      let 
        { length } = row,
        crArr = [...genCrpt( row )]
        // arr = row.split(/\s+/g)   
      return ODP(
        {
         row, i, length,
         realLen: realLen( row,crArr ),
         corrupt: hasLen( crArr )
        },
        { crArr: { value: crArr } }
      )
    }
  }

  function* genCrpt( text ) {
    let chMap = [ ...text ].map( CharInfo )
    for ( let i = 0 ; i < chMap.length - 1 ; i++ ) {
      if ( CrptStr.includes(chMap[i].c) ) {
        yield *[
          chMap[ i - 2 ],
          chMap[ i - 1 ],
          chMap[ i ],
          chMap[ i + 1 ]
        ] //yield
        i++
      }
      else if (chMap[i].c==badchar) yield chMap[i]
    }
    return chMap
  }
  
  function* genClean( text ){
    let chMap = [ ...text ].map( CharInfo )
    for ( let i = 0 ; i < chMap.length - 1 ; i++ ){
      // #D(chMap[i])
      if (chMap[i].c == "`" && CrptStr.includes(chMap[i+2].c) ){
        yield badchar
        i+=3
      }
      else yield chMap[i].c
    }
    return chMap
  }
//}Functions
}
