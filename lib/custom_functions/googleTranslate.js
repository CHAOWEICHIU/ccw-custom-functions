module.exports = function(words, callback){
  const _ = require('highland')
      , fetch = require('node-fetch')
      , API_KEY = 'AIzaSyBfF1EwJGIk3iq8UgcMxXVvWmy3JQrCuXA'

  _(words)
      .flatMap(item => _(translate(item)))
      .toArray(callback)

  function translate(word){
    const URL = 'https://translation.googleapis.com/language/translate/v2' +
    		'?key=' + API_KEY +
    		'&source=en' +
    		'&target=zh-TW' +
    		'&q=' + word
    return fetch(URL)
				.then(res=>res.json())
				.then(res=>res.data.translations[0].translatedText)
  }
}
