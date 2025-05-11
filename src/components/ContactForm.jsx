import React, { useState } from 'react';
import { useTheme } from './ThemeContext';

const initialForm = {
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
};

const ContactForm = ({ minimal = false }) => {
    const [formData, setFormData] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const { darkMode } = useTheme();

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.company) newErrors.company = 'Company is required';
        if (!formData.licenseType) newErrors.licenseType = 'Select a license type';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            alert('Form submitted successfully (demo)');
            setFormData(initialForm);
        }
    };

    return (
        <div className={`relative flex md:justify-end justify-center items-center w-full h-full ${minimal ? '' : 'md:pr-20 pr-0'}`}>
            <form
                onSubmit={handleSubmit}
                className={`w-full text-gray-600 ${minimal
                    ? 'bg-transparent p-0 px-0 rounded-none shadow-none'
                    : `${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'} max-w-lg md:p-8 p-6 py-13 md:rounded-xl rounded-none md:shadow-lg shadow-none`
                    }`}
            >
                <h2 className={`text-3xl font-bold mb-6 text-center ${minimal ? 'text-black' : darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                    Contact Us
                </h2>

                <div className="">
                    <label className="block text-md font-semibold">
                        Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3 md:py-2 py-1 border rounded ${errors.name ? 'border-red-500' : ''}`}
                    />
                    <p className={`text-red-500 text-sm ${minimal ? " min-h-[6px]" : "min-h-[20px]"}`}>
                        {!minimal ? errors.name || '\u00A0' : ''}
                    </p>
                </div>


                <div className="">
                    <label className="block text-md font-semibold">
                        Email<span className="text-red-500">*</span>
                    </label>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 md:py-2 py-1 border rounded ${errors.email ? 'border-red-500' : ''}`}
                    />
                    <p className={`text-red-500 text-sm ${minimal ? " min-h-[6px]" : "min-h-[20px]"}`}>
                        {!minimal ? errors.email || '\u00A0' : ''}
                    </p>
                </div>


                <div className="">
                    <label className="block text-md font-semibold">
                        Company<span className="text-red-500">*</span>
                    </label>
                    <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-3 md:py-2 py-1 border rounded ${errors.company ? 'border-red-500' : ''}`}
                    />
                    <p className={`text-red-500 text-sm ${minimal ? " min-h-[6px]" : "min-h-[20px]"}`}>
                        {!minimal ? errors.company || '\u00A0' : ''}
                    </p>
                </div>


                <div className="">
                    <label className="block text-md font-semibold">
                        License Type<span className="text-red-500">*</span>
                    </label>
                    <select
                        name="licenseType"
                        value={formData.licenseType}
                        onChange={handleChange}
                        className={`w-full px-3 md:py-2 py-1 border rounded ${errors.licenseType ? 'border-red-500' : ''}`}
                    >
                        <option value="">Select one</option>
                        <option value="Windows">Windows</option>
                        <option value="Office">Office</option>
                        <option value="Adobe">Adobe</option>
                        <option value="Other">Other</option>
                    </select>
                    <p className={`text-red-500 text-sm ${minimal ? " min-h-[6px]" : "min-h-[20px]"}`}>
                        {!minimal ? errors.licenseType || '\u00A0' : ''}
                    </p>
                </div>


                <div className="">
                    <label className="block text-md font-semibold">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className='w-full px-3 md:py-2 py-1 border rounded'
                    />

                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white mt-2 px-6 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
                >
                    Submit
                </button>

                {minimal && Object.keys(errors).length > 0 && (
                    <p className="text-red-500 text-center mt-4">Please fill all credentials</p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
