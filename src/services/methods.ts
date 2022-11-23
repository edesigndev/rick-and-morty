import configService from "./config";

const services = {
  getCharacters: configService.apiUrl + "/character",
};

export default services;
