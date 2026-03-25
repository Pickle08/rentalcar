import { Link } from "react-router-dom"; // WAJIB ADA

const Navbar = () => {
    return (
        <nav className="bg-white py-6">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo - Sebaiknya pakai Link juga supaya klik logo balik ke Home */}
                <Link to="/" className="text-3xl font-bold text-gray-900">
                    Codex<span className="text-orange-500">Car</span>
                </Link>

                {/* Menu Tengah */}
                <div className="hidden md:flex gap-8 font-medium text-gray-600">
                    <Link
                        to="/"
                        className="text-orange-500 hover:text-orange-600">
                        Rent
                    </Link>
                    <Link
                        to="/rental"
                        className="hover:text-orange-500 transition">
                        Rental
                    </Link>
                    <Link
                        to="/blog"
                        className="hover:text-orange-500 transition">
                        Blog
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-orange-500 transition">
                        Contact Us
                    </Link>
                </div>

                {/* Kanan: Sign up & Sign in */}
            </div>
        </nav>
    );
};

export default Navbar;
