import { useRef } from "react";
import Card from "./cards/Card";
import Container from "./ui/Container";
import useOnScreen from "../hooks/useOnScreen";

const Contact = (props) => {
	return (
		<Container index={props.index} positions={{}} name="contact"></Container>
	);
};

export default Contact;
