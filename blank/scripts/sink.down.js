function (C,A){// T:#s.script.name
  var B = #fs.scripts.lib(), OS=#ns.blank.os(), 
  error = {
    msgs : [
      "Sorry! The script is shifting, ",
      "Unsupported Pattern"
      ],
    get shifting(){
      var err = { ok:false ,
       msg:error.msgs[0]+results[-1].A.match(RGX.shift)+" remain." }
      return err
    }
  },
  RGX = {
    unwantedG : /[^a-z^0-9_\s]+/gi,
    unwantedN : /[^a-z^0-9_\s\.<>]+/gi,
    navword : /([\w]+):"(\w+)"/,
    navword2 : /"([\w]+)"\s"([\w]+)"/,
    notCorr : /^[\xA1-\xAA\xC1-\xC3]/gi,
    shift : /(\d+)s/
   },
   Time = {
    start : _ST,
    get now(){
     return Date.now()
    },
    get op(){
      return Time.now - _ST
    },
    get left(){
      return _TO - Time.op
    }
  },
  chEveryFalse = crmap=>crmap.every(cr=>cr===false),
  chCr = arr=>arr.map(OS.checkCorrupt),
  target = new OS.callScriptor(A.T), results = target.calls ,
   Tcall = (q=>target.call(q,"\n",1)).bind(target),
  output = { target }

  Tcall({})
  if ( results[-1].ok === false || results[-1]!==undefined ){  
    return results[-1]
  }
  return  {org:results[-1], dcr:decorrupt(results[-1]), Time, TC:target.timesCalled}



  function decorrupt(that,$old){
    if ($old===undefined) $old =  that.A.map(OS.deColorize)
    
    var cr$old = chCr($old)
    //#D("Old: \n" + $old)
    //#D(cr$old)
     if ( chEveryFalse(cr$old) ) return $old
    
    that.recall()
    that = results[-1]

    var $new = that.A.map(OS.deColorize),
    cr$new = chCr($new)
    //#D("New \n" +$new)
    //#D(cr$new)
     if ( chEveryFalse(cr$new) ) return $new
    
    
    cr$new.forEach((elm,ind)=>{
     if (elm !== false) $new[ind] = $old[ind] })
    //#D("NewOld: \n" +$new) ;
    cr$new = chCr($new)
    if ( chEveryFalse(cr$new) ) return $new

    return decorrupt(that,$new)
  }
}