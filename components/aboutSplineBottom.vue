<template>
    <div>
      <canvas id="canvas3d-bottom"></canvas>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import { Application } from "@splinetool/runtime";
  
  onMounted(() => {
    const canvas = document.getElementById("canvas3d-bottom");
    const spline = new Application(canvas); // 确保正确实例化
  
    spline
      .load("https://prod.spline.design/bgehw2Z4tnJtIDbj/scene.splinecode")
      .then(() => {
      //   const obj = spline.findObjectByName("Cube");
        //   console.log(obj); // 输出 Spline 对象
  
        //   // 移动对象
        //   obj.position.x += 10;
  
        //   // 监听事件
        //   spline.addEventListener('mouseDown', (e) => {
        //       if (e.target.name === 'Cube') {
        //           console.log('I have been clicked!');
        //       }
        //   });
      })
      .catch((error) => {
        console.error("Error loading Spline scene:", error);
      });
  });
  </script>
  
  <style>
  #canvas3d-bottom {
    
    width: 100%;
    height: 100%;
    
  }
  /* 添加样式 */
  </style>
  