<template>
  <div>
    <div class= "whale-clock">
      <div class= "hours-container">
        <div class= "hours"></div>
      </div>
      <div class= "minutes-container">
        <div class= "minutes"></div>
      </div>
      <div class= "seconds-container">
        <div class= "seconds"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'clock-part'
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

  .hours-container, .minutes-container, .seconds-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    border: 1px solid white;
  }

  .hours-container {
    animation: rotate 43200s infinite linear;
  }

  .minutes-container {
    animation: rotate 3600s infinite linear;
  }

  /* 째깍거리는 느낌을 주고 싶다면 linear를 steps(60)으로 주자! */
  /* 째깍거림과 동시에 뭔가 튀는 느낌을 주고 싶다면 cubic-bezier를 이용하자 */
  /* 예시: transition: transform 0.2s cubic-bezier(.4, 2.08, .55, .44); */

  .seconds-container {
    animation: rotate 60s infinite linear;
  }

  /* Rotate Animation */
  @keyframes rotate {
    100% {
      transform: rotateZ(360deg);
    }
  }

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
