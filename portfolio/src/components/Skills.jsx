import React from 'react';
import './Skills.css';
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { SiSequelize } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';

export default function Skills() {
	return (
		<div className="containerSkills min-h-screen max-h-screen pt-[15vh] scroll-smooth text-white">
			<h1 className="sm:text-5xl text-2xl  flex justify-start mb-10 ml-20">
				Skills
			</h1>
			<div className="grid grid-cols-1 ml-10 sm:grid-cols-3 sm:ml-10 sm:mt-20">
				<div className="flex text-4xl sm:text-5xl mb-5 sm:mb-16 text-yellow-500 logos">
					<SiJavascript className="sm:mr-4 " />
					<h3>Javascript</h3>
				</div>
				<div className="flex  text-4xl sm:text-5xl mb-5 sm:mb-16 text-blue-600 logos">
					<SiTypescript className="sm:mr-4 " />
					<h3>Typescript</h3>
				</div>
				<div className="flex  text-4xl sm:text-5xl mb-5 sm:mb-16 text-cyan-500 logos">
					<FaReact className="sm:mr-4 " />
					<h3>React</h3>
				</div>
				<div className="flex text-4xl sm:text-5xl mb-5 sm:mb-16 text-violet-700 logos">
					<SiRedux className="sm:mr-4 " />
					<h3>Redux</h3>
				</div>
				<div className="flex text-4xl sm:text-5xl mb-5 sm:mb-16  text-cyan-500 logos">
					<SiTailwindcss className="sm:mr-4 " />
					<h3>Tailwind</h3>
				</div>
				<div className="flex text-4xl sm:text-5xl mb-5 sm:mb-16 text-green-500 logos">
					<FaNode className="sm:mr-4 " />
					<h3>Node</h3>
				</div>
				<div className="flex text-4xl sm:text-5xl mb-5 sm:mb-16 text-blue-600 logos">
					<SiPostgresql className="sm:mr-4 " />
					<h3>Postgresql</h3>
				</div>
				<div className="flex  text-4xl sm:text-5xl mb-5 sm:mb-16 text-blue-500 logos">
					<SiSequelize className="sm:mr-4 " />
					<h3>Sequelize</h3>
				</div>
				<div className="flex  text-4xl sm:text-5xl mb-5 sm:mb-16 text-blue-500 logos">
					<SiCss3 className="sm:mr-4 " />
					<h3>Css</h3>
				</div>
			</div>
		</div>
	);
}
