import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ruzrtsb", // Remplace par ton service ID
        "template_1qek5wd", // Remplace par ton template ID
        form.current,
        "LgnLM76u_8u489a6z" // Ta public key EmailJS
      )
      .then(
        (result) => {
          console.log("Email envoyé :", result.text);
          alert("Message envoyé avec succès !");
        },
        (error) => {
          console.error("Erreur EmailJS :", error.text);
          alert("Erreur lors de l'envoi du message.");
        }
      );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-green-100">
      <div className="w-full max-w-md p-6 bg-white border border-green-200 rounded-2xl shadow-md">
        <h2 className="text-green-800 text-lg font-semibold mb-2">
          CONTACTEZ-NOUS
        </h2>
        <p className="text-gray-600 mb-6">Nous serons ravis de vous aider.</p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Nom"
              className="flex-1 p-2 border rounded-lg"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Prénom"
              className="flex-1 p-2 border rounded-lg"
              required
            />
          </div>

          <input
            type="email"
            name="user_email"
            placeholder="Votre email"
            className="w-full p-2 border rounded-lg"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            className="w-full p-2 border rounded-lg"
            required
          />

          <textarea
            name="message"
            placeholder="Votre message"
            className="w-full p-2 border rounded-lg"
            rows="4"
            required
          ></textarea>

          <input
            type="file"
            name="file"
            className="w-full p-2 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
