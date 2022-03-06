export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper header__nav">
        <a href="#" className="brand-logo">
          React
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Movie</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
