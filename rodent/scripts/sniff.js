function(C,A){
let { 	scripts , sector , channels , join , leave } = A = A || {}
, channel = { channel:sector }

scripts = scripts!==undefined ? scripts.call : q=>#fs.scripts.fullsec(q)

let chats = [ channels.call , join.call , leave.call ]

if ( !chats[0]().includes(sector) ) chats[1](channel)
let list = scripts({ sector })
chats[2](channel) 

return [ A , list ]
}