import "../style/styles.css";
import { useEffect, useRef } from "react";
import Container from "./ui/Container";
import Card, { CARD_SIZE } from "./cards/Card";
import useOnScreen from "../hooks/useOnScreen";
import ExperienceArrow from "./icons/ExperienceArrow";
import ExperienceArrow2 from "./icons/ExperienceArrow2";

function ExperienceCard(props) {
	return (
		<div id={props.id} className="experience-card">
			{props.children}
			{props.accentText && (
				<span
					className="experience__dates"
					style={{
						top: `${CARD_SIZE.height + props.accentText.yPos}px`,
						left: `${
							CARD_SIZE.width - CARD_SIZE.width / 2 + props.accentText.xPos
						}px`,
					}}
				>
					{props.accentText.text}
				</span>
			)}
			{props.icon && (
				<span
					style={{
						top: `${CARD_SIZE.height + props.icon.yPos}px`,
						left: `${
							CARD_SIZE.width - (CARD_SIZE.width / 2 + 125) + props.icon.xPos
						}px`,
					}}
				>
					{props.icon.icon}
				</span>
			)}
		</div>
	);
}

export default function Experience(props) {
	return (
		<Container index={props.index} positions={{}} name="experience">
			<ExperienceCard
				id="aci"
				accentText={{
					yPos: 35,
					xPos: -100,
					text: "Feb 2019 - May 2021",
				}}
				icon={{
					xPos: CARD_SIZE.width,
					yPos: 50,
					icon: <ExperienceArrow className="experience-arrow-1" />,
				}}
			>
				<Card
					color={"#99E32B"}
					title={"ACI Worldwide"}
					heading={"Software Engineer"}
					accentText={"February 2019 - May 2021"}
					summary={
						"My time at ACI gave me greater insight into the payments world and helped me develop a strong solution orientated mindset."
					}
					rotate={"0.75"}
					tags={["Java", "SQL", "Python", "Jenkins"]}
					animation={{ delay: 100, startingPos: { x: -2000, y: -300 } }}
				>
					<p className="mt-1">
						My time at ACI gave me greater insight into the payments world, but
						more than that, it helped me develop a strong solution orientated
						mindset, developed my customer interfacing skills and allowed me to
						discover my love for writing high- and low-level designs. The nature
						of the industry meant that there were often very tight deadlines,
						this helped me develop self-management skills but also taught me to
						excel under pressure.
					</p>
					<p>Some of the roles I have filled:</p>
					<ul>
						<li>
							<b>Designer:</b> Interpret customer specifications to write high-
							and low-level designs.
						</li>
						<li>
							<b>Coder:</b> Implement designs efficiently with thorough testing.
						</li>
						<li>
							<b>Technical Writer:</b> Write concise client focused
							documentation (user guides, release notes).
						</li>
						<li>
							<b>Support:</b> L3 Support across a range of 100+ products. This
							includes taking on the role of Issue Manager for a period of time.
						</li>
					</ul>
				</Card>
			</ExperienceCard>

			<ExperienceCard
				id="mezz"
				accentText={{
					xPos: -100,
					yPos: -(CARD_SIZE.height + 55),
					text: "Jun 2021 - Oct 2022",
				}}
				icon={{
					xPos: CARD_SIZE.width + 50,
					yPos: -(CARD_SIZE.height + 50),
					icon: <ExperienceArrow2 />,
				}}
			>
				<Card
					color={"#FF8181"}
					title={"Mezzanine"}
					heading={"Full Stack Developer"}
					accentText={"June 2021 - October 2022"}
					summary={
						"My time at Mezzanine has given me a great appreciation for the impact that new technology can have when introduced in developing countries."
					}
					rotate={"-1"}
					tags={["Java", "Vue.js", "PostgreSQL", "HTML", "CSS", "Docker"]}
					animation={{ delay: 250, startingPos: { x: -2000, y: -200 } }}
				>
					<p className="mt-1">
						Mezzanine's mission statement is to create productive societies by
						designing fit for purpose digital solutions in the industries of
						agriculture, health, social services and education. I worked mainly
						on Connected Farmer Plus, a marketplace for farmers to facilitate
						loans, insurance, the purchase of inputs and equipment as well as
						the offtake of produce.
					</p>
					<p className="mt-1">
						My time at Mezzanine gave me a solid understanding of REST and UI/UX
						principles, but more importantly, it gave me a greater appreciation
						for the impact that new technology could have when introduced in
						developing nations like those in East-Africa.
					</p>
				</Card>
			</ExperienceCard>

			<ExperienceCard
				id="tal"
				accentText={{
					xPos: -100,
					yPos: 35,
					text: "Nov 2022 - Current",
				}}
			>
				<Card
					color={"#6FCDFC"}
					title={"Takealot"}
					heading={"Full Stack Developer"}
					accentText={"November 2022 - Currently"}
					summary={
						"My time at Mezzanine has given me a great appreciation for the impact that new technology can have when introduced in developing countries."
					}
					rotate={"0.25"}
					tags={["Java", "Vue.js", "PostgreSQL", "HTML", "CSS", "Docker"]}
					animation={{ delay: 175, startingPos: { x: 2000, y: -250 } }}
				>
					<p className="mt-1">
						Mezzanine's mission statement is to create productive societies by
						designing fit for purpose digital solutions in the industries of
						agriculture, health, social services and education. I worked mainly
						on Connected Farmer Plus, a marketplace for farmers to facilitate
						loans, insurance, the purchase of inputs and equipment as well as
						the offtake of produce.
					</p>
					<p className="mt-1">
						My time at Mezzanine gave me a solid understanding of REST and UI/UX
						principles, but more importantly, it gave me a greater appreciation
						for the impact that new technology could have when introduced in
						developing nations like those in East-Africa.
					</p>
				</Card>
			</ExperienceCard>
		</Container>
	);
}
