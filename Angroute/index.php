<!DOCTYPE html>
<html>
<head>
	<title>Angroute Test</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<script type="text/javascript" src="libs/jquery/dist/jquery.min.js"></script>
	<script type="text/javascript" src="libs/angular/angular.min.js"></script>
	<script type="text/javascript" src="libs/angular-resource/angular-resource.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
	<script type="text/javascript" src="js/factories.js"></script>
	<script type="text/javascript" src="js/controllers.js"></script>
</head>
<body ng-app="AngRouteApp">

<div ng-controller="MyController">
<table>
	<thead>
		<th></th>
		<th></th>
		<th></th>
	</thead>
	<tbody>
		
		<tr ng-repeat="instrument in instruments">
			<td>{{instrument.id}}</td>
			<td>{{instrument.description}}</td>
			<td>{{instrument.name}}</td>
			<td><button ng-click="DeleteInstrument(instrument.id)"> Delete </button></td>
		 </tr>
	</tbody>

</table>

<input type="text" ng-model="idDelete"></input>


<br/>
<input type="text" ng-model="name"></input>
<input type="text" ng-model="description"></input>
<input type="text" ng-model="category_id"></input>
<button ng-click="AddInstrument(name,description,category_id)"> Save </button>
	
</div>

</body>
</html>