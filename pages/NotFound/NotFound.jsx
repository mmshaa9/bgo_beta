import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from './style.module.scss';

const NotFound = () => {
    return (

            <div className={clsx(styles['no_page'])}>
                <div className={clsx(styles['no_page__content'])}>
                    <div>404</div>
                </div>

                <div className={clsx(styles['no_page__txt'])}>
                    <div>Такой страницы нет</div>
                </div>

                <div className={clsx(styles['no_page__btn'])}>
                    <Link to="/">Перейти на главную</Link>
                </div>
            </div>

    );
}

export default NotFound;