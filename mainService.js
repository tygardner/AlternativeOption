var app = angular.module('geoLocation');

app.service('mainService', function($http){

this.getAddress = function(lat, lon){
    return $http({
      method: 'GET',
      url: 'http://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lon,
    });
  };

this.getWeather = function(city, country){
	return $http ({
		method: 'GET',
		url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country
	});
};


});