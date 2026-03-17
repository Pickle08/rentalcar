import React from "react";
import Navbar from "../components/Navbar";
import {
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
} from "react-icons/fa";

const Contact = () => {
    // Fungsi untuk handling klik WhatsApp (otomatis terisi pesan)
    const handleWhatsApp = () => {
        const phone = "6281234567890"; // Ganti dengan nomor WA kamu
        const message = "Halo Admin, saya ingin tanya ketersediaan unit mobil.";
        window.open(
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />

            {/* Header */}
            <div className="bg-gray-900 py-20 px-6 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Hubungi Kami
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Siap melayani kebutuhan transportasi Anda 24/7. Silakan
                    hubungi kami atau kunjungi kantor kami.
                </p>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Kolom Kiri: Info Kontak & Form */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Kirim Pesan
                            </h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Nama Lengkap"
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Subjek"
                                    className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                                <textarea
                                    rows="4"
                                    placeholder="Pesan Anda"
                                    className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all w-full md:w-auto">
                                    Kirim Sekarang
                                </button>
                            </form>
                        </div>

                        {/* Quick Contact Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div
                                onClick={handleWhatsApp}
                                className="flex items-center gap-4 p-6 bg-green-50 rounded-2xl cursor-pointer hover:bg-green-100 transition border border-green-100">
                                <div className="bg-green-500 p-3 rounded-full text-white text-2xl">
                                    <FaWhatsapp />
                                </div>
                                <div>
                                    <p className="text-sm text-green-700 font-medium">
                                        WhatsApp
                                    </p>
                                    <p className="font-bold text-gray-900">
                                        0812-3456-7890
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                <div className="bg-blue-500 p-3 rounded-full text-white text-2xl">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-sm text-blue-700 font-medium">
                                        Email
                                    </p>
                                    <p className="font-bold text-gray-900">
                                        halo@rentalkamu.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan: Alamat & Map */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6">
                                Lokasi Kantor
                            </h3>
                            <div className="space-y-4 mb-8">
                                <div className="flex gap-4">
                                    <FaMapMarkerAlt className="text-blue-600 mt-1" />
                                    <p className="text-gray-600 text-sm">
                                        Jl. Kalimantan No. 37, Sumbersari,
                                        Jember, Jawa Timur 68121
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <FaClock className="text-blue-600 mt-1" />
                                    <p className="text-gray-600 text-sm">
                                        Senin - Minggu: 24 Jam Nonstop
                                    </p>
                                </div>
                            </div>

                            {/* Google Maps Embed */}
                            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-inner grayscale hover:grayscale-0 transition-all duration-700">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.406325916056!2d113.7145455!3d-8.1617478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd69437190e8d01%3A0x67399589d8137356!2sUniversitas%20Jember!5e0!3m2!1sid!2sid!4v1710660000000!5m2!1sid!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
