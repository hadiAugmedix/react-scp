import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
export class ListAction extends Component {
    constructor() {
        super();

        this.addPatient = this.addPatient.bind(this);
    }

    addPatient() {
        const { notewriterStore } = this.props.store;

        notewriterStore.add();
    }

    render() {
        return ( 
            <div className="notewriter-actions">
                <div className="button-group">
                    <button className="button" onClick={this.addPatient}>Add patient</button>
                    <div className="dropdown">
                        <button className="button has-dropdown-icon">Other</button>
                        <div className="dropdown-body">
                            <a className="dropdown-item" href="">Some action</a>
                            <a className="dropdown-item" href="">Another action</a>
                            <span className="dropdown-item-sep"></span>
                            <a className="dropdown-item" href="">CSS dropdown without JS</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListAction
