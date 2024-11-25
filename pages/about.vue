<script setup>
import { ref, onMounted, watch } from "vue";
const carousel = ref("");
const currentIndex = ref("0");
onMounted(() => {
  console.log(carousel.value.activeIndex)
  currentIndex.value = carousel.value.activeIndex+1
});
const prev = () => {
  console.log(carousel.value.activeIndex)

  carousel.value.prev();
  currentIndex.value = carousel.value.activeIndex+1;

};

const next = () => {
  
  carousel.value.next();
  currentIndex.value = carousel.value.activeIndex+1;

};

const changeIndex = (current)=> {

currentIndex.value =current+1;
}
const setActive = (index) => {
  currentIndex.value = index;
  carousel.value.setActiveItem(index-1);
};
</script>

<template>
  <div class="aboutView pt-[250px] pr-[85px] pl-[85px] overflow-hidden">
    <div class="w-[100%] flex items-center justify-center mb-36">
      <div class="about-top w-[400px] h-[370px]">
        <aboutSplineTop class=" scale-[2]"></aboutSplineTop>
        <!-- <aboutSplineBottom></aboutSplineBottom> -->
      </div>
    </div>
    <div class="about-center w-[1270px] m-[auto]">
      <div class="top-title mb-[87px] w-[100%] flex justify-end">
        <div class="text-[60px] text-[#fff]">about us</div>
      </div>
      <div class="flex justify-between mb-36">
        <div class="left-container">
          <div class="flex items-center mb-7">
            <div class="left-cell mr-4"></div>
            <div class="left-text">Our Technology</div>
          </div>
          <div class="left-box">
            Lollipop is the first Solana Network Extension Stack <br />
            with Cryptographic Settlement Protocols which <br />
            extended Solana mainnet security and with <br />
            infrastructure compatibility. We enable the creation <br />
            of Solana Native NEs for Dapps, and help SVM or <br />
            Ethereum forks [L1&L2] to settle back to Solana <br />
            Mainnet through Lollipop.
          </div>
        </div>
        <div class="right-container">
          <div class="flex items-center mb-7">
            <div class="right-cell mr-4"></div>
            <div class="left-text">Our Mission</div>
          </div>
          <div class="right-box">
            <div class="text=[24px] font-[500] mb-8">
              “Write Once, Deploy Anywhere.”
            </div>
            Lollipop harnesses Solana's robust infrastructure for high security
            and performance, <br />and integrating Shared Sequencing, Data
            Availability (DA), and Stateless Validation on <br />Polkadot Cloud.
            This synergy empowers SVM Network Extensions with superior <br />
            performance, enhanced decentralization, and seamless mobility across
            <br />
            Solana scosystem.
          </div>
        </div>
      </div>
      <div class="flex justify-between mb-36">
        <div class="text-[60px] text-[#ffff] flex items-center">videos</div>
        <div class="videos-box">
          <div class="w-[700px] h-[360px] rounded-2xl bg-white mb-5"></div>
          <div class="text-white text-[16px] font-[Space Grotesk]">
            Lollipop’s Debut at Solana Hacker House in Hong Kong
          </div>
        </div>
      </div>
      <div class="flex justify-center flex-wrap pb-6">
        <div
          class="w-[100%] text-center font-[800] text-white text-[60px] mb-10"
        >
          Latest news
        </div>
        <div class="relative w-[100%] h-[790px]">
          <div class="absolute top-16 scale-150 w-[100%] h-[100%]">
            <aboutSplineBottom></aboutSplineBottom>
          </div>

          <el-carousel
            ref="carousel"
            height="795px"
            :motion-blur="false"
            :interval="10000"
            indicator-position="none"
            arrow="never"
            @change = 'changeIndex'
          >
            <el-carousel-item :name="item" v-for="item in 5" :key="item">
              <div>
                <div class="wrap-border justify-between flex items-center mb-7">
                  <div
                    class="w-[630px] h-[372px] bg-white rounded-[20px]"
                  ></div>
                  <div>
                    <div class="btn">partnership announcement</div>
                    <div class="pt-12 pb-12">
                      <div
                        class="text-[42px] font-black leading-10 text-white text-center font-[Space Grotesk] mb-10"
                      >
                        You can customize on <br />
                        and whatever you need
                      </div>
                      <div
                        style="color: rgba(255, 255, 255, 0.9)"
                        class="text-center text-[16px] font-[Space Grotesk]"
                      >
                        You can customize on and whatever you need，You can
                        <br />
                        customize,You can customize on and whatever <br />
                        you need You can customize ... ...
                      </div>
                    </div>
                    <div class="flex justify-between items-center">
                      <div class="bottom-text">Jun 09, 2024 6 min read</div>
                      <div class="bottom-text">Read more</div>
                    </div>
                  </div>
                </div>

                <div class="flex justify-between items-center">
                  <div class="wrap-border justify-between flex items-center">
                    <div
                      class="w-[284px] h-[274px] bg-white rounded-[20px] mr-5"
                    ></div>
                    <div>
                      <div class="btn">partnership announcement</div>
                      <div class="pt-12 pb-12">
                        <div
                          class="text-[24px] font-black leading-7 text-white text-center font-[Space Grotesk] mb-5"
                        >
                          You can customize on <br />
                          and whatever you need
                        </div>
                        <div
                          style="color: rgba(255, 255, 255, 0.9)"
                          class="text-center text-[12px] font-[Space Grotesk] leading-5"
                        >
                          You can customize,You can customize on and whatever
                          you need
                          <br />
                          You can customize ... ...
                        </div>
                      </div>
                      <div class="flex justify-between items-center">
                        <div class="bottom-text">Jun 09, 2024 6 min read</div>
                        <div class="bottom-text">Read more</div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="wrap-border justify-between ml-5 flex items-center"
                  >
                    <div
                      class="w-[284px] h-[274px] bg-white rounded-[20px] mr-5"
                    ></div>
                    <div>
                      <div class="btn">partnership announcement</div>
                      <div class="pt-12 pb-12">
                        <div
                          class="text-[24px] font-black leading-7 text-white text-center font-[Space Grotesk] mb-5"
                        >
                          You can customize on <br />
                          and whatever you need
                        </div>
                        <div
                          style="color: rgba(255, 255, 255, 0.9)"
                          class="text-center text-[12px] font-[Space Grotesk] leading-5"
                        >
                          You can customize,You can customize on and whatever
                          you need

                          <br />
                          You can customize ... ...
                        </div>
                      </div>
                      <div class="flex justify-between items-center">
                        <div class="bottom-text">Jun 09, 2024 6 min read</div>
                        <div class="bottom-text">Read more</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>

          <div class="absolute bottom-0 left-[50%] ml-[-104px] w-[208px]">
            <div class="ml-[auto] mr-[auto] flex justify-center items-center">
              <div
                @click="prev"
                class="w-[30px] bg-[#5A0A93] svg-border rounded-full h-[30px]"
              >
                <svgIcon color="#FFFFFF" name="Button"></svgIcon>
              </div>
              <ul class="flex justify-between mr-3 ml-3">
                <li
                  @click="setActive(item)"
                  v-for="item in 5"
                  :class="item == currentIndex ? 'bg-white' : ''"
                  :key="item"
                  class="bg-gray-400 w-3 h-3 rounded-full mr-2"
                ></li>
              </ul>
              <div
                @click="next"
                class="w-[30px] bg-[#5A0A93] svg-border rounded-full h-[30px]"
              >
                <svgIcon color="#FFFFFF" name="Button-1"></svgIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.li-back {
  background: rgba(255, 255, 255, 0.5);
}
.svg-border {
  border: 1px solid rgba(255, 255, 255, 0.4);
}
.swiper-pagination {
  bottom: 10px; /* 调整分页器的位置 */
}

.swiper-pagination-bullet {
  background: #007aff; /* 分页器圆点的颜色 */
}

.swiper-pagination-bullet-active {
  background: #ff3b30; /* 当前活动分页器圆点的颜色 */
}
.bottom-text {
  font-family: 'SpaceGrotesk',sans-serif;
  font-size: 10px;
  font-weight: 300;
  line-height: 10px;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  color: rgba(255, 255, 255, 0.6);
}
.btn {
  margin-left: auto;
  width: 153px;
  white-space: nowrap;
  border-radius: 10px;
  opacity: 1;
  background: #fc15ef;
  box-sizing: border-box;
  border: 0.5px solid #ffffff;
  box-shadow: 0px 2px 0px 0px #ffffff;
  padding: 10px;
  font-family: 'SpaceGrotesk',sans-serif;
  font-size: 10px;
  font-weight: bold;
  line-height: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  color: #ffffff;
}
.wrap-border {
  border-radius: 30px;
  opacity: 1;
  background: rgba(50, 10, 140, 0.4);
  box-sizing: border-box;
  border: 1px solid #0aeaf1;
  box-shadow: 0px 4px 0px 0px #0aeaf1;
  padding: 14px 40px 14px 14px;
}

.videos-box {
  border-radius: 30px;
  opacity: 1;
  background: rgba(90, 10, 147, 0.4);
  box-sizing: border-box;
  border: 1px solid #fc15ef;
  box-shadow: 0px 4px 0px 0px #fc15ef;
  padding: 20px 20px 30px 20px;
}
.right-box {
  border-radius: 28px;
  opacity: 1;
  background: rgba(90, 10, 147, 0.2);
  box-sizing: border-box;
  border: 1px solid #fc15ef;
  /* GlassS-R */
  backdrop-filter: blur(30px);
  box-shadow: inset 0px 0px 6px 0px #fc15ef;
  padding: 40px 30px;
  font-family: 'SpaceGrotesk',sans-serif;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  &:hover {
    border-radius: 28px;
    opacity: 1;
    background: rgba(90, 10, 147, 0.4);
    box-sizing: border-box;
    border: 1px solid #fc15ef;
    /* GlassB-R */
    backdrop-filter: blur(30px);
    box-shadow: inset 0px 0px 2px 0px rgba(252, 21, 239, 0.7),
      inset 0px 0px 10px 0px #fc15ef,
      inset 0px 1px 1px 0px rgba(252, 21, 239, 0.5),
      inset 0px 0px 20px 0px #fc15ef;
  }
}
.right-cell {
  opacity: 1;
  background: rgba(90, 10, 147, 0.4);
  box-sizing: border-box;
  border: 1px solid #fc15ef;
  /* GlassS-R */
  backdrop-filter: blur(30px);
  box-shadow: inset 0px 0px 6px 0px #fc15ef;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.left-box {
  border-radius: 28px;
  opacity: 1;
  background: rgba(50, 10, 140, 0.2);
  box-sizing: border-box;
  border: 1px solid #0aeaf1;
  /* GlassS-B */
  backdrop-filter: blur(30px);
  box-shadow: inset 0px 0px 6px 0px #0aeaf1;
  padding: 40px 30px;
  font-family: 'SpaceGrotesk',sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  letter-spacing: 0em;
  color: #ffffff;
  &:hover {
    border-radius: 28px;
    opacity: 1;
    background: rgba(50, 10, 140, 0.4);
    box-sizing: border-box;
    border: 1px solid #0aeaf1;
    /* GlassB-B */
    backdrop-filter: blur(30px);
    box-shadow: inset 0px 1px 1px 0px rgba(10, 234, 241, 0.5),
      inset 0px 0px 20px 0px #0aeaf1, inset 0px 0px 10px 0px #0aeaf1,
      inset 0px 0px 2px 0px rgba(10, 234, 241, 0.7);
  }
}
.aboutView {
  background: radial-gradient(
    50% 50% at 50% 50%,
    #5a0a93 0%,
    rgb(34, 3, 54) 100%
  );
}
.left-cell {
  opacity: 1;
  background: rgba(50, 10, 140, 0.4);
  box-sizing: border-box;
  border: 1px solid #0aeaf1;
  /* GlassS-B */
  backdrop-filter: blur(30px);
  box-shadow: inset 0px 0px 6px 0px #0aeaf1;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.left-text {
  font-family: 'SpaceGrotesk',sans-serif;
  font-size: 30px;
  font-weight: bold;
  line-height: 34px;
  text-transform: uppercase;
  letter-spacing: 0em;
  color: #ffffff;
}
</style>
