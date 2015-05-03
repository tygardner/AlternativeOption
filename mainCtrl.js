var app = angular.module('geoLocation');

app.controller('mainCtrl', function($scope, mainService){

	$scope.getGeo =function(){
		navigator.geolocation.getCurrentPosition(function(position){
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			mainService.getAddress(lat, lon).then(function(results){
				console.log(results)
				$scope.address =results.data.display_name;
				var city = results.data.address.city;
				var country = results.data.address.country_code;
			mainService.getWeather(city, country).then(function(results){
				console.log(results);
				$scope.weather=Math.round(((results.data.main.temp-273.15)*9/5)+32);
				})
			})
		});
	}



});