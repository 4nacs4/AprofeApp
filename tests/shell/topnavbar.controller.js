'use strict';

describe('Controller: TopNavBar', function(){

  beforeEach(module('app.core'));
  beforeEach(module('app.shell'));

  var _ctrl, _scope;

  beforeEach(inject(function($controller, $injector){

    _scope = $injector.get('$rootScope');

    _ctrl = $controller('TopNavBar', {
      //add injectable services
    });

  }));

  it('should do nothing', function (){
    expect(true).toBe(false);
  });
});

