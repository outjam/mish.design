import React, {useEffect, useState} from 'react'
import HeaderPage from '../components/HeaderPage/HeaderPage'
import FilterPage from '../components/FilterPage/FilterPage'
import EmailForm from '../components/EmailForm/EmailForm'
import CardPost from '../components/Card/CardPost'
import Footer from '../components/Footer/Footer'
import {CmsApi} from "../services/strapi";
import blocksEnum from "../services/blocksEnum";

function Blog({ data }) {
    return (
        <div>
           <HeaderPage name="Блог" />
           <FilterPage />
           <div className="postGridPage">
               {data.map((value, index) => (<CardPost key={index} info={value.attributes.Blog[0]}/>))}
            </div>
           <EmailForm />
           <Footer />
        </div>
    )
}

export async function getStaticProps() {
    const { data } = await CmsApi.getSimpleContent(blocksEnum.Blogs)
    return {
        props: { data },
    }
}

export default Blog
