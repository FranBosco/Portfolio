import './App.css';
import NavBar2 from './components/NavBar2';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
function App() {
	return (
		<div className="App">
			<NavBar2 />
			<section id="home">
				<Home />
			</section>
			<section id="proyects">
				<Projects />
			</section>
			<section id="about">
				<About />
			</section>
			<section id="skills">
				<Skills />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</div>
	);
}

export default App;
