function(C,A){

let { t:T=($=>{throw Error("No Target")})() } = A = A || { }
, WTFis = $=>$.constructor.name
if (WTFis(T)!=="Object"){throw Error("Not an Object")}
T.calls = []
T.counter = 0
Object.defineProperty(T.calls,"-1", {

})

return { debug , T }
}