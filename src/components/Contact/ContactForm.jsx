import React from "react";

const ContactForm = () => {
  return (
    <section className="contact-form flex flex-col md:flex-row gap-8 w-full py-10">
      {/* Map */}
      <div className="flex-1 h-64 md:h-auto rounded-lg overflow-hidden shadow-lg min-w-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31085.58364910207!2d77.57846444632463!3d13.11831108146475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1856f737d2d5%3A0xbef78d20185d942f!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1758823250658!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Gurukul Early Location Map"
        />
      </div>

      {/* Form */}
      <div className="flex-1 bg-white rounded-3xl shadow-lg p-8 min-w-[300px]">
        <form className="flex flex-col gap-6" aria-label="Contact form">
          {/* Guardian Name & Email */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col w-full">
              <label htmlFor="guardianName" className="text-gray-700 font-semibold mb-1">
                Guardian Name
              </label>
              <input
                id="guardianName"
                name="guardianName"
                type="text"
                required
                placeholder="Enter Guardian name"
                className="w-full border-2 border-gray-300 rounded-xl p-3 transition focus:outline-none focus:border-purple-600 focus:bg-purple-50"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="guardianEmail" className="text-gray-700 font-semibold mb-1">
                Guardian Email
              </label>
              <input
                id="guardianEmail"
                name="guardianEmail"
                type="email"
                required
                placeholder="Enter Guardian email"
                className="w-full border-2 border-gray-300 rounded-xl p-3 transition focus:outline-none focus:border-purple-600 focus:bg-purple-50"
              />
            </div>
          </div>

          {/* Additional Guardian Name & Email */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col w-full">
              <label htmlFor="guardianName2" className="text-gray-700 font-semibold mb-1">
                Guardian Name
              </label>
              <input
                id="guardianName2"
                name="guardianName2"
                type="text"
                placeholder="Enter Guardian name"
                className="w-full border-2 border-gray-300 rounded-xl p-3 transition focus:outline-none focus:border-purple-600 focus:bg-purple-50"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="guardianEmail2" className="text-gray-700 font-semibold mb-1">
                Guardian Email
              </label>
              <input
                id="guardianEmail2"
                name="guardianEmail2"
                type="email"
                placeholder="Enter Guardian email"
                className="w-full border-2 border-gray-300 rounded-xl p-3 transition focus:outline-none focus:border-purple-600 focus:bg-purple-50"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-semibold mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              placeholder="Write your message..."
              className="w-full border-2 border-gray-300 rounded-xl p-3 transition focus:outline-none focus:border-purple-600 focus:bg-purple-50 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-700 to-blue-800 text-white text-lg font-semibold hover:from-purple-800 hover:to-blue-900 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
