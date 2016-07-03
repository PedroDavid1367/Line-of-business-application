/// <reference path="C:\Repositories\Projects_571\Line-of-business-application\Product-management-angularJS\js/angular.js" />

(function (module) {
  "use strict";

  var productResource = function ($resource) {
    return $resource("/api/products/:productId");
  };

  module.factory("productResource", ["$resource", productResource]);

}(angular.module("common.services")));