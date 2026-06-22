import React, { useState } from 'react';

const App = () => {
  // 1. Data state baju dengan tambahan properti 'stok'
  const [daftarBaju, setDaftarBaju] = useState([
    { id: 1, nama: "Kemeja Flanel", harga: 150000, stok: 10 },
    { id: 2, nama: "Kaos Polos Hitam", harga: 50000, stok: 0 }, // Contoh stok habis
    { id: 3, nama: "Jaket Denim", harga: 250000, stok: 5 },
    { id: 4, nama: "Sweater Hoodie", harga: 175000, stok: 2 }
  ]);

  // Fungsi untuk memformat angka ke Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(angka);
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', textAlign: 'center' }}>
      <h1>Katalog Baju React</h1>

      {/* CONDITIONAL RENDERING 1: Ternary Operator */}
      {/* Mengecek apakah array daftarBaju kosong atau tidak */}
      {daftarBaju.length === 0 ? (
        <p style={{ color: 'red' }}>Maaf, belum ada data baju saat ini.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          
          {daftarBaju.map((baju) => (
            <div key={baju.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              width: '200px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              backgroundColor: baju.stok === 0 ? '#f9f9f9' : 'white' // Ubah warna jika stok habis
            }}>
              
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{baju.nama}</h3>
              
              {/* CONDITIONAL RENDERING 2: Logical AND (&&) */}
              {/* Munculkan badge 'Premium' HANYA JIKA harga >= 150.000 */}
              {baju.harga >= 150000 && (
                <span style={{ 
                  backgroundColor: 'gold', 
                  padding: '2px 8px', 
                  borderRadius: '12px', 
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  Premium
                </span>
              )}

              <p style={{ fontSize: '16px', color: '#27ae60', fontWeight: 'bold' }}>
                {formatRupiah(baju.harga)}
              </p>

              {/* CONDITIONAL RENDERING 3: Ternary Operator */}
              {/* Tampilkan tombol beli jika stok ada, tampilkan teks "Habis" jika stok 0 */}
              {baju.stok > 0 ? (
                <div>
                  <p style={{ fontSize: '12px', color: 'gray' }}>Sisa stok: {baju.stok}</p>
                  <button style={{
                    backgroundColor: '#3498db', color: 'white', border: 'none', 
                    padding: '8px 16px', borderRadius: '4px', cursor: 'pointer'
                  }}>
                    Beli Sekarang
                  </button>
                </div>
              ) : (
                <p style={{ color: 'red', fontWeight: 'bold', margin: '20px 0' }}>
                  Habis Terjual
                </p>
              )}

            </div>
          ))}
          
        </div>
      )}
    </div>
  );
}

export default App;