import React from 'react';
import './About.css';
export default function About() {
	return (
		<div>
			<div className=" min-h-screen pt-[10vh] scroll-smooth text-white bg-black containerbg sm:pl-10 sm:pr-10">
				<h1 className="sm:text-5xl text-3xl ml-4 sm:ml-0 mb-4 sm:mb-10">
					About Me
				</h1>
				<div className="flex justify-center">
					<p className="sm:text-xl mb-6 sm:mb-0  ">
						Full Stack Developer with training as a Web Designer. Experience
						working in NodeJS, React, Redux, SQL among other technologies in the
						sector.
					</p>
				</div>
				<div className="flex sm:mt-20 sm:justify-around flex-col sm:flex-row ">
					<div className="sm:border-2 sm:border-white px-4 sm:px-6 sm:py-4 sm:rounded-lg bg-black bg-opacity-75">
						<h2 className="text-2xl sm:text-4xl font-bold sm:mb-4 text-blue-700">
							Education
						</h2>
						<div className="sm:border-2 sm:border-blue-600 rounded-lg pb-4 sm:pb-0">
							<h3 className="sm:text-3xl text-xl font-bold pb-2 sm:pb-4">
								- FullStack Developer
							</h3>
							<h4 className="sm:text-2xl sm:pb-4">Bootcamp SoyHenry</h4>
							<p className="sm:w-[30vw]">
								I worked on the creation of a web page for a sports complex to
								manage registrations for amateur soccer tournaments, as well as
								their administration by the complex.
							</p>
						</div>
						<div className="sm:border-2 sm:border-blue-600 rounded-lg sm:mt-8">
							<h3 className="sm:text-3xl font-bold sm:pb-4 text-xl ">
								- Bachelor of Business Administration
							</h3>
							<h4 className="sm:text-2xl sm:pb-4">
								National University of Mar del Plata
							</h4>
							<p className="sm:w-[30vw]">
								{' '}
								I am currently in my last year of studies.
							</p>
						</div>
					</div>
					<div className="sm:border-2 sm:border-white sm:px-6 sm:py-4 sm:rounded-lg bg-black bg-opacity-75">
						<h2 className="sm:text-4xl text-2xl font-bold sm:mb-4 text-blue-700">
							Personal Skills
						</h2>
						<ul className="sm:border-2 sm:border-blue-600 rounded-lg sm:pt-8 sm:pb-4">
							<li className="sm:text-xl sm:pb-3">- Teamwork</li>
							<li className="sm:text-xl sm:pb-3">- Conflict Resolution</li>
							<li className="sm:text-xl sm:pb-3">- Communication</li>
							<li className="sm:text-xl sm:pb-3">- Customer orientation</li>
							<li className="sm:text-xl sm:pb-3">- Work organization</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
