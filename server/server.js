const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// 1. Definisikan lokasi database yang PASTI
// Menggunakan path.join memastikan file terbaca dengan benar terlepas dari OS-nya
const dbPath = path.join(__dirname, "rental_mobil.db");

// 2. Koneksi ke database dengan penanganan error yang jelas
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("❌ Gagal terhubung ke database:", err.message);
    } else {
        console.log("✅ Berhasil terhubung ke database di:", dbPath);
    }
});

// --- Endpoint 1: AMBIL SEMUA MOBIL (Untuk Halaman Rental/Katalog) ---
app.get("/api/mobil", (req, res) => {
    db.all("SELECT * FROM mobil", [], (err, rows) => {
        if (err) {
            console.error("❌ Error ambil semua mobil:", err.message);
            return res.status(500).json({ error: err.message });
        }
        console.log("✅ Mengirim semua data mobil");
        res.json(rows);
    });
});

// --- Endpoint 2: AMBIL SATU MOBIL (Untuk Halaman Detail) ---
app.get("/api/mobil/:id", (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM mobil WHERE id = ?";

    db.get(query, [id], (err, row) => {
        if (err) {
            console.error("❌ Error query detail:", err.message);
            return res.status(500).json({ error: err.message });
        }

        if (!row) {
            console.warn(`⚠️ Mobil dengan ID ${id} tidak ditemukan.`);
            return res.status(404).json({ message: "Mobil tidak ditemukan" });
        }

        console.log(`✅ Mengirim data detail untuk ID: ${id}`);
        res.json(row);
    });
});

const PORT = 5000;
app.listen(PORT, () =>
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`)
);
