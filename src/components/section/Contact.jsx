import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    message: "",
    type: "", 
    visible: false,
  });

  const FORMSPREE_ACTION_URL = "https://formspree.io/f/mldbjpqq"; 

  
  console.log("Formspree URL:", FORMSPREE_ACTION_URL);

  
  useEffect(() => {
    if (notification.visible) {
      const timer = setTimeout(() => {
        setNotification({ message: "", type: "", visible: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification.visible]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!formData.name || !formData.email || !formData.message) {
      setNotification({
        message: "Veuillez remplir tous les champs du formulaire.",
        type: "error",
        visible: true,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Envoi des données:", formData); 
      const response = await fetch(FORMSPREE_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Réponse Formspree:", response); 

      if (response.ok) {
        setNotification({
          message: "Message envoyé avec succès !",
          type: "success",
          visible: true,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Erreur lors de l'envoi du formulaire.");
      }
    } catch (error) {
      console.error("Formspree Error:", error);
      setNotification({
        message: "Erreur lors de l'envoi : Vérifiez votre connexion ou l'URL du formulaire.",
        type: "error",
        visible: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 bg-gray-900"
    >
      <RevealOnScroll>
        <div className="w-[400px] max-w-full px-4 sm:px-6 lg:px-8 relative">
          {/* Notification */}
          {notification.visible && (
            <div
              className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-lg transition-opacity duration-300 ${
                notification.type === "success"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {notification.message}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Me contacter
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Rakoto"
              />
            </div>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="rakoto@gmail.com"
              />
            </div>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="block w-full bg-white/10 border border-white/20 rounded-md px-5 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-y"
              placeholder="Votre message..."
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 px-6 rounded-md font-medium ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer Message"}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};