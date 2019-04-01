function( CTX, ARG ) {
   const Stfy = _ => JSON.stringify( _ ),
      crpt = [ 0,
         161, 162, 164,
         166, 167, 168, 169, 170,
         193, 195
      ]
   l = 0
   id = IT()
   let O = new CLer( ARG.T )
   O.Dial()
   O.Dial({})
   return O

////////////////////
   function* IT (x){
      var i = 0
      while (1) {
         l = i
         yield i++
      }
   }
   //
   function CLer( tgt ) {
      if (!tgt) throw Error("No Target")
      var self = tgt,
         that = _ => self,
         { name , call } = tgt ,
         log = [],
         alog = [],
         Dial = q => {
            var
               $q = Stfy( q )||null ,
               $a = call( q ) ,
               $t = $a.constructor.name ,
               $i = id.next().value ,
               $r ; $r = _ => {
                  _ = call.bind( self, $q )
                  var $ta = _( )
                  alog.push( $ta )
                  log.push( { $q: Stfy( $q ), $a: $ta, $i:id.next().value, $r, $t: $ta.constructor.name } )
                  return $ta
               }
            alog.push($a)
            log.push({ $q, $a, $r , $t , $i})
            return $a
         }
      Object.assign(self, {
         that , log , Dial, alog
      })
      Object.defineProperty(self, 'self', {
        value: that(), enumerable: false
      })
      return self
   }
   //
   var l , id

}