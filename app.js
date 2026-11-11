// siakad-krs: validasi pengisian KRS (VERSI AWAL, ada bug)
function hitungBatasSks(ips) {
  return 24; // bug: batas tetap untuk semua IPS
}

function validasiKrs(totalSks, ips) {
  const batas = hitungBatasSks(ips);
  return { valid: totalSks <= batas, batas };
}

module.exports = { hitungBatasSks, validasiKrs };
