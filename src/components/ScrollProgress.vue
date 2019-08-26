<template>
  <div class="scroll-progress__container">
    <span class="scroll-progress__meter" :style="{ width: `${scrollProgress}%`, height: height, 'background-color': colour }" />
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: "3px",
      required: false
    },
    colour: {
      type: String,
      default: "#61E2CF",
      required: false
    },
    scrollDirection: {
      type: String,
      default: "vertical",
      required: false
    }
  },

  data() {
      return {
          scrollProgress: 0,
      }
  },

  created() {
    window.addEventListener("scroll", this.updateScrollProgress);
  },

  destroyed() {
    window.removeEventListener("scroll", this.updateScrollProgress);
  },

  methods: {
    updateScrollProgress() {
        if (this.scrollDirection === 'vertical') {
            this.scrollProgress = this.getCurrentVerticalScrollPosition(window.scrollY)
        } else {
            this.scrollProgress = this.getCurrentHorizontalScrollPosition(window.scrollX)
        }
    },

    getCurrentVerticalScrollPosition(currentPosition) {
        const bodyHeight = document.body.clientHeight
        const pageHeight = document.documentElement.clientHeight
        return (currentPosition / (bodyHeight - pageHeight)) * 100
    },

    getCurrentHorizontalScrollPosition(currentPosition) {
        const bodyWidth = this.calculateWidestElement()
        const pageWidth = document.body.clientWidth
        return (currentPosition / (bodyWidth - pageWidth)) * 100
    },

    calculateWidestElement() {
        const items = document.body.getElementsByTagName("*")
        let width = document.documentElement.clientWidth;
        for (let i in items) {
            if (items[i].clientWidth > width) {
                width = items[i].clientWidth
            }
        }
        return width;
    }
  }
};
</script>

<style>
.scroll-progress__container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
}

.scroll-progress__meter {
  width: 0%;
  display: flex;
}
</style>