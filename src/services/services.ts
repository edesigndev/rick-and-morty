import axios from 'axios';
import services from './methods';

const ServiceApp: any = {};

ServiceApp.getCharacters = (name: string, status: string) => {
  return axios.get(`${services.getCharacters}/?name=${name}&status=${status}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default ServiceApp;
