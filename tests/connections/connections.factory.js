'use strict';

describe('Factory: connections', function(){

  beforeEach(module('app.core'));
  beforeEach(module('app.connections'));

  var _connections;

  beforeEach(inject(function($injector){

    _connections = $injector.get('connections');

  }));

  it('should do nothing', function (){
    expect(true).toBe(false);
  });
});

