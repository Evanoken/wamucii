import { useCallback, useState } from 'react';
import { PROFILE } from '../data';
import Reveal from './Reveal';

export default function Contact() {
  const [copied, setCopied] = useState('');
  const copy = useCallback((label: string, value: string) => {
    try {
      navigator.clipboard.writeText(value).then(
        () => {
          setCopied(label);
          setTimeout(() => setCopied(''), 1800);
        },
        () => undefined
      );
    } catch {
      /* clipboard unavailable */
    }
  }, []);

  return (
    <section id="contact" className="wrap">
      <Reveal className="contact-card">
        <h2>Let's build something.</h2>
        <p>
          I'm open to attachment opportunities, junior roles and mentorship — anything
          that helps me grow as a developer. Reach out any time.
        </p>
        <ul className="contact-list">
          <li>
            <span className="k">Email</span>
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            <button className="copy-btn" onClick={() => copy('email', PROFILE.email)}>
              {copied === 'email' ? 'Copied ✓' : 'Copy'}
            </button>
          </li>
          <li>
            <span className="k">Phone</span>
            <a href={`tel:${PROFILE.phoneHref}`}>{PROFILE.phone}</a>
            <button className="copy-btn" onClick={() => copy('phone', PROFILE.phone)}>
              {copied === 'phone' ? 'Copied ✓' : 'Copy'}
            </button>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
