import {ListGroup} from 'react-bootstrap';
const VenusListGroup = ({ header, list }) => {
	//Creates each element of each list in footer and makes them a link to the specific header in their page
	const listItems = list.map((l, index) => <ListGroup.Item action href={header.replace(/ /g, '') + '#' + l} key={index}>{l}</ListGroup.Item>);
	return (
		<ListGroup variant="flush">
			<ListGroup.Item><b>{header}</b></ListGroup.Item>
			{listItems}
		</ListGroup>
	);

}
export default VenusListGroup;