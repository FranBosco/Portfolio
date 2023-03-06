import './App.css';
import NavBar from './components/NavBar.jsx';
import About from './components/About';
import Skills from './components/Skills';
import Proyects from './components/Proyects';
import Contact from './components/Contact';
import Home from './components/Home';
function App() {
	return (
		<div className="App">
			<NavBar />
			<section id="home">
				<Home />
			</section>
			<section id="about">
				<About />
			</section>
			<section id="proyects">
				<Proyects />
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