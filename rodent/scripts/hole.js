function(C, A) {

  let pw = "sunflower",
  sudo = ["rodent","uwotm8","hamtaro","the_spanish_inquisition"],
  { p , c , q , a , u = {} } = A = (A) ? A : {},
  v = (
      (_=>(sudo.indexOf(C.caller)+1) ? 2 :
        ( (p === pw) ? 1 : 0 ) 
      )()
  ),
  Stamp = _=>(
    {
      timestamp: Date.now(),
      q: stf(q),
      u: stf(u),
      c , v , C
    }
  ),// Konstruktor
  stampI = O => {
    Object.assign(O, { info : [ Stamp("dbi") ] } ) 
  },
  stampU = O => {
    if (O["$push"]) Object.assign( O["$push"],  { info: Stamp() } )
     else O["$push"] = {  info : Stamp()  }
  },
  stf = T => JSON.stringify(T),
  help = `{ c : \"dbf\"\n,( q:null )\n,(a:1) OR (u:{})\n }\n\ndbf : Find your (q)uery , show (a)ll matching results\ndbi : Insert a new (q)uery into the DB\ndbr : Remove \`D!all!\` results matching \ndbus : UP-sert (If none to be updated found, insert new entry)\ndbu : Update \`D!all!\` query results with the change\ndbu1 : -||- \`D!one!\` query result with the change`
  // --- //M//A//I//N --- //M//A//I//N// --- //M//A//I//N// --- //M//A//I//N// --- 
  function main() {
    let X
    if ( c != "dbf" ) { (c=="dbi") ? stampI(q) : stampU(u) }
    switch (c) {
      default:
        return help
      case "dbf": //Find
        a = (q == undefined || a) ? "array" : "first" // IF (query is FALSE  |OR| all is TRUE) return Array ELSE return First
        X = #db.f(q)[a]() //Perform Search
        break
      case "dbi": //Insert
        // stampI(q)
        X = { in: #db.i(q), out: #db.f(q).first() }
        break
      case "dbu": //Update ALL
        // stampU(u)
        X = { in: #db.u(q, u), out: #db.f(q).array() }
        break
      case "dbu1": //Update ONE entry
        // stampU(u)
        X = { in: #db.u1(q, u), out: #db.f(q).first() }
        break
      case "dbus": //UP-sert (If none to be updated found, insert new entry)
        // stampU(u)
        X = { in: #db.us(q, u), out: #db.f(q).first() }
        break
      case "dbr": // !!!REMOVE!!!
        if (stf(q) == stf({}) && A.ok === pw) X = #db.r({})
        else if ( stf(q) == stf({}) ) X = "This will delete the whole database! Are you sure?" //Sanity Check
        else X = #db.r(q)
    }
    return { c, q, u, a, C, X }
  }
  //---------------------------------------------\\M\\A\\I\\N\\
  return main(A)
}