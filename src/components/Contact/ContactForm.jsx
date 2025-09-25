import React from "react";

const ContactForm = () => {
  return (
    <div className="main_container_form flex flex-col md:flex-row p-6 gap-6">
      {/* Map Section */}
      <div className="map-container w-full md:w-1/2 h-96 md:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31085.58364910207!2d77.57846444632463!3d13.11831108146475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1856f737d2d5%3A0xbef78d20185d942f!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1758823250658!5m2!1sen!2sin"
          className="w-full h-full rounded-lg shadow-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Form Section */}
      <div className="form-container w-full md:w-1/2 bg-white p-6 rounded-tr-2xl shadow-lg">
        <form className="flex flex-col gap-4">
          <div className="p-5 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="mb-1 text-gray-700">Guardian Name</label>
                <input
                  type="text"
                  placeholder="Enter Guardian name"
                  className="w-full border-2 border-gray-300 rounded-lg p-2 transition-all duration-300 focus:border-blue-500 focus:bg-blue-50 focus:rounded-xl"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-1 text-gray-700">Guardian Email</label>
                <input
                  type="email"
                  placeholder="Enter Guardian email"
                  className="w-full border-2 border-gray-300 rounded-lg p-2 transition-all duration-300 focus:border-blue-500 focus:bg-blue-50 focus:rounded-xl"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="mb-1 text-gray-700">Guardian Name</label>
                <input
                  type="text"
                  placeholder="Enter Guardian name"
                  className="w-full border-2 border-gray-300 rounded-lg p-2 transition-all duration-300 focus:border-blue-500 focus:bg-blue-50 focus:rounded-xl"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-1 text-gray-700">Guardian Email</label>
                <input
                  type="email"
                  placeholder="Enter Guardian email"
                  className="w-full border-2 border-gray-300 rounded-lg p-2 transition-all duration-300 focus:border-blue-500 focus:bg-blue-50 focus:rounded-xl"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">Guardian Email</label>
              <input
                type="text"
                placeholder="Enter Guardian email"
                className="w-full border-2 border-gray-300 rounded-lg p-2 transition-all duration-300 focus:border-blue-500 focus:bg-blue-50 focus:rounded-xl"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">Message</label>
              <textarea
                cols="30"
                rows="5"
                className="w-full border-2 border-gray-300 rounded-lg p-2 transition-all duration-300 focus:border-blue-500 focus:bg-blue-50 focus:rounded-xl resize-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-lg bg-gradient-to-r from-purple-700 to-blue-800 text-white font-semibold hover:from-purple-800 hover:to-blue-900 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
