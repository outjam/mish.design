import React from "react";
import CardBrand from "../Card/CardBrand";
import ButtonBlue from "../Button/ButtonBlue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function ServiceMain() {
  useEffect(() => {
    gsap.to(".unionProductDesign-video", {
      duration: 10,
      scrollTrigger: {
        trigger: ".serviceMain_Content_Headline",
        start: "top",
        end: "bottom ",
        scrub: 3,
      },
      y: "10vh",
      rotate: "-5deg",
    });
  }, []);

  return (
    <div className="serviceMain">
      <nav className="serviceMain_Navigation">
        <ul>
          <li>Продуктовый дизайн</li>
          <li>Коммуникативный дизайн</li>
          <li>Разработка продукта</li>
          <li>Предпроектные исследования</li>
        </ul>
      </nav>
      <div className="serviceMain_Content_List">
        <div className="serviceMain_Content">
          <div className="serviceMain_Content_Headline">
            <h1>
              Продуктовый
              <br />
              дизайн
            </h1>
            <span className="serviceMain_Content_Logo-Unit unionProductDesign"></span>
            <span className="unionProductDesign-video">
              <video
                className="unionProductDesign-video"
                src="https://culture3k.com/imac.mp4"
                muted
                autoPlay={"autoplay"}
                preLoad="auto"
                control="false"
                loop
              />
            </span>
          </div>
          <div className="serviceMain_Content_Description">
            <p>
              Проектирование личных кабинетов, сложные интерфейсы, адаптивный
              веб-дизайн, бизнес-системы и дизайн мобильных приложений любой
              сложности.
            </p>
            <div className="serviceMain_Content_Description_tag">
              <ul>
                <li>Ux</li>
                <li>Ui</li>
                <li>Mobile</li>
                <li>Desktop</li>
                <li>Research</li>
                <li>Analysis</li>
              </ul>
            </div>
          </div>
          <div className="serviceMain_Content_Service-Info">
            <h4>Услуги юнита</h4>
            <ul>
              <li>
                <p>Проектирование интерфейсов сайтов, систем и приложений</p>
              </li>
              <li>
                <p>
                  Проведение UX аудита текущих решений и выявление проблем в
                  интерфейсе
                </p>
              </li>
              <li>
                <p>Проведение исследований</p>
              </li>
              <li>
                <p>
                  Проведение юзабилити-тестирования для улучшения текущих и
                  новых решений
                </p>
              </li>
              <li>
                <p>
                  Работа с аналитикой и улучшение текущих показателей бизнеса
                </p>
              </li>
              <li>
                <p>Консалтинг в сфере UX и UI</p>
              </li>
            </ul>
          </div>
          <div className="serviceMain_Content_Service-Brand">
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
          </div>
          <ButtonBlue name="Подробнее о юните" />
        </div>
        <div className="serviceMain_Content">
          <div className="serviceMain_Content_Headline">
            <h1>
              Коммуникативный
              <br />
              дизайн
            </h1>
            <span className="serviceMain_Content_Logo-Unit unionCoommunicationtDesign"></span>
          </div>
          <div className="serviceMain_Content_Description">
            <p>
              Работа с брендом, поддержка медиа, рекламные креативы и лендинги,
              видеопродакшен, копирайтинг
            </p>
            <div className="serviceMain_Content_Description_tag">
              <ul>
                <li>Social Networks</li>
                <li>Copywriting</li>
                <li>Graphic</li>
                <li>Brand</li>
                <li>Logo</li>
                <li>Videoproduction</li>
              </ul>
            </div>
          </div>
          <div className="serviceMain_Content_Service-Info">
            <h4>Услуги юнита</h4>
            <ul>
              <li>
                <p>Создание бренда: нейминг, логотип, фирменный стиль</p>
              </li>
              <li>
                <p>
                  Медийная поддержка на разных этапах: оформление соцсетей,
                  баннеры, размещение на всех цифровых носителях
                </p>
              </li>
              <li>
                <p>Яркая и стильная графика: иллюстрации, анимации, 3D</p>
              </li>
              <li>
                <p>Лендинги любых форматов</p>
              </li>
              <li>
                <p>
                  Полный цикл видеопродакшена: от сценария до итогового ролика
                </p>
              </li>
              <li>
                <p>Mini Apps: имиджевые мини-приложения, мини-игры</p>
              </li>
              <li>
                <p>
                  Копирайтинг: контентное продвижение, креативы, рекламные
                  тексты, бизнес-презентации
                </p>
              </li>
            </ul>
          </div>
          <div className="serviceMain_Content_Service-Brand">
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
          </div>
          <ButtonBlue name="Подробнее о юните" />
        </div>
        <div className="serviceMain_Content">
          <div className="serviceMain_Content_Headline">
            <h1>
              Разработка
              <br />
              продукта
            </h1>
            <span className="serviceMain_Content_Logo-Unit unionDevelopDesign"></span>
          </div>
          <div className="serviceMain_Content_Description">
            <p>Разработка веб-сервисов и приложений с нуля</p>
            <div className="serviceMain_Content_Description_tag">
              <ul>
                <li>Web</li>
                <li>App</li>
                <li>Frontend</li>
                <li>Backend</li>
                <li>Landing</li>
                <li>React</li>
              </ul>
            </div>
          </div>
          <div className="serviceMain_Content_Service-Info">
            <h4>Услуги юнита</h4>
            <ul>
              <li>
                <p>SPA</p>
              </li>
              <li>
                <p>PWA</p>
              </li>
              <li>
                <p>Real-time веб-приложения</p>
              </li>
              <li>
                <p>VK Mini Apps</p>
              </li>
              <li>
                <p>Сайты</p>
              </li>
              <li>
                <p>Лендинги</p>
              </li>
              <li>
                <p>Админки</p>
              </li>
              <li>
                <p>Личные кабинеты</p>
              </li>
            </ul>
          </div>
          <div className="serviceMain_Content_Service-Brand">
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
          </div>
          <ButtonBlue name="Подробнее о юните" />
        </div>
        <div className="serviceMain_Content">
          <div className="serviceMain_Content_Headline">
            <h1>
              Предпроектные
              <br />
              исследования
            </h1>
            <span className="serviceMain_Content_Logo-Unit unionReSearchDesign"></span>
          </div>
          <div className="serviceMain_Content_Description">
            <p>
              Исследования пользовательского опыта, аналитика, тестирование
              гипотез
            </p>
            <div className="serviceMain_Content_Description_tag">
              <ul>
                <li>Usability test</li>
                <li>Castdev</li>
                <li>CJM</li>
                <li>Audit</li>
                <li>Competition Analysis</li>
                <li>Interview</li>
              </ul>
            </div>
          </div>
          <div className="serviceMain_Content_Service-Info">
            <h4>Услуги юнита</h4>
            <ul>
              <li>
                <p>AB-тестирование </p>
              </li>
              <li>
                <p>Юзабилити-тестирование</p>
              </li>
              <li>
                <p>
                  Качественное исследование (проблемные, глубинные и решенческие
                  интервью)
                </p>
              </li>
              <li>
                <p>Экспертный обзор / аудит</p>
              </li>
              <li>
                <p>Продуктовая аналитика (анализ ЦА, анализ конкурентов)</p>
              </li>
              <li>
                <p>Айтрекинг</p>
              </li>
              <li>
                <p>Анализ метрик</p>
              </li>
              <li>
                <p>Количественный анализ / Опрос</p>
              </li>
            </ul>
          </div>
          <div className="serviceMain_Content_Service-Brand">
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
            <CardBrand name="Логотип" />
          </div>
          <ButtonBlue name="Подробнее о юните" />
        </div>
      </div>
    </div>
  );
}

export default ServiceMain;
