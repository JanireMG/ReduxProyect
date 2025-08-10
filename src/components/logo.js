import React, { Component } from 'react';

class Logo extends Component{
    render() {
        const size= {
            height: this.props.size ? this.props.size : 100,
            width: this.props.size ? this.props.size : 100,
        }
        return (
            <div className="logo-main">
                <img 
                    alt="pochita" 
                    src="/assets/pochita.png"
                    style={size}
                />
            </div>
        )
    }
}

export default Logo;