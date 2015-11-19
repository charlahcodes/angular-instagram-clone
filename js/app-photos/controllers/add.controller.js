let AddController = function($state, $scope, PARSE, PhotosService) {
  
  let vm = this;

  vm.submitForm = submitForm;

  function submitForm (photoObj) {
    PhotosService.submitForm(photoObj).then( (res) => {
      $state.go('root.home');
    });
  }


};

AddController.$inject = ['$state', '$scope', 'PARSE', 'PhotosService'];

export default AddController;