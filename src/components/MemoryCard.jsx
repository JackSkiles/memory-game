import React, { Component } from 'react';
import numeral from 'numeral';
import './MemoryCard.css'

export default class MemoryCard extends Component {
    render() {
        const title = 'Card Title';
        return (
            <div className="MemoryCard">
                <img src="logo-wrench-white.png" class="img"></img>
                {/* {this.props.name}
                <br></br>
                { this.props.likes >= 0 ? (
                    <sup>likes: { numeral(this.props.likes).format('0.0a')}</sup>
                ) : ''} */}
            </div>
        )
    }
}