import { PROFILE } from '../data';

export default function Nav() {
  return (
    <nav className="bar">
      <div className="wrap inner">
        <a className="brand" href="#home">
          <span className="avatar">LM</span>
          {PROFILE.name}
        </a>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
