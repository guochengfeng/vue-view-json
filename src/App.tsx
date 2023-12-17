import { defineComponent } from "vue";
import VueViewJson from './index';
import json from './assets/json.json';

export default defineComponent({
  render() {
    return (
      <main>
        <VueViewJson 
          json={json}
        />
      </main>
    );
  }
});