import { useState, useEffect } from 'react';
import {
	Navbar,
	MobileNav,
	Typography,
	IconButton
} from '@material-tailwind/react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

export default function Example() {
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const navList = (
		<ul className=" flex flex-col lg:mb-0 lg:mt-0 lg:flex-row  lg:gap-6 w-full">
			<Typography
				as="li"
				variant="medium"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<a href="#home" className="flex items-center">
					Home
				</a>
			</Typography>
			<Typography
				as="li"
				variant="medium"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<a href="#proyects" className="flex items-center">
					Proyects
				</a>
			</Typography>
			<Typography
				as="li"
				variant="medium"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<a href="#about" className="flex items-center">
					About
				</a>
			</Typography>
			<Typography
				as="li"
				variant="medium"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<a
					rel="noreferrer"
					href="#skills"
					className="p-1 font-normal flex items-center"
				>
					Skills
				</a>
			</Typography>
			<Typography
				as="li"
				variant="medium"
				color="blue-gray"
				className="p-1 font-normal "
			>
				<a
					rel="noreferrer"
					href="#contact"
					className="p-1 font-normal flex items-center"
				>
					Contact
				</a>
			</Typography>
			<Typography
				as="li"
				variant="medium"
				color="blue-gray"
				className="p-1 font-normal "
			>
				<a
					rel="noreferrer"
					href="#contact"
					className="p-1 font-normal flex items-center"
				>
					<BsLinkedin className="text-blue-300 text-3xl" />
				</a>
			</Typography>
			<Typography
				as="li"
				variant="medium"
				color="blue-gray"
				className="p-1 font-normal "
			>
				<a
					rel="noreferrer"
					href="#contact"
					className="p-1 font-normal flex items-center"
				>
					<BsGithub className="text-blue-300 text-3xl" />
				</a>
			</Typography>
			<Typography
				as="li"
				variant="medium"
				color="blue-gray"
				className="w-[60vw] h-fit sm:w-auto p-1 font-normal border-2 border-blue-300 rounded-xl text-blue-300 hover:bg-gradient-to-r from-blue-400 to-black hover:cursor-pointer"
			>
				Download Cv
			</Typography>
		</ul>
	);

	return (
		<Navbar className="mx-auto  lg:px-8  bg-gradient-to-b from-blue-900 to-black opacity-95 sm:text-2xl fixed z-50 h-fit pb-4 sm:pb-0 sm:h-[10vh] xl:h-[12vh] w-full ">
			<div className=" mx-auto flex  justify-between mt-[3vh] text-blue-gray-900 pr-80 sm:pr-0  sm:pt-0  ">
				<Typography
					as="a"
					href="#"
					variant="small"
					className="mr-4 cursor-pointer py-1.5 font-normal"
				></Typography>
				<div className="hidden lg:block">{navList}</div>

				<IconButton
					variant="text"
					className="sm:ml-auto mb-5 sm:mb-0 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							className="h-6 w-6"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
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
				</IconButton>
			</div>

			<MobileNav open={openNav}>{navList}</MobileNav>
		</Navbar>
	);
}
