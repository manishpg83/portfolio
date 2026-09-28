import { useState } from "react";
import { profile } from "../data/portfolioData";

// Web3Forms public access key — safe to ship in client code; it only allows
// submissions that are forwarded to the inbox registered with the key.
const WEB3FORMS_ACCESS_KEY = "9fdff899-c5d5-4cd0-918e-b67e38645033";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio inquiry from ${form.name}`,
          from_name: "Portfolio Contact Form",
          ...form,
        }),
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
        setError(data.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setError("Network error — please check your connection.");
    }
  }

  return (
    <section id="contact" className="section">
      <h2 className="section__title">Get In Touch</h2>
      <p className="contact__intro">
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__row">
          <label>
            Name
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
        </div>
        <label>
          Message
          <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
        </label>
        <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        <p className="contact-form__status" role="status" aria-live="polite">
          {status === "success" && (
            <span className="contact-form__status--success">
              Thanks! Your message has been sent — I'll get back to you soon.
            </span>
          )}
          {status === "error" && (
            <span className="contact-form__status--error">
              {error} You can also email me directly below.
            </span>
          )}
        </p>
      </form>

      <p className="contact__direct">
        Or reach me directly at <a href={`mailto:${profile.email}`}>{profile.email}</a>
        {" "}or <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
      </p>
    </section>
  );
}
