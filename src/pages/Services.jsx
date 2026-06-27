function Services() {
  return (
    <section>
      <h1>Skill Check for Candidates</h1>
      <p>Evaluate your profile against the skills Cognizant looks for in modern IT professionals.</p>
      <div className="grid">
        <div className="card">
          <h3>Core Technical Skills</h3>
          <p>Java, Python, JavaScript, React, .NET, SQL, cloud platforms, and API development.</p>
        </div>
        <div className="card">
          <h3>Professional Strengths</h3>
          <p>Problem solving, teamwork, communication, adaptability, and a growth mindset.</p>
        </div>
        <div className="card">
          <h3>Preferred Experience</h3>
          <p>Hands-on project experience, internships, certifications, and a strong portfolio.</p>
        </div>
      </div>
      <div className="card" style={{ marginTop: '1rem' }}>
        <h3>Recommended skill areas for hiring</h3>
        <ul className="checklist">
          <li>Programming and software development</li>
          <li>Cloud computing and DevOps</li>
          <li>Data analytics, AI, and automation</li>
          <li>Cybersecurity fundamentals</li>
          <li>Agile delivery and client communication</li>
        </ul>
      </div>
    </section>
  );
}

export default Services;
