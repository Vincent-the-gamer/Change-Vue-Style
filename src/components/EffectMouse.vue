<template>
  <div ref="effectMouse">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import {onMounted} from "vue";
import useCurrentInstance from "../hooks/useCurrentInstance";

// 随机颜色
function randomColor() {
  return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
}

onMounted(() => {
  const proxy: any = useCurrentInstance();
  let count: number = 0;

  proxy.$refs.effectMouse.onclick = (event: MouseEvent) => {
    let heart = document.createElement("b");
    heart.onselectstart = () => {
      event.returnValue = false
    };

    const randomMessage: string[] = ["❤你好鸭~❤","❤写代码~❤","❤顶级厨师~❤","❤九转大肠~❤","❤玩游戏~❤"];
    let index: number = count % randomMessage.length;
    document.body.appendChild(heart).innerHTML = randomMessage[index];
    count++;

    heart.style.cssText = "position: fixed;left:-100%;";
    
    let f = 16, // 字体大小
        x = event.clientX - f / 2, // 横坐标
        y = event.clientY - f, // 纵坐标
        c = randomColor(), // 随机颜色
        a = 1, // 透明度
        s = 1.2; // 放大缩小
    let timer = setInterval(function() {
      if (a <= 0) {
        document.body.removeChild(heart);
        clearInterval(timer);
      } else {
        heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");";
        y--;
        a -= 0.016;
        s += 0.002;
      }
    }, 12)
  }
});
</script>

<style scoped>
 
</style>