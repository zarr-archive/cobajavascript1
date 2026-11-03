// 1. Variabel, function, dan output
function tampilkanPesan(){
  let nama = "Teman";
  document.getElementById("pesanOutput").textContent = "Halo, " + nama + "! Selamat belajar JavaScript.";
}

// 2. Operator matematika
function hitung(){
  let a = Number(document.getElementById("angka1").value);
  let b = Number(document.getElementById("angka2").value);
  let operator = document.getElementById("operator").value;
  let hasil;

  if(document.getElementById("angka1").value === "" || document.getElementById("angka2").value === ""){
    document.getElementById("hasilHitung").textContent = "Isi kedua angka terlebih dahulu.";
    return;
  }

  if(operator === "+") hasil = a + b;
  else if(operator === "-") hasil = a - b;
  else if(operator === "*") hasil = a * b;
  else if(operator === "/"){
    if(b === 0){
      document.getElementById("hasilHitung").textContent = "Angka tidak bisa dibagi dengan 0.";
      return;
    }
    hasil = a / b;
  }
  document.getElementById("hasilHitung").textContent = "Hasil: " + hasil;
}

// 3. Percabangan if/else
function cekNilai(){
  let nilai = Number(document.getElementById("nilai").value);
  let output = document.getElementById("hasilNilai");
  if(document.getElementById("nilai").value === ""){
    output.textContent = "Masukkan nilai terlebih dahulu.";
  }else if(nilai < 0 || nilai > 100){
    output.textContent = "Nilai harus berada di antara 0 sampai 100.";
  }else if(nilai >= 75){
    output.textContent = "Nilai " + nilai + ": Lulus!";
  }else{
    output.textContent = "Nilai " + nilai + ": Belum lulus.";
  }
}

// 4. Perulangan for
function buatPerulangan(){
  let jumlah = Number(document.getElementById("jumlahAngka").value);
  let output = document.getElementById("hasilPerulangan");
  if(jumlah < 1 || jumlah > 30){
    output.textContent = "Masukkan angka dari 1 sampai 30.";
    return;
  }
  let hasil = [];
  for(let i = 1; i <= jumlah; i++){
    hasil.push(i);
  }
  output.textContent = hasil.join(", ");
}

// 5. Array dan push()
let daftarBuah = ["Apel", "Mangga", "Jeruk"];
function tambahBuah(){
  let inputBuah = document.getElementById("buah");
  let buahBaru = inputBuah.value.trim();
  if(buahBaru === ""){
    document.getElementById("daftarBuah").textContent = "Nama buah tidak boleh kosong.";
    return;
  }
  daftarBuah.push(buahBaru);
  document.getElementById("daftarBuah").textContent = daftarBuah.join(", ");
  inputBuah.value = "";
}

// 6. Date dan jam digital
function updateJam(){
  let sekarang = new Date();
  document.getElementById("jam").textContent = sekarang.toLocaleTimeString("id-ID");
}
setInterval(updateJam, 1000);
updateJam();

function tampilkanTanggal(){
  let sekarang = new Date();
  document.getElementById("tanggal").textContent = sekarang.toLocaleDateString("id-ID", {
    weekday:"long", year:"numeric", month:"long", day:"numeric"
  });
}

// 7. DOM dan event klik
let warnaIndex = 0;
const warna = ["#345c7d", "#725a9e", "#267568", "#9a5a52", "#4d6871"];
function ubahWarna(){
  warnaIndex = (warnaIndex + 1) % warna.length;
  let kotak = document.getElementById("kotakWarna");
  kotak.style.backgroundColor = warna[warnaIndex];
  kotak.textContent = "Warna berhasil diganti!";
}

// 8. Input dan validasi sederhana
function sapaNama(){
  let nama = document.getElementById("nama").value.trim();
  let output = document.getElementById("hasilNama");
  if(nama === ""){
    output.textContent = "Nama belum diisi. Coba lagi!";
  }else{
    output.textContent = "Halo, " + nama + "! Semangat belajar JavaScript.";
  }
}

/*
LATIHAN TAMBAHAN:
1. Buat tombol untuk menampilkan angka genap.
2. Tambahkan fitur menghapus buah dari array.
3. Buat konversi Celsius ke Fahrenheit.
4. Buat daftar tugas sederhana (to-do list).
5. Pelajari console.log(), alert(), prompt(), switch, while, object, dan try/catch.
*/