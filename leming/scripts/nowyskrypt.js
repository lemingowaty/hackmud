function(context, args)
{
	var B = #fs.scripts.lib();
	if(args){
		if (args.lol=="ok"&&args.ok==true){ 
			test1 = "Works"
		}
		else test1 = "Doesn't Work" ;
    }
	return { ok:true , msg:test1 }
}
