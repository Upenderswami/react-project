import React from 'react'
import image1 from './person1.jpg'
import image2 from './person2.jpg'
import image3 from './person3.jpg'
import image4 from './person4.jpg'

function box(){
    return (
       
        <>
        <div id="main">
            <div className="box1">
                <div className="images">
                <img src={image1} alt="" /></div>
                <h3>Person1</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <a href="#">Know More</a>
            </div>
            <div className="box1">
                <div className="images">
                <img src={image2} alt="" /></div>
                <h3>Person2</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <a href="#">Know More</a>
            </div>
            <div className="box1">
                <div className="images">
                <img src={image3} alt="" /></div>
                <h3>Person3</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <a href="#">Know More</a>
            </div>
             <div className="box1">
                <div className="images">
                <img src={image4} alt="" /></div>
                <h3>Person4</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <a href="#">Know More</a>
            </div>
        </div>
        </>
    )
}
export default box