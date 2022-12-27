import React from "react";
import HeaderProject from "../components/HeaderProject/HeaderProject";
import EmailForm from "../components/EmailForm/EmailForm";
import Footer from "../components/Footer/Footer";

function projectview() {
  return (
    <div>
      <HeaderProject
        mark="Новое"
        name="Nebula ECN"
        description="Фирменный стиль, приложение, админка и промо-материалы для сервиса покупок в различных магазинах и управления их продажами"
      />
      <EmailForm />
      <Footer />
    </div>
  );
}

export default projectview;
