var app = angular.module('itunes');

app.service('itunesService', function($http, $q){

  this.getSongs = function(artist) {
  	
  	 var deferred = $q.defer();
  	 
  	 $http.jsonp('https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK')
  	 	.then(function(reponse) {  
  	 		var songs = reponse.data.results
  	 		console.log(songs)
  	 		deferred.resolve(songs);

  	 	});
  	 	return deferred.promise
  }



/*---------------------------------------------------------------------
//   this.asyncGreet = function(name) {
//   var deferred = $q.defer();

//   setTimeout(function() {
//  		deferred.resolve('hello ' + name)
//   }, 2000);

//   return deferred.promise;
// }
---------------------------------------------------------------------*/

  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in. 
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here
});












