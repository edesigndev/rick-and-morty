import { defineStore } from 'pinia';
import ServiceApp from '../services/services';

export const useCharacter = defineStore('character', {
  state: () => ({
    characters: [],
    msgError: '',
  }),
  getters: {
    listCharacters: (state) => state.characters,
  },
  actions: {
    async getCharacter(name: string, status: string) {
      return await ServiceApp.getCharacters(name, status);
    },
    setMsgError(payload: string) {
      this.msgError = payload;
    },
    setCharacters(payload: any) {
      this.characters = payload;
    },
  },
});
