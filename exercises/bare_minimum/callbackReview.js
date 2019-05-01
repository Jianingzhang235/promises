/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        // console.log('DATA1:', JSON.stringify(data));
        var newData = data.toString().split('\n');
        // console.log('DATA2', JSON.stringify(newData));
        resolve(newData[0]);
      }
    });
  })
    .then((data) => {
      callback(null, data);
    })
    .catch((error) => {
      callback(error, null);
    });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  // console.log('WHAT URL:', url);
  return new Promise(function(resolve, reject) {
    request(url, function(err, response) {
      // console.log('RESPONSE', response);
      if (err) {
        reject(err);
      } else {
        resolve(response.statusCode);
      }
    });
  })
    .then((statusCode) => {
      callback(null, statusCode);
    })
    .catch((error) => {
      callback(error, null);
    });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
