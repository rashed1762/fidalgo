import React from 'react'
import Banner from './Homecomp/Banner/Banner'
import Productcard from './Homecomp/Categorycard/Productcard'
import PopularMenu from './PopularMenu/PopularMenu'
import img1 from '../../assets/h4-icon-img1 (1).png'
import img2 from '../../assets/h4-icon-img2.png'
import img3 from '../../assets/h4-icon-img3.png'
import img4 from '../../assets/h4-icon-img4.png'
import img5 from '../../assets/h4-icon-img5.png'
import video1 from '../../assets/sushi-video-1.mp4'
import logo from '../../assets/h4-logo-footer.png'
import BookTable from './BookTable/BookTable'
import Bannerinfo from './Bannerinfo/Bannerinfo'
import Items from './Items/Items'
import { Helmet } from 'react-helmet-async'


const Home = () => {
  return (
    <div className='bg-black text-white'>
      <Helmet>
        <title>Fidalgo | Home</title>
      </Helmet>
		<Banner></Banner>
    
    <h1 className='flex justify-center items-center mt-24 font-cormorant'>EXPLORE BY SUSHI</h1>
    <h1 className='flex flex justify-center items-center max-w-screen-xl mx-auto text-5xl tagbanner mt-6 font-cormorant font-bold'>OMAKASE <span className=' ml-4 mr-4'><img src={img1} alt="" /></span> NIGIRI
    EBI <span className=' ml-4 mr-4' ><img src={img2} alt="" /></span>  </h1>
    <h1 className='flex flex justify-center items-center max-w-screen-xl mx-auto text-5xl tagbanner mt-8 font-cormorant font-bold'  >SUSHI
    MAKI <span className=' ml-4 mr-4'><img src={img3} alt="" /></span> SASHIMI
    SETS <span className=' ml-4 mr-4'><img src={img4} alt="" /></span></h1>
    <h1 className='flex flex justify-center items-center max-w-screen-xl mx-auto text-5xl tagbanner mt-4 font-cormorant font-bold'>SIDE
    DISH <span className=' ml-4 mr-4'><img src={img5} alt="" /></span></h1>

    <BookTable></BookTable>
		
    <PopularMenu></PopularMenu>

    <section className='mt-24'>
      <div className=''>
      <video  src={video1} autoPlay loop muted>

      </video>
      
      </div>
    
    </section>
    <Items></Items>
    <Bannerinfo></Bannerinfo>
	</div>
  )
}


export default Home





