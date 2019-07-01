import { Pet } from './../src/tamagotchi';

describe('Pets', function() {
  let joe = new Pet('Joe');

  beforeEach(function() {
    jasmine.clock().install();
    joe.game();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should check stats are all 100, and name is accurate', function() {
    expect(joe.name).toEqual('Joe');
    expect(joe.energy).toEqual(100);
    expect(joe.fed).toEqual(100);
    expect(joe.happiness).toEqual(100);
  });

  it('should check fed and happiness are decreasing 1 per second and energy is increasing', function() {
    jasmine.clock().tick(5001);
    expect(joe.fed).toEqual(95);
    expect(joe.happiness).toEqual(95);
    expect(joe.energy).toEqual(100);
  });

  it('should check that fed/happiness meter is increasing when fed and energy level is decreasing', function() {
    let joe = new Pet('Joe');
    joe.feed();
    expect(joe.fed).toEqual(100);
    expect(joe.happiness).toEqual(100);
    expect(joe.energy).toEqual(85);
  });

  it('should check that happiness meter is increasing when played with and energy/fed level is decreasing', function() {
    let joe = new Pet('Joe');
    joe.play();
    expect(joe.fed).toEqual(100);
    expect(joe.happiness).toEqual(100);
    expect(joe.energy).toEqual(80);
  });

  it('should check if pet is dead or depressed', function() {
    let joe = new Pet('Joe');
    joe.checkFeed(-200);
    expect(joe.dead).toEqual(true);
  });

});
