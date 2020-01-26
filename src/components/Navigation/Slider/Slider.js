import React, {useState} from 'react';
import classes from './Slider.module.css'

const Slider = () => {
    // create an array for component to show inside the slider
    let sliderArr = [1, 2, 3, 4, 5];
    const [x, setX] = useState(0);

    const goLeft = () => {
        console.log(x);
        if (x === 0) {
            setX(0)
        } else {
            setX(x + 100)
        }
    };

    const goRight = () => {
        console.log(x);

        // refactor into a ternary
        if (x === -100 * (sliderArr.length - 1)) {
            setX(0)
        } else {
            setX(x - 100)
        }
    };

    return (
        <div className={classes.slider}>
            {
                sliderArr.map((item, index) => {
                    return (
                        <div className={classes.slide} key={index} style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            {/*buttons*/}
            <button className={classes.goLeft} id="goLeft" onClick={goLeft}>Left</button>
            <button className={classes.goRight} id="goRight" onClick={goRight}>Right</button>
        </div>
    )
}

export default Slider;