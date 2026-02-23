export default function Header({ nav, cta }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="brand">
          <span className="brand-dot" />
          Rutherford
        </a>
        <nav className="nav">
          {nav.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-solid" href={cta.href}>
          {cta.label}
        </a>
      </div>
    </header>
  );
}
