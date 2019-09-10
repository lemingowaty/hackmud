function ( CTX, ARG ) {
//Globals{
  const 
    { CharInfo,
      CrptStr,
      Timer,
      Dialer
    } = #fs.hamtaro.lib(),
    
    Target = ARG.T,
    Time = Timer(),
    { Dial } = Dialer(ARG.T),
    
    Trim = _ => _.split("\n").splice(-2,2).join("\n") ,
    hasLen = _ => _.length !== undefined ? ( _.length>0 ? true : false ) : null,
    realLen = (x,y) => x.length-y.length,
    ODP = Object.defineProperties,
    makeLine = _=>_.repeat( (CTX.cols / _.length) / 2 ),
    Output = [ makeLine("**BEGIN**") ],
    log = _ => Output.push( _ , makeLine("-=") )
  ;
//}
//Main(){
  Target.clean = []
  let  
    { clean } = Target ,
    answer , info
  
  answer = Dial({Q:{},f:1}),
  info = makeInfo( answer.a, answer );
  if ( info.corrupt ) clean.push( Decorrupt(answer) )
  else clean.push( answer )
  log( Target.last )
  
  answer = Dial({Q:null, f:1})
  answer.a = Trim(answer.a)
  info = makeInfo( answer.a , answer )
  if (info.corrupt) clean.push( Decorrupt( answer , true ) )
  else clean.push( answer )  
  log(Target.last)
  
  //
  log( makeLine("END \/\/ ") )
  log( Time )
    // for ( let i = 0 ; i<256 ; i++) #D( i + " : " + String.fromCharCode(i))
  return { Output , Clean:Target.clean } 
//}
/////
//=-={  
  function Decorrupt ( last , trim=false ){
    let _,
      query = { Q:JSON.parse(last.q) , f:1 },
      fresh = Dial(query)
    ;
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
      { q , t } = last,
      attempt = {
        a:Fcl.join(""),
        i:(fresh.i+1) ,
        q , t 
      }
    _ = makeInfo( attempt.a , attempt )
    return ( _.corrupt ? Decorrupt(attempt,trim) : attempt)
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
        crArr = Array.from( genCrpt( row ) )
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
  
  function RowMap(row,i){
    let 
      { length } = row,
      crArr = Array.from( genCrpt( row ) )
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
      else if (chMap[i].c==String.fromCharCode(215)) yield chMap[i]
    }
    return chMap
  }
  function* genClean( text ){
    let chMap = [ ...text ].map( CharInfo )
    for ( let i = 0 ; i < chMap.length - 1 ; i++ ){
      // #D(chMap[i])
      if (chMap[i].c == "`" && CrptStr.includes(chMap[i+2].c) ){
        yield String.fromCharCode(215)
        i+=3
      }
      else yield chMap[i].c
    }
  return chMap
  }
}
