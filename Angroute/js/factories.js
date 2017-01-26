AngRouteApp.factory("instrumentService",function($resource,$http){


			  var fact = $resource('http://localhost:8383/instrubase/public/api/instruments/:userId',{userId:'@id'},
			  	{ 
			  		'get':    {method:'GET'},
					'save':   {method:'POST'},
					'query':  {method:'GET', isArray:true},
					'remove': {method:'DELETE'},
					'delete': {method:'DELETE'}
			  	}
			  	);

			 	return fact;

})