function(context, args)// {myvar:"varname"}
{
	var caller = context.caller 			// This is your username!
	var B = #fs.scripts.lib() 				// This is a library of functions delivered by seanmakesgames
	if (!args) {var myvar = "NoName"}
	var str = "Hi, I am a string. I store text information!"
	B.log("This is a string: " + str)  // .log is a function of scripts.lib, it adds a new entry to an array you can retrieve later 
	var inte = 10 							// This is a standard integer number
	str = "My index is : "
	//This is an array. Arrays can contain other datatypes inside of them. 
	var arra = ["I'm not an array! I'm just a string inside it! My index is 0, even though array.length says I have 1 element. You know, I feel lonely here. How about we make some friends?"]
	B.log(arra)
	B.log("Arra.length: "+ arra.length)
	var MyNewFriends = [] 
	// Loop structure:
	// for (counter variable;condition;step) { instructions to repeat here }
	//We'll fill MyNewFriends to a given range. This is also how you adress stuff inside arrays.
	for (var i = 0;i < inte;i++) //The ++ -- signs after/before an integer variable increment or decrement it by 1 
	{
		MyNewFriends[i] ="Hi! \n" + str + (i + 1)
		B.log("Loop Number : " + i)
	}
	
	B.log (" Hang on! I'm supposed to be in there with them! Lets join them using an array method called concat..")
	arra = arra.concat(MyNewFriends) // Concat method function joins together two arrays but doesn't modify the existing one, so we have to use the assignment operator
	arra[0] = "I'm not lonely anymore! " + str + 0 
	
	var eobject = { string1 : "Hi, I'm a single string value in an object, under the key 'string1' " }
	eobject.hex = 0xFF +" "+0xF0+" "+0x0080
	eobject.dig = inte
	eobject.arra = arra
	if(myvar) {eobject[myvar] = "Variable name defined by user!"} // args.myvar will return true if it is defined, even if it is empty/null
	eobject.str = str // Plain assignment to object key
	eobject.context = Object.keys(context)  // Interesting effect.
	eobject.log = B.get_log() // Assigning log to object key, useful for debug
	eobject.keysnames = Object.keys(eobject) // another Object-common method , if you do this on an array , it'll  just list indexes. That's why we call arrays numerable, they are ordered. From lowest to highest.
	return eobject
}
