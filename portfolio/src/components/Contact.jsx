import React from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import './Contact.css';

export default function Contact() {
	const [input, setInput] = React.useState({
		user_name: '',
		user_email: '',
		user_message: ''
	});

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		});
		setFormErrors(
			validate({
				...input,
				[e.target.name]: e.target.value
			})
		);
	};

	const [formErrors, setFormErrors] = useState({});

	function validateName(str) {
		if (str.length < 1) return true;
	}

	function validateEmail(str) {
		if (
			!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				input.user_email
			)
		)
			return true;
	}

	function validateMessage(str) {
		if (str.length < 1) return true;
	}

	function validate(data) {
		let errors = {};
		if (validateName(data.user_name)) errors.user_name = 'Invalid name';
		if (validateEmail(data.user_email)) errors.user_email = 'Invalid email';
		if (validateMessage(data.user_message))
			errors.user_message = "the message can't be empty";

		return errors;
	}

	const sendEmail = (event) => {
		event.preventDefault();

		emailjs
			.sendForm(
				'service_v1mls1o',
				'template_azflutf',
				event.target,
				'jNEjyvd4_7xcd9GEv'
			)
			.then((response) => console.log(response))
			.catch((error) => console.log(error));

		alert('Mensaje enviado con exito');
		window.location.reload();
	};

	return (
		<div className="min-h-screen max-h-screen pt-[15vh] scroll-smooth flex justify-center containerContact ">
			<div className="flex flex-col">
				<h1 className="sm:text-5xl text-2xl mb-8 sm:mb-32 text-white">
					Contact Me:
				</h1>
				<form
					className="border-2 border-blue-700  w-[80vw] sm:w-[40vw] px-2 py-4  sm:py-8 sm:px-10 flex flex-col"
					onSubmit={sendEmail}
				>
					<label className="sm:text-2xl text-white">Name: </label>

					<input
						type="text"
						name="user_name"
						className="sm:px-15  bg-slate-200 font-bold pl-2"
						onChange={handleChange}
					/>

					<label className="sm:text-2xl text-white">Email</label>
					<input
						type="email"
						name="user_email"
						className="sm:px-15 sm:pl-2 bg-slate-200 font-bold"
						onChange={handleChange}
					/>

					<label className="sm:text-2xl text-white">Message</label>
					<textarea
						name="user_message"
						id=""
						cols="30"
						rows="10"
						className="sm:px-15 bg-slate-200 px-2 pt-2"
						onChange={handleChange}
					></textarea>

					{formErrors.user_email ||
					formErrors.user_name ||
					formErrors.user_message ||
					input.user_name === '' ||
					input.user_email === '' ||
					input.user_message === '' ? (
						<h1 className="text-white">
							Please, complete your name, email and message correctly
						</h1>
					) : (
						<div className="flex justify-center pt-4">
							<button className="w-[60vw] h-fit sm:w-fit sm:px-4 sm:py-2 p-1 font-normal border-2 border-blue-300 rounded-xl text-blue-300 hover:bg-gradient-to-r from-blue-400 to-black hover:cursor-pointer">
								Send email
							</button>
						</div>
					)}
				</form>
			</div>
		</div>
	);
}
