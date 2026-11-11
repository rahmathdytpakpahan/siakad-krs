const test = require('node:test');
const assert = require('node:assert');
const { hitungBatasSks } = require('./app');

test('IPS 3.2 boleh mengambil 24 SKS', () => {
  assert.strictEqual(hitungBatasSks(3.2), 24);
});
