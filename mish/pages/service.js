import React from "react";
import ServiceMain from "../components/ServiceMain/ServiceMain";
import EmailForm from "../components/EmailForm/EmailForm";
import Footer from "../components/Footer/Footer";
import {CmsApi} from "../services/strapi";
import blocksEnum from "../services/blocksEnum";

function Service({ data }) {
  return (
    <div>
      <ServiceMain services={data}/>
      <EmailForm />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
    const { data }  = await CmsApi.getSimpleContent(blocksEnum.Units)
    return {
        props: { data },
    }
}
export default Service;
