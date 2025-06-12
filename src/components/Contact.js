import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_81qsxbz";
    const templateID = "template_nf9q2ko";
    const publicKey = "cI8kEkiJbmPaU6Ndx";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "top-left",
          autoClose: 2000,
        });
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        toast.error("Message failed to send. Try again!", {
          position: "top-left",
          autoClose: 2000,
        });
        console.error("EmailJS Error:", error);
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="container">
          <motion.div
            className="heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <p className="heading-sub-text">Hire Me</p>
            <p className="heading-text">Get in Touch</p>
          </motion.div>

          <div className="contact-box">
            <motion.div
              className="left-box"
              initial={{ opacity: 0, y: "-50px" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <h3 className="say-hello">Say Hello!</h3>
              <p className="description">
                I’m interested in freelance opportunities – especially ambitious or large projects. 
                However, if you have other requests or questions, don’t hesitate to use the form.
              </p>
              
              <div className="contact-details">
                <p className="email-section">
                  <strong>Email:</strong> 
                  <a href="mailto:shahulhameed3280@gmail.com">
                    shahulhameed3280@gmail.com
                  </a>
                </p>

                <p className="whatsapp-section">
                  <strong>WhatsApp:</strong>  
                  <a
                    href="https://wa.me/916379389087"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="right-box"
              initial={{ opacity: 0, y: "50px" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <form onSubmit={handleSubmit}>
                <div className="form-top">
                  <div className="name">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="email">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="message">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
