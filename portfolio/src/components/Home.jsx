import React from 'react';
import './Home.css';
import foto from '../images/cajatest.jpg';

export default function Home() {
	return (
		<div className="min-h-screen pt-[15vh] scroll-smooth text-white text-4xl ml-[10%] grid grid-cols-2	  ">
		<div>
	    <div className="foto"> 
	    <img src={foto} alt='' className='w-72 rounded-full flex justify-center  mt-20 '/>
        </div>
		
		  <div className='container'>
            <div>
              <h1>Hi! i'm
                <div className='lista'>
                  <div className='item'>
                  Franco Bosco
                  </div>
                   <div className='item'>
                  FullStack developer
                  </div>
                   <div className='item'>
                  Proactive
                  </div>
                   <div className='item'>
                  Hard worker
                  </div>
                </div>
              </h1>
             </div>
		</div>
		</div>
		<div className='press'>
		<p className='sm:h-[80vh] text-white text-xl sm:mr-[10vw] sm:mt-[6vh] sm:py-6 sm:px-6 sm:mt-[13vh] '>
I'm a full stack developer, graduated from Henry in October 2022. In addition, I'm close to graduating with a Bachelor of Administration, at the National University of Mar del Plata - Argentina. I'm a proactive person, with ease for group work as well as the ability to learn quickly. My goal in the world of programming is to perfect the skills acquired in Henry's bootcamp and learn new technologies required in the market. </p>
		</div>		
		</div>
	);
}
