const test = require('node:test');
const assert = require('node:assert');
const { hitungBatasSks, validasiKrs } = require('./app');

test('IPS 3.2 boleh mengambil 24 SKS', () => {
  assert.strictEqual(hitungBatasSks(3.2), 24);
});

test('IPS 1.8 dibatasi 18 SKS', () => {
  assert.strictEqual(hitungBatasSks(1.8), 18);
});

test('KRS 22 SKS dengan IPS 1.8 ditolak', () => {
  assert.strictEqual(validasiKrs(22, 1.8).valid, false);
});
