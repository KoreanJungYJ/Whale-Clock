<template>
  <footer>
    <transition name= "modal">
      <div class= "modal-mask"  v-if= "modal">
        <div class= "modal-wrapper">
          <div class= "modal-container">
            <img :src= "closeIcon.src"
                 :alt= "closeIcon.alt"
                 class= "close-icon"
                 @click= "closeModal"
            >
          </div>
        </div>
      </div>
    </transition>
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
         @click= "getWeather();showModal();"
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
      modal: false,

      githubIcon: {
        src: require('../assets/github-logo.png'),
        alt: '깃허브 이동 링크',
        href: 'https://github.com/KoreanJungYJ/Whale-Clock'
      },

      weatherIcon: {
        src: require('../assets/weather.png'),
        alt: '날씨 확인 아이콘'
      },

      closeIcon: {
        src: require('../assets/close.png'),
        alt: '닫기 아이콘'
      }
    }
  },

  methods: {
    showModal () {
      this.modal = true
    },
    closeModal () {
      this.modal = false
    },

    getWeather () {
      let self = this
      const weatherURL = `https://api.darksky.net/forecast/e3b7a8e7022e701fde67fbfadcfb0bd0/${this.location.lat},${this.location.lng}`

      axios.get(weatherURL).then(function (response) {
        const data = response.data.currently

        let celDeg = self.getCelsius(data.apparentTemperature)
        console.log(celDeg)
      }).catch(function (err) {
        console.log(err)
      })
    },

    getCelsius (feh) {
      return ((feh - 32) / 1.8).toFixed(2)
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

  .modal-mask {
    position: fixed;
    z-index: 10000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .75);
    transition: opacity .3s ease;
    display: table;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 650px;
    height: 480px;
    margin: 0 auto;
    background-color: #FFFFFF;
    border-radius: 4px;
    transition: all .3s ease;
    overflow-y: auto;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
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

  .close-icon {
    width: 15px;
    float: right;
    margin: 12px 12px 0 0;
    cursor: pointer;
  }
</style>
