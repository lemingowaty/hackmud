function(C,A){
let str = Array.from(String.fromCharCode(...[
        0
        , 161, 162
        , 164
        , 166, 167, 168, 169, 170
        , 193
        , 195
    ]))
    .map( (ch,i)=>`\`${String(i)[0]}${ch}\`` )
    .join(""),
    rgx = /`([0-9A-Za-z])(.+)`/g,
    charlist = []
for (let i = 0; i<256; i++)
    charlist[i] = `${i} ${String.fromCharCode(i)}`
    
return [ str , rgx.exec(str) , charlist.join("\n") , String.fromCharCode(0) ]
// ---------------------------
function* clr_changer(){
    let clrtab = [..."0123456789"] , i

    // for (i = 65; i<90; i++)
    //    clrtab.push(String.fromCharCode(i))

    // for (i = 97; i<=122; i++)
    //     clrtab.push(String.fromCharCode(i))
}

function  Range(s, e, inc=1){

}

}