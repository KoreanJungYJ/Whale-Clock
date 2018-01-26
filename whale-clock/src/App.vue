<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  /* 폰트 설정 */
  @font-face {
    font-family: NanumSquareRoundB;
    src: url('./assets/NanumSquareRoundB.ttf');
  }

  @font-face {
    font-family: NanumSquareRoundEB;
    src: url('./assets/NanumSquareRoundEB.ttf');
  }

  @font-face {
    font-family: NanumSquareRoundL;
    src: url('./assets/NanumSquareRoundL.ttf');
  }

  @font-face {
    font-family: NanumSquareRoundR;
    src: url('./assets/NanumSquareRoundR.ttf');
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-image: url('https://whale-store.pstatic.net/20170830_295/1504079868349v7BKS_JPEG/whale_img01.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
  }

  #app {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    overflow: hidden;
  }

  #app > div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
</style>
