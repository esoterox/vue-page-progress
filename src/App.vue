<template>
  <div>
    <VuePageProgress
      :scrollDirection="scroll"
      :meterSize="`${size}px`"
      :colour="colour"
      :barPosition="bar"
    />
    <div class="about-container" id="app">
      <h1>Crude Vue Page Progress Demo</h1>
      <div class="options">
        <a href="https://github.com/esoterox/vue-page-progress" target="_blank">GitHub</a>
        <div class="options__item">
          <label for="scroll-direction">Set Progress Bar Scroll Direction</label>
          <select v-model="scroll">
            <option v-for="direction in scrollDirections" :key="direction">{{ direction }}</option>
          </select>
        </div>
        <div class="options__item">
          <label for="bar-position">Set Progress Bar Position</label>
          <select id="bar-position" v-model="bar">
            <option v-for="position in barPositions" :key="position">{{ position }}</option>
          </select>
        </div>
        <div class="options__item">
          <label for="size">Set Progress Bar Size (px)</label>
          <input type="number" id="size" step="1" v-model="size" min="1" />
        </div>
        <div class="options__item">
          <label for="size">Set Progress Bar Colour (hex)</label>
          <select id="bar-position" v-model="colour">
            <option v-for="colour in colours" :key="colour">{{ colour }}</option>
          </select>
        </div>
      </div>
      <div :class="renderTextContainer">
        <h2>Text</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis vel, itaque sit quibusdam id rem aliquid nemo laboriosam, molestiae deserunt. Dignissimos id voluptate magnam eligendi vero sapiente. Animi, doloremque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis vel, itaque sit quibusdam id rem aliquid nemo laboriosam, molestiae deserunt. Dignissimos id voluptate magnam eligendi vero sapiente. Animi, doloremque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis vel, itaque sit quibusdam id rem aliquid nemo laboriosam, molestiae deserunt. Dignissimos id voluptate magnam eligendi vero sapiente. Animi, doloremque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis vel, itaque sit quibusdam id rem aliquid nemo laboriosam, molestiae deserunt. Dignissimos id voluptate magnam eligendi vero sapiente. Animi, doloremque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis vel, itaque sit quibusdam id rem aliquid nemo laboriosam, molestiae deserunt. Dignissimos id voluptate magnam eligendi vero sapiente. Animi, doloremque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis vel, itaque sit quibusdam id rem aliquid nemo laboriosam, molestiae deserunt. Dignissimos id voluptate magnam eligendi vero sapiente. Animi, doloremque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis vel, itaque sit quibusdam id rem aliquid nemo laboriosam, molestiae deserunt. Dignissimos id voluptate magnam eligendi vero sapiente. Animi, doloremque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis vel, itaque sit quibusdam id rem aliquid nemo laboriosam, molestiae deserunt. Dignissimos id voluptate magnam eligendi vero sapiente. Animi, doloremque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis vel, itaque sit quibusdam id rem aliquid nemo laboriosam, molestiae deserunt. Dignissimos id voluptate magnam eligendi vero sapiente. Animi, doloremque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis vel, itaque sit quibusdam id rem aliquid nemo laboriosam, molestiae deserunt. Dignissimos id voluptate magnam eligendi vero sapiente. Animi, doloremque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis vel, itaque sit quibusdam id rem aliquid nemo laboriosam, molestiae deserunt. Dignissimos id voluptate magnam eligendi vero sapiente. Animi, doloremque!</p>
      </div>
    </div>
  </div>
</template>

<script>
import VuePageProgress from "@/components/VuePageProgress";
export default {
  name: 'app',
  components: {
    VuePageProgress
  },

  data() {
    return {
      scroll: "vertical",
      scrollDirections: ["vertical", "horizontal"],
      bar: "top",
      barPositions: ["top", "right", "left", "bottom"],
      size: 4,
      colour: "#61E2CF",
      colours: ["#61E2CF", "#800000", "#8F33FF", "#FB0243"]
    };
  },

  computed: {
    renderTextContainer() {
      return this.scroll === "vertical"
        ? "text-container--vertical"
        : "text-container--horizontal";
    }
  }
};
</script>

<style scoped>
.about-container {
  margin: 0 auto;
}

.options {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.options__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

* {
  font-family: "Livvic", sans-serif;
}

h1 {
  text-align: center;
}

select {
  padding: 8px;
}

p {
  font-size: 1.2rem;
}

.text-container--vertical {
  margin: 0 auto;
  max-width: 720px;
  margin-top: 3rem;
}
.text-container--horizontal {
  margin: 0 auto;
  min-width: 3000px;
  padding: 3rem;
}
</style>