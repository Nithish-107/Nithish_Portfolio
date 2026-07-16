// Contact section — info panel + validated contact form
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

const INITIAL = { name: '', email: '', subject: '', message: '' };

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Name is required.';
  else if (fields.name.trim().length < 3) errors.name = 'Name must be at least 3 characters.';
  if (!fields.email.trim()) errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Enter a valid email.';
  if (!fields.subject.trim()) errors.subject = 'Subject is required.';
  else if (fields.subject.trim().length < 5) errors.subject = 'Subject must be at least 5 characters.';
  if (!fields.message.trim()) errors.message = 'Message is required.';
  else if (fields.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
}

export default function Contact() {
  const headerRef = useScrollReveal();
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  const [fields, setFields] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    setStatus(null);

    // --- DEBUG: verify env vars are loading (remove after confirming) ---
    console.log('Service ID:',  import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log('Public Key:',  import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    // --- END DEBUG ---

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name:    fields.name,
          email:   fields.email,
          subject: fields.subject,
          message: fields.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFields(INITIAL);
      setTimeout(() => setStatus(null), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title" id="contact-title">
            Contact <span>Me</span>
          </h2>
          <p className="section-subtitle">Have a project in mind? Let's talk and build something great.</p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info reveal reveal-left" ref={leftRef}>
            <h3 className="contact-info-title">Let's work together</h3>
            <p className="contact-info-desc">
              I'm currently open to full-time roles and freelance projects. Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            <div className="contact-details">
              {[
                { icon: <FiMail size={16} />,  label: 'Email',    value: personalInfo.email },
                { icon: <FiPhone size={16} />, label: 'Phone',    value: personalInfo.phone },
                { icon: <FiMapPin size={16} />,label: 'Location', value: personalInfo.location },
              ].map(({ icon, label, value }) => (
                <div key={label} className="contact-detail-item">
                  <div className="contact-detail-icon" aria-hidden="true">{icon}</div>
                  <div>
                    <p className="contact-detail-label">{label}</p>
                    <p className="contact-detail-value">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials" aria-label="Social links">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="GitHub"><FiGithub /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href={`mailto:${personalInfo.email}`} className="contact-social-btn" aria-label="Email"><FiMail /></a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-card reveal reveal-right" ref={rightRef}>
            {status === 'success' && (
              <div className="form-alert success" role="alert">
                <FiCheckCircle size={15} /> Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="form-alert error" role="alert">
                <FiAlertCircle size={15} /> Something went wrong, please try again or email me directly.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name *</label>
                  <input
                    id="name" name="name" type="text"
                    className={`form-input${errors.name ? ' error' : ''}`}
                    placeholder="Your Name"
                    value={fields.name} onChange={handleChange}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <span id="name-error" className="form-error" role="alert">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email *</label>
                  <input
                    id="email" name="email" type="email"
                    className={`form-input${errors.email ? ' error' : ''}`}
                    placeholder="your@email.com"
                    value={fields.email} onChange={handleChange}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <span id="email-error" className="form-error" role="alert">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject *</label>
                <input
                  id="subject" name="subject" type="text"
                  className={`form-input${errors.subject ? ' error' : ''}`}
                  placeholder="Project Inquiry"
                  value={fields.subject} onChange={handleChange}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && <span id="subject-error" className="form-error" role="alert">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea
                  id="message" name="message"
                  className={`form-textarea${errors.message ? ' error' : ''}`}
                  placeholder="Tell me about your project..."
                  value={fields.message} onChange={handleChange}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <span id="message-error" className="form-error" role="alert">{errors.message}</span>}
              </div>

              <button type="submit" className="form-submit" disabled={loading}>
                {loading ? 'Sending...' : <><FiSend size={15} /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
