import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CarCard from "./components/CarCard";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CarDetail from "./pages/CarDetail";
import Rental from "./pages/Rental";

function HomePage({ filteredMobil, handleSearch }) {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <HowItWorks />
            {/* Section Katalog */}
            <div id="catalog" className="py-20">
                <div className="container mx-auto px-6">
                    {/* Header Katalog dengan Subtitle */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">
                                Katalog Rental{" "}
                                <span className="text-orange-500">Mobil</span>
                            </h1>
                        </div>
                        <p className="text-gray-500 max-w-xs md:text-right">
                            Pilih armada terbaik untuk kenyamanan perjalanan
                            Anda di Jember.
                        </p>
                    </div>

                    {/* Grid Mobil dengan Spacing yang lebih lega */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredMobil.length > 0 ? (
                            filteredMobil.map((item) => (
                                <div
                                    key={item.id}
                                    className="transform transition-all duration-300 hover:-translate-y-2">
                                    <CarCard mobil={item} />
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 bg-gray-50 rounded-3xl">
                                <p className="text-gray-400 text-lg italic">
                                    Mobil tidak ditemukan...
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-center mt-16">
                        <Link
                            to="/rental"
                            className="group flex items-center gap-3 bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-orange-200">
                            Lihat Semua Mobil
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 transform group-hover:translate-x-2 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

function App() {
    const [mobil, setMobil] = useState([]);
    const [filteredMobil, setFilteredMobil] = useState([]);

    // GANTI BAGIAN INI
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/mobil")
            .then((res) => {
                setMobil(res.data);
                setFilteredMobil(res.data);
            })
            .catch((err) => {
                console.warn(
                    "Backend offline, menggunakan data dummy untuk demo."
                );
                // Data dummy agar katalog tidak kosong di Vercel
                const dataDummy = [
                    {
                        id: 1,
                        nama: "Toyota Avanza Veloz",
                        lokasi: "Jember",
                        harga: 350000,
                        gambar: "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1000&auto=format&fit=crop", // Contoh gambar online
                        transmisi: "Manual",
                        kapasitas: 7,
                    },
                    {
                        id: 2,
                        nama: "Honda Civic RS",
                        lokasi: "Jember",
                        harga: 600000,
                        gambar: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=1000&auto=format&fit=crop",
                        transmisi: "Otomatis",
                        kapasitas: 5,
                    },
                    {
                        id: 3,
                        nama: "Mitsubishi Xpander",
                        lokasi: "Jember",
                        harga: 400000,
                        gambar: "https://images.unsplash.com/photo-1632245889029-e406fbda3b0c?q=80&w=1000&auto=format&fit=crop",
                        transmisi: "Otomatis",
                        kapasitas: 7,
                    },
                ];
                setMobil(dataDummy);
                setFilteredMobil(dataDummy);
            });
    }, []);

    const handleSearch = (query) => {
        const result = mobil.filter((m) =>
            m.lokasi?.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredMobil(query ? result : mobil);
    };

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <HomePage
                        filteredMobil={filteredMobil}
                        handleSearch={handleSearch}
                    />
                }
            />
            <Route path="/mobil/:id" element={<CarDetail />} />
            <Route path="/rental" element={<Rental />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default App;
