import Daemon from '../src/Daemon';
import Magician from '../src/Magician';

test('Get attack for Daemon', () => {
  const dae = new Daemon(2);
  dae.attack = 100;
  expect(dae.attack).toBe(90);
});

test('Get stoned attack for Daemon', () => {
  const dae = new Daemon(2);
  dae.attack = 100;
  dae.stoned = true;
  expect(dae.stoned).toBe(85);
});

test('Get attack for Magician', () => {
  const mag = new Magician(2);
  mag.attack = 100;
  expect(mag.attack).toBe(90);
});

test('Get stoned attack for Magician', () => {
  const mag = new Magician(2);
  mag.attack = 100;
  mag.stoned = true;
  expect(mag.stoned).toBe(85);
});
