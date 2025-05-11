import ContactForm from './ContactForm';

const GetQuote = () => {
    return (
        <section className="w-full max-h-[700px] bg-white">
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 items-stretch">
                <div className="md:flex hidden">
                    <img
                        src="customer-support.webp"
                        alt="Professional Contact"
                        className="h-[536px] w-full object-cover"
                    />
                </div>

                <div className="h-full flex items-center justify-center">
                    <ContactForm minimal />
                </div>
            </div>
        </section>
    );
};

export default GetQuote;
