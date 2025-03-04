import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Log the form data to check if the values are correct
    console.log("Form Data:", { name, email, message });

    emailjs
      .sendForm(
        "service_z0kxvy7", // Service ID
        "template_0vl5hf8", // Template ID
        form.current, // Form reference
        "dCT8oX7T304QJU6cC" // Public Key
      )
      .then(
        () => {
          setEmail(""); // Clear email field
          setName(""); // Clear name field
          setMessage(""); // Clear message field
          setSuccess("Message Sent Successfully!"); // Success message
        },
        (error) => {
          console.error("FAILED...", error.text);
          setSuccess("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      {success && <p className="text-cyan">{success}</p>}
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        {/* Hidden input for recipient email */}
        <input type="hidden" name="to_email" value="oluwoleilori22@gmail.com" /> 

        {/* Name input */}
        <input
          type="text"
          name="from_name" // Corresponds to {{from_name}} in template
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />

        {/* Email input */}
        <input
          type="email"
          name="from_email" // Corresponds to {{from_email}} in template
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />

        {/* Message input */}
        <textarea
          name="message" // Corresponds to {{message}} in template
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;