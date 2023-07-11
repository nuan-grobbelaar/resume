import logo from "./logo.svg";
import "./App.css";

import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { navActions } from "./store/nav.js";

import NavBar from "./components/ui/NavBar";
import FrontPage from "./components/FrontPage";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";

function App() {
	const dispatch = useDispatch();
	const selected = useSelector((state) => state.nav.selected);

	const home = useRef(null);
	const experience = useRef(null);
	const skills = useRef(null);
	const about = useRef(null);

	const sections = {
		home: {
			ref: home,
			navButton: {
				name: "home",
				color: "#F79900",
				rotation: -1,
			},
			section: <FrontPage index={0} />,
		},
		experience: {
			ref: experience,
			navButton: {
				name: "experience",
				color: "#C637E3",
				rotation: 2,
			},
			section: <Experience index={1} />,
		},
		skills: {
			ref: skills,
			navButton: {
				name: "skills",
				color: "#36BCFF",
				rotation: 1,
			},
			section: <Skills index={2} />,
		},
		about: {
			ref: about,
			navButton: {
				name: "about",
				color: "#F13A3A",
				rotation: -1,
			},
			section: <AboutMe index={3} />,
		},
	};

	useEffect(() => {
		if (selected && selected !== "") {
			window.scrollTo({
				top: sections[selected].ref.current.offsetTop,
				behavior: "smooth",
			});
		}
	}, [selected]);

	return (
		<div className="App">
			<NavBar sections={sections} />
			{Object.values(sections).map((section) => {
				return <section ref={section.ref}>{section.section}</section>;
			})}
		</div>
	);
}

export default App;
