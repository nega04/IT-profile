function Home() {
  return (
    <section>
      <div className="hero">
        <div className="hero-card">
          <span className="badge">Cognizant recruitment portal</span>
          <h1>Apply for a career that builds your future in technology.</h1>
          <p>
            Join Cognizant as a candidate and explore opportunities in software engineering,
            cloud, data, cybersecurity, and consulting with competitive salary, global exposure,
            and career growth.
          </p>
          <div className="btn-row">
            <a href="/contact" className="btn btn-primary">Apply Now</a>
            <a href="/services" className="btn btn-secondary">Check Your Skills</a>
          </div>
        </div>
        <div className="hero-card">
          <h3>What candidates gain at Cognizant</h3>
          <ul>
            <li>Career growth with mentorship and training</li>
            <li>Attractive salary packages and benefits</li>
            <li>Exposure to global enterprise projects</li>
            <li>Hands-on experience with modern technologies</li>
          </ul>
        </div>
      </div>

      <h2 className="section-title">Why applicants choose Cognizant</h2>
      <div className="grid">
        <div className="card">
          <h3>Recruitment Support</h3>
          <p>Clear hiring process with guidance at every stage from interview to onboarding.</p>
        </div>
        <div className="card">
          <h3>Skill-Based Opportunities</h3>
          <p>Roles aligned to your technical strengths, certifications, and project experience.</p>
        </div>
        <div className="card">
          <h3>Global Exposure</h3>
          <p>Work with international clients and gain experience in large-scale digital transformation.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
