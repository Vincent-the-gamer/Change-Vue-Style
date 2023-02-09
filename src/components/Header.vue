<template>
  <header>
    <img src="@/assets/双人.png" alt="logo"/>
    <h2>Vue组件代码风格转换器</h2>
    <div class="list">
      <a href="https://vincent-the-gamer.github.io/JiuZhuanDaChang-React" target="_blank">
        <span>九转大肠-React</span>
      </a>
    </div>
    <div class="github">
      <a href="https://github.com/Vincent-the-gamer/Change-Vue-Style" target="_blank">
        <img src="@/assets/github.png" alt="github"/>
        <span>GitHub</span>
      </a>
    </div>
  </header>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
  header{
    position: fixed;
    min-width: 800px;
    background-color: black;
    z-index: 2;
    width: 100%;
    height: 40px;
    top: 0;
    left: 0;
    box-shadow: 2px 2px 4px gray;
    img{
        position: relative;
        margin: 0;
        height: 35px;
        top: 2px;
        left: 5px;
    }
    h2{
        display: inline;
        position: relative;
        left: 10px;
        bottom: 5px;
        font-size: 20px;
    }
    .github{
      display: inline;
      position: absolute;
      top: 0;
      right: 10px;
      transition: background-color, 0.5s;
      a{
        text-decoration: none;
        color: white;
      }
      span{
        position: relative;
        margin: 0;
        padding: 2px;
        bottom: 8px;
      }
      img{
        display: inline;
        position: relative;
        margin: 0;
        top: 0;
        margin-right: 10px;
        height: 35px;
      }
      &:hover{
        background-color: gray;
      }
    }
    .list{
      position: absolute;
      display: inline;
      a{
        text-decoration: none;
        color: white;
      }
      span{
        position: relative;
        top: 12px;
        left: 20px;
        margin-left: 10px;
        margin-right: 10px;
        transition: width, 0.5s;
        &:hover{
          color: gold;
          text-shadow: 2px 2px 10px yellowgreen;
          cursor: pointer;
          transform: scale(103%, 103%);
        }
      }
    }
    
  }
</style>
