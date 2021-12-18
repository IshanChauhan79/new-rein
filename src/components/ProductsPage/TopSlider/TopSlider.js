import React from "react";
import classes from "./TopSlider.module.css";
// import image from "../../assets/images/slider.png";
import Slider from './Slider/Slider'
import { useParams } from "react-router";

const data ={
  'water-softener':[
    {
      web:"https://res.cloudinary.com/ishandev/image/upload/v1638694617/rein/softner/12_a81orx.jpg",
      mobile:"",
    },
    {
      web: "https://res.cloudinary.com/ishandev/image/upload/v1638694612/rein/softner/13_f5btut.jpg",
      mobile:"",
    },
  ],
  'water-purifiers':[
    {
      web:"https://res.cloudinary.com/ishandev/image/upload/v1638694673/rein/undersink/7_txxf88.jpg",
      mobile:"",
    },
    {
      web:"https://res.cloudinary.com/ishandev/image/upload/v1638694670/rein/undersink/8_cw386g.jpg",
      mobile:"",
    },
    {
      web:"https://res.cloudinary.com/ishandev/image/upload/v1638694669/rein/undersink/9_elbknr.jpg",
      mobile:"",
    },
    {
      web:"https://res.cloudinary.com/ishandev/image/upload/v1638694665/rein/undersink/10_qrglxc.jpg",
      mobile:"",
    },
    {
      web:"https://res.cloudinary.com/ishandev/image/upload/v1638694661/rein/undersink/11_1_ptb765.jpg",
      mobile:"",
    },
  ],
}

function TopSlider() {
  const param=useParams();
  return (
    <section
      className={classes.TopSlider}
    ><Slider  imgs={data[param.name]} /></section>
  );
}

export default TopSlider;
