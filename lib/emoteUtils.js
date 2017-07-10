
var emoteData = require('./data/emotelist.json');

const wordRegex = /(?:[a-zA-Z0-9_\-:]+)/g;//gets every word string
const emoteRegex = /\:(?:[a-zA-Z0-9_\-]+)\: /g;//gets the emote in the word string


function EmoteManager(){
	
}

EmoteManager.prototype.isOnlyEmotes = function(utils, message){
	var onlyEmotes = true;
	
	wordRegex.exec(message).forEach(function(word){
		var emotekeys = emoteRegex.exec(word);
		if(0<emotekeys.length)
		{
			if(utils.settingsManager.getEmoteAbsolute())
			{
				emotekeys.forEach(function(key){
					if(!emoteData.includes(key))
					{
						return false;
					}
				});
			}
		}
		else
		{
			return false;
		}
	});
	
	return onlyEmotes;
};

module.exports = new EmoteManager();

