function(C,A){
//{
    let
        { c , to , msg } = A,
        SFCC = String.fromCharCode,
        str = Array.from(
            SFCC(...[
                0
                , 161, 162
                , 164
                , 166, 167, 168, 169, 170
                , 193
                , 195
                ])
            ).map( (ch,i)=>`\`${String(i)[0]}${ch}\`` )
            .join(""),
        rgx = /`([0-9A-Za-z])(.+)`/g,
        clrs = clr_changer()

    msg = A.msg.split(/[ ]/g)
        .map( e => `\`${ clrs.next().value + e }\`` )
        .join(" ")

    let OUT = c ?
        #fs.chats.send({ c , msg })
        : #fs.chats.tell({ to , msg })


    return { A , OUT }
//} ---------------------------
function* clr_changer(){
    let clrtab = [..."012345"] , i

    for ( i of clrtab )
        yield i

    for ( i of Range(65,89) )
        yield SFCC(i++)

    for ( i of Range(97,121) )
        yield SFCC(i++)

    return
}

function  Range(st, end){

    return Array.from(
            Array(end-st+1).keys() ,
            (e,i)=>(i+st)
    )
}

}