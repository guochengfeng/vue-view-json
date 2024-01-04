<template>
  <header>
    <h3 align="center">
      <a href="https://github.com/guochengfeng/vue-view-json.git" target="_blank">Vue View Json</a>
    </h3>
    <div align="center">
      <p>A Vue component for rendering JSON data as a tree structure.</p>
    </div>
  </header>

  <main>
    <div class="textarea-wrap">
      <textarea class="textarea" v-model="jsonStr"></textarea>
    </div>
    <div class="vue-view-json-wrap">
      <vue-view-json :json="parseJson" v-if="!hasError" />
      <div v-if="hasError">{{ hasError }}</div>
    </div>
  </main>
</template>

<script>
import VueViewJson from 'vue-view-json';
import json from '../../src/assets/json.js';

export default {
  name: "ClassifyGuide",
  components: {
    VueViewJson
  },
  data() {
    return {
      hasError: '',
      jsonStr: json,
      parseJson: JSON.parse(json),
    }
  },
  watch: {
    jsonStr() {
      let newJson
      try {
        newJson = JSON.parse(this.jsonStr)
      } catch (error) {
        this.hasError = error
        return
      }
      this.parseJson = newJson
      this.hasError = ''
    },
  }
}
</script>

<style scoped>
main {
  height: calc(100vh - 110px);
  .textarea-wrap, .vue-view-json-wrap {
    width: 50%;
    height: 100%;
    overflow: auto;
    display: inline-block;
  }
  .textarea {
    width: 98%;
    height: 98%;
  }

}
</style>
