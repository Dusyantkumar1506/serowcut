"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const object = {
      access_key: "1d5f2589-2bc0-449c-b316-77b171a14444", // Replace with your actual access key
      ...formData,
    };

    try {
      const json = JSON.stringify(object);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);

      // Clear the form and update the form status
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormStatus({ submitted: true, success: true, error: "" });
    } catch (error) {
      console.error("Error:", error);
      setFormStatus({
        submitted: true,
        success: false,
        error: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-gray-100"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-gray-100"
          />
        </div>
        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-gray-100"
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-gray-100"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="contact-btn inline-block rounded-lg bg-[#3172b3] hover:bg-[#215c97] px-5 py-3 text-sm font-medium text-white"
          >
            Send Message
          </button>
        </div>
      </form>

      {formStatus.submitted && (
        <div className="text-center">
          {formStatus.success ? (
            <p className="text-green-500 font-bold">
              Message sent successfully!
            </p>
          ) : (
            <p className="text-red-500 font-bold">{formStatus.error}</p>
          )}
        </div>
      )}
    </>
  );
};

export default ContactForm;
