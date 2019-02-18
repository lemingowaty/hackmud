function(context, args)
{
    var caller = context.caller;
    var a = args.a; var b = args.b;
    var c = [];
    for(var i = 0;a<=b;i++){c[i]= a; a++}
    var l = #s.scripts.lib();
    var q = {destroy:c,confirm:true};
    #s.sys.upgrades(q)
    var c = #s.sys.upgrades({reorder:{from:0,to:0}})
    return c
}
