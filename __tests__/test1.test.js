import Daemon from '../src/Daemon';
import Magician from '../src/Magician';

test('Get attack for Daemon', () => {
  const dae = new Daemon(2);
  dae.setAttack(100);
  expect(dae.getAttack()).toBe(90);
});

test('Get stoned attack for Daemon', () => {
  const dae = new Daemon(2);
  dae.setStonedAttack(100);
  expect(dae.getStonedAttack()).toBe(85);
});

test('Get attack for Magician', () => {
  const mag = new Magician(2);
  mag.setAttack(100);
  expect(mag.getAttack()).toBe(90);
});

test('Get stoned attack for Magician', () => {
  const mag = new Magician(2);
  mag.setStonedAttack(100);
  expect(mag.getStonedAttack()).toBe(85);
});
