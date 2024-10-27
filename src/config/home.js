// ** For more information on how to edit the config, please read the README.md ** //
// https://github.com/underscorelior/HHS-Club-Template?tab=readme-ov-file#about-section-srcconfigaboutjs

const description = `AKA Table Tennis Club. Our goal is to cultivate a vibrant community of ping pong enthusiasts who share a passion for the sport. We are committed to providing a welcoming, inclusive environment where players of all ages and skill levels can come together to learn, compete, and grow.`;

const secondary_button = {
	display: false,
	text: '',
	url: '',
};

const carousel = [
	{
		name: 'Welcome to HHS\'s Ping Pong Community!',
		description: `Image: A free play meeting from 2021!`,
		image: '/pingpongclub1.png',
	},
	{
		name: 'Latest News',
		description: `New table under construction!`,
		image: '/placeholder.png',
	},
	{
		name: 'Tournaments',
		description: `Questions about tournaments or interested in working with us to host one? Contact us at hhspingpong8@gmail.com`,
		image: '/placeholder2.png',
	},
];

// *** DO NOT EDIT *** //
const home_config = {
	home_page: {
		description: description,
		secondary_button: secondary_button,
		carousel: carousel,
	},
};
export default home_config;
