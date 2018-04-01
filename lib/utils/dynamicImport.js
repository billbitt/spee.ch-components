"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dynamicImport = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function getDeepestChildValue(parent, childrenKeys) {
  if (!parent[childrenKeys[0]]) {
    return null;
  }

  var childKey = childrenKeys.shift(); // .shift() retrieves the first element of array and removes it from array

  var child = parent[childKey];

  if (childrenKeys.length >= 1) {
    return getDeepestChildValue(child, childrenKeys);
  }

  return child;
}

var dynamicImport = function dynamicImport(filePath, config) {
  // validate inputs
  if (!filePath) {
    throw new Error('no file path provided to dynamicImport()');
  }

  if (typeof filePath !== 'string') {
    console.log('dynamicImport > filePath:', filePath);
    console.log('dynamicImport > filePath type:', _typeof(filePath));
    throw new Error('file path provided to dynamicImport() must be a string');
  }

  if (!config) {
    console.log('No customComponents found in site config');
    return null;
  } // split out the file folders  // filter out any empty or white-space-only strings


  var folders = filePath.split('/').filter(function (folderName) {
    return folderName.replace(/\s/g, '').length;
  }); // check for the component corresponding to file path in the site config object
  // i.e. customComponents[folders[0]][folders[2][...][folders[n]]

  var component = getDeepestChildValue(config, folders);

  if (component) {
    console.log('Found custom component for', filePath);
    return component;
  } else {
    console.log('No custom component found for ', filePath);
    return null;
  }
};

exports.dynamicImport = dynamicImport;