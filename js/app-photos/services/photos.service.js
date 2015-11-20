let PhotosService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/photo';

  this.getAllPhotos = getAllPhotos;
  this.submitForm = submitForm;
  this.like = like;

  function Photo (photoObj) {
    this.title = photoObj.title;
    this.url = photoObj.url;
  }

  function getAllPhotos () {    
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
    });
  }

  function submitForm (photoObj) {
    let p = new Photo(photoObj);
    return $http.post(url, p, PARSE.CONFIG);
  }

  function like(obj) {
    updateLikes(obj);  
  }

  function updateLikes (obj) {
    obj.likes = obj.likes + 1;
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  }


};

PhotosService.$inject = ['$http', 'PARSE'];

export default PhotosService;