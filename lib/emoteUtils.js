// this would be a lookup table for all posible emote keys
// but absolute mode is not implemented yet
//var emoteData = require('./data/emotelist.json');

const wordRegex = /(?:[a-zA-Z0-9_\-:]+)/g;//gets every word string
const emoteRegex = /:(?:[a-zA-Z0-9_\-]+):/g;//gets the emote in the word string


function EmoteManager(){
	
}

EmoteManager.prototype.isOnlyEmotes = function(utils, message){
	var check = emoteRegex.test(message);
	
	if(check)
	{
		//remove white space, remove emotes then check length
		check = (message.replace(/\s/g,'').replace(emoteRegex,'').length<=0);
	}
	
	
	
	//if(utils.settingsManager.getEmoteAbsolute() && check)
	//{
		//absolute mode is not implmented yet
		//let word;
		//let key;
		
		//while((word = regex.exec(message)) !== null && check)
		//{
			
		//}
	//}
	return check;
};

module.exports = new EmoteManager();