let charlieImage = function($state, PhotosService) {
  
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      photo: "="
    },
    template: `
      <div class="photoCard">
        <img class="mainImage" ng-src="{{ photo.url }}">
        <div class="clicked"><img src="/images/heart.gif"></div>
      </div>
    `,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      element.on('dblclick', function () {
        angular.element(this).children(".clicked").toggleClass("display");
      });

    }
  };




};

charlieImage.$inject = ['$state', 'PhotosService'];

export default charlieImage;