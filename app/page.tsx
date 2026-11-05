import AccessDemo from "@/components/AccessDemo";
import { certifications, profile, projects, skills } from "@/data/content";

export default function Home() {
  return (
    <>
      <div className="wrap">
        <nav>
          <b>{profile.name}</b>
          <div>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#certs">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <header className="hero">
          <div>
            <h1>{profile.headline}</h1>
            <p>{profile.intro}</p>
            <a className="btn" href="#work">
              See my projects
            </a>
            <a className="btn alt" href="#contact">
              Get in touch
            </a>
          </div>
          <AccessDemo />
        </header>
      </div>

      <section id="work">
        <div className="wrap">
          <h2>Selected work</h2>
          <div className="cases">
            {projects.map((p) => (
              <article className="case" key={p.title}>
                <div className="meta">
                  {p.sector}
                  <br />
                  {p.years}
                </div>
                <div>
                  <h3>{p.title}</h3>
                  <ul>
                    <li>
                      <b>Problem:</b> {p.problem}
                    </li>
                    <li>
                      <b>Built:</b> {p.built}
                    </li>
                    <li>
                      <b>Result:</b> {p.result}
                    </li>
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <h2>What I work with</h2>
          <div className="cols">
            {skills.map((s) => (
              <div key={s.heading}>
                <h3>{s.heading}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certs">
        <div className="wrap">
          <h2>Certifications</h2>
          <div className="certs">
            {certifications.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="wrap">
          <h2>{profile.closing}</h2>
          <p>{profile.availability}</p>
          <a className="btn" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a className="btn alt" target="_blank" rel="noopener noreferrer" href={profile.linkedin}>
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
