import axios from 'axios';

const KEY = 'AIzaSyDCSAzu_cQYhtWBFrzoed_MbKOi72FKbPA';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
