// ** For more information on how to edit the config, please read the README.md ** //
// https://github.com/underscorelior/HHS-Club-Template?tab=readme-ov-file#meetings-page-srcconfigmeetingsjs

const info = `We meet every other Thursday in the small gym during lunch! See campus map to the right.
											Last year, we met every week on Monday, but our advisor changed so we are meeting every other Thursday now.
                      We will send out emails before every meeting to notify you of when they happen.`;
const activities = `Most of our meetings will be free play. Due to a limited amount of tables, please take turns.
										We also host tournaments where participants compete for a prize.`;

const image = '/meetingimage.png';

const link =
	'https://drive.google.com/file/d/1vmm99U7K9cA58zVhDcLVBG-gxLYeFcdO/view';

// *** DO NOT EDIT *** //
const meetings_config = {
	meetings: {
		info: info,
		activities: activities,
		image: image,
		link: link, //can be a link to your event/meeting location
	},
};
export default meetings_config;
