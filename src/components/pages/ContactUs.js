import ContactUsPageLayout from '../templates/ContactUsPageLayout.js';
import ContactUsForm from '../UI/organisms/ContactUsForm.js';
const ContactUs = (props) => {
	return (
		<ContactUsPageLayout>
			<ContactUsForm />
		</ContactUsPageLayout>
	);
}
export default ContactUs;