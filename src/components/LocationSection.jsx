import ContactForm from './ContactForm';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';

const LocationSection = () => {
    const { darkMode } = useTheme();

    const mapUrl = "https://www.google.com/maps?q=C-56%20A-13,%20opposite%20STELLAR%20IT%20PARK,%20Sector%2062,%20Noida,%20Uttar%20Pradesh%20201309&output=embed";

    return (
        <section className="relative w-full h-screen">
          
            <iframe
                title="Noida Office Location"
                src={mapUrl}
                className="absolute top-0 left-0 w-full h-full z-0"
                style={{
                    filter: darkMode ? "invert(90%) hue-rotate(180deg)" : "none",
                    border: 0,
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />

          
            <motion.div
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center z-10"
            >
                <ContactForm />
            </motion.div>
        </section>
    );
};

export default LocationSection;
