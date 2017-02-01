'use strict';

describe('Factory: cmModal', function(){

  beforeEach(module('app.core'));
  beforeEach(module('app.modals'));

  var _cmModal;

  beforeEach(inject(function($injector){

    _cmModal = $injector.get('cmModal');

  }));

  it('should do nothing', function (){
    expect(true).toBe(false);
  });
});

