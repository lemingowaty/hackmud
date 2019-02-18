function(context, args)
{	var MyO
	MyO.x = #s.sys.specs()
	MyO.y = #s.accts.balance()
	MyO.z = #s.market.stats()
	MyO.Time = new Date()
	var caller = context.caller;
	var B = #s.scripts.lib();
	return MyO;
}
