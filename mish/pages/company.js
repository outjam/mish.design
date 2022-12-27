import React from "react";
import CompanyMain from "../components/Company/CompanyMain";
import CompanyMisha from "../components/Company/CompanyMisha";
import CompanyTeam from "../components/Company/CompanyTeam";
import CompanyAwards from "../components/Company/CompanyAwards";
import EmailForm from "../components/EmailForm/EmailForm";
import Footer from "../components/Footer/Footer";

function Company() {
  return (
    <div>
      <CompanyMain />
      <CompanyMisha />
      <CompanyTeam />
      <CompanyAwards />
      <EmailForm />
      <Footer />
    </div>
  );
}

export default Company;
