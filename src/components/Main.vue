<template>
  <div class="container">
    <div class="editor1">
      <h1>搁这儿写代码！</h1>
      <CodeEditor class="editor"/>
    </div>
    <div class="arrow">
      <h1>=></h1>
    </div>
    <div class="editor2">
      <h1>搁这儿拿代码去用！</h1>
      <TargetCode class="editor"/>
    </div>
  </div>
</template>

<script lang="ts" setup>;
import CodeEditor from './CodeEditor.vue';
import TargetCode from './TargetCode.vue';

</script>

<style lang="less" scoped>
@editor-left: 65px;
@editor-height: 650px;
.container{
  overflow: hidden;
  position: relative;
  display: flex;
  top: 50px;
  min-width: 800px;
  margin: 0 auto;
  width: 90%;
  height: fit-content;
  .editor1{
    position: relative;
    left: @editor-left;
    width: 38%;
    height: @editor-height;
    padding: 10px;
    h1{
        text-align: center;
    }
    .editor{
        position: relative;
        top: 0;
        width: 100%;
        height: 80%;
        margin: 0;
    }
 }
 .editor2{
    position: relative;
    left: @editor-left;
    width: 38%;
    height: @editor-height;
    background-color: 0;
    padding: 10px;
    h1{
        text-align: center;
    }
    .editor{
        position: relative;
        top: 0;
        width: 100%;
        height: 80%;
        margin: 0;
    }
 }
 .arrow{
   position: relative;
   margin-left: 10px;
   margin-right: 10px;
   padding: 10px;
   left: @editor-left;
   top: 250px;
 }
}
 
</style>