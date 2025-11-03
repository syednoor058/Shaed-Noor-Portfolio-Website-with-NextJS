"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";
import { Loader, Send } from "lucide-react";
import { useRef, useState } from "react";
import SuccessMessageModal from "../Modals/SuccessMessageModal";
import GlareHover from "../ui/glare-hover";

export default function ContactForm() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
      console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
      console.log(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Replace with your EmailJS Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS Template ID
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Replace with your EmailJS Public Key
      );
      console.log("Email sent successfully:", result.text);
      setIsModalOpen(true); // Open modal on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="contact" ref={form} onSubmit={handleSubmit} className="">
      <div className="flex flex-col gap-4 pb-2">
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold  text-neutral-200 leading-[1.2]">
          Let&apos;s Connect
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-[50%]">
            <Input
              name="full_name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>
          <div className="w-full lg:w-[50%]">
            <Input
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4">
          <div className="w-full">
            <Input
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>
        </div>
        <div className="">
          <Input
            name="subject"
            type="text"
            placeholder="Enter the subject of your inquiry"
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            required
          />
        </div>

        <div className="">
          <textarea
            name="message"
            placeholder="Tell us more about your project or requirements..."
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className="min-h-[120px] w-full rounded border-[1.5px]  border-neutral-700  bg-[#101010] px-5 py-3 text-base ring-offset-white  placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-300 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 resize-none  text-neutral-300"
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-block bg-gradient-to-tr from-violet-600 to-sky-500 hover:bg-neutral-800 text-white font-medium !text-base rounded-xs cursor-pointer p-0 h-full m-0"
      >
        <GlareHover className="h-12 flex flex-row items-center justify-center gap-3">
          {isSubmitting ? "Sending..." : "Send Message"}{" "}
          <span>{isSubmitting ? <Loader /> : <Send />}</span>
        </GlareHover>
      </Button>
      <SuccessMessageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </form>
  );
}
