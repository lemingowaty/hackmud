function(CX,AR){
var B = #fs.scripts.lib()
function PBS(sect,sl){//Start ///////////////////////
		var SL = String(AR.sl) || "all"
		var sect = AR.sector || null
		//scripts.xsec Caller
		function CL (sl,sector) {
			let R = []

			switch(sl){
				case "0" : R = #fs.scripts.nullsec({sector}); break
				case "1" : R = #fs.scripts.lowsec({sector}); break
				case "2" : R = #fs.scripts.midsec({sector}); break
				case "3" : R = #fs.scripts.highsec({sector}); break
				default  : R = #fs.scripts.fullsec({sector}); break
				case "all" :
				R = {}; for(let i = 0;i<5;i++)	 R[i] = CL(String(i),sector).toString();
			}
			return R
		}// Caller End
		//Main
		if (sect) #ms.chats.join({channel:sect})
		var RET = CL(SL,sect)
		if (sect) {
			RET = JSON.stringify(RET)
			#fs.chats.send({channel:sect, msg:RET })
			#ms.chats.leave({channel:sect})
		}
	return RET //End of PBS
	}
////////////////////////////////////////////////////Chat#
function Chat(msg,channel,color){
	if (!msg&&!channel&&!color) { return "Blah." }
		var que = { vname:"sqchat_"+CX.caller }
		var dbkey = #ms.uwotm8.debby({ cmd:"dbf" , que , pro:{_id:0} })
	if (dbkey==null) {
			que.lastchan = "0000"
			que.txtcolor = "A"
			#ms.uwotm8.debby({cmd:"dbi",que})
			Object.assign(dbkey,que)
		}
	if(!channel) { channel = dbkey.lastchan	} else #ms.uwotm8.debby({cmd:"dbu1",que,change:{"$set":{lastchan:channel} }})
	if(!color) { color = dbkey.txtcolor } else #ms.uwotm8.debby({cmd:"dbu1",que,change:{ "$set":{txtcolor:color} }})
	msg = "`"+color+msg+"`"
	#fs.chats.send({channel,msg})
	return
	}
////////////////////////////////////////////////Chat^
if(!AR) { AR = {choice:null} }
let x
switch (AR.choice){
		case 2 :
		x = Chat(AR.msg,AR.channel,AR.color)
		break
		case 1 :
		x = PBS()
		break
		default :
		x = "`DSqueaky` \n \t `XScript` \n \t \t `KList` \n squeak.hq{choice:x} \n\n\n 1:Public Lister , arguments: {sl:digit,sector:string}"
	}
return x
}
