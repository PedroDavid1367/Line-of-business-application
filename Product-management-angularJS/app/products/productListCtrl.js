/// <reference path="C:\Repositories\Projects_571\Line-of-business-application\Product-management-angularJS\js/angular.js" />

(function (module) {
  "use strict";

  var ProductListController = function (productResource) {
    var vm = this;

    productResource.query(function (data) {
      vm.products = data;
    });

    vm.showImage = false;

    vm.toggleImage = function () {
      vm.showImage = !vm.showImage;
    };
  };

  module.controller("ProductListController", ["productResource", ProductListController]);

}(angular.module("productManagement")));