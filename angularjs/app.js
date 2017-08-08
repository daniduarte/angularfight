angular.module('todoApp', [])
  .controller('TodoCtrl', function($scope){
    
    $scope.todos = [];

    /////////////////////////////////////
    
    this.create = create;
    this.remove = remove;

    /////////////////////////////////////

    function create (description) {
      var todo = {
        description: description,
        createdAt: Date()
      }

      $scope.todos.push(todo);
      $scope.description = '';
    }

    function remove (index) {
      $scope.todos.splice(index, 1);
    }

  });