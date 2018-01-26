<template>
  <div>
    <clock-part />
    <weather-part />
  </div>
</template>

<script>
import ClockPart from './ClockPart'
import WeatherPart from './WeatherPart'

export default {
  name: 'whale-clock',
  components: {
    ClockPart,
    WeatherPart
  }
}
</script>

<style scoped>

</style>
