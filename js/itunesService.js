var app = angular.module('itunes');

app.service('itunesService', function($http, $q){

  console.log('hello from service')

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

});












