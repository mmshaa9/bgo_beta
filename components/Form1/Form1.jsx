import React from "react";
import clsx from "clsx";
import styles from "./style.module.scss";

function Form1() {
  return (
    <section className={clsx(styles["form-block"])}>
      <div className={clsx(styles["wrapper form-block__wrapper"])}>
        <h2 className={clsx(styles["form-block__left-title title-left"])}>
          Давайте
          <br /> решать задачи!
        </h2>
        <form
          data-v-0c6a522f=""
          id="main-form"
          action=""
          method="post"
          className={clsx(styles["main-form"])}
        >
          <div data-v-0c6a522f="" className={clsx(styles["main-form__wrap"])}>
            <div data-v-0c6a522f="" className={clsx(styles["main-form__left"])}>
              <input
                data-v-0c6a522f=""
                placeholder="Ваша компания"
                name="company"
                id="company"
                className=""
              />
              <input
                data-v-0c6a522f=""
                placeholder="Ваше имя"
                name="name"
                id="name"
                className=""
              />
              <input
                data-v-0c6a522f=""
                type="tel"
                placeholder="Телефон"
                name="phone"
                id="phone"
                autoComplete="off"
                className=""
                inputMode="text"
              />
              <input
                data-v-0c6a522f=""
                placeholder="E-mail"
                name="email"
                id="email"
                className=""
              />
            </div>
            <div
              data-v-0c6a522f=""
              className={clsx(styles["main-form__right"])}
            >
              <textarea
                data-v-0c6a522f=""
                id="message"
                name="message"
                rows={1}
                placeholder="Описание задачи"
                style={{ height: 39 }}
                defaultValue={""}
              />
            </div>
          </div>
          <div data-v-0c6a522f="" className={clsx(styles["main-form__file"])}>
            <label data-v-0c6a522f="" className={clsx(styles["label-file"])}>
              Прикрепить файл
              <input
                data-v-0c6a522f=""
                type="file"
                name="file"
                id="file"
                className={clsx(styles["input-file"])}
              />
            </label>
            {/**/}
          </div>
          <div
            data-v-0c6a522f=""
            className={clsx(styles["main-form__control"])}
          >
            <div data-v-0c6a522f="" className={clsx(styles["ipasd"])} />
            <button
              data-v-0c6a522f=""
              className={clsx(styles["regular-btn btn-submit"])}
            >
              <span data-v-0c6a522f="">Отправить</span>
            </button>
          </div>
          <div
            data-v-0c6a522f=""
            id="myModal"
            className={clsx(styles["modal"])}
            style={{ display: "none" }}
          >
            <div data-v-0c6a522f="" className={clsx(styles["modal-content"])}>
              <span data-v-0c6a522f="" className={clsx(styles["close"])}>
                <img data-v-0c6a522f="" src="images/close.svg" alt="Закрыть" />
              </span>
              <div
                data-v-0c6a522f=""
                className={clsx(styles["modal-content__wrapper"])}
              >
                <h3 data-v-0c6a522f="">Спасибо!</h3>
                <p data-v-0c6a522f="">
                  Мы свяжемся с вами в течение рабочего дня
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form1;
