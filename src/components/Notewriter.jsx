import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import List from './List.jsx';
import Editor from './Editor.jsx';
import ListAction from './ListAction';


const EditorInstance = ({ patient, activePatientIndex }) => (
    <div className="_ck-editors">
        { patient.map((p, i) => <Editor patient={p} index={i} activePatientIndex={activePatientIndex} key={p.id} />) }
    </div>
)

@inject('store')
@observer
class Notewriter extends Component {

    render() {
        const { patient, activePatientIndex } = this.props.store.notewriterStore;

        return (
            <section className="notewriter">
                <div className="row">
                    <div className="large-2 columns">
                        <ListAction />
                        <List patient={patient} activePatientIndex={activePatientIndex} />
                    </div>
                    <div className="large-8 columns">
                        <EditorInstance patient={patient} activePatientIndex={activePatientIndex} />

                        <br/><br/>
                        <pre><code>{ JSON.stringify(patient, null, 2) }</code></pre>
                    </div>
                    <div className="large-2 columns">
                        <p>Other widgets</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Notewriter;
