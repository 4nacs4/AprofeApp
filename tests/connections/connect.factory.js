'use strict';

describe('Factory: connect', function(){

  beforeEach(module('app.core'));
  beforeEach(module('app.connections'));

  var _connect;

  beforeEach(inject(function($injector){

    _connect = $injector.get('connect');

  }));

  it('should do nothing', function (){
    expect(true).toBe(false);
  });
});

