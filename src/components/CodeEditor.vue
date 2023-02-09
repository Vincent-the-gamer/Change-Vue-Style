<template>
  <codemirror v-model="code" 
  placeholder="搁这儿！！！写~代~码~~~~" 
  :style="style" 
  :autofocus="true" 
  :indent-with-tab="true"
  :tab-size="2" 
  :extensions="extensions" 
  @ready="handleReady" 
  />
  <!-- @change=""
    @focus=""
    @blur="" -->
</template>

<script lang="ts">

import { defineComponent, Ref, ref, shallowRef, watch } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { vue } from '@codemirror/lang-vue'
import { oneDark } from '@codemirror/theme-one-dark'
import { useCodeStore } from '@/store/useCodeStore'


export default defineComponent({
  components: {
    Codemirror
  },
  setup() {
    const codeStore = useCodeStore();
    const code: Ref<string> = ref(codeStore.getCode);
    // 正则匹配三种标签
    const templateRegex: RegExp = /<template(?:(?!<\/template>).|\n)*?<\/template>/gm;
    const scriptRegex: RegExp = /<script(?:(?!<\/script>).|\n)*?<\/script>/gm;
    const styleRegex: RegExp = /<style(?:(?!<\/script>).|\n)*?<\/style>/gm;

    // 监听代码属性
    watch(code, (newVal) => {
      codeStore.setCode(newVal);

      const template: string = code.value.match(templateRegex)![0]
        .replace("\n", " ")
        .replace("<template>", "")
        .replace("<\/template>", "")
        .trim();
      const script: string = code.value.match(scriptRegex)![0]
        .replace("\n", " ")
        .replace("<script>", "")
        .replace("<\/script>", "")
        .replace("export default", "")
        .replace(/name:\s+["|“|'](.*?)["|“|'][, | \s]/g, "")
        .trim()
        .substring(1)
        .slice(0, -1)
        .trim();
      const scriptObj = eval( "(" +
          code.value.match(scriptRegex)![0]
          .replace("\n", " ")
          .replace(/data\(\)/g, "data: () => ")
          .replace("<script>", "")
          .replace("<\/script>", "")
          .replace("export default", "")
          .trim() 
          + ")"
      );
      const style: string = code.value.match(styleRegex)![0]
        .replace("\n", " ")
        .replace("<style>", "")
        .replace("<\/style>", "")
        .trim();
    

      let name: string
      if(scriptObj.name !== undefined){
        name = scriptObj.name;
      } else {
        name = "";
      }
      codeStore.setTargetCode(
        `Vue.component("${name}", {
  template: "${template}",
  ${script}
})

css显示部分：
  ${style}`

      );
});

    const extensions = [vue(), oneDark]

    // Codemirror EditorView instance ref
    const view = shallowRef()
    const handleReady = (payload: any) => {
      view.value = payload.view
    }

    // Status is available at all times via Codemirror EditorView
    const getCodemirrorStates = () => {
      const state = view.value.state
      const ranges = state.selection.ranges
      const selected = ranges.reduce((r: any, range: any) => r + range.to - range.from, 0)
      const cursor = ranges[0].anchor
      const length = state.doc.length
      const lines = state.doc.lines
      // more state info ...
      // return ...
    }

    const style = {
      height: '80%',
      fontFamily: "Helvetica Neue, Times New Roman",
      fontSize: "14px"
    };

    return {
      code,
      style,
      extensions,
      handleReady,
      log: console.log,
      codeStore
    }
  }
})

</script>