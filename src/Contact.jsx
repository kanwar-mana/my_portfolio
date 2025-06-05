import React from "react";
import { useLanguage } from "./LanguageContext";

const navLinks = [
  { label: "main", href: "#home" },
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "articles", href: "#articles" },
];

const socialLinks = [
  { icon: "fa-github", label: "github", url: "", type: "brands" },
  { icon: "fa-linkedin-in", label: "linkedin", url: "", type: "brands" },
  { icon: "fa-envelope", label: "email", url: "mailto:your@email.com", type: "solid" },
  { icon: "fa-telegram", label: "telegram", url: "", type: "brands" },
  { icon: "fa-facebook-f", label: "facebook", url: "", type: "brands" },
  { icon: "fa-instagram", label: "instagram", url: "", type: "brands" },
];

const t = {
  en: {
    contacts: "Contacts",
    nav: ["Main", "About", "Projects", "Articles"],
    site: "Site",
    handcrafted: "Handcrafted by ME /",
    designed: "Designed by ME /",
    powered: "Powered by ReactJs",
    email: "Your email",
    message: "Your message",
    send: "Send",
    name: "Kanwer",
    surname: "Abdull Rahman",
    role: "Frontend",
    role2: "Developer",
    social: {
      github: "Github",
      linkedin: "Linkedin",
      email: "E-mail",
      telegram: "Telegram",
      facebook: "Facebook",
      instagram: "Instagram",
    },
  },
  ur: {
    contacts: "رابطہ",
    nav: ["مرکزی", "تعارف", "منصوبے", "مضامین"],
    site: "سائٹ",
    handcrafted: "میرے ہاتھوں سے تیار کردہ /",
    designed: "ڈیزائن: میں نے /",
    powered: "پاورڈ بائی NextJs",
    email: "آپ کا ای میل",
    message: "آپ کا پیغام",
    send: "بھیجیں",
    name: "کنور",
    surname: "عبدالرحمن",
    role: "فرنٹ اینڈ ڈویلپر",
    social: {
      github: "گِٹ ہب",
      linkedin: "لنکڈ اِن",
      email: "ای میل",
      telegram: "ٹیلیگرام",
      facebook: "فیس بک",
      instagram: "انسٹاگرام",
    },
  },
};

export default function Contact() {
  const { lang } = useLanguage();
  const tr = t[lang];
  return (
    <> 
    <section id="contact" className="contact-section">
      <h2 className="contact-title">{tr.contacts}</h2>
      <div className="contact-container">
        {/* Left column */}
        <div className="contact-left">
          <div className="contact-name-block">
            <h1 className="contact-name">
              {tr.name}
              <br />
              <div className="contact-role">
                {tr.role}
                <br />
                {tr.role2}
                <p>{tr.surname}</p>
              </div>
            </h1>
            <div className="contact-info-box">
              <h3 className="contact-info-title">{tr.site}</h3>
              <p className="contact-info-line">{tr.handcrafted}</p>
              <p className="contact-info-line">{tr.designed}</p>
              <p className="contact-info-line">{tr.powered}</p>
            </div>
          </div>
        </div>
        {/* Right column */}
        <div className="contact-right">
          
          <nav className="contact-nav">
            {tr.nav.map((item, i) => (
              <a key={item} href={navLinks[i].href} className="contact-nav-link">
                {item}
              </a>
            ))}
          </nav>
          <form className="contact-form" action="https://formspree.io/f/mwkgrqzv" method="POST">
            <input
              className="contact-input"
              type="email"
              name="email"
              placeholder={tr.email}
              required
            />
            <textarea
              className="contact-textarea"
              name="message"
              placeholder={tr.message}
              rows="5"
              required
            ></textarea>
            <button className="contact-submit-btn" type="submit">{tr.send}</button>
          </form>
        </div>
      </div>
      <div className="contact-socials">
        {socialLinks.map(link => (
          <a
            key={link.label}
            href={link.url}
            className="contact-social-btn"
            aria-label={tr.social[link.label]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fa${link.type === "solid" ? "-solid" : "-brands"} ${link.icon}`}></i>
            {tr.social[link.label]}
          </a>
        ))}
      </div>
    </section>
    </>
  );
} 