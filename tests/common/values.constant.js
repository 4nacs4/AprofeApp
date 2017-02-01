'use strict';

describe('Factory: values', function(){

  beforeEach(module('app.core'));
  beforeEach(module('app.common'));

  var _values;

  beforeEach(inject(function($injector){

    _values = $injector.get('values');

  }));

  it('should do nothing', function (){
    expect(true).toBe(false);
  });
});

