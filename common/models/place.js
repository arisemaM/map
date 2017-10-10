'use strict';

module.exports = function(Place) {

  Place.remoteMethod('autocomplete',{
    http: {verb: 'get'},
    returns: {type: 'object'}

  });
  //
  // Place.remoteMethod('nearbysearch',{
  //   returns: {type: 'object'}
  //
  // });
  Place.remoteMethod('placeDetails',{
    returns: {type: 'object'}

  });
  // Place.remoteMethod('placeLocate',{
  //   accepts: [
  //     {arg: 'street', type: 'string', required: true},
  //     {arg: 'city', type: 'string', required: true},
  //     {arg: 'zipcode', type: 'string', required: false}
  //   ],
  //   http: {verb: 'get'},
  //   returns: {type: 'object'}
  //
  // });
  Place.remoteMethod('queryAutocomplete',{
    returns: {type: 'object'}

  });
  Place.remoteMethod('textSearch',{
    returns: {type: 'object'}

  });

};
