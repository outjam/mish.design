import React from "react";
import CompanyMain from "../components/Company/CompanyMain";
import CompanyMisha from "../components/Company/CompanyMisha";
import CompanyTeam from "../components/Company/CompanyTeam";
import CompanyAwards from "../components/Company/CompanyAwards";
import EmailForm from "../components/EmailForm/EmailForm";
import Footer from "../components/Footer/Footer";
import {CmsApi} from "../services/strapi";
import blocksEnum from "../services/blocksEnum";

function Company({employers, awards}) {
  return (
    <div>
      <CompanyMain />
      <CompanyMisha />
      <CompanyTeam employers={employers}/>
      <CompanyAwards awards={awards}/>
      <EmailForm />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
    const employers = await CmsApi.getSimpleContent(blocksEnum.Team)
    const awards = await CmsApi.getSimpleContent(blocksEnum.Award)
    return {
        props: { employers: employers.data, awards: awards.data },
    }
}

export default Company;
