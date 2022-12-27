import React from "react";
import HeaderUser from "../components/HeaderUser/HeaderUser";
import FilterPage from "../components/FilterPage/FilterPage";
import EmailForm from "../components/EmailForm/EmailForm";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";

function Profile() {
  return (
    <div>
      <HeaderUser
        position="3D-дизайнер"
        name="Алёна Бирюкова"
        data=" Работает с 9 сентября 2022"
        cover="https://vsegda-pomnim.com/uploads/posts/2022-02/1645922191_12-vsegda-pomnim-com-p-polyarnoe-siyanie-foto-13.jpg"
      />
      <FilterPage />
      <div className="projectGridPage">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <EmailForm />
      <Footer />
    </div>
  );
}

export default Profile;
