(function () {
'use strict';

angular.module('autoCompleteApp', [])
.controller('autoCompleteController', autoCompleteController)
.service('autoCompleteService', autoCompleteService)


//  controler
autoCompleteController.$inject = ['autoCompleteService'];
function autoCompleteController(autoCompleteService) {
	var ctrl = this ;
 ctrl.searchTerm = "" ;
 ctrl.list = [] ;
 ctrl.selected = false ; 
  
autoCompleteService.getList()
     .then(function (result) {
		  ctrl.errmsg  = "" ;
		ctrl.list = result.data ;
		
}).catch(function (error) {
	   ctrl.errmsg  = error.data ;
	  }) ;	 


 ctrl.selectItem = function (item_name)
 {
	 ctrl.selected = true ;
	 ctrl.searchTerm =item_name; 
	 }
}

// service to load the json data
autoCompleteService.$inject = ['$http']
function autoCompleteService($http) {
  var service = this;
 
  
 service.getList = function () {
	  var response = $http({
      method: "GET",
      url: ("list.json")
    });  
	
   return response; 
 
  
  }; 
    
}//end of service




})();
