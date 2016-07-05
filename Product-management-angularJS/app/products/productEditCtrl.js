/// <reference path="C:\Repositories\Line-of-business-application\Product-management-angularJS\js/angular.js" />
/// <reference path="C:\Repositories\Line-of-business-application\Product-management-angularJS\js/toastr.js" />

(function (module) {
  "use strict";

  var ProductEditCtrl = function (product, $state, productService) {
    var vm = this;

    vm.product = product;
    vm.priceOption = "percent";

    vm.marginPercent = function () {
      return productService.calculateMarginPercent(vm.product.price,
                                                   vm.product.cost)
    };

    /* Calculate the price based on a markup */
    vm.calculatePrice = function () {
      var price = 0;

      if (vm.priceOption == 'amount') {
        price = productService.calculatePriceFromMarkupAmount(
            vm.product.cost, vm.markupAmount);
      }

      if (vm.priceOption == 'percent') {
        price = productService.calculatePriceFromMarkupPercent(
            vm.product.cost, vm.markupPercent);
      }
      vm.product.price = price;
    };

    if (vm.product && vm.product.productId) {
      vm.title = "Edit: " + vm.product.productName;
    }
    else {
      vm.title = "New Product";
    }

    // For uib-datepicker-popup
    vm.open = function ($event) {
      $event.preventDefault();
      $event.stopPropagation();

      vm.opened = !vm.opened;
    };

    // This might be refactored as a directive/component.
    vm.submit = function (isValid) {
      if (product.productName && product.productCode) {
        if (isValid) {
          vm.product.$save(function (data) {
            toastr.success("Save Successful");
          })
        } else {
          toastr.error("Please correct the validation errors first.");
        }
      } else {
        toastr.error("Please correct the validation errors first.");
        //alert("Please correct the validation errors first.");
      }
    };

    vm.cancel = function () {
      $state.go('productList');
    };

    vm.addTags = function (tags) {
      if (tags) {
        var array = tags.split(',');
        vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
        vm.newTags = "";
      } else {
        alert("Please enter one or more tags separated by commas");
      }
    };

    vm.removeTag = function (idx) {
      vm.product.tags.splice(idx, 1);
    };
  };

  module.controller("ProductEditCtrl", ["product",
                                        "$state",
                                        "productService",
                                        ProductEditCtrl]);

}(angular.module("productManagement")));
