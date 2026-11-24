import { JOURNEY } from '../data';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="wrap">
      <Reveal>
        <h2 className="sec">
          My <span className="accent">Journey</span>
        </h2>
      </Reveal>
      <ol className="timeline">
        {JOURNEY.map((j, idx) => (
          <Reveal as="li" key={j.title} className={`d${idx + 1} ${j.current ? 'current' : ''}`}>
            <span className="when">
              {j.when}
              {j.current ? ' · Current' : ''}
            </span>
            <h3>{j.title}</h3>
            <span className="where">{j.where}</span>
            <p>{j.desc}</p>
            {j.duties && (
              <ul className="duties">
                {j.duties.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
