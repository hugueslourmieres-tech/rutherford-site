export default function Footer({ footer }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>{footer.title}</h3>
          <p>{footer.copyright}</p>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            {footer.links.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Social</h4>
          <ul>
            {footer.social.map((social) => (
              <li key={social}>{social}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
