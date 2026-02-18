const changeElementStyle = (newColor, selector) =>
{
    let el = document.querySelector(selector);
    el.style.backgroundColor = newColor;
    el.style.fontSize = '25px';
    el.style.fontWeight = 'bold';
};

/*
const makeRed = () => {
    // your code here...
    console.log('Change background to red');
    //document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').style.fontWeight = 'bold';
};

const makeBlue = () => {
    // your code here...
    console.log('Change background to blue');
    //document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('#section2').style.backgroundColor = 'blue';
    document.querySelector('#section2').style.fontWeight = 'bold';
};

const makePink = () => {
    // your code here...
    console.log('Change background to pink');
    //document.querySelector('body').style.backgroundColor = 'pink';
    document.querySelector('#section3').style.backgroundColor = 'pink';
    document.querySelector('#section3').style.fontWeight = 'bold';
};

const makeOrange = () => {
    // your code here...
    console.log('Change background to orange');
    //document.querySelector('body').style.backgroundColor = 'orange';
    document.querySelector('#section4').style.backgroundColor = 'orange';
    document.querySelector('#section4').style.fontWeight = 'bold';
};
*/
