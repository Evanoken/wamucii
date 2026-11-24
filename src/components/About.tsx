import { PROFILE } from '../data';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="wrap">
      <Reveal>
        <h2 className="sec">
          About <span className="accent">{PROFILE.fullName}</span>
        </h2>
      </Reveal>

      <Reveal className="panel d1">
        <h3>Professional Summary</h3>
        <p>
          A dedicated and self-motivated <strong>software development student</strong> at
          The Nyeri National Polytechnic, currently on industrial attachment as an
          <strong> ICT intern at Outspan Global University</strong>. I'm building a strong
          foundation in web development, programming and database management — and pairing
          every unit of classroom learning with hands-on practice.
        </p>
      </Reveal>

      <Reveal className="panel d2">
        <h3>Internship Experience</h3>
        <p>
          My attachment at Outspan Global University is where HTML stops being an exercise
          and becomes a page someone actually uses, and a database stops being a diagram
          and becomes something a whole office depends on.
        </p>
        <ul className="tri">
          <li>Day-to-day ICT operations and user support across the university</li>
          <li>Systems maintenance and troubleshooting alongside the ICT team</li>
          <li>Applying web and database coursework to practical, real-world tasks</li>
        </ul>
      </Reveal>

      <Reveal className="panel d3">
        <h3>Professional Approach</h3>
        <p>
          I'm an honest, collaborative worker who learns fast and delivers with minimal
          supervision. Give me a task and a deadline — I'll manage the rest, and I'll ask
          the right questions along the way. Outside of code, exploring new technology is
          genuinely what I do for fun.
        </p>
      </Reveal>
    </section>
  );
}
