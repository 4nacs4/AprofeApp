'use strict';

describe('Factory: backdrop', function(){

  beforeEach(module('app.core'));
  beforeEach(module('app.shell'));

  var _backdrop;

  beforeEach(inject(function($injector){

    _backdrop = $injector.get('backdrop');

  }));

  it('should do nothing', function (){
    expect(true).toBe(false);
  });
});
