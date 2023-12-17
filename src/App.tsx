import { defineComponent } from "vue";
import VueJsonView from './index';
import json from './assets/json.json';

export default defineComponent({
  render() {
    return (
      <main>
        <VueJsonView 
          json={json}
        />
      </main>
    );
  }
});