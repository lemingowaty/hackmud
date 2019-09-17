function ( CTX, ARG ) {
//Globals{
  const 
    { CharInfo,
      CrptStr,
      Timer,
      Dialer
    } = #fs.hamtaro.lib(),
    ODP = Object.defineProperties,
    badchar = String.fromCharCode(215),
    
    Target = Dialer(ARG.T),
    Time = Timer(),
    
    Dial = _ => Target.Dial({Q:_,f:1}),
    Trim = (_,x=2) => _.split("\n").splice(-x,x).join("\n") ,
    hasLen = _ => _.length !== undefined ? ( _.length>0 ? true : false ) : null,
    realLen = (x,y) => x.length-y.length,
    makeLine = _ => _.repeat( (CTX.cols / _.length) / 2 ),
    log = _ => Output.push( _ , makeLine("-=") ),
    
    Output = [ makeLine("**BEGIN**") , makeLine("-=") ]
//}Globals
//Main{
  let
    clean = [],
    grep = (q,t)=>{
      let ans , info
      
      ans = Dial(q)
      if (t) ans.a = Trim( ans.a , t)
      info = makeInfo( ans )
      return ans
    }
       
  clean[0] = Decorrupt( grep({}) )
  clean[1] = Decorrupt( grep( null,2 ) , 2)

  let 
    nav = {} ,
    match
  
  match = clean[0].a.match(/(\w+):\"(\w+)/)
  nav.prefix = match[1]
  nav.direct = match[2]

  match = clean[1].a.match(/(\w+)\s\|\s(\w+)/)
  nav.header = match[1]
  nav.about = match[2]
  
  let
    { prefix , direct , header , about } = nav,
    qry = {
      nws : { [prefix]:header },
      dir : { [prefix]:direct },
      abt : { [prefix]:about }
    }
  
  if(!ARG.p){
    log ( Decorrupt(grep(qry.nws) ).a )
    return Output
  }
  
  clean[2] = Decorrupt(grep(qry.abt,1),1)
  let pword = clean[2].a.match(/egy\s(.+)\sand/)[1]
  
  qry.dir.project = ARG.p
  for (let name of ["p","pw","pwd","pass","password"]) qry.dir[name] = pword
  
  // clean.forEach(e=>log(e.a))
  // log( Time )
  log( Decorrupt( grep(qry.dir) ).a )
  log( makeLine("END \/\/ ") )
  
  return Output 
//}Main
//Functions{
  function Decorrupt ( last , trim ){
    let _,
      fresh = Dial( JSON.parse(last.q) )
    if (trim) fresh.a = Trim(fresh.a,trim)
    _ = makeInfo(fresh)
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
    _ = makeInfo( attempt )
    return ( _.corrupt ? Decorrupt(attempt,trim) : attempt)
  }
  
  function makeInfo( here ){
    if (here.a.constructor.name=="Array") here.a = here.a.join("\n")
    let
      text = here.a,
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
