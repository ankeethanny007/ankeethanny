import './skill.scss'
import React, { Component } from 'react'

class skillPie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.expertize + '%',
            hello: { 'width': this.props.expertize + '%' }
        }
    }

    render() {
        return (
            <div>
                <div className='skill skill-name'>
                    <p>{this.props.skill}</p>
                </div>
                <div className='skill skill-expertize'>
                    <div className='skill-bar' style={this.state.hello}>
                        <span>{this.state.width}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default skillPie;