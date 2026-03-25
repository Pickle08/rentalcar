import React from "react";
import {
    FaInstagram,
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand & Deskripsi */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-black italic tracking-tighter">
                        CODEX<span className="text-orange-500">CAR</span>
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Solusi transportasi terpercaya di Jember. Armada bersih,
                        terawat, dan siap menemani perjalanan Anda dengan harga
                        bersahabat.
                    </p>
                </div>

                {/* Navigasi Cepat */}
                <div>
                    <h4 className="font-bold mb-6 text-lg">Navigasi</h4>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li>
                            <a
                                href="/"
                                className="hover:text-orange-500 transition">
                                Beranda
                            </a>
                        </li>
                        <li>
                            <a
                                href="/rental"
                                className="hover:text-orange-500 transition">
                                Katalog Mobil
                            </a>
                        </li>
                        <li>
                            <a
                                href="/blog"
                                className="hover:text-orange-500 transition">
                                Tips & Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="hover:text-orange-500 transition">
                                Hubungi Kami
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Informasi Kontak */}
                <div>
                    <h4 className="font-bold mb-6 text-lg">Kontak</h4>
                    <div className="space-y-4 text-gray-400 text-sm">
                        <p className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-orange-500 text-lg" />
                            Kec. Sumbersari, Jember, Jawa Timur
                        </p>
                        <p className="flex items-center gap-3">
                            <FaWhatsapp className="text-orange-500 text-lg" />
                            0812-3456-7890
                        </p>
                        <p className="flex items-center gap-3">
                            <FaEnvelope className="text-orange-500 text-lg" />
                            hello@codexcars.id
                        </p>
                    </div>
                </div>

                {/* Sosial Media */}
                <div>
                    <h4 className="font-bold mb-6 text-lg">Ikuti Kami</h4>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="p-3 bg-gray-800 rounded-full hover:bg-orange-500 transition duration-300">
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="#"
                            className="p-3 bg-gray-800 rounded-full hover:bg-orange-500 transition duration-300">
                            <FaWhatsapp size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Line */}
            <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-xs tracking-widest uppercase">
                © 2026 CodexCar Jember. Build with React & Tailwind.
            </div>
        </footer>
    );
};

export default Footer;
