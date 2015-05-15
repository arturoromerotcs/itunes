var app = angular.module('itunes');

app.controller('mainCtrl', function($scope, itunesService){

  $scope.gridOptions = { 
      data: 'songData',
      height: '110px',
      sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
      columnDefs: [
        {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
        {field: 'Artist', displayName: 'Artist'},
        {field: 'Collection', displayName: 'Collection'},
        {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
        {field: 'Type', displayName: 'Type'},
        {field: 'CollectionPrice', displayName: 'Collection Price'},
      ]
  };

    $scope.getSongs = function () {
     itunesService.getSongs($scope.artist)
      .then(function(songs) {
        console.log(songs)
        var correctFormatedSongs = songs.map(mapItuneSongsIntoGridFormat);
        $scope.songData = correctFormatedSongs
      })
    } 

    function mapItuneSongsIntoGridFormat(ituneSong) {
      return {
        Play: ituneSong.previewUrl,
        Artist: ituneSong.artistName,
        Collection: ituneSong.trackName,
        AlbumArt: ituneSong.artworkUrl60,
        Type: ituneSong.primaryGenreName,
        CollectionPrice: ituneSong.trackPrice
      }
    }
// callthefucntionWithanArg then promise gets a var and console.log
/*---------------------------------------------------------------------
    // itunesService.asyncGreet('Arturo').then(function(message) {
    //   console.log(message);
    // })
---------------------------------------------------------------------*/
});




