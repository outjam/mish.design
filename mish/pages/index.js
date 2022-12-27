import SliderPage from "../components/Home/SliderPage/SliderPage"
import BrandPage from "../components/Home/BrandPage/BrandPage"
import TagPage from "../components/Home/TagPage/TagPage"
import PostGridPage from '../components/Home/PostGridPage/PostGridPage'
import EmailForm from '../components/EmailForm/EmailForm'
import Footer from '../components/Footer/Footer'

import { useEffect } from 'react';
import MouseFollower from "mouse-follower";
import gsap from "gsap";
MouseFollower.registerGSAP(gsap);


export default function Home() {

  useEffect(() => {
    const cursor = new MouseFollower({
      speed: 1
  });
  })
  
  return (
    <div> 
        <SliderPage />
        <BrandPage />
        <PostGridPage />
        <TagPage />
        <EmailForm />
        <Footer />
    </div>
  )
}
