import React, { Component } from 'react';
import numeral from 'numeral';
import './MemoryCard.css'
import logo from './logo-wrench-white.png'


export default class MemoryCard extends Component  {
    constructor(){
        super();
        this.state = { isFlipped: false};
    }
    clickHandler(){
        this.setState({ isFlipped: !this.state.isFlipped });
    }
    render() {
        const title = 'Card Title';
        let innerClass = "MemoryCard__inner";
        if(this.state.isFlipped){
            innerClass += " flipped";
        }
        return (
            <div className='MemoryCard' onClick={ this.clickHandler.bind(this) }>
                <div className={innerClass}>
                    <div className="MemoryCard__back">
                        <img src={ logo } class="img"></img>
                        {/* {this.props.name}
                        <br></br>
                        { this.props.likes >= 0 ? (
                            <sup>likes: { numeral(this.props.likes).format('0.0a')}</sup>
                        ) : ''} */}
                    </div>
                    <div className="MemoryCard__front">
                        ∆
                    </div>
                </div>
            </div>
        )
    }
}