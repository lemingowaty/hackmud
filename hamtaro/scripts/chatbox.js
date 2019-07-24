function(C,A){// hamtaro.chatbox{ msg:"" , c:"town" }
//Main {
    if ( !A ) return `No arguments
    {
        c:"channel"
        to:"username",
        msg:"String"
    }
    To set as default chat script type
    &hamtaro.chatbox
    into your chatbox.`

    let
        SFCC = String.fromCharCode
        ,
        { c , to , msg } = A
        ,
        { caller , this_script } = C
        ,
        DB = #db.f( { name:this_script } )
         .first()
        ,
        last = A.col || DB.users[caller]
        ,
        clrs = clr_changer(last)

    msg = msg
     .split(/\s/gm)
      .map( e => `\`${clrs.next().value}${e}\`` )
       .join(" ")

    let s = c
     ? #fs.chats.send({ c , msg })
     : #fs.chats.tell({ to , msg })

    s = s.ok
     ? { ok : true , msg : `Message sent to ${c||to}` }
     : s //Error

    #db.u1( { name:this_script } , {
     $set : {
        ["users."+caller] : clrs.next().value
     }
    })

    return s
//} Main

//} ---------------------------

function* clr_changer( l="0" ){
    let clrtab = [..."012345"]
    for (let i of Range(65,89) )
        clrtab.push( SFCC(i) )
    for (let i of Range(97,121) )
        clrtab.push( SFCC(i) )
    // #D(clrtab)
    while (1){
        for ( let i = clrtab.indexOf(l) ; i<clrtab.length ; i++) yield clrtab[i]
        l = "0"
    }
}

function  Range(st, end){
    return Array.from(
        Array(end-st+1).keys() ,
        (e,i)=>(i+st)
    )
}

}