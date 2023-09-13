import Daemon from '../src/Daemon';
import Magician from '../src/Magician';

test('Get attack for Daemon', () => {
  const dae = new Daemon(2, false);
  dae.set(100);
  expect(dae.get()).toBe(90);
});

test('Get stoned attack for Daemon', () => {
  const dae = new Daemon(2, true);
  dae.set(100);
  expect(dae.get()).toBe(85);
});

test('Get attack for Magician', () => {
  const mag = new Magician(2, false);
  mag.set(100);
  expect(mag.get()).toBe(90);
});

test('Get stoned attack for Magician', () => {
  const mag = new Magician(2, true);
  mag.set(100);
  expect(mag.get()).toBe(85);
});
