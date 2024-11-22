<template>
  <div>
    <canvas id="canvas3d"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { Application } from "@splinetool/runtime";

onMounted(() => {
  const canvas = document.getElementById("canvas3d");
  const spline = new Application(canvas); // 确保正确实例化

  spline
    .load("https://prod.spline.design/u0lFhAHgwiun-QsT/scene.splinecode")
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
#canvas3d {
position: absolute;
    /* left: 20%; */
    top: 0%;
  /* width: 120vw; */
  /* height: 10%; */
  opacity: 1;
  /* z-index: 1; */
  box-sizing: border-box;
  /* 自动布局 */

  /* padding: 260px 85px 100px 85px; */
}
/* 添加样式 */
</style>
