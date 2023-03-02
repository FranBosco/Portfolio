import React from 'react';

export default function NavBar() {
	return (
		<div className="absolute h-[10vh] min-h-fit">
			<div className=" bg-gradient-to-b from-black	 to-blue-900  w-screen max-w-screen flex justify-between border-b-2 border-black fixed pb-4 pt-4 border-x-indigo-900">
				<div className="flex justify-start text-5xl ml-20 mt-2  text-white">
					<a href="/">
						<h1>Franco Bosco</h1>
					</a>
				</div>
				<div className="flex space-x-10 justify-end pt-[2vh]  mr-10 text-xl  ">
					<ul className="flex space-x-7  text-white">
						<li className="hover:underline hover:underline-offset-4 hover:decoration-yellow-400">
							<a href="#home"> Home</a>
						</li>
						<li className="hover:underline hover:underline-offset-4 hover:decoration-yellow-400">
							<a href="#about"> About</a>
						</li>
						<li className="hover:underline hover:underline-offset-4 hover:decoration-yellow-400">
							<a href="#proyects"> Proyects</a>
						</li>
						<li className="hover:underline hover:underline-offset-4 hover:decoration-yellow-400">
							<a href="#skills"> Skills</a>
						</li>

						<li className="hover:underline hover:underline-offset-4 hover:decoration-yellow-400">
							<a href="#contact"> Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
