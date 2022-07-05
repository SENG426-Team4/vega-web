import SimplePageLayout from '../templates/SimplePageLayout.js';


const GenerateHTMLForContent = (props) => {
	return (
		<div className="mt-2">
			<h1>About Us</h1>
			<h2 id='Why Vega?'>Why Vega?</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate urna eget rutrum pretium. Cras non nibh metus. Phasellus ultricies dignissim vehicula. Donec vulputate, est vitae dictum tempor, metus ex sagittis nulla, nec congue arcu eros vel neque. Donec eu metus et risus porttitor semper. Nulla eu molestie metus. Pellentesque efficitur convallis ipsum, id ultricies dui dignissim at. In ligula eros, euismod in porttitor quis, gravida eget purus. In velit metus, laoreet faucibus posuere eu, fermentum a eros. Duis in libero malesuada, semper risus at, pharetra libero. Vivamus euismod cursus lorem. Sed posuere mauris vel turpis tristique, nec dapibus nulla tincidunt. Maecenas molestie, enim mollis semper tincidunt, velit enim blandit nisl, eu vulputate dui turpis non sapien. Donec gravida interdum vehicula.</p>
			<h2 id='Industry Validation'>Industry Validation</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate urna eget rutrum pretium. Cras non nibh metus. Phasellus ultricies dignissim vehicula. Donec vulputate, est vitae dictum tempor, metus ex sagittis nulla, nec congue arcu eros vel neque. Donec eu metus et risus porttitor semper. Nulla eu molestie metus. Pellentesque efficitur convallis ipsum, id ultricies dui dignissim at. In ligula eros, euismod in porttitor quis, gravida eget purus. In velit metus, laoreet faucibus posuere eu, fermentum a eros. Duis in libero malesuada, semper risus at, pharetra libero. Vivamus euismod cursus lorem. Sed posuere mauris vel turpis tristique, nec dapibus nulla tincidunt. Maecenas molestie, enim mollis semper tincidunt, velit enim blandit nisl, eu vulputate dui turpis non sapien. Donec gravida interdum vehicula.</p>
			<h2 id='Our Customers'>Our Customers</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate urna eget rutrum pretium. Cras non nibh metus. Phasellus ultricies dignissim vehicula. Donec vulputate, est vitae dictum tempor, metus ex sagittis nulla, nec congue arcu eros vel neque. Donec eu metus et risus porttitor semper. Nulla eu molestie metus. Pellentesque efficitur convallis ipsum, id ultricies dui dignissim at. In ligula eros, euismod in porttitor quis, gravida eget purus. In velit metus, laoreet faucibus posuere eu, fermentum a eros. Duis in libero malesuada, semper risus at, pharetra libero. Vivamus euismod cursus lorem. Sed posuere mauris vel turpis tristique, nec dapibus nulla tincidunt. Maecenas molestie, enim mollis semper tincidunt, velit enim blandit nisl, eu vulputate dui turpis non sapien. Donec gravida interdum vehicula.</p>		</div>
		);
}

const AboutUs = (props) => {	
	return (
		<SimplePageLayout>
			<GenerateHTMLForContent />
		</SimplePageLayout>
		);
}

export default AboutUs;