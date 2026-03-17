import {
    MapPinIcon,
    CalendarDaysIcon,
    CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const HowItWorks = () => {
    const steps = [
        {
            title: "1. Pilih Unit Mobil",
            icon: <MapPinIcon className="w-12 h-12" />,
            desc: "Pilih mobil impianmu dari katalog armada kami yang terawat dan siap pakai.",
        },
        {
            title: "2. Tentukan Jadwal Sewa",
            icon: <CalendarDaysIcon className="w-12 h-12" />,
            desc: "Atur tanggal mulai dan durasi sewa sesuai kebutuhan perjalananmu dengan mudah.",
        },
        {
            title: "3. Konfirmasi & Booking",
            icon: <CheckBadgeIcon className="w-12 h-12" />,
            desc: "Selesaikan pemesanan, dan mobil akan segera diantar ke lokasi pilihanmu.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    How It Works
                </h2>
                <p className="text-gray-600 mb-16 max-w-md mx-auto">
                    Proses sewa mobil di CodexCar dibuat sederhana agar
                    perjalananmu tetap nyaman dan tanpa hambatan.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                            {/* Lingkaran Ikon */}
                            <div className="w-24 h-24 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-8 shadow-inner">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
