<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      backgrounds: [
        {
          src: require('./assets/back1.jpg'),
          alt: '1번 배경화면'
        },
        {
          src: require('./assets/back2.jpg'),
          alt: '2번 배경화면'
        },
        {
          src: require('./assets/back3.jpg'),
          alt: '3번 배경화면'
        },
        {
          src: require('./assets/back4.jpg'),
          alt: '4번 배경화면'
        },
        {
          src: require('./assets/back5.jpg'),
          alt: '5번 배경화면'
        },
        {
          src: require('./assets/back6.jpg'),
          alt: '6번 배경화면'
        },
        {
          src: require('./assets/back7.jpg'),
          alt: '7번 배경화면'
        }
      ]
    }
  },
  methods: {
    setBackground () {
      const backgrounds = []
      for (let i in this.backgrounds) {
        backgrounds.push(this.backgrounds[i].src)
      }
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
