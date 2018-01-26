<template>
  <div>
    <div class= "whale-clock">
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
</style>
