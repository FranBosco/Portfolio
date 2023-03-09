import React from 'react';
import './Home.css';
import foto from '../images/aaa.jpg';
import { TfiArrowCircleUp } from 'react-icons/tfi';

export default function Home() {
	return (
		<div className="sm:min-h-screen max-h-screen scroll-smooth text-white sm:text-4xl backhome sm:flex sm:flex-col h-screen pt-[15vh] sm:pt-[25vh] lg:pt-[15vh]">
			<div className="flex sm:ml-[30vw] flex-col sm:flex-row">
				<div className=" sm:foto">
					<img
						src={foto}
						alt=""
						className="sm:w-[50vw] lg:w-[26vw] w-[70vw] ml-[15vw] sm:ml-0 rounded-full  sm:mt-20 hover:shadow-xl hover:shadow-blue-400 fotoh "
					/>
				</div>

				<div className="pt-8 sm:pt-0 pb-6 sm:pb-0 ml-2 sm:ml-0 sm:container sm:text-5xl text-xl ">
					<div className="">
						<h1>
							Hi! i'm
							<div className="lista">
								<div className="item text-teal-300">Franco Bosco</div>
								<div className="item text-yellow-400">FullStack developer</div>
								<div className="item text-teal-500">Proactive</div>
								<div className="item text-indigo-400">Hard worker</div>
							</div>
						</h1>
					</div>
				</div>
			</div>
			<div className="container2  max-h-[40vh] flex justify-center h-fit">
				<p
					className="text-white 
				   sm:pt-5 xl:pt-10 press  hover:shadow-xl hover:shadow-blue-900 xl:text-xl  text-sm"
				>
					I'm a full stack developer, graduated from Henry in October 2022. In
					addition, I'm close to graduating with a Bachelor of Administration,
					at the National University of Mar del Plata - Argentina. I'm a
					proactive person, with ease for group work as well as the ability to
					learn quickly. My goal in the world of programming is to perfect the
					skills acquired in Henry's bootcamp and learn new technologies
					required in the market.{' '}
				</p>
			</div>
			{/* <div className="fixed sm:top-[80vh] left-[85vw]">
				<div></div>
				<div>
					<a href="#home">
						<TfiArrowCircleUp className="sm:text-6xl text-white" />
					</a>
				</div>
			</div> */}
		</div>
	);
}
