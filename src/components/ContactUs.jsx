import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const [form, setForm] = useState({ email: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_t3ak987", // ID du service
        "template_iee08zs", // ID du template
        {
          user_email: form.email,
          message: form.message,
        },
        "LgnLM76u_8u489a6z" // Clé publique EmailJS
      )
      .then(
        () => {
          alert("Message envoyé avec succès !");
          setForm({ email: "", message: "" });
        },
        (error) => {
          alert("Erreur lors de l'envoi : " + error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-green-100 via-white to-green-50 py-16 px-4"
    >
      <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8 border border-green-200">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          📬 Contactez-nous
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Une question ? Une idée ? Laissez-nous un message, nous vous répondrons rapidement.
        </p>

        <form onSubmit={sendEmail} className="space-y-4">
          <input
            type="email"
            placeholder="Votre email"
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Votre message"
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
            rows="5"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-3 rounded-xl shadow-md hover:bg-green-700 hover:shadow-lg transition-all"
          >
            ✉️ Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
