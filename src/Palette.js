import React from 'react';
import ColorBox from './ColorBox';
// import 'rc-slider/assets/index.css';
import './Palette.css';
import Navbar from './Navbar';
// import Slider from 'rc-slider';


export default class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: "hex" };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(level) {
        this.setState({ level });
    }
    changeFormat(val) {
        this.setState({ format: val });
    }
    render() {
        const { colors } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => 
            // <ColorBox background={color.hex} name={color.name} />
            <ColorBox background={color[format]} name={color.name} />
        );
        return (
            <div className="Palette">
                <Navbar 
                    level={level} 
                    changeLevel={this.changeLevel} 
                    handleChange={this.changeFormat}
                    />
                <div className="Palette-colors">{colorBoxes}</div> 
                
                {/* footer goes here */}
            </div>
        );
    }
}