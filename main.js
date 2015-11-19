var data;
var myApp = angular.module('myApp',['ui.router'])
myApp.controller('myCtrl', function($scope, $http){
	// Get data from portfolioInfo file and pass it to html
	$http.get('data/portfolioInfo.json').success(function(response){
		data = $scope.infos = response;
	});

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

	//more Info page
	.state('moreInfo', {
		url:'/moreInfo',
		templateUrl: 'templates/moreInfo.html',
		controller:function($scope, $stateParams) {
			console.log($stateParams),
			$scope.dat = $stateParams,
		}
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

})

.controller('WorkController', function($scope){
	$scope.datas = data;
})

.controller('AboutController', function($scope){
	$scope.about = "I AM JESSICA RO AND I WANT ICE CREAM RIGHT NAO"
})

.controller('ContactController', function($scope){
	$scope.email = "jessro95@uw.edu",
	$scope.phone = "010-010-0100"

})


.controller('MoreInfoController', function($scope){
		$scope.dat = data;
		console.log($scope.dat)

	})


