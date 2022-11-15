import { useId } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ROUTES } from "GraphQL/Queries";

import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import styles from "./style.module.scss";

const Footer = () => {
  const id = useId();
  const { loading, data } = useQuery(ROUTES);
  // console.log(data.menu.menuItems.nodes)
  return (
    <div className={clsx(styles["footer"])}>
      <Link to="/">
        <div className={clsx(styles["footer__logo"])}></div>
      </Link>

      <ul className={clsx(styles["navbar__list"])}>
        {!loading &&
          data.menu.menuItems.nodes.map(({ label, path, childItems }, i) => (
            <li key={id + i} className={clsx(styles["navbar__item"])}>
              {childItems.nodes.length ? (
                <>
                  <span>
                    {label}
                    <i className={clsx(styles["arrow"])} />
                  </span>
                  <ul className={clsx(styles["navbar__sublist"])}>
                    {childItems.nodes.map(({ label, path }, i) => (
                      <li
                        key={id + i}
                        className={clsx(styles["navbar__subitem"])}
                      >
                        <Link to={path}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link to={path} key={id + i}>
                  {label}
                </Link>
              )}
            </li>
          ))}
      </ul>

      <div className={clsx(styles["contacts"])}>
        {!loading && (
          <>
            <div className="social nav_adres">
              <span>Адрес Тула, ул. 9 мая, д.3, оф. 303</span>
            </div>
            <p>Наши Соц. Сети</p>
            <div className="social">
              <a className="telegram soc" href="https://t.me/b_go_ru">
                <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>
              </a>
            </div>

            <div className="social">
              <a className="vk soc" href="https://vk.com/b_go_ru">
                <FontAwesomeIcon icon={faVk}></FontAwesomeIcon>
              </a>
            </div>
            <span>
              <a href="tel:+78005556105">{data.menu.contacts.phone}</a>
            </span>
            <span>
              <a href="mailto:Info@b-go.ru">{data.menu.contacts.email}</a>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Footer;

// import { Link } from "react-router-dom";
// import './NavBar.scss'

// const NavBar = ({toggle, isOpen}) => {
//     const id = useId()
//     const {error, loading, data} = useQuery(ROUTES)

//     useEffect(() => {}, [data])
//     return !loading ? (
//         <div className="navigation">
//             {/* <div className="logo">B-GO</div> */}
//             <nav className={`navbar${isOpen? ' open' : ''}`}>

//             </nav>
//         </div>
//     ) : null;
// };
// export default NavBar;
