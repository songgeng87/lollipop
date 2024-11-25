<template>
  <ul>
    <!-- 遍历父章节 -->
    <li
      v-for="item in list"
      :key="item.name"
      :class="`${item.expanded ? 'active' : ''}  ${
        item.name == '1t' ? 'title active' : 'indent-3 cursor-pointer'
      } mry`"
    >
      <a @click="handleClick(item.name)">{{ item.title }}</a>
      <!-- 渲染子章节 -->
      <ul v-if="item.child && item.expanded" class="indent-8">
        <li
          v-for="child in item.child"
          :key="child.name"
          :class="child.active ? 'activeChild child' : 'child'"
        >
          <a @click="handleClick(child.name)">{{ child.title }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  list: Array,
  activeItem: String,
});
const emit = defineEmits(["update-active"]);

const handleClick = (name) => {
  emit("update-active", name);
};
</script>

<style scoped>
.mry{
    display: flex;
    flex-direction: column
}
.mry  > a{
  font-family: 'SpaceGrotesk',sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 18px;
  /* display: flex;
  align-items:center; */
  letter-spacing: 0px;
  color: #000 !important;
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
}
.title > a {
  font-family: 'SpaceGrotesk',sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0px;
  color: #000000;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul>.child{
    display: flex;
}
li {
  position: relative;
}
 li {
  /* width: 196px; */
  /* display: inline-block; */
  margin-bottom: 10px;
  font-family: 'SpaceGrotesk',sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 18px;
  letter-spacing: 0px;
  color: #767676;
  
}
li>a{
    display: inline-block;   /* 必须是块级元素或者内联块元素才能使用 */
  width: 169px;            /* 设置固定宽度 */
  white-space: nowrap;     /* 防止文本换行 */
  overflow: hidden;        /* 隐藏溢出的文本 */
  text-overflow: ellipsis; /* 显示省略号 */
}
.active::before {
  content: "";
  position: absolute;
  left: -20px;
  top: 0;
  width: 2px;
  height: 18px;
  background-color: #fc15ef;
}
ul > .child:nth-of-type(1){
    margin-top: 10px;
}
ul > .child:last-child{
    margin-bottom: 0px;
}
.activeChild::before {
  content: "";
  position: absolute;
  left: -20px;
  top: 0;
  width: 2px;
  height: 18px;
  background-color: #0aeaf1;
}
</style>
