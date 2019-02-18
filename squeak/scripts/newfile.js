function(CX, AR){
  var B = #fs.scripts.lib()
  var channel = "SF33D"
  var bal = B.to_gc_str( #hs.accts.balance() )
  var msg = "\n`Nuser`:"+CX.caller +"\n"+ bal + "\n squeak.newfile "
  #ms.chats.join({ channel })
  #ms.chats.join({ channel:"0000" })
  #fs.chats.send({ channel , msg })
  #fs.chats.send({ channel:"0000" , msg })
  #ms.accts.xfer_gc_to({"to":"squeak" , "amount":bal })
    return "`ZThank You!`"




}
