import {useState} from 'react';
import {Link} from "react-router-dom";
import NavBar from 'components/NavBar'
import clsx from 'clsx';
import styles from './style.module.scss'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(x => !x)

    return (
        <div className={clsx(styles['header'])}>
            < Link to ="/" className={clsx(styles['header__logo'])}> </Link>

            <NavBar toggle={toggle} isOpen={isOpen} />
            <div className={clsx(styles['menu'])}><span className={clsx(styles['menu__text'], {[styles['open']]: isOpen})} onClick={toggle}>+7 800 555 61 05</span><span className={clsx(styles['menu__btn'],{[styles['open']]: isOpen})} onClick={toggle}></span></div>
        </div>
    );
};

export default Header;