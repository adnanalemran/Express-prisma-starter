import { contactLanguage } from "@/app/language/Lan-Contact";
import useLanguage from "@/hook/useLanguage";
import React, { useState } from "react";
import Swal from 'sweetalert2';

const ContentForm = () => {
  const lan = useLanguage(contactLanguage);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);


    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'We’ll review your inquiry and respond soon. For urgent matters, call +8809617209581.',
        });
        
        setFormData({ fullName: '', email: '', message: '' }); 
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send email.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to send email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 bg-tertiary mx-auto rounded-xl lg:ml-16">
      <h3 className="text-center text-2xl font-bold mt-8">{lan?.formTitle}</h3>
      <form onSubmit={handleSubmit}>
        <div className="m-6">
          <div className="mb-4">
            <label htmlFor="full-name" className="text-sm text-gray-600 font-semibold">
              {lan?.FullName}:
            </label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-white rounded border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm text-gray-600 font-semibold">
              {lan?.Email}:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white rounded border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-sm text-gray-600 font-semibold">
              {lan?.Message}:
            </label>
            <textarea
              rows="3"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white rounded border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
              disabled={isSubmitting}
            />
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              value={isSubmitting ? "Processing..." : lan?.Submit || "Submit"}
              className="bg-primary hover:bg-orange-700 text-white px-8 py-2 rounded-lg w-full cursor-pointer"
              disabled={isSubmitting}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContentForm;
