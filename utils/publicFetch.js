import axios from 'axios';
export const publicFetch = axios.create({
	baseURL: 'https://intense-bastion-46247.herokuapp.com/api/v1/',
});
