import { useState } from "react";

const BookingBar = ({ onSearch }) => {
    // Kita set lokasi default ke "Jember"
    const [lokasi] = useState("Jember");

    const handleSubmit = () => {
        // Karena lokasinya tetap, kita kirim "Jember" ke App.jsx
        onSearch(lokasi);
    };

    return (
        <div className="container mx-auto px-6 z-20">
            <div className="bg-white p-8 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                {/* Input Lokasi (Read-only) */}
                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700">
                        Pickup Location
                    </label>
                    <input
                        type="text"
                        value="Jember, Jawa Timur"
                        disabled
                        className="border border-gray-200 p-3 rounded-xl bg-gray-100 text-gray-700 cursor-not-allowed font-medium"
                    />
                </div>

                {/* Pickup Date */}
                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700">
                        Pickup Date
                    </label>
                    <input
                        type="date"
                        className="border border-gray-200 p-3 rounded-xl"
                    />
                </div>

                {/* Return Date */}
                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700">
                        Return Date
                    </label>
                    <input
                        type="date"
                        className="border border-gray-200 p-3 rounded-xl"
                    />
                </div>

                {/* Tombol Search */}
                <button
                    onClick={handleSubmit}
                    className="bg-orange-500 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-200">
                    Search
                </button>
            </div>
        </div>
    );
};

export default BookingBar;
