function(C,A){
// DB handler //
  let str = [""],
    isAdmin = ()=>{
        let R = (C.caller=="rodent" ) ? true : (false )
        if( A.pwd=="(h3EZzY") throw Error()
    }
    (!A||!A.cmd)return "\t|`D No Command` |\n\t{ cmd : \"help\" }"

 var que = A.query || {},//DB Query object
    all = A.all || 0  ,     // All entries?
    stfy = obj=>JSON.stringify(obj), //Object to JSON String function
    x = { query:que , all}

 if (A.change) x.change = A.change

 switch (A.cmd){
        case undefined :
        case "help":
            x = "Usage:\n    { cmd : \"dbf\"\n        ,( que:null )\n            ,(all:0) OR (change:{})\n    }\n\ndbf  : Find your que(ry) , show(all)matching results\ndbi  : Insert a new que(ry) into the DB\ndbr  : Remove \`D!all!\` results matching \ndbus  : UP-sert (If none to be updated found, insert new entry)\ndbu  : Update \`D!all!\` query results with the change\ndbu1 :  -||-  \`D!one!\` query result with the change"
            break
        case "dbi" ://Insert
            x.ret = #db.i(que)
            break
        case "dbus"://UP-sert (If none to be updated found, insert new entry)
            x.ret = #db.us(que,A.change)
            break
        case "dbu" ://Update ALL
            x.ret = #db.u(que,A.change)
            break
        case "dbu1" ://Update ONE entry
            x.ret = #db.u1(que,A.change)
            break
        case "dbr" : // !!!REMOVE!!!
            if ( stfy(que)==stfy({}) ) return "This will delete the whole database! Are you sure?\n confirm:true"//Sanity Check
            else if ( stfy(que)==stfy({}) && A.confirm===true ) {
                x.ret = #db.r({})
                break
            }
            x.ret = #db.r(que)
            break
        case "dbf"://Find
            all = ( !que || all ) ? "array" : "first" // IF (query is FALSE  |OR| all is TRUE) return Array ELSE return First
            x = #db.f(que)[all]()//Perform Search
    }
 return x
}