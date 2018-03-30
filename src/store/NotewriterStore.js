import { observable, action } from "mobx"
import moment from "moment"
import UUID from 'uuid-js'

export class NotewriterStore {
    @observable patient = [];
    @observable activePatientIndex = 0;

    constructor() {
        this.patient = [
            { name: 'Test name', createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'), id: this.generateUniqueId(), notes: '' },
            { name: 'Another name', createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'), id: this.generateUniqueId(), notes: '' }
        ]
    }

    @action add(patientName = 'New patient') {
        this.patient.push({ name: patientName, createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'), id: this.generateUniqueId(), notes: '' });

        this.setLastItemAsIndex();
    }

    @action delete(index) {
        this.patient = this.patient.filter((p, i) => i !== index);

        this.setLastItemAsIndex();
    }

    @action update(id, key, value) {
        this.patient.map(p => {
            if(p.id === id) {
                p[key] = value;
            }

            return p;
        })
    }

    generateUniqueId() {
        return UUID.create().hex;
    }

    setActivePatientIndex(index) {
        this.activePatientIndex = index;
    }

    setLastItemAsIndex() {
        this.setActivePatientIndex(this.patient.length - 1);
    }
}

export default NotewriterStore;