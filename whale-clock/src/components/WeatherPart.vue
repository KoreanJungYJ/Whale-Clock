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
    <img :src= "weatherIcon.src"
         :alt= "weatherIcon.alt"
         class= "weather-icon"
         @click= "getWeather"
    >
  </footer>
</template>

<script>
import axios from 'axios'

export default {
  name: 'weather-part',
  data () {
    return {
      location: {},

      githubIcon: {
        src: require('../assets/github-logo.png'),
        alt: '깃허브 이동 링크',
        href: 'https://github.com/KoreanJungYJ/Whale-Clock'
      },
      weatherIcon: {
        src: require('../assets/weather.png'),
        alt: '날씨 확인 아이콘'
      }
    }
  },

  methods: {
    getWeather () {
      const weatherURL = `https://api.darksky.net/forecast/e3b7a8e7022e701fde67fbfadcfb0bd0/${this.location.lat},${this.location.lng}`

      axios.get(weatherURL).then(function (response) {
        console.log(response.data)
      }).catch(function (err) {
        console.log(err)
      })
    }
  },

  mounted () {
    if (navigator.geolocation) {
      let self = this
      navigator.geolocation.getCurrentPosition(function (position) {
        const pos = {
          lat: (position.coords.latitude).toFixed(4),
          lng: (position.coords.longitude).toFixed(4)
        }

        self.location = pos
      })
    } else {
      this.location = {}
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

  .weather-icon {
    position: absolute;
    bottom: 26px;
    right: 95px;
    cursor: pointer;
  }
</style>
