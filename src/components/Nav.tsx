import { PROFILE } from '../data';
import portrait from '../assets/portrait.jpg';

export default function Nav() {
  return (
    <nav className="bar">
      <div className="wrap inner">
        <a className="brand" href="#home">
          <span className="avatar">
            <img src={portrait} alt={PROFILE.fullName} />
          </span>
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
