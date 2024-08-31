import { contactLanguage } from "@/app/language/Lan-Contact";
import useLanguage from "@/hook/useLanguage";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

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
    const toastId = toast.loading('Sending email...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Email sent successfully!', { id: toastId });
        setFormData({ fullName: '', email: '', message: '' }); // Clear the form
      } else {
        toast.error('Failed to send email', { id: toastId });
      }
    } catch (error) {
      toast.error('Failed to send email', { id: toastId });
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
              value={lan?.Submit || "Submit"}
              className="bg-primary hover:bg-orange-700 text-white px-8 py-2 rounded-lg w-full"
              disabled={isSubmitting}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContentForm;
