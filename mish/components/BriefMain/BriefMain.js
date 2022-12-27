import React from "react";
import Button from "../Button/Button";

function BriefMain() {
  return (
    <div className="briefMain">
      <h1>
        Расскажите коротко
        <br />о вашей задаче
      </h1>

      <form>
        <h6>Контактные данные</h6>
        <div className="input">
          <label for="fname">Имя и Фамилия</label>
          <input type="text" id="fname" name="fname"></input>
        </div>
        <div className="input">
          <label for="fname">Электронная почта</label>
          <input type="text" id="fname" name="fname"></input>
        </div>
        <div className="input">
          <label for="fname">Телефон</label>
          <input type="text" id="fname" name="fname"></input>
        </div>
        <div className="input">
          <label for="fname">Компания</label>
          <input type="text" id="fname" name="fname"></input>
        </div>
      </form>

      <form>
        <h6>Услуги</h6>
        <div id="selectedBriefList">
          <button class="selectedBrief">Аудит БП и UX‑аналитика</button>
          <button class="selectedBrief active">UX‑тестирование</button>
          <button class="selectedBrief">Разработка</button>
          <button class="selectedBrief">Дизайн интерфейсов</button>
          <button class="selectedBrief">Веб‑разработка и интеграции</button>
          <button class="selectedBrief">Другое</button>
        </div>
      </form>

      <form>
        <h6>Бюджет</h6>
        <div id="selectedBriefList">
          <button class="selectedBrief">Менее 1 млн</button>
          <button class="selectedBrief active">1 – 3 млн</button>
          <button class="selectedBrief">3 – 5 млн</button>
          <button class="selectedBrief">5 – 10 млн</button>
          <button class="selectedBrief">10 – 25 млн</button>
          <button class="selectedBrief">Более 25 млн</button>
        </div>
      </form>

      <form>
        <h6>Откуда вы узнали о нас?</h6>
        <div id="selectedBriefList">
          <button class="selectedBrief">Рейтинги</button>
          <button class="selectedBrief active">Рекомендации</button>
          <button class="selectedBrief">Работы</button>
          <button class="selectedBrief">СМИ</button>
          <button class="selectedBrief">Соцсети</button>
          <button class="selectedBrief">Другое</button>
        </div>
      </form>

      <Button name="Отправить"></Button>
      <form>
        <p className="privacyInfoForm">
          Я согласен (на) с политикой конфиденциальности и даю согласие на
          обработку персональных данных
        </p>
      </form>
    </div>
  );
}

export default BriefMain;
