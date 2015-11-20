let charlieImage = function($state, PhotosService, $timeout) {
  
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      photo: "="
    },
    template: `
    <ul class="photoList">
      <li class="photoListItem">
          <img class="mainImage" ng-src="{{ photo.url }}">
          <div class="clicked">
            <img src="/images/heart.gif">
            <div class="likes">{{ photo.likes }}</div>
          </div>
      </li>
    </ul>
    `,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      element.on('dblclick', function () {
        angular.element(this).children().children(".clicked").toggleClass("display");
        PhotosService.like(scope.photo);
      });

    }
  };
};

charlieImage.$inject = ['$state', 'PhotosService', '$timeout'];

export default charlieImage;