import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function ContactMe() {
  const [showEmail, setShowEmail] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef();

  // Vite env variables
  // const SERVICE_ID = import.meta.env.VITE_SERVICE_KEY;
  // const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_KEY;
  // const USER_ID = import.meta.env.VITE_EMAIL_API;
  const SERVICE_ID = 'service_kw5occq';
  const TEMPLATE_ID = 'template_nuj1my6';
  const USER_ID = '6ySHEdrY-OtG1xxgK';

  // Generate current time string for the template
  const getTimeString = () => {
    const now = new Date();
    return now.toLocaleString();
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto pt-12 pb-6 px-4">
      <motion.div
        className="flex flex-col md:flex-row bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        {/* Left Side */}
        <div className="md:w-1/2 jetmono flex flex-col justify-center items-center md:items-start gap-6 px-8 py-4 bg-gradient-to-br from-blue-50/60 via-pink-50/60 to-sky-50/60 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Contact Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            Open to opportunities, collaborations, and making cool stuff!
          </p>
          <div className="flex gap-6">
            {/* WhatsApp */}
            <div
              className="relative group"
              onMouseEnter={() => setShowWhatsApp(true)}
              onMouseLeave={() => setShowWhatsApp(false)}
            >
              <FaWhatsapp className="text-3xl text-green-500 cursor-pointer transition-transform group-hover:scale-110" />
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={showWhatsApp ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow text-sm font-mono pointer-events-none"
              >
                01630431986
              </motion.span>
            </div>
            {/* Email */}
            <div
              className="relative group"
              onMouseEnter={() => setShowEmail(true)}
              onMouseLeave={() => setShowEmail(false)}
            >
              <FaEnvelope className="text-3xl text-blue-500 cursor-pointer transition-transform group-hover:scale-110" />
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={showEmail ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow text-sm font-mono pointer-events-none"
              >
                mh13mahedi@gmail.com
              </motion.span>
            </div>
            
          </div>
        </div>

        {/* Right Side: Form */}
        <form
          ref={formRef}
          className="md:w-1/2 flex flex-col gap-4 p-4"
          onSubmit={e => {
            e.preventDefault();
            setSending(true);
            // Set the time field before sending
            formRef.current.time.value = getTimeString();
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
              .then(() => {
                setSending(false);
                toast.success("Message Sent! Thank you for reaching out.", { autoClose: 4000 });
                formRef.current.reset();
              })
              .catch((err) => {
                setSending(false);
                toast.error("Failed! Could not send message.", { autoClose: 4000 });
                console.error("EmailJS error:", err);
              });
          }}
        >
          {/* Hidden subject/title for EmailJS */}
          <input type="hidden" name="title" value="Contact from Portfolio" />
          {/* Hidden time field for EmailJS */}
          <input type="hidden" name="time" value="" />
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name" // must match your EmailJS template
              placeholder="Your Name"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <textarea
            name="message" // must match your EmailJS template
            placeholder="Your Message"
            rows={4}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <motion.button
            type="submit"
            className="w-full py-1 rounded-lg bg-gradient-to-r from-blue-500 to-sky-400 text-white font-bold flex items-center justify-center gap-3 text-base shadow-lg hover:scale-102 transition"
            whileHover={{ scale: 1.02, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.15)" }}
            disabled={sending}
          >
            {sending ? (
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="inline-block"
              >
                <FaPaperPlane className="text-lg" />
              </motion.span>
            ) : (
              <FaPaperPlane className="text-lg" />
            )}
            {sending ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}