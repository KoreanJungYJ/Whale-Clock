<template>
  <footer>
    <div class= "maker">
      KoreanJungYJ
      <br>
      <span style= "color: darkgray">
        Thanks for Naver Whale
      </span>
    </div>
    <a :href= "githubIcon.href">
      <img :src= "githubIcon.src"
           :alt= "githubIcon.alt"
           class= "git-icon"
      >
    </a>
    <div class= "test">
      {{ location }}
    </div>
  </footer>
</template>

<script>
export default {
  name: 'weather-part',
  data () {
    return {
      location: {},
      githubIcon: {
        src: require('../assets/github-logo.png'),
        alt: '깃허브 이동 링크',
        href: 'https://github.com/KoreanJungYJ/Whale-Clock'
      }
    }
  },

  mounted () {
    if (navigator.geolocation) {
      let self = this
      navigator.geolocation.getCurrentPosition(function (position) {
        const pos = {
          lat: (position.coords.latitude).toFixed(5),
          lng: (position.coords.longitude).toFixed(5)
        }

        self.location = pos
      })
    } else {
      self.location = {}
    }
  }
}
</script>

<style scoped>
  footer {
    width: 100%;
    height: 72px;
    position: absolute;
    bottom: 0;
  }

  .maker {
    color: #F2F2F2;
    font-family: sans-serif;
    font-size: 14px;
    padding: 10px 0 0 40px
  }

  .git-icon {
    position: absolute;
    bottom: 27.5px;
    right: 45px;
  }

  .test {
    width: 200px;
    height: 100px;
    border: 3px solid white;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10200;
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
    text-align: center;
    padding-top: 1.6rem;
  }
</style>
