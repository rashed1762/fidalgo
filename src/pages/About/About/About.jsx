import React from 'react'
import img1 from '../../../assets/about1.jpg'
import img2 from '../../../assets/about2.jpg'
import img3 from '../../../assets/about3.jpg'
import './about.css'
import Bookevent from '../Bookevent/Bookevent'

const About = () => {
  return (
    <div className='bg-emerald-950'> 
        <div className="banner">
            
        </div>

        <section className='aboutinfo text-white mt-32 '>

            <div className='grid md:grid-cols-2 gap-4 pl-8 pr-8'>
                <div >
                <img  className='flex justify-end items-end aboutimg' src={img1} alt="" />
                </div>
                <div className=' '>
                    <div className='mt-16'>
                    <h1 className='text-4xl flex justify-center items-cente font-jost '>OUR GOALS & HISTORY</h1>
                    <p className='flex justify-center items-cente font-jost'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet repudiandae optio vero exercitationem dolore minus facilis ullam nobis commodi rerum assumenda aperiam iure unde nisi, neque eius ipsa laudantium delectus? Architecto quidem molestiae autem accusantium nam tempore, consequatur ad atque, amet omnis blanditiis vel facilis, voluptas fuga aliquam quas.</p>
                    </div>

                    <div className='grid md:grid-cols-2 gap-4 pl-8 pr-8 mt-16 font-jost'>
                        <div>
                        <img className='aboutimg2' src={img2} alt="" />
                        </div>
                        <div className='lg:mt-16 md:mt-1'>
                        <p>OPENING HOURS</p>
                        <p className='mt-4'>
                        Mon – thu: 10 am – 01 am</p>
                        <p className='mt-4'>
                        Fri – sun: 10 am – 020 am</p>
                        </div>

                    </div>
                  
                   
                </div>
            </div>

        </section>



        <section className='mt-48 text-white'>
        <div class="grid grid-cols-3 gap-4 ">
  
  <div className=" lg:mt-64 md:mt-4">
  <h1 className=' lg:text-5xl flex justify-center items-cente font-jost'>
    OUR FOOD
  </h1>
    <h1 className='lg:text-5xl md:text-2xl flex justify-center items-cente font-jost'>
    PHILOSOPHY
    </h1>

    <p className='flex justify-center items-cente font-jost  lg:mr-8 lg:ml-8 lg:mt-8 md:mr-1 md:ml-1 md:mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    Conse qu atip sum, nec sagittis dolor sit amet, consectetur adipis eng elit.
    </p>
    
  </div>
  <div className="col-span-2 ">
    <img src={img3} alt="" />
  </div>
</div>
        </section>

        <section>
          <Bookevent></Bookevent>
        </section>
    </div>
  )
}

export default About