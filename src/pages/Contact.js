import React, { useState } from "react";
import { contact_us } from "../../appConstant";
const Contact = () => {
  const {NAME,EMAIL,MESSAGE,SUBMIT}=contact_us;
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-50 rounded-md shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Contact Us</h2>
      <form className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-1 text-gray-600">
            {NAME}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            className="w-full border border-gray-300 rounded p-2 outline-none focus:border-blue-400"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 text-gray-600">
            {EMAIL}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            className="w-full border border-gray-300 rounded p-2 outline-none focus:border-blue-400"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block mb-1 text-gray-600">
            {MESSAGE}
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="message"
            className="w-full border border-gray-300 rounded p-2 outline-none focus:border-blue-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition-colors"
        >
          {SUBMIT}
        </button>
      </form>
    </div>
  );
};

export default Contact;
