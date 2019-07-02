import { Pet } from './../src/tamagotchi';

describe('Pets', function() {
  let joe = new Pet('Joe');

  beforeEach(function() {
    jasmine.clock().install();
    joe.game(joe);
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should check stats are all 1000, and name is accurate', function() {
    expect(joe.name).toEqual('Joe');
    expect(joe.energy).toEqual(1000);
    expect(joe.fed).toEqual(1000);
    expect(joe.happiness).toEqual(1000);
  });

  it('should check fed and happiness are decreasing 5 per second and energy is increasing', function() {
    jasmine.clock().tick(4001);
    expect(joe.fed).toEqual(800);
    expect(joe.happiness).toEqual(800);
    expect(joe.energy).toEqual(1000);
  });

  it('should check that fed/happiness meter is increasing when fed and energy level is decreasing', function() {
    let joe = new Pet('Joe');
    joe.feed();
    expect(joe.fed).toEqual(1000);
    expect(joe.happiness).toEqual(1000);
    expect(joe.energy).toEqual(850);
  });

  it('should check that happiness meter is increasing when played with and energy/fed level is decreasing', function() {
    let joe = new Pet('Joe');
    joe.play();
    expect(joe.fed).toEqual(950);
    expect(joe.happiness).toEqual(1000);
    expect(joe.energy).toEqual(900);
  });

  it('should check if pet is dead or depressed', function() {
    let joe = new Pet('Joe');
    joe.checkFeed(-2000);
    expect(joe.dead).toEqual(true);
  });

});
