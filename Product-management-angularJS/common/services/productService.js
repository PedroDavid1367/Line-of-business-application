/// <reference path="C:\Repositories\Line-of-business-application\Product-management-angularJS\js/angular.js" />

(function (module) {
  "use strict";

  var productService = function () {
    var calculateMarginPercent = function (price, cost) {
      var margin = 0;
      if (price && cost) {
        margin = (100 * (price - cost)) / price;
      }
      margin = Math.round(margin);
      return margin;
    };

    var calculateMarginAmount = function (price, cost) {
      var margin = 0;
      if (price && cost) {
        margin = price - cost;
      }
      return margin;
    };

    var calculatePriceFromPercent = function (cost, percent) {
      var price = cost;
      if (cost && percent) {
        price = cost + (cost * percent / 100);
        price = (Math.round(price * 100)) / 100;
      }
      return price;
    };

    var calculatePriceFromAmount = function (cost, amount) {
      var price = cost;
      if (cost && amount) {
        price = cost + amount;
        price = (Math.round(price * 100)) / 100;
      }
      return price;
    };

    return {
      calculateMarginPercent: calculateMarginPercent,
      calculateMarginAmount: calculateMarginAmount,
      calculatePriceFromMarkupPercent: calculatePriceFromPercent,
      calculatePriceFromMarkupAmount: calculatePriceFromAmount
    };
  };
  
  module.factory("productService", productService);

}(angular.module("common.services")));
