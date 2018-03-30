import NotewriterStore from './NotewriterStore';

class Store {
    constructor() {
        this.notewriterStore = new NotewriterStore(this);
    }
}

export default new Store()