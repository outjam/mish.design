import SliderPage from "../components/Home/SliderPage/SliderPage"
import BrandPage from "../components/Home/BrandPage/BrandPage"
import TagPage from "../components/Home/TagPage/TagPage"
import PostGridPage from '../components/Home/PostGridPage/PostGridPage'
import EmailForm from '../components/EmailForm/EmailForm'
import Footer from '../components/Footer/Footer'

import { useEffect } from 'react';
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import {CmsApi} from "../services/strapi";
import blocksEnum from "../services/blocksEnum";
MouseFollower.registerGSAP(gsap);


export default function Home({ brands, projects, tags }) {

  useEffect(() => {
    const cursor = new MouseFollower({
      speed: 1
  });
  })
  
  return (
    <div> 
        <SliderPage />
        <BrandPage brands={brands}/>
        <PostGridPage projects={projects}/>
        <TagPage tags={tags}/>
        <EmailForm />
        <Footer />
    </div>
  )
}

export async function getStaticProps() {
    const brands  = await CmsApi.getSimpleContent(blocksEnum.Brands)
    const projects  = await CmsApi.getSimpleContent(blocksEnum.Projects)
    const tags = await CmsApi.getSimpleContent(blocksEnum.Tags)
    return {
        props: { brands: brands.data, projects: projects.data, tags: tags.data },
    }
}
