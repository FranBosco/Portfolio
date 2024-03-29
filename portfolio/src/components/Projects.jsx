import React from 'react';

import reserva from '../images/reserva.png';
import cvc from '../images/cvcami.png';
import invent from '../images/stock.png';
import './Projects.css';
// className=" sm:h-48 rounded-xl imgProy pb-2 sm:pb-0"  foto
// <div className=" flex flex-col sm:ml-5 border-2 border-blue-900 py-1 px-1 mr-1 rounded-xl sm:h-48 sm:w-[65vw]"> cuadro
export default function Projects() {
	return (
		<div className=" min-h-screen pt-[15vh] scroll-smooth text-white flex flex-col align-middle containerProy">
			<div className="sm:text-5xl text-2xl  flex justify-start mb-10 ml-20">
				My projects
			</div>
			<div className="sm:flex flex-row justify-center pb-6 sm:pb-0 px-4 sm:px-0">
				<div>
					<img
						src={reserva}
						alt=""
						className="sm:w-[20vw] rounded-xl imgProy pb-2 sm:pb-0 sm:h-48"
					/>
				</div>
				<div className=" flex flex-col sm:ml-5 border-2 border-blue-900 py-1 px-1 mr-1 rounded-xl sm:h-48 sm:w-[65vw]">
					<p className="sm:text-2xl sm:pb-2">La reserva App</p>
					<p className="text-sm">
						Web page oriented to a soccer complex that allows its users to
						register for tournaments and later access information about it. On
						the part of the administrators, they have several tools to maintain
						order within the page.
					</p>
					<p className="pt-1 text-sky-700 sm:mb-1">
						Tecnologies: JavaScript, React, Redux, Tailwind, Node, Express,
						Sequelize, Postgres, Mercadopago, Auth0, Cloudinary{' '}
					</p>
					<div className="flex justify-center">
						<button className="btn mr-4">
							<a
								href="https://henry-lareserva-front.vercel.app/"
								target="_blank"
								rel="noreferrer"
								className=""
							>
								See proyect
							</a>
						</button>
						<button className="btn">
							<a
								href="https://github.com/CristianLarrauri/Henry-LaReserva"
								target="_blank"
								rel="noreferrer"
								className=""
							>
								Repository
							</a>
						</button>
					</div>
				</div>
			</div>
			<div className="sm:flex flex-row-reverse justify-center sm:mt-10 pb-6 sm:pb-0 px-4 sm:px-0">
				<div>
					<img
						src={cvc}
						alt=""
						className="sm:w-[20vw] rounded-xl imgProy pb-2 sm:pb-0 sm:h-48"
					/>
				</div>
				<div className=" flex flex-col sm:mr-5 border-2 border-blue-900 py-1 px-1 mr-1 rounded-xl sm:h-48 sm:w-[65vw]">
					<p className="sm:text-2xl sm:pb-2">Resume</p>

					<p className="text-sm">
						Resume for graphic designer using Javascript, React and Tailwind
					</p>
					<p className="pt-1 text-sky-700 sm:mb-1">
						Tecnologies: JavaScript, React, Tailwind
					</p>
					<div className="flex justify-center">
						<button className="btn mr-4">
							<a
								href="https://curriculum-camila.vercel.app/"
								target="_blank"
								rel="noreferrer"
								className=""
							>
								See proyect
							</a>
						</button>
						<button className="btn">
							<a
								href="https://github.com/FranBosco/CurriculumCamila"
								target="_blank"
								rel="noreferrer"
								className=""
							>
								Repository
							</a>
						</button>
					</div>
				</div>
			</div>

			<div className="sm:flex flex-row justify-center mt-10 pb-6 sm:pb-0 px-4 sm:px-0">
				<div>
					<img
						src={invent}
						alt=""
						className="sm:w-[20vw] rounded-xl imgProy pb-2 sm:pb-0 sm:h-48"
					/>
				</div>
				<div className=" flex flex-col sm:ml-5 border-2 border-blue-900 py-1 px-1 mr-1 rounded-xl sm:h-48 sm:w-[65vw]">
					<p className="sm:text-2xl sm:pb-2 ">Stock manager</p>
					<p className="text-sm">
						Stock manager for inventory control of any type of company
					</p>
					<p className="pt-1 text-sky-700 sm:mb-1">
						Tecnologies: JavaScript, React, Redux, Tailwind, Node, Express,
						Sequelize, Postgres.
					</p>
					<div className="flex justify-center">
						<button className="btn mr-4">
							<a
								href="https://inventario-frontend-six.vercel.app/"
								target="_blank"
								rel="noreferrer"
								className=""
							>
								See proyect
							</a>
						</button>
						<button className="btn">
							<a
								href="https://github.com/FranBosco/inventarioFrontend"
								target="_blank"
								rel="noreferrer"
								className=""
							>
								Repository
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
