import React from "react";
import HeaderProject from "../components/HeaderProject/HeaderProject";
import EmailForm from "../components/EmailForm/EmailForm";
import Footer from "../components/Footer/Footer";
import {CmsApi} from "../services/strapi";
import blocksEnum from "../services/blocksEnum";

function projectview({ data }) {
  return (
    <div>
      <HeaderProject
        mark={data.attributes.Project[0].Mark}
        name={data.attributes.Project[0].Title}
        description={data.attributes.Project[0].Description}
        tags={data.attributes.Project[0].Tags}
        image={data.attributes.Project[0].BackgroundImage.data.attributes.url}
      />
      <EmailForm />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
    const { data }  = await CmsApi.getContentById(blocksEnum.Projects, context.query.id)
    return {
        props: { data },
    }
}

export default projectview;
