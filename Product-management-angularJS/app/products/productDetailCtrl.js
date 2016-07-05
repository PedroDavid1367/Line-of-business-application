/// <reference path="C:\Repositories\Line-of-business-application\Product-management-angularJS\js/angular.js" />
/// <reference path="C:\Repositories\Line-of-business-application\Product-management-angularJS\common/services/productService.js" />

(function (module) {
  "use strict";
  
  var ProductDetailCtrl = function (product, productService) {
    var vm = this;

    vm.product = product;

    vm.title = "Product Detail: " + vm.product.productName;

    vm.marginPercent = productService.calculateMarginPercent(vm.product.price,
                                                             vm.product.cost);

    if (vm.product.tags) {
      vm.product.tagList = vm.product.tags.toString();
    }
  };

  module.controller("ProductDetailCtrl",
                   ["product",
                    "productService",
                    ProductDetailCtrl]);

}(angular.module("productManagement")));
