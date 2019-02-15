function(C,A){//rodent.sniff{ level:4 , sector:0 , channels:#s.chats.channels , join:#s.chats.join , leave:#s.chats.leave }
/////////////////	SETUP {
let B = #fs.scripts.lib()
, channel , list
,{ sector ,  level ,
   channels ,  join ,	leave  
	} = A || {}
, setSector = _=>{
		list = level.call()
		sector = list[sector] 	
	}
, WTFis = O=>O.constructor.name
;
level = (_=>{
		switch (level){
		default: return ({ call:q=>( #fs.scripts.fullsec(q) ) })
		case 3:  return ({ call:q=>( #fs.scripts.highsec(q) ) })
		case 2:  return ({ call:q=>( #fs.scripts.midsec(q)  ) })
		case 1:  return ({ call:q=>( #fs.scripts.lowsec(q)  ) })
		case 0:  return ({ call:q=>( #fs.scripts.nullsec(q) ) })
		}
	})()
//	Argument checks
if ( !A ) return ( "rodent.sniff{ level:0-4 ,"+
	" channels:#s.chats.channels , join:#s.chats.join ,"+
	" leave:#s.chats.leave , sector:\"name/number\"}" )
if ( sector===undefined ) return ( C.calling_script ? level.call() : B.columnize( level.call() ) )
else if ( WTFis(sector) == "Number" ) setSector()
//\\\\\\\\\\\\\\\\\\	Setup } 
/////////////////////////// MAIN {
let joined = channels.call().includes(sector) ? 0 : 1 
channel = { channel:sector }
if ( joined ) join.call(channel)
list = level.call({ sector })
if ( joined ) leave.call(channel) 
return ( C.calling_script ? list : B.columnize(list) ) 
}//\\\\\\\\\\\\\\\\ MAIN }