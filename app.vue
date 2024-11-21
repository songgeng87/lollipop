<template>
  <div>
    <headView></headView>
    <NuxtPage />
    <bottomView></bottomView>
  </div>
</template>
<style lang="scss">
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-thumb {
  border-radius: 1em;
  background-color: rgba(50, 50, 50, 0.3);
}
::-webkit-scrollbar-track {
  border-radius: 1em;
  background-color: rgba(50, 50, 50, 0.1);
}
// #app{
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
// }
</style>
