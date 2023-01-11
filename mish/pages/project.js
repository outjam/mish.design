import React from "react";
import HeaderPage from "../components/HeaderPage/HeaderPage";
import FilterPage from "../components/FilterPage/FilterPage";
import EmailForm from "../components/EmailForm/EmailForm";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import {CmsApi} from "../services/strapi";
import blocksEnum from "../services/blocksEnum";

function Project({ data }) {
  return (
    <div>
      <HeaderPage name="Проекты" />
      <FilterPage />
      <div className="projectGridPage">
        {
          data.map((value) => (<Card project={value}/>))
        }
      </div>
      <EmailForm />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
    const { data }  = await CmsApi.getSimpleContent(blocksEnum.Projects)
    return {
        props: { data },
    }
}

export default Project;
