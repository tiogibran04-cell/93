import React, { useState } from 'react';

// ==========================================
// 1. KOMPONEN HEADER (Spesifik untuk Judul)
// ==========================================
const Header = ({ title }) => {
  return <h1 style={{ marginBottom: '20px', color: '#2c3e50' }}>{title}</h1>;
};


// ==========================================
// 2. KOMPONEN CARD (Spesifik untuk 1 Item Baju)
// ==========================================
const BajuCard = ({ baju, formatRupiah }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      width: '200px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      backgroundColor: baju.stok === 0 ? '#f9f9f9' : 'white'
    }}>
      
      <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{baju.nama}</h3>
      
      {/* Conditional Rendering: Badge Premium */}
      {baju.harga >= 150000 && (
        <span style={{ 
          backgroundColor: 'gold', padding: '2px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'
        }}>
          Premium
        </span>
      )}

      <p style={{ fontSize: '16px', color: '#27ae60', fontWeight: 'bold' }}>
        {formatRupiah(baju.harga)}
      </p>

      {/* Conditional Rendering: Status Stok & Tombol */}
      {baju.stok > 0 ? (
        <div>
          <p style={{ fontSize: '12px', color: 'gray' }}>Sisa stok: {baju.stok}</p>
          <button style={{
            backgroundColor: '#3498db', color: 'white', border: 'none', 
            padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', width: '100%'
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
  );
};


// ==========================================
// 3. KOMPONEN LIST (Spesifik untuk Looping Data)
// ==========================================
const KatalogList = ({ daftarBaju, formatRupiah }) => {
  // Jika data kosong
  if (daftarBaju.length === 0) {
    return <p style={{ color: 'red' }}>Maaf, belum ada data baju saat ini.</p>;
  }

  // Jika data ada, lakukan mapping
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
      {daftarBaju.map((baju) => (
        /* Memanggil komponen BajuCard dengan mengirimkan data via Props */
        <BajuCard key={baju.id} baju={baju} formatRupiah={formatRupiah} />
      ))}
    </div>
  );
};


// ==========================================
// 4. KOMPONEN UTAMA (Tempat Komposisi Dirakit)
// ==========================================
const App = () => {
  // State Data
  const [daftarBaju] = useState([
    { id: 1, nama: "Kemeja Flanel", harga: 150000, stok: 10 },
    { id: 2, nama: "Kaos Polos Hitam", harga: 50000, stok: 0 },
    { id: 3, nama: "Jaket Denim", harga: 250000, stok: 5 },
    { id: 4, nama: "Sweater Hoodie", harga: 175000, stok: 2 }
  ]);

  // Fungsi Format Uang
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency', currency: 'IDR', minimumFractionDigits: 0
    }).format(angka);
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', textAlign: 'center' }}>
      
      {/* INILAH YANG DISEBUT KOMPOSISI REACT */}
      {/* Kita merakit komponen-komponen kecil menjadi satu tampilan utuh */}
      
      <Header title="Katalog Baju WEBKU (Refactored)" />
      
      <KatalogList 
        daftarBaju={daftarBaju} 
        formatRupiah={formatRupiah} 
      />

    </div>
  );
};

export default App;