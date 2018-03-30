import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export class ListItem extends Component {
    constructor() {
        super();

        this.setActive = this.setActive.bind(this);
    }

    setActive(e, index) {
        e.preventDefault();

        this.props.store.notewriterStore.setActivePatientIndex(index);
    }

    render() {
        const { patient, index, activePatientIndex } = this.props;

        return (
            <a href="" className={activePatientIndex === index ? 'avatar active' : 'avatar' } onClick={(e) => this.setActive(e, index)}>
                <figure className="avatar-fig rounded">
                    <img src="https://picsum.photos/40/40?image=500" alt="" />
                </figure>
                <span className="avatar-label">{ patient.name }</span>
                <div className="avatar-secondary-block">
                    { patient.createdAt }
                </div>
            </a>
        )
    }
}

const List = ({ patient, activePatientIndex }) => (
    <div className="notewriter-plist">
        { patient.map((p, index) => <ListItem patient={p} key={p.id} index={index} activePatientIndex={activePatientIndex} />) }
    </div>
)

export default List;