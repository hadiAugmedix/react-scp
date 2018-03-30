import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@inject('store')
@observer
class Editor extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.deletePatient = this.deletePatient.bind(this);

        this.state = {
            editorInstance: null
        }
    }

    handleChange(e, name) {
        const { patient, store } = this.props;
        let value = e.target.value;

        store.notewriterStore.update(patient.id, name, value);
    }

    deletePatient() {
        const { index, store } = this.props;

        store.notewriterStore.delete(index);
    }

    render() {
        const { patient, index, activePatientIndex } = this.props;

        return (
            <div className={activePatientIndex === index ? 'active _ck-editor' : '_ck-editor'}>
                <form action="" className="form-inline">
                    <div className="form-field">
                        <input type="text" name="patient_name" className="form-input" placeholder="e.g Patient name" value={patient.name} onChange={(e) => this.handleChange(e, 'name')} />
                    </div>
                    <div className="form-field">
                        <input type="text" name="patient_time" className="form-input" placeholder="e.g Time" value={patient.createdAt} onChange={(e) => this.handleChange(e, 'createdAt')} />
                    </div>
                </form>

                <div className="form-field">
                    <textarea ref={node => this.node = node} name="message" id="message" className="form-textarea" placeholder="e.g Write notes here!" value={patient.notes} onChange={(e) => this.handleChange(e, 'notes')}></textarea>
                    <small className="form-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
                </div>

                <button className="button" onClick={this.deletePatient}>Remove patient</button>
            </div>
        )
    }

    createEditor(element, callback) {
        ClassicEditor.create(element).then(et => {
            this.setState({
                editorInstance: et
            });

            callback();
        });
    }

    componentDidMount() {
        const { patient, store } = this.props;

        this.createEditor(this.node, () => {
            this.state.editorInstance.model.document.on('change', () => {
                store.notewriterStore.update(patient.id, 'notes', this.state.editorInstance.getData());
            });
        });
    }
}

export default Editor;