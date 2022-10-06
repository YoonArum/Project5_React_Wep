import './Nav.css';

function Nav() {
  return (
    <div className="Nav">
      <nav>
        <div class="nav_logo">mylogo</div>

        <ul class="nav_menu">
            <li>
                <a href="">HTML</a>
            </li>
            <li>
                <a href="">CSS</a>
            </li>
            <li>
                <a href="">JavaScript</a>
            </li>
            <li>
                <a href="">React</a>

            </li>
        </ul>

        <ul class="nav_icon">
            <li>
                <i class="fa-brands fa-facebook"></i>
            </li>
            <li>
                <i class="fa-brands fa-instagram"></i>

            </li>

        </ul>
    </nav>
    </div>
  );
}

export default Nav;