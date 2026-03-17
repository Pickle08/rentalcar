import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import BookingBar from "../components/BookingBar";
import {
    FaStar,
    FaShareAlt,
    FaWhatsapp,
    FaCheck,
    FaTimes,
} from "react-icons/fa";

const CarDetail = () => {
    const { id } = useParams();
    const [mobil, setMobil] = useState(null);
    const nomorWA = "6281944131033";
    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/mobil/${id}`)
            .then((res) => setMobil(res.data))
            .catch((err) => console.error("Error fetching detail:", err));
    }, [id]);

    const handlePesanViaWA = () => {
        if (!mobil) return;

        // Cek apakah tanggal sudah diisi atau belum
        const tglMulai = pickupDate ? pickupDate : "[Belum dipilih]";
        const tglSelesai = returnDate ? returnDate : "[Belum dipilih]";

        // Rakit pesan otomatisnya
        const pesan = `Halo, saya ingin booking *${mobil.nama}* untuk tanggal *${tglMulai}* sampai *${tglSelesai}*. Apakah unitnya tersedia?`;

        const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(
            pesan
        )}`;
        window.open(urlWA, "_blank");
    };

    if (!mobil) return <div className="p-10 text-center">Loading...</div>;

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <div className="container mx-auto px-6 pt-10 pb-20">
                {/* Breadcrumbs & Bagikan */}
                <div className="flex justify-between items-center mb-4 text-xs md:text-sm text-gray-400">
                    <nav className="flex gap-2">
                        <Link to="/" className="hover:text-orange-500">
                            Beranda
                        </Link>
                        <span>»</span>
                        <Link to="/rental" className="hover:text-orange-500">
                            Produk
                        </Link>
                        <span>»</span>
                        <span className="text-gray-600 font-medium">
                            {mobil.nama}
                        </span>
                    </nav>
                    <button className="flex items-center gap-2 hover:text-orange-500">
                        <FaShareAlt /> Bagikan
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Sisi Kiri: Gambar dengan Background Styled */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-10 shadow-2xl">
                            <img
                                src={`/images/${mobil.gambar_url}`}
                                alt={mobil.nama}
                                className="w-full object-contain transform hover:scale-110 transition duration-500"
                            />
                            {/* Label Nama di Gambar */}
                            <div className="absolute bottom-10 text-center">
                                <h2 className="text-white text-4xl font-black uppercase tracking-tighter opacity-80 italic">
                                    {mobil.nama}
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Sisi Kanan: Detail Informasi */}
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            {mobil.nama}
                        </h1>

                        {/* Rating & Review */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex text-yellow-400 text-sm">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <span className="text-blue-600 text-sm font-medium">
                                5.00 (1 review)
                            </span>
                            <span className="text-gray-400 text-sm border-l pl-4">
                                1.416 Dilihat
                            </span>
                            <span className="text-gray-400 text-sm border-l pl-4">
                                5 Tersewa
                            </span>
                        </div>

                        <div className="text-3xl font-bold text-gray-900 mb-8">
                            Rp {Number(mobil.harga).toLocaleString("id-ID")}
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl mb-8 flex flex-wrap gap-4 border border-gray-100 shadow-sm">
                            <div className="flex-1 min-w-[150px]">
                                <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block">
                                    Pickup Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={pickupDate}
                                    onChange={(e) =>
                                        setPickupDate(e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex-1 min-w-[150px]">
                                <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block">
                                    Return Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={returnDate}
                                    onChange={(e) =>
                                        setReturnDate(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        {/* Tabel Spesifikasi/Layanan */}
                        <div className="bg-gray-50 rounded-xl overflow-hidden mb-8 border border-gray-100">
                            <table className="w-full text-left text-sm border-collapse">
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-bold flex items-center gap-3">
                                            <FaStar className="text-xs" /> TIPE
                                            UNIT
                                        </td>
                                        <td className="p-4">: {mobil.tipe}</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-200">
                                        <td className="p-4 font-bold flex items-center gap-3">
                                            👥 DRIVER
                                        </td>
                                        <td className="p-4">: Ya</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-bold flex items-center gap-3">
                                            ⛽ BBM / PARKIR
                                        </td>
                                        <td className="p-4">: Tidak</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-200">
                                        <td className="p-4 font-bold flex items-center gap-3">
                                            🍽️ MAKAN SUPIR
                                        </td>
                                        <td className="p-4 text-orange-600 font-semibold">
                                            : Tanggung Penyewa
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-bold flex items-center gap-3">
                                            📍 JANGKAUAN
                                        </td>
                                        <td className="p-4">: Dalam Kota</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="p-4 font-bold flex items-center gap-3">
                                            🕒 OVERTIME
                                        </td>
                                        <td className="p-4">: 10% Perjam</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Tombol Booking Lewat WhatsApp */}
                        <button
                            onClick={handlePesanViaWA}
                            className="bg-[#128C7E] text-white py-4 rounded-xl font-bold hover:bg-[#075E54] transition flex items-center justify-center gap-3 shadow-lg uppercase tracking-wide">
                            <FaWhatsapp className="text-2xl" /> Booking Lewat
                            Whatsapp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;
