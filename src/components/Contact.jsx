import { useState } from "react";
import { profile } from "../data/portfolioData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
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
        <button type="submit" className="btn btn--primary">Send Message</button>
      </form>

      <p className="contact__direct">
        Or reach me directly at <a href={`mailto:${profile.email}`}>{profile.email}</a>
        {" "}or <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
      </p>
    </section>
  );
}
