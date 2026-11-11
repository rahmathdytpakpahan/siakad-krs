// siakad-krs: validasi pengisian KRS
function hitungBatasSks(ips) {
  if (ips >= 3.0) return 24;
  if (ips >= 2.5) return 22;
  if (ips >= 2.0) return 20;
  if (ips >= 1.5) return 18;
  return 16;
}

function validasiKrs(totalSks, ips) {
  const batas = hitungBatasSks(ips);
  return { valid: totalSks <= batas, batas };
}

module.exports = { hitungBatasSks, validasiKrs };
