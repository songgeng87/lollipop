<script setup>
import { ref, onMounted, onUnmounted} from 'vue'
const  Twitter = ref('Twitter-2')
const  Telegram = ref('Telegram-2')
const  Github = ref('Github-2')
 
 const lastScrollDirection = ref(false);
 let lastScrollTop = 0;
  
 const handleScroll = () => {
   const scrollTop = window.scrollY || document.documentElement.scrollTop;
   if (scrollTop > lastScrollTop) {
     lastScrollDirection.value = true;
   } else if (scrollTop < lastScrollTop) {
     lastScrollDirection.value = false;
   }
   lastScrollTop = scrollTop;
   console.log(lastScrollDirection.value)
 };
  
 onMounted(() => {
   window.addEventListener('scroll', handleScroll);
 });
  
 onUnmounted(() => {
   window.removeEventListener('scroll', handleScroll);
 });
</script>

<template>
  <div class="header flex justify-between relative" :style="`opacity:${lastScrollDirection ? '.6' : '1'};`">
    <div class="absluet"></div>

    <ul class="left-header-list">
      <li class="list-item">HOME</li>
      <li class="list-item">ABOUT</li>
      <li class="list-item">BUILDERS</li>
      <li class="list-item">RESEARCH</li>
    </ul>

    <div class="logo-center absolute left-1/2 -translate-x-1/2">
        <svgIcon :name="lastScrollDirection ? 'logo Mark' :'logo'"></svgIcon>
      </div>
    <div class="right-wrap">
      <ul class="right-header-list">
        <li  class="item-svg"><NuxtLink target="_blank" to="https://x.com/LollipopHQ"><svgIcon :name="Twitter"></svgIcon></NuxtLink></li>
        <li class="item-svg"><NuxtLink target="_blank" to="t.me/lollipopbuilders"><svgIcon :name="Telegram"></svgIcon></NuxtLink></li>
        <li class="item-svg"><NuxtLink target="_blank" to="https://github.com/LollipopBuilders"><svgIcon :name="Github"></svgIcon></NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.absluet{
  position: absolute;
}
.header {
  position: fixed;
  top: 0;
  z-index: 999;
  padding: 15px 85px;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  background: #320a8c;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.2);
  .left-header-list {
    display: flex;
    height: 100%;
    margin-right: 125px;

    .list-item {
      font-family: 'Space_Grotesk','sans-serif';
      font-size: 16px;
      font-weight: normal;
      margin-right: 40px;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      letter-spacing: 0em;
        cursor: pointer;
      color: #ffffff;

      z-index: 0;
      &:hover {
        color: #0aeaf1;
      }
    }
  }
  .right-wrap{
    display: flex;
  align-items: center;

    // justify-content: space-between;
    // flex: 1;
  }
  .right-header-list {
    display: flex;
    .item-svg {
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-radius: 8px;
      width: 36px;
      height: 36px;
      margin-right: 10px;
      &:hover {
        border: 1px solid #0aeaf1;
        background: rgba(50, 10, 140, 0.4);
        /* GlassS-B */
        backdrop-filter: blur(30px);
        box-shadow: inset 0px 0px 6px 0px #0aeaf1;
      }
    }
  }
  .logo-center {
    width: 200px;
    height: 50px;
    flex-shrink: 0;
  }
}
</style>
