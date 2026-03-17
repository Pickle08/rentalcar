import React from "react";
import Navbar from "../components/Navbar";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "Tips Memilih Mobil Rental untuk Perjalanan Jauh",
            excerpt:
                "Memilih mobil yang tepat sangat krusial untuk kenyamanan perjalanan jarak jauh bersama keluarga...",
            date: "15 Maret 2026",
            author: "Admin",
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: 2,
            title: "Destinasi Wisata Hits di Jember yang Wajib Dikunjungi",
            excerpt:
                "Jember punya segudang tempat indah mulai dari pantai hingga pegunungan yang cocok dikunjungi dengan mobil rental...",
            date: "10 Maret 2026",
            author: "Admin",
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: 3,
            title: "Cara Cek Kondisi Mobil Sebelum Disewa",
            excerpt:
                "Pastikan keamanan Anda dengan mengecek 5 poin penting ini sebelum membawa mobil keluar dari pool...",
            date: "05 Maret 2026",
            author: "Admin",
            image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
        },
    ];

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Header Section */}
            <div className="bg-gray-900 py-20 px-6 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Blog & Informasi
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Temukan tips perjalanan, rekomendasi wisata, dan berita
                    terbaru seputar layanan rental mobil kami.
                </p>
            </div>

            {/* Blog Grid */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                                    <span className="flex items-center gap-1">
                                        <FaCalendarAlt /> {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaUser /> {post.author}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    {post.excerpt}
                                </p>
                                <Link
                                    to={`/blog/${post.id}`}
                                    className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all">
                                    Baca Selengkapnya <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
