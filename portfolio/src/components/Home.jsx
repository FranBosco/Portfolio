import React from 'react';
import './Home.css';
import foto from '../images/cajatest.jpg';

export default function Home() {
	return (
		<div className=" min-h-screen pt-[15vh] scroll-smooth   ">
			{/* <div className="flex justify-center">
				<img src={foto} alt="" className="foto" />
			</div>
			<div className="tipyngContainer">
				<section>
					<h1 className="tipyngName">Const name = Franco Bosco</h1>
				</section>
				<section>
					<h1 className="tipyngTittle">Let profesion = FullStack developer</h1>
				</section>
			</div> */}
			<img src={foto} alt="" className="w-56" />
			<h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
				hi, I'm <br className="block md:hidden" />
				<span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform ">
					Franco Bosco - FullStack developer
				</span>
			</h1>
		</div>
	);
}
