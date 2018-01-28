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
  </footer>
</template>

<script>
export default {
  name: 'weather-part',
  data () {
    return {
      githubIcon: {
        src: require('../assets/github-logo.png'),
        alt: '깃허브 이동 링크',
        href: 'https://github.com/KoreanJungYJ/Whale-Clock'
      }
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
</style>
