var app = angular.module('multipleInputs',[]);

app.controller('multipleInputsCtrl',function($scope) {
    //users object
    $scope.users = [
        {open:true}
    ];
   
   //add new user object
   $scope.addUser = () => {
       var newUser = {open:true};
       $scope.users.push(newUser);
   }
   
   //remove user 
   $scope.removeUser = user => {
       var index = $scope.users.indexOf(user);
       $scope.users.splice(index,1);
   }

   //method to toggle 
   $scope.toggle = index => $scope.users[index].open = !$scope.users[index].open;

});