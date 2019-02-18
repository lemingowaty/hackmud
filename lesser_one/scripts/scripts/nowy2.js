function(context, args)
{
	var caller = context.caller;
	var c = args.c.call();
	var l = #s.scripts.lib();
	return { ok:true , msg:c};
}
