<template>
  <div>
    <div class= "whale-clock">
      <!-- 현재 일정 -->
      <span class= "today-date">
        {{ todayDate }}
      </span>
      <!-- 시계 -->
      <div v-for= "tc in timeContainer"
           :key= "tc.id"
           :class= "tc.parentClass"
           ref= "time-container"
      >
        <div :class= "tc.childClass"></div>
      </div>
      <!-- 검색 창 -->
      <div class= "search-form">
        <input type= "text"
               placeholder= "검색어를 입력해주세요."
               v-model= "message"
               @keyup.enter= "search"
        >
        <img :src= "searchImg.src"
             :alt= "searchImg.alt"
             class= "search-img"
             @click.prevent= "search"
        >
      </div>
      <!-- 낮과 밤 구분 이미지 -->
      <img :src= "morning ? sunNightImg.morningSrc : sunNightImg.nightSrc"
           :alt= "sunNightImg.alt"
           class= "day-change"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'clock-part',
  data () {
    return {
      now: new Date(),

      timeContainer: [
        {
          parentClass: 'hours-container',
          childClass: 'hours',
          id: 1
        },
        {
          parentClass: 'minutes-container',
          childClass: 'minutes',
          id: 2
        },
        {
          parentClass: 'seconds-container',
          childClass: 'seconds',
          id: 3
        }
      ],

      sunNightImg: {
        morningSrc: require('../assets/newtab-ic-sun.png'),
        nightSrc: require('../assets/newtab-ic-night.png'),
        alt: '낮과 밤 이미지'
      },

      searchImg: {
        src: require('../assets/btn-search.png'),
        alt: '검색 이미지'
      },
      message: ''
    }
  },

  computed: {
    correctHour () {
      let hour = this.now.getHours()

      if (hour >= 12) {
        hour = hour - 12
      }
      if (hour === 0) {
        hour = 12
      }

      return hour
    },

    morning () {
      return (this.now.getHours() > 5 && this.now.getHours() < 18) ? 1 : 0
    },

    todayDate () {
      return [this.now.getFullYear(),
        ((this.now.getMonth() + 1) > 9 ? '' : '0') + (this.now.getMonth() + 1),
        (this.now.getDate() > 9 ? '' : '0') + this.now.getDate()
      ].join('.') + '.'
    },

    getMinutes () {
      return this.now.getMinutes()
    }
  },

  methods: {
    getAngle () {
      const angles = [
        // 현재 시
        ((this.correctHour * 30) + (this.now.getMinutes() * 0.5)),
        // 현재 분
        (this.now.getMinutes() * 6),
        // 현재 초
        ((this.now.getSeconds() * 6) + (this.now.getMilliseconds() * 0.006))
      ]

      return angles
    },

    search () {
      let typeMessage = this.message
      const searchUrl = `https://www.google.co.kr/search\
?q=${typeMessage}&oq=${typeMessage}&aqs=chrome..69i57j69i\
60l5.1198j0j7&sourceid=chrome&ie=UTF-8`

      window.location.href = searchUrl
    },

    setClock () {
      let self = this
      let term = 50

      // 함수 50m마다 실행
      setInterval(function () {
        let timeContainer = self.$refs['time-container']

        for (let i = 0; i < timeContainer.length; i++) {
          let angles = self.getAngle()
          timeContainer[i].style.transform = `rotateZ(${angles[i]}deg)`
          timeContainer[i].style.webkitTransform = `rotateZ(${angles[i]}deg)`
        }

        self.now.setMilliseconds(self.now.getMilliseconds() + term)
        if (self.getMinutes !== self.now.getMinutes()) {
          self.now = new Date()
        }
      }, term)
    }
  },

  mounted () {
    this.setClock()
  }
}
</script>

<style scoped>
  .whale-clock {
    width: 370px;
    height: 370px;
    background: url('../assets/bg-analog-clock.png') no-repeat center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .whale-clock:after {
    content: "";
    width: 4px;
    height: 4px;
    background-color: #000000;
    border-radius: 100%;
    border: 3px solid #00dc9b;
    box-sizing: content-box;
    position: absolute;
    z-index: 9999;
  }

  .today-date {
    font-size: 36px;
    font-weight: 500;
    letter-spacing: -1px;
    color: #FFFFFF;
    margin-right: 800px;
  }

  .day-change {
    width: 24px;
    position: absolute;
    bottom: 65px;
  }

  .search-form {
    width: 340px;
    height: 37px;
    position: absolute;
    margin-left: 440px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
  }

  .search-form:before {
    content: "";
    width: 19px;
    height: 19px;
    display: block;
    background: url(../assets/google.png) no-repeat center;
    background-size: cover;
    margin-left: 10px;
  }

  input[type=text] {
    margin-left: 10px;
    width: 80%;
    height: 24px;
    font-size: 14px;
    color: #FFFFFF;
    border-left: 1px solid rgba(255, 255, 255, 0.7);
    padding-left: 10px;
    background-color: transparent;
    font-family: sans-serif;
  }

  input[type=text]::placeholder {
    color: #ffffff;
  }

  .search-img {
    cursor: pointer;
    margin-left: 4px;
  }

  .hours-container, .minutes-container, .seconds-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
  }

  /*.hours-container {
    animation: rotate 43200s infinite linear;
  }

  .minutes-container {
    animation: rotate 3600s infinite linear;
  }*/

  /* 째깍거리는 느낌을 주고 싶다면 linear대신 steps(60)으로 주자! */
  /* 째깍거림과 동시에 뭔가 튀는 느낌을 주고 싶다면 cubic-bezier를 이용하자 */
  /* 예시: transition: transform 0.2s cubic-bezier(.4, 2.08, .55, .44); */

  /*.seconds-container {
    animation: rotate 60s infinite linear;
  }*/

  /* Rotate Animation */
  /*@keyframes rotate {
    100% {
      transform: rotateZ(360deg);
    }
  }*/

  .seconds {
    width: 2px;
    height: 45%;
    background-color: #00dc9b;
    margin-top: 45px;
    position: absolute;
    z-index: 8888;
  }

  .minutes {
    width: 2px;
    height: 35%;
    background-color: #FFFFFF;
    margin-top: 82px;
    position: absolute;
    z-index: 7777;
  }

  .hours {
    width: 2px;
    height: 28%;
    background-color: #FFFFFF;
    margin-top: 108px;
    position: absolute;
    z-index: 6666;
  }
</style>
