'use strict';

describe('Factory: auth', function(){

  beforeEach(module('app.core'));
  beforeEach(module('app.common'));

  var _auth;

  beforeEach(inject(function($injector){

    _auth = $injector.get('auth');

  }));

  it('should do nothing', function (){
    expect(true).toBe(false);
  });
});

