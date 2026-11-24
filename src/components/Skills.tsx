import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="wrap">
      <Reveal>
        <h2 className="sec">
          Technical <span className="accent">Skills</span>
        </h2>
      </Reveal>
      <Reveal className="panel d1">
        <div className="twocol">
          <div>
            <h4>Development</h4>
            <ul className="tri">
              <li>HTML &amp; CSS web development</li>
              <li>Programming fundamentals</li>
              <li>Database design &amp; management</li>
              <li>Problem-solving &amp; analytical thinking</li>
            </ul>
          </div>
          <div>
            <h4>Tools &amp; Working Style</h4>
            <ul className="tri">
              <li>Microsoft Word, Excel &amp; PowerPoint</li>
              <li>Clear communication &amp; teamwork</li>
              <li>Time management</li>
              <li>Quick learner — new tools don't scare me</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
