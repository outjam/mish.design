import React from "react";
import HeaderPage from "../components/HeaderPage/HeaderPage";
import Map from "../components/Contacts/Map";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <div>
      <HeaderPage name="Контакты" />
      <Map />
      <Footer />
    </div>
  );
}

export default Contact;
