<script setup></script>

<template>
  <div class="bottom-box">
    <div class="box-container">
      <div class="left">
        <div class="nav-list">
          <div class="nav-item">HOME</div>
          <div class="nav-item">RESEARCH</div>

          <div class="nav-item">ABOUT</div>

          <div
            class="nav-item opacity-[.8]"
            style="
              font-family: 'Space Grotesk', 'sans-serif';
              font-size: 14px;
              font-weight: normal;
              line-height: 18px;
              display: flex;
              align-items: center;
              letter-spacing: 0em;
              color: rgba(255, 255, 255, 0.8);
              white-space: nowrap;
            "
          >
            White paper
          </div>

          <div class="nav-item">BUILDERS</div>

          <div
            class="nav-item text-[14px] opacity-[.8] leading-[18px] text-[#ccFFFFFF]"
            style="
              font-family: 'Space Grotesk', 'sans-serif';
              font-size: 14px;
              font-weight: normal;
              line-height: 18px;
              display: flex;
              align-items: center;
              letter-spacing: 0em;
              color: rgba(255, 255, 255, 0.8);
            "
          >
            Doc
          </div>
        </div>
        <div class="svg-logo">
          <svgIcon name="logo"></svgIcon>
        </div>
        <div class="footer-list">
          <span>Find us on</span>

          <div class="svg-logo-icon">
            <NuxtLink to="https://x.com/LollipopHQ" target="_blank">
              <svgIcon class="icon" name="X"></svgIcon>
              <svgIcon class="icon_active" name="X-1"></svgIcon
            ></NuxtLink>
          </div>
          <div class="svg-logo-icon">
            <NuxtLink to="https://discord.gg/QhjDwp3z " target="_blank">
              <svgIcon class="icon" name="DC"></svgIcon>
              <svgIcon class="icon_active" name="DC-Click"></svgIcon>
            </NuxtLink>
          </div>
          <div class="svg-logo-icon">
            <NuxtLink target="_blank" to="https://twitter.com">
              <svgIcon class="icon" name="Telegram-2"></svgIcon>
              <svgIcon class="icon_active" name="TG-Click"></svgIcon>
            </NuxtLink>
          </div>
          <div class="svg-logo-icon">
            <NuxtLink target="_blank" to="https://github.com/LollipopBuilders">
              <svgIcon class="icon" name="Github-2"></svgIcon>
              <svgIcon class="icon_active" name="GitHub-Click"></svgIcon>
            </NuxtLink>
          </div>
          <div class="svg-logo-icon">
            <NuxtLink
              target="_blank"
              to="https://www.linkedin.com/company/lollipop-builders"
            >
              <svgIcon class="icon" name="Link-2"></svgIcon>
              <svgIcon class="icon_active" name="Link-Click"></svgIcon>
            </NuxtLink>
          </div>
          <div class="svg-logo-icon">
            <NuxtLink
              target="_blank"
              to="https://www.youtube.com/@LollipopBuilders"
            >
              <svgIcon class="icon" name="YouTube"></svgIcon>
              <svgIcon class="icon_active" name="YouTube-1"></svgIcon>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-wrap">
          <div class="search">
            <input placeholder="Enter your email" type="text" />
          </div>
          <div class="input-buttom">Subscribe</div>
        </div>
        <div class="bottom-title">© 2024 Lollipop. All rights reserved.</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottom-title {
  font-family: "Space_Grotesk", 'sans-serif';
  font-size: 10px;
  font-weight: 300;
  line-height: 14px;
  text-align: right;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  color: rgba(255, 255, 255, 0.8);
  text-align: right;
  margin-top: 234px;
  float: right;
}
.right {
  .right-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .input-buttom {
    margin-left: 20px;
    width: 170px;
    height: 50px;
    font-family: "Schibsted_Grotesk", 'sans-serif';
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
    text-align: center;
    line-height: 50px;
    letter-spacing: 0em;
    color: #ffffff;
    border-radius: 60px;
    opacity: 1;
    background: rgba(90, 10, 147, 0.4);
    box-sizing: border-box;
    border: 1px solid #fc15ef;
    &:hover {
      border-radius: 60px;
      opacity: 1;
      background: rgba(90, 10, 147, 0.4);
      box-sizing: border-box;
      border: 1px solid #fc15ef;
      /* GlassL-R */
      backdrop-filter: blur(30px);
      box-shadow: inset 0px 0px 6px 0px #fc15ef, inset 0px 0px 14px 0px #fc15ef,
        inset 0px 0px 2px 0px #fc15ef, inset 0px 1px 1px 0px #fc15ef;
    }
  }
  .search {
    width: 500px;
    height: 50px;
    border-radius: 60px;
    opacity: 1;
    background: rgba(50, 10, 140, 0.4);
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.4);
    display: flex;
    overflow: hidden;
    &:hover {
      border-radius: 60px;
      opacity: 1;
      background: rgba(90, 10, 147, 0.4);
      box-sizing: border-box;
      border: 1px solid #fc15ef;
      /* GlassS-R */
      backdrop-filter: blur(30px);
      box-shadow: inset 0px 0px 6px 0px #fc15ef;
    }
    input {
      outline: none;
      border: none;
      padding-left: 22px;
      width: 100%;
      height: 100%;
      background: transparent;
      color: rgba(255, 255, 255, 0.6);
    }
  }
}
.svg-logo-icon {
  width: 40px;
  height: 40px;
  margin: 0 15px;
}
.footer-list {
  span {
    font-family: "Space_Grotesk", 'sans-serif';
    font-size: 14px;
    font-weight: 300;
    line-height: 18px;
    text-align: center;
    display: flex;
    align-items: center;
    letter-spacing: 0em;
    color: #ffffff;
    margin-right: 45px;
  }
  //   width: 320px;
  height: 40px;
  /* 自动布局 */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
}
.svg-logo {
  width: 208px;
  height: 52px;
  margin-bottom: 50px;
}
.left {
  .nav-list {
    margin-bottom: 50px;

    width: 216px;
    height: 104px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .nav-item {
      width: 74px;
      font-family: "Space_Grotesk", 'sans-serif';
      font-size: 16px;
      font-weight: bold;
      line-height: 20px;
      display: flex;
      align-items: center;
      // text-transform: uppercase;
      letter-spacing: 0em;
      color: #ffffff;
      margin-bottom: 20px;
    }
  }
}
.bottom-box {
  background: #320a8c;
  // border: 1px solid #fc15ef;
  border-bottom: 4px solid #fc15ef;
  .box-container {
    display: flex;
    justify-content: space-between;

    padding: 100px 85px;

    opacity: 1;
    background: rgba(90, 10, 147, 0.4);
    box-sizing: border-box;
    border: 1px solid #fc15ef;
    box-shadow: 0px 10px 0px 0px #fc15ef;
  }
}
.icon_active {
  display: none;
}
.svg-logo-icon:hover {
  .icon {
    display: none;
  }
  .icon_active {
    display: block;
  }
}
</style>
