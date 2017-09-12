import React from 'react';
import $ from 'jquery';

class Slider extends React.Component{
    componentDidMount(){
        const container = $(this.refs.slider);
        container.find('img:gt(0)').hide();
        setInterval(function(){
            container.find(':first-child').fadeOut(1500)
                .next('img').fadeIn(1500)
                .end().appendTo(container);
        },2000);
    }
    render(){
        return (
            <div ref="slider" className="slider">
                {this.props.images.map(image => (
                    <img key={image.id} src={image.src} />
                ))}
                <style jsx>{`
                    .slider{
                        height: 70%;
                        display: inline-block;
                        position: relative;
                        left: 24%;
                        top: 50%;
                        transform: translate(0, -50%);
                    }
                    .slider img{
                        position: absolute;
                        height: 100%;
                    }
                `}</style>
            </div>
        );
    }
}

export default Slider;