let keranjang = [];
let totalHarga = 0;

function tambahKeKeranjang(namaProduk, harga) {
    // Tambahkan produk ke keranjang
    keranjang.push({ nama: namaProduk, harga: harga });
    updateKeranjang();
}

function updateKeranjang() {
    // Menampilkan daftar produk di keranjang
    const daftarKeranjang = document.getElementById('daftarKeranjang');
    daftarKeranjang.innerHTML = '';
    totalHarga = 0;

    keranjang.forEach(item => {
        const li = document.createElement('li');
        li.textContent = ${item.nama} - Rp ${item.harga};
        daftarKeranjang.appendChild(li);
        totalHarga += item.harga;
    });

    // Update total harga
    document.getElementById('totalHarga').textContent = Total: Rp ${totalHarga};
}