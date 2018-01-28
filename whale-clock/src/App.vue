<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    setBackground () {
      const backgrounds = [
        'https://whale-store.pstatic.net/20170830_295/1504079868349v7BKS_JPEG/whale_img01.jpg',
        'https://whale-store.pstatic.net/20170830_218/15040799129727lLik_JPEG/whale_img02.jpg',
        'https://whale-store.pstatic.net/20170830_84/15040799503999Iq29_JPEG/whale_img03.jpg',
        'https://whale-store.pstatic.net/20171128_197/1511835718742W934M_JPEG/winter_img01.jpg',
        'https://whale-store.pstatic.net/20180102_176/15148860313773s1K2_JPEG/newyear_img03.jpg',
        'https://whale-store.pstatic.net/20170830_118/1504080433611btaLr_JPEG/whalespace_img_large01.jpg',
        'https://whale-store.pstatic.net/20171128_95/1511835995272nrk4T_JPEG/winter_img05.jpg'
      ]
      let randNum = Math.floor(Math.random() * backgrounds.length)

      // Vue.js는 #app 밖에 나가면 힘을 못쓰므로..ㅠ
      document.body.style.backgroundImage = `url(${backgrounds[randNum]})`
    }
  },
  mounted () {
    this.setBackground()
  }
}
</script>

<style>
  /* 폰트 설정 */
  @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
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
    border: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'nanumsquare', sans-serif;
  }
</style>
