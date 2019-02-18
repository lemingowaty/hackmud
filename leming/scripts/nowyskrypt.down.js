function(context, args)
{
	var test1 = "Default";
	var l = #fs.scripts.lib();
	if(args){
		if (args.lol=="ok"&&args.ok==true){ 
			test1 = "Works";
		}
		else test1 = "Doesn'tWork";
    }
	return { ok:true , msg:test1 }
}
