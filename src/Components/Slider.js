import React from 'react';
import data from './ExampleData';

function Slider() {
    const moviesExample = data.results;
    console.table(moviesExample)
    return (
        <div>
            <div className="slider-container">

                {moviesExample.map((item) =>
                    //This would be the image <img className="carousel-item-closed" src={/*item.poster_path*/} alt={item.title}></img>
                    <div className="slider-item">
                        {item.title}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Slider
