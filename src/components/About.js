import React from 'react'
import Temp from './Temp';

const About = () => {
    if (navigator.onLine) {
        console.log('online');
    } else {
        console.log('offline');
    }

    // const text = 'Proin ex diam, ultrices ut risus non, https://www.google.com dapibus accumsan nulla. Curabitur in vestibulum tortor.'

    // const linkify = (text) => {
    //     var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    //     return text.replace(urlRegex, function(url) {
    //         return '<a href="' + url + '">' + url + '</a>';
    //     });
    // }

    return (
        <div className='container'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper placerat metus sit amet tempor. Ut fermentum, elit eget euismod auctor, felis metus ultrices tellus, vel imperdiet metus sem at justo. Donec imperdiet suscipit ipsum ut pellentesque. Nam nunc ipsum, laoreet non ornare sit amet, scelerisque quis nulla. Aenean eu ipsum at enim imperdiet pharetra. Fusce lacinia nec massa quis tincidunt. Nulla auctor, tortor pretium varius porttitor, felis elit consectetur tellus, non ullamcorper metus libero in tellus. Sed tempor hendrerit arcu vel ornare. Curabitur vitae vulputate sapien. Ut pulvinar augue elit, vel bibendum metus bibendum ut. Proin ex diam, ultrices ut risus non, dapibus accumsan nulla. Curabitur in vestibulum tortor.</p>
            <p>Aenean eu ipsum at enim imperdiet pharetra. Fusce lacinia nec massa quis tincidunt. Nulla auctor, tortor pretium varius porttitor, felis elit consectetur tellus, non ullamcorper metus libero in tellus. Sed tempor hendrerit arcu vel ornare. Curabitur vitae vulputate sapien. Ut pulvinar augue elit, vel bibendum metus bibendum ut. Proin ex diam, ultrices ut risus non, dapibus accumsan nulla. Curabitur in vestibulum tortor.</p>      

            <Temp/>
        </div>        
    )
}

export default About;