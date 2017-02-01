'use strict';

describe('Controller: Home', function(){

  beforeEach(module('app.core'));
  beforeEach(module('app.connections'));

  var _ctrl, _scope;

  beforeEach(inject(function($controller, $injector){

    _scope = $injector.get('$rootScope');

    _ctrl = $controller('Home', {
      //add injectable services
    });

  }));

  it('should do nothing', function (){
    expect(true).toBe(false);
  });
});

