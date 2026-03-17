import { Link } from "react-router-dom";
import {
    FaUserFriends,
    FaRegClock,
    FaGasPump,
    FaCogs,
    FaMapMarkerAlt,
} from "react-icons/fa";

const CarCard = ({ mobil }) => {
    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            {/* Container Gambar */}
            <div className="relative p-4">
                <div className="absolute top-8 left-8 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold shadow-sm">
                    {mobil.tipe} {/* Sesuai kolom database */}
                </div>
                <img
                    // Pastikan folder di public/images ada dan nama file cocok
                    src={`/images/${mobil.gambar_url}`}
                    alt={mobil.nama}
                    className="w-full h-56 object-contain rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Konten Data */}
            <div className="px-6 pb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {mobil.nama} {/* Sesuai kolom database */}
                </h3>

                {/* Grid Spesifikasi */}
                <div className="grid grid-cols-2 gap-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FaCogs /> <span>{mobil.status || "Tersedia"}</span>
                    </div>
                    {/* ... sisa ikon lainnya ... */}
                </div>

                <hr className="border-gray-100 mb-4" />

                {/* Harga */}
                <div className="flex justify-between items-center mb-6">
                    <div className="text-right w-full">
                        <span className="text-2xl font-bold text-gray-900">
                            Rp {Number(mobil.harga).toLocaleString("id-ID")}
                        </span>
                        <span className="text-gray-400 text-sm"> / Hari</span>
                    </div>
                </div>

                {/* Tombol Rent Now */}
                <Link
                    to={`/mobil/${mobil.id}`}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-colors shadow-lg shadow-orange-200">
                    Rent Now
                </Link>
            </div>
        </div>
    );
};

export default CarCard;
