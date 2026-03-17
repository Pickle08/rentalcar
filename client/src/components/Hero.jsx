import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <section className="relative bg-white py-12 px-6 md:py-20 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
            {/* Kolom Kiri: Teks */}
            <div className="md:w-1/2 space-y-8 text-center md:text-left z-10">
                {/* Badge */}
                <span className="inline-block text-orange-600 font-bold bg-orange-100/80 px-5 py-1.5 rounded-full text-xs md:text-sm uppercase tracking-widest">
                    100% Trusted car rental platform
                </span>

                {/* Judul */}
                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1]">
                    Find Your Best <br className="hidden md:block" />
                    <span className="text-orange-500">Dream Car</span> for
                    Rental
                </h1>

                {/* Deskripsi */}
                <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
                    Sewa mobil impianmu dengan mudah, cepat, dan aman. Pilihan
                    armada terlengkap untuk segala kebutuhan perjalananmu.
                </p>

                {/* Tombol */}
                <div className="pt-2">
                    <Link
                        to="/rental"
                        className="inline-block bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-black transition-all transform hover:scale-105 shadow-xl shadow-gray-200">
                        View All Cars
                    </Link>
                </div>
            </div>

            {/* Kolom Kanan: Gambar */}
            <div className="w-full md:w-1/2 relative mt-12 md:mt-0 flex justify-center">
                <img
                    src="/images/zenix.webp"
                    alt="Luxury Car"
                    className="relative z-10 w-full max-w-sm md:max-w-xl drop-shadow-2xl"
                />
                {/* Dekorasi Oranye di belakang */}
                <div className="absolute top-0 right-0 w-full md:w-3/4 h-full bg-orange-500 transform rotate-3 -z-0 rounded-3xl opacity-20"></div>
            </div>
        </section>
    );
};

export default Hero;
