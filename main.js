var data;
var myApp = angular.module('myApp',['ui.router'])
myApp.controller('myCtrl', function($scope, $http){
	// Get data from portfolioInfo file and pass it to html
	$http.get('data/portfolioInfo.json').success(function(response){
		data = $scope.infos = response;
	});

	$scope.getInfo = function(clicked) {
		$('.info').empty();
		var name = clicked.name;
		var description = clicked.description;
		var url = clicked.url;
		var image = clicked.image;
		$('.info').append('<a href="' + url + '"><img src ="'+ image +'" /></a>');
		$('.info').append('<p> Project Title :' + name + '</p>');
		$('.info').append('<p> Description : '+ description + '</p>');
		$('.info').append('<p class="link"> <a href="' + url + '">link</a>  </p>');

	}

})
	//Config route provider
.config(function($stateProvider) {
	$stateProvider

	//work page
	.state('work', {
		url:'/work',
		templateUrl: 'templates/work.html',
		controller:'WorkController',
	})	



	//about me page
	.state('about', {
		url:'/about',
		templateUrl: 'templates/about.html',
		controller:'AboutController',
	})

	//contact page
	.state('contact', {
		url:'/contact',
		templateUrl: 'templates/contact.html',
		controller:'ContactController'
	})
		//more Info page
	.state('moreInfo', {
		url:'/moreInfo/{data.name}',
		templateUrl: 'templates/moreInfo.html',
		controller:function($stateParams, $scope){
			console.log($stateParams);
		}
	});

})

.controller('WorkController', function($scope){
	$scope.datas = data;
})

.controller('AboutController', function($scope){
	$scope.about = "I'm an Undergraduate Informatics student in University of Washington, and currently working as an instructor in Coding with Kids. I enjoy eating food from around the world."
})

.controller('ContactController', function($scope){
	$scope.email = "jessro95@uw.edu",
	$scope.phone = "010-010-0100"

})




