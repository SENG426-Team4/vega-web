import VenusListGroup from '../atoms/VenusListGroup.js';
import {Row, Col} from 'react-bootstrap';
const FooterNavBar = (props) => {
	const [headOne, ...listOne] = ['PLATFORM', 'Deep Packet Inspection (DPI)', 'Intrusion Detection and Prevention System (IDS/IPS)'];
	const [headTwo, ...listTwo] = ['ABOUT US', 'Why Vega?', 'Industry Validation', 'Our Customers'];
	const [headThree, ...listThree] = ['NEWS', 'IG Design Group Selects Vega NextGen for Cybersecurity', 'Vega Announces Record Growth in the First Half of 2021 in Asia Pacific Region', 'Vega Boosts Vocational Schools Cyber Security Capabilities', 'Vega Extends Response and Forensics Capabilities with Deep Threat Insights for Hybrid Cloud'];
	return (
			<Row>
				<Col>
					<VenusListGroup header={headOne} list={listOne}/>
				</Col>
				<Col>
					<VenusListGroup header={headTwo} list={listTwo}/>
				</Col>
				<Col>
					<VenusListGroup header={headThree} list={listThree}/>
				</Col>
			</Row>
		);
}
export default FooterNavBar;