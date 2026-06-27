import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    skills: '',
    experience: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Submission failed');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', role: '', skills: '', experience: '' });
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <section>
      <div className="contact-card">
        <h1>Apply for Cognizant</h1>
        <p>Share your details and let our recruitment team review your profile for the right opportunity.</p>
        <form onSubmit={handleSubmit}>
          <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your full name" required />
          <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email address" required />
          <input name="role" value={formData.role} onChange={handleChange} type="text" placeholder="Preferred role" required />
          <input name="skills" value={formData.skills} onChange={handleChange} type="text" placeholder="Skills (e.g. React, Python, Cloud)" required />
          <textarea name="experience" value={formData.experience} onChange={handleChange} rows="5" placeholder="Tell us about your experience and career goals" required></textarea>
          <button className="btn btn-primary" type="submit">Submit Application</button>
        </form>
        {submitted && (
          <div className="form-status">
            Thank you! Your application has been saved successfully. Our team will review your skills and contact you soon.
          </div>
        )}
        {error && <div className="form-status" style={{ background: 'rgba(248, 113, 113, 0.16)', borderColor: 'rgba(248, 113, 113, 0.3)' }}>{error}</div>}
      </div>
    </section>
  );
}

export default Contact;
