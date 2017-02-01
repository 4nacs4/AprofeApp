'use strict';

describe('Controller: LoginModal', function(){

  beforeEach(module('app.core'));
  beforeEach(module('app.common'));

  var _ctrl, _scope;

  beforeEach(inject(function($controller, $injector){

    _scope = $injector.get('$rootScope');

    _ctrl = $controller('LoginModal', {
      //add injectable services
    });

  }));

  it('should do nothing', function (){
    expect(true).toBe(false);
  });
});

