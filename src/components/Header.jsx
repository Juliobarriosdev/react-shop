import React from 'react';
import '../styles/Header.scss';

function Header() {
  return (
    <div>
      <nav>
        <img
          src="./Platzi_YardSale_Icons-20211206T164008Z-001/Platzi_YardSale_Icons/icon_menu.svg"
          alt=""
          className="menu"
        />
        <div className="navbar-left">
          <img
            src="./Platzi_YardSale_Logos-20211206T164004Z-001/Platzi_YardSale_Logos/logo_yard_sale.svg"
            alt="logo"
            className="logo"
          />
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furniture</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-email">name@example.com</li>
            <li className="navbar-shopping-card">
              <img
                src="./Platzi_YardSale_Icons-20211206T164008Z-001/Platzi_YardSale_Icons/icon_shopping_cart.svg"
                alt="shopping-cart"
              />
              <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;