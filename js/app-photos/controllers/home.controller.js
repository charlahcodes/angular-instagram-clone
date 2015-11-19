let HomeController = function ($scope, PhotosService) {

  PhotosService.getAllPhotos().then ( (res) => {
    $scope.photos = res.data.results;
    console.log(res);
  });

};

HomeController.$inject = ['$scope', 'PhotosService'];

export default HomeController;