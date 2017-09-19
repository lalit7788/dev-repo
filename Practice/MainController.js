angular.module("todoApp", [])
	.controller("todoController", function($scope) {
		$scope.tasks = ["Bread", "Cheese"];
		$scope.hide = true;
		$scope.add = function() {
			$scope.errorText = "";
			var found = false;
			if($scope.title) {
				for(var i = 0; i < $scope.tasks.length; i++) {
					if($scope.tasks[i] === $scope.title) {
						found = true;
						break;
					}
				}
				if(!found) {
					$scope.tasks.push($scope.title);
				} else {
					$scope.errorText = "You have already added this item!";
				}
			}
			$scope.title = "";
		};
		$scope.delete = function() {
			$scope.tasks.splice(this.$index, 1);
		};
});