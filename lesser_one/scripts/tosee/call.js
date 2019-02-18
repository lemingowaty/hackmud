function(context, args)
{
    var i = -1;
    function color(){i++;if(i==10){i=0}}
    var caller = context.caller;
    var l = #s.scripts.lib(),c = args.c;
    function loopme(){
        var h = [], f = "";
        for(var i = 0;i<27;i++)
        {
        h[i] = c.call({q:i});
        f = f + c.call({q:i}).msg + "\n \n \n \n `"+color()+" ---- ` \n \n";
        }        //                                ^^^^ Change the letter! Reference on dtr.man{page:$.colors}
        return f}
    var x = loopme();
    return {ok:true , msg:x}
}