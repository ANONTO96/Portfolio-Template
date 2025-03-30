import React, { useState } from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import toast, { Toaster } from "react-hot-toast";
import bg from '../assets/marjan-blan-_kUxT8WkoeY-unsplash.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
  
    const { name, email, message } = formData;
  
    if (!name || !email || !message) {
      toast.error("Please fill in all fields!");
      return;
    }
  
    // Gmail-specific link format
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=tanjirulanonto48@gmail.com&su=${encodeURIComponent(
      "Message from " + name
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  
    toast.success("Redirecting to Gmail...");
  
    setTimeout(() => {
      window.open(gmailLink, "_blank"); // Open Gmail in a new tab
    }, 1500);
  };
  

  return (
    <section id="contact" className="pt-20 bg-gray-50 dark:bg-gray-900">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
          <div className="mt-2 h-1 w-20 bg-purple-700 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10">
          {/* Contact Info */}
          <div className="bg-white mx-4 mb-6 py-7 px-5 rounded-2xl shadow-sm space-y-8" style={{backgroundImage: `url(${bg})`}}>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-purple-700" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">Email</h4>
                <a href="mailto:demo@mail.com" className="text-purple-700 hover:text-purple-700">
                demo@mail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-purple-700" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                <a href="tel:+8801234567" className="text-purple-700 hover:text-purple-700">
                +8801234567
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageSquare size={24} className="text-purple-700" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">WhatsApp</h4>
                <a href="https://wa.me/+8801234567" className="text-purple-700 hover:text-purple-700">
                +8801234567
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white mx-4 mb-6 py-7 px-5 rounded-2xl shadow-sm" style={{backgroundImage: `url(${bg})`}}>
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl border text-gray-700 bg-gray-200 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Your Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Place Your Email Address"
            required
            className="w-full px-4 py-3 rounded-xl border text-gray-700 bg-gray-200 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Your Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Let me know how I can help you."
            required
            className="w-full px-4 py-3 rounded-xl border text-gray-700 bg-gray-200 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
          ></textarea>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-purple-600 text-white py-3 px-6 shadow-xl hover:shadow-2xl rounded-xl hover:bg-purple-700 transition-colors duration-200 font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;