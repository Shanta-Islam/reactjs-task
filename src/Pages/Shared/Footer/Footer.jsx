import { FaEnvelopeOpen, FaPhone , FaFax  } from "react-icons/fa6";
import { FaMapMarkerAlt, FaClock  } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#111] text-white">
            <nav>
                <header className="footer-title text-[#005da9] uppercase">Quick Menu</header>
                <a className="link link-hover uppercase">Home</a>
                <a className="link link-hover uppercase">About</a>
                <a className="link link-hover uppercase">Our Businesses</a>
            </nav>
            <nav>
                <a className="link link-hover uppercase">Substanantial</a>
                <a className="link link-hover uppercase">CSR</a>
                <a className="link link-hover uppercase">Contact</a>
            </nav>
            <nav>
                <header className="footer-title text-[#005da9] uppercase">Contact us</header>
                <a className="link link-hover flex items-center gap-2"><FaEnvelopeOpen/> info@apexholdings.com</a>
                <a className="link link-hover flex items-center gap-2"><FaPhone/> 880 9606669988</a>
                <a className="link link-hover flex items-center gap-2"><FaFax/> +88-02-9861685, +88-02-8810850</a>
            </nav>
            <aside>
                <p className="flex items-center gap-2"><FaMapMarkerAlt/> 18 GULSHAN AVENUE, SHANTA SKYMARK, GULSHAN,DHAKA-1212, BANGLADESH</p>
                <p className="flex items-center gap-2"><FaClock/> SAT-THU 08:00AM ⇾ 04:30PM</p>
            </aside>
        </footer>
    );
};

export default Footer;