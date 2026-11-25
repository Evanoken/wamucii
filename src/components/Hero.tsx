import { PROFILE } from '../data';
import { useTypewriter } from '../hooks';
import portrait from '../assets/portrait.jpg';

export default function Hero() {
  const typed = useTypewriter(PROFILE.roles);
  return (
    <header className="hero wrap" id="home">
      <div className="hero-grid">
      <div className="stagger">
        <p className="eyebrow">Software Development · Web · Databases</p>
        <h1>
          Hi! I'm <span className="accent">{PROFILE.name}</span>
          <span className="typed-line">
            {typed}
            <span className="caret">|</span>
          </span>
        </h1>
        <p className="lede">
          Turning coursework into working software — building efficient, practical
          solutions with clean web pages and reliable databases.
        </p>
        <div className="hero-cta">
          <a className="btn primary" href="#contact">Let's Connect →</a>
          <a className="btn ghost" href="#about">About me</a>
          <span className="now-badge">
            <span className="pulse"></span>ICT Intern @ Outspan Global University
          </span>
        </div>
      </div>
      <figure className="portrait-wrap">
        <img className="portrait" src={portrait} alt={PROFILE.fullName} />
      </figure>
      </div>
    </header>
  );
}
