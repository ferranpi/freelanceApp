'use strict';

describe('Contacts', function()
{
  describe('Controller: ContactsIndexController', function () {

    // load the controller's module
    beforeEach(module('freelanceApp'));

    var ctrl, scope, mockBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $httpBackend) {

      //mockBackend = $httpBackend;
      //mockBackend.expectGET('contactos/contactos.json').respond([{name: 'Ferran'},{name: 'Cesar'}]);

      scope = $rootScope.$new();
      ctrl = $controller('ContactsIndexController', {
        $scope: scope
      });
    }));

    it('should return no contacts', function() {
      expect(scope.contacts).toEqualData([{name:'hola'}]);
      //expect(angular.equals(ctrl.contacts, [])).toBe(true);
    });
    // it('debe crear un modelo "contactos" con 3 contactos obtenidos del servidor', function(){
    //   expect(angular.equals(ctrl.contactos, [])).toBe(true);

    //   mockBackend.flush();

    //   //expect(ctrl.contactos).toEqual([{name: 'Ferran'},{name: 'Cesar'}]);
    //   expect(angular.equals(ctrl.contactos, [{name: 'Ferran'},{name: 'Cesar'}])).toBe(true);
    // });

    //afterEach(function(){
    //  mockBackend.verifyNoOutstandingExpectation();
    //  mockBackend.verifyNoOutstandingRequest();
    //});
  });
});
