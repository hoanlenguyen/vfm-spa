<template>
  <div class="w-100vw h-100vh background" :style="{ backgroundImage: 'url(\'' + backgroundImg + '\')' }">
    <div class="container">
      <div class="padding-top">
        <div>
          <img src="@/assets/logo-full.svg" />
          <p class="page-message">
            Our apologies.
            <br />We're unable to find the
            <br />page you're looking for.
            <br />
          </p>

          <div class="small">404. Page Not Found</div>
        </div>

        <div class="relative">
          <div class>
            <div class="check">Please check the URL link or</div>
            <a class="c-white el-button el-button--primary w-abs-360 mt-3" href="/">GO TO HOME PAGE</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page401',
  data() {
    return {
      backgroundImg: require('@/assets/404-background.jpg')
    }
  },
}
</script>

<style scoped lang="scss">

.background {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 100%;
}

.container {
  padding: 7% 8.5% 0 8.5%;
  position: relative;
  height: 100%;
}

img {
  height: 50px;
}

.page-message {
  margin-top: 18px;
  margin-bottom: 5px;
  font-size: 48px;
  font-weight: bold;
  color: #1a1b1b;
  transform: scaleX(1.04);
  transform-origin: left;
}

.small {
      font-size: 26px;
    color: #2b2b2b;
    padding-bottom: 5px;
    margin-bottom: 20px;
    margin-top: 10px;
}

@media (max-width: 620px) {
  .padding-top {
    padding-top: 2rem;
  }
  .btnClick {
    width: 100%;
  }
  .message {
    font-size: 44px;
  }
}

@media (max-width: 576px) {
  .relative {
    margin-top: 30px;
  }
  .container {
    padding: 0 8.5% 0 8.5%;
  }
  .btnClick {
    width: 100%;
  }
  .message {
    font-size: 36px;
  }
  .checkAndbuttonGroup {
    position: absolute;
    bottom: 87px;
    left: 0px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .checkAndbuttonGroup .check {
    margin-left: 17px;
  }
}
</style>