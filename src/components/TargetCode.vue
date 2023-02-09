<template>
  <codemirror
    v-model="codeStore.getTargetCode"
    placeholder="搁这儿拿~~~~代码~~"
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
        style,
        extensions,
        codeStore,
        handleReady,
        log: console.log
      }
    }
  })
</script>