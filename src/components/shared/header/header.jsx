import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import slugify from 'slugify';
import MENUS from 'constants/menus';
import Burger from '../burger';
import Link from '../link';
import { StaticImage } from 'gatsby-plugin-image';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import './header.css';

const Header = ({ isMobileMenuOpen, onBurgerClick, additionalClassName }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const getAnchor = (str) => slugify(str).toLocaleLowerCase();

  const handleAnchorClick = (e) => {
    const id = getAnchor(e.target.firstChild.data);
    const element = document.getElementById(id);

    if (element) {
      const indent = 50;
      const elementTop = element.getBoundingClientRect().top;
      const elementOffset = window.pageYOffset + elementTop - indent;

      window.scrollTo({
        top: elementOffset,
        behavior: 'smooth',
      });
    }
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <header
      className={clsx('safe-paddings transition-200 z-10 transition-colors', additionalClassName)}
    >
      <div
        className="flex items-center justify-between pb-2 pt-5"
        style={{
          position: 'relative',
          margin: '0 auto',
          maxWidth: '80rem',
          padding: '1rem 1rem',
        }}
      >
        <Link className="z-50 ml-2" to="/">
          <StaticImage
            src="./images/logo.svg"
            alt="logo"
            formats={['auto', 'webp', 'avif']}
            className="navbar-logo"
            onClick={() => {
              window.location.href = `/`;
            }}
          />
        </Link>

        <nav>
          <ul className=" flex space-x-8 text-white lg:space-x-6 md:hidden">
            {MENUS.header.map((item, index) => {
              const { text, to, homeTo, dropdown } = item;

              if (dropdown) {
                return (
                  <li
                    className="text-[15px] font-semibold dropdown-container"
                    key={index}
                    style={{ color: '#004258', cursor: 'pointer', position: 'relative' }}
                    onMouseEnter={() => toggleDropdown(index)}
                    onMouseLeave={closeDropdown}
                  >
                    <span className="text-primary hover:text-primary-dark cursor-pointer transition-colors duration-200">
                      {text}
                    </span>
                    {openDropdown === index && (
                      <ul className="dropdown-menu">
                        {dropdown.map((dropdownItem, dropdownIndex) => (
                          <li key={dropdownIndex} className="dropdown-item">
                            <Link
                              to={dropdownItem.to}
                              target={dropdownItem.target}
                              className="text-primary hover:text-primary-dark cursor-pointer transition-colors duration-200"
                            >
                              {dropdownItem.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li
                  className="text-[15px] font-semibold"
                  key={index}
                  style={{ color: '#004258', cursor: 'pointer' }}
                >
                  <Link
                    to={to || `/#${homeTo}`}
                    className="text-primary hover:text-primary-dark cursor-pointer transition-colors duration-200"
                    onClick={handleAnchorClick}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="md:hidden">
          <button
            type="button"
            className="button"
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => {
              window.location.href = `https://www.linkedin.com/company/dutchcloudnative/`;
            }}
          >
            Join our Community
            <FaLinkedin style={{ marginLeft: '0.5rem', fontSize: '1.25rem' }} />
          </button>
        </div>
        <div className="md:flex items-center" style={{ marginLeft: '0', justifyContent: 'flex-end', position: 'absolute', right: '-2rem' }}>
          <a
            href="http://github.com/cloudnative-amsterdam/website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark transition-colors duration-200"
            style={{ display: 'flex', alignItems: 'right', cursor: 'pointer' }}
          >
            <FaGithub style={{ fontSize: '2rem' }} />
          </a>
        </div>
        <Burger
          className={clsx('z-50 hidden md:block', isMobileMenuOpen && 'text-black dark:text-black')}
          isToggled={isMobileMenuOpen}
          onClick={onBurgerClick}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
  additionalClassName: PropTypes.string,
  homepage: PropTypes.bool,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
  additionalClassName: null,
  homepage: false,
};

export default Header;
