<template>
    <swiper :slides-per-view="1" :pagination="true" :navigation="true">
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.alt" />
      </swiper-slide>
    </swiper>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  
  const slides = [
    { image: '/images/slide1.jpg', alt: 'Slide 1' },
    { image: '/images/slide2.jpg', alt: 'Slide 2' },
    { image: '/images/slide3.jpg', alt: 'Slide 3' },
  ];
  </script>
  
  <style scoped>
  swiper {
    width: 100%;
    height: 400px;
  }
  img {
    width: 100%;
    height: auto;
  }
  </style>