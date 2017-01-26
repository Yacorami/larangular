AngRouteApp.controller('MyController',function($scope,instrumentService){

	
	$scope.getALL = function() 
	{
		//Recuperation de toutes les données
		$scope.instruments = instrumentService.query().$promise.then(function(response){
            $scope.instruments=response;
        });

	}

	

	$scope.AddInstrument = function(name,description,category_id)
	{
		//Insertion d'un nouveau enregistrement
		$scope.user=new instrumentService();
		$scope.user.name=name;
		$scope.user.description=description;
		$scope.user.category_id=category_id;

		var saveInst = instrumentService.save($scope.user);
		saveInst.$promise
		.then(function(response)
			{
	          if(response.success)
	          {
	          	//Ajout de l'element
	          	$scope.user.id=response.id;
	          	$scope.instruments.push($scope.user);
		      }
		      else
		      {
		      	console.log("not added");
		      }
        });

		


	}

	$scope.DeleteInstrument = function(id)
	{
		//supression 
		var deleteInst = instrumentService.delete({userId:id})
		
		deleteInst.$promise
		.then(function(response)
			{

	          if(response.success)
	          {
	          	//delete item from scope list
		        $scope.instruments.forEach(
		        	function(element,index,object) 
				        {
							if(element.id==id)
							{
								object.splice(index, 1);
							}

						});
		      }
		      else
		      {
		      	console.log("not deleted");
		      }
        });
	}

	$scope.getALL();
	


});
