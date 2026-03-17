import { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "../components/CarCard";
import Navbar from "../components/Navbar"; // 1. Impor Navbar

const Rental = () => {
    const [categories] = useState(["Semua", "MPV", "SUV", "Sedan", "Luxury"]);
    const [activeTab, setActiveTab] = useState("Semua");
    const [mobil, setMobil] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/mobil")
            .then((res) => {
                setMobil(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Gagal ambil data:", err);
                setLoading(false);
            });
    }, []);

    // Logika Filter
    const filteredMobil =
        activeTab === "Semua"
            ? mobil
            : mobil.filter((m) => m.tipe === activeTab);

    return (
        <div className="bg-[#FAFAFA] min-h-screen">
            {/* 2. Panggil Navbar di sini */}
            <Navbar />

            <div className="container mx-auto px-6 pt-24 pb-20">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Katalog Rental Mobil
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto mb-10">
                        Pilih armada terbaik yang sesuai dengan gaya dan
                        kebutuhan perjalananmu di Jember.
                    </p>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-6 py-2 rounded-xl font-bold transition-all ${
                                    activeTab === cat
                                        ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                                        : "bg-black text-white hover:bg-gray-800"
                                }`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid Kartu */}
                {loading ? (
                    <p className="text-center text-gray-500">Memuat data...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredMobil.map((item) => (
                            <CarCard key={item.id} mobil={item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Rental;
