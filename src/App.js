import logo from "./logo.svg";
import "./App.css";

import React, { useRef, useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import NavBar from "./components/ui/NavBar";
import FrontPage from "./components/FrontPage";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Cover from "./components/Cover";

function App() {
	const page = useSelector((state) => state.nav.page);

	const home = useRef(null);
	const experience = useRef(null);
	const skills = useRef(null);
	const about = useRef(null);

	const [sections, setSections] = useState({
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
		contact: {
			ref: about,
			navButton: {
				name: "contact",
				color: "#F13A3A",
				rotation: -1,
			},
			section: <Contact index={3} />,
		},
	});

	// useEffect(() => {
	// 	window.scrollTo({
	// 		top: sections["home"].ref.current.offsetTop,
	// 		behavior: "smooth",
	// 	});
	// }, []);

	useEffect(() => {
		if (page && page !== "") {
			window.scrollTo({
				top: sections[page].ref.current.offsetTop,
				behavior: "smooth",
			});
		}
	}, [page]);

	const renderedSections = useMemo(() => {
		return (
			<>
				<NavBar sections={sections} />
				{Object.values(sections).map((section, i) => {
					return (
						<section key={i} ref={section.ref}>
							{section.section}
						</section>
					);
				})}
			</>
		);
	}, [sections]);

	return <div className="App">{renderedSections}</div>;
}

export default App;
