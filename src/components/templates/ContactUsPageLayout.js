import Header from '../UI/organisms/Header.js';
import Footer from '../UI/organisms/Footer.js';
import Content from '../UI/organisms/Content.js';
import { Container, Row } from 'react-bootstrap';

const ContactUsPageLayout = ({ children }) => {
	return (
		<Container className="d-flex flex-column min-vh-100 justify-content-between">
			<Header />
			<Content className="mx-auto">
				{children}
			</Content>
			<Footer className="mt-auto" />
		</Container>
	);
}
export default ContactUsPageLayout;