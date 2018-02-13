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
            <h1>{{ weathers.timezone }}</h1>
            <span class= "location">
              위도: {{ location.lat }}
              <br>
              경도: {{ location.lng }}
            </span>
            <div class= "weathers">
              <span class= "degree">
                기온
                <br>
                <span class= "celsius">
                  {{ weathers.celsiusDeg }}
                </span>
              </span>
              <span class= "weather">
                날씨
                <img :src= "checkWeather[displayWeather].src"
                     :alt= "checkWeather[displayWeather].alt"
                     class= "today-weather"
                >
              </span>
            </div>
            <span class= "info-from">
              Infos from
              <i style= "font-weight: 600">
                Dark Sky API
              </i>
            </span>
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
      weathers: {},
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
      },

      checkWeather: [
        {
          src: require('../assets/clear-day.png'),
          alt: '맑은 날입니다.'
        },
        {
          src: require('../assets/rainy-day.png'),
          alt: '비가 옵니다.'
        },
        {
          src: require('../assets/snowy-day.png'),
          alt: '눈이 옵니다.'
        },
        {
          src: require('../assets/windy-day.png'),
          alt: '바람이 붑니다.'
        },
        {
          src: require('../assets/foggy-day.png'),
          alt: '안개가 꼈습니다.'
        },
        {
          src: require('../assets/cloudy-day.png'),
          alt: '구름이 많습니다.'
        }
      ]
    }
  },

  computed: {
    displayWeather () {
      const nowWeather = this.weathers.icon
      const iconList = [
        { name: 'clear-day', index: 0 },
        { name: 'clear-night', index: 0 },
        { name: 'rain', index: 1 },
        { name: 'snow', index: 2 },
        { name: 'sleet', index: 2 },
        { name: 'wind', index: 3 },
        { name: 'fog', index: 4 },
        { name: 'cloudy', index: 5 },
        { name: 'partly-cloudy-day', index: 5 },
        { name: 'partly-cloudy-night', index: 5 }
      ]

      let indexVal = 0

      for (let i in iconList) {
        if (nowWeather === iconList[i].name) {
          indexVal = iconList[i].index
        }
      }

      return indexVal
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
        const weatherDatas = {
          celsiusDeg: self.getCelsius(data.apparentTemperature),
          timezone: self.getCity(response.data.timezone),
          icon: data.icon
        }

        console.log(response.data)
        self.weathers = weatherDatas
      }).catch(function (err) {
        console.log(err)
      })
    },

    getCelsius (feh) {
      // 화씨 -> 섭씨로 변환
      return ((feh - 32) / 1.8).toFixed(1) + '℃'
    },

    getCity (loc) {
      return loc.split('/')[1]
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
      alert('It does not support your Browser!')
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

  h1 {
    font-size: 40px;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    margin-top: 45px;
    letter-spacing: 0.5px;
    color: #424242;
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
    background-color: rgba(0, 0, 0, .7);
    transition: opacity .3s ease;
    display: table;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 650px;
    height: 400px;
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
    padding: 10px 0 0 40px;
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

  .modal-container span {
    display: block;
    color: #505050;
  }

  .location {
    padding-top: 4px;
    text-align: center;
  }

  .weathers {
    text-align: center;
  }

  .weathers .degree, .weathers .weather {
    display: inline-block;
    width: 35%;
    height: 200px;
    vertical-align: top;
    margin: 25px;
    font-size: 24px;
    letter-spacing: 1px;
    padding-top: 20px;
  }

  .celsius {
    font-size: 60px;
    font-weight: 400;
    padding-top: 30px;
    letter-spacing: 0;
  }

  .info-from {
    text-align: center;
    margin-top: -7.5px;
  }

  .today-weather {
    width: 105px;
    display: block;
    margin: 0 auto;
    margin-top: 8px;
  }
</style>
