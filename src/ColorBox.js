import React from 'react';
import './ColorBox.css';

export default class ColorBox extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.background}} className="ColorBox">
                <span>{this.props.name}</span>
                <span> MORE </span>
            </div>
        );
    }
}