import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fhztqnj", // Replace with your service ID
        "template_v8trpfu", // Replace with your template ID
        form.current,
        "sbbsshb7BM-m3KDJH" // Replace with your user/public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error(error.text);
        }
      );
  };

  return (
   <section
  className="contact-form flex flex-col md:flex-row gap-8 w-full py-10"
  aria-labelledby="contact-form-title"
>
  {/* Map */}
  <div
    className="flex-1 h-64 md:h-auto rounded-lg overflow-hidden shadow-lg min-w-[300px]"
    aria-label="Location map of Gurukul Early"
  >
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
  <div className="flex-1 bg-white rounded-3xl shadow-xl p-8 min-w-[300px]">
    <h2
      id="contact-form-title"
      className="text-3xl font-extrabold text-gray-900 mb-6"
    >
      Send Us A Message
    </h2>

    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-6"
      aria-label="Contact form to reach Gurukul Early"
    >
      {/* Row 1: Guardian Name & Child's DOB */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col w-full">
          <label
            htmlFor="guardianName"
            className="text-gray-700 font-semibold mb-2"
          >
            Guardian Name
          </label>
          <input
            id="guardianName"
            name="guardianName"
            type="text"
            required
            placeholder="Enter Guardian name"
            aria-required="true"
            aria-describedby="guardianNameHelp"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 shadow-sm transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
          />
          <small id="guardianNameHelp" className="sr-only">
            Please enter your full name
          </small>
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="childDOB"
            className="text-gray-700 font-semibold mb-2"
          >
            Child's Date of Birth
          </label>
          <input
            id="childDOB"
            name="childDOB"
            type="date"
            required
            aria-required="true"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 shadow-sm transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Row 2: Guardian Email & Child's Condition */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col w-full">
          <label
            htmlFor="guardianEmail"
            className="text-gray-700 font-semibold mb-2"
          >
            Guardian Phone or Email
          </label>
          <input
            id="guardianEmail"
            name="guardianEmail"
            type="email"
            required
            placeholder="Enter Guardian email"
            aria-required="true"
            aria-describedby="guardianEmailHelp"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 shadow-sm transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
          />
          <small id="guardianEmailHelp" className="sr-only">
            Please enter a valid email address
          </small>
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="childCondition"
            className="text-gray-700 font-semibold mb-2"
          >
            Child's Name
          </label>
          <input
            id="childCondition"
            name="childCondition"
            type="text"
            placeholder="Enter child's name"
            aria-describedby="childConditionHelp"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 shadow-sm transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
          />
          <small id="childConditionHelp" className="sr-only">
            Provide relevant medical or therapy conditions
          </small>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="text-gray-700 font-semibold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="5"
          placeholder="Write your message..."
          aria-required="true"
          aria-describedby="messageHelp"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 shadow-sm transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none resize-none"
        />
        <small id="messageHelp" className="sr-only">
          Provide any additional information or questions you have
        </small>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-800 text-white text-lg font-semibold hover:from-indigo-700 hover:to-indigo-900 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  </div>
</section>

  );
};

export default ContactForm;
