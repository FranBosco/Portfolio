import { useState } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

export default function NavBar() {
	const [navbar, setNavbar] = useState(false);

	return (
		<nav className="w-full  bg-gradient-to-b from-blue-900 to-black  shadow fixed z-50 rounded-lg opacity-90 text-white">
			<div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
				<div>
					<div className="flex items-center  justify-around py-3 md:py-5 md:block">
						<h2 className="text-2xl sm:text-4xl font-bold">Franco Bosco</h2>

						<div className="md:hidden">
							<button
								className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
								onClick={() => setNavbar(!navbar)}
							>
								{navbar ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
							navbar ? 'block' : 'hidden'
						} `}
					>
						<ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 sm:text-2xl">
							<li className=" hover:text-blue-600">
								<a href="#home">Home</a>
							</li>
							<li className=" hover:text-blue-600">
								<a href="#proyects">Proyects</a>
							</li>
							<li className=" hover:text-blue-600">
								<a href="#about">About </a>
							</li>
							<li className=" hover:text-blue-600">
								<a href="#skills">Skills</a>
							</li>
							<li className=" hover:text-blue-600">
								<a href="#contact">Contact</a>
							</li>
							<li className=" hover:text-blue-600 flex justify-center">
								<a
									href="https://www.linkedin.com/in/franco-bosco-677a62238\"
									target="_blank"
									rel="noreferrer"
								>
									<BsLinkedin className="text-blue-300 text-3xl" />
								</a>
							</li>
							<li className=" hover:text-blue-600 flex justify-center">
								<a
									href="https://github.com/FranBosco"
									target="_blank"
									rel="noreferrer"
								>
									<BsGithub className="text-blue-300 text-3xl" />
								</a>
							</li>
							<li>
								<button className="w-[60vw] h-fit sm:w-auto p-1 font-normal border-2 border-blue-300 rounded-xl text-blue-300 hover:bg-gradient-to-r from-blue-400 to-black hover:cursor-pointer">
									Download Cv
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
