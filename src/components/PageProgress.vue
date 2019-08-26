<template>
  <div class="page-progress__container" :class="applyContainerPositionClass">
    <span
      class="page-progress__meter"
      :style="{width: applyMeterWidth, height: applyMeterHeight, 'background-color': colour}"
    />
  </div>
</template>

<script>
export default {
  name: "PageProgress",
  props: {
    meterSize: {
      type: String,
      default: "3px",
      required: false
    },
    colour: {
      type: String,
      default: "#61E2CF",
      required: false
    },
    barPosition: {
      type: String,
      default: "top",
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
      PageProgress: 0
    };
  },

  computed: {
    applyMeterWidth() {
      if (this.barPosition === "top" || this.barPosition === "bottom") {
        return `${this.PageProgress}%`;
      } else {
        return `${this.meterSize}`;
      }
    },
    applyMeterHeight() {
      if (this.barPosition === "top" || this.barPosition === "bottom") {
        return `${this.meterSize}`;
      } else {
        return `${this.PageProgress}%`;
      }
    },
    applyContainerPositionClass() {
      switch (this.barPosition) {
        case "left":
          return "page-progress__container--left";
        case "right":
          return "page-progress__container--right";
        case "bottom":
          return "page-progress__container--bottom";
        default:
          return "page-progress__container--top";
      }
    }
  },

  created() {
    window.addEventListener("scroll", this.updatePageProgress);
  },

  destroyed() {
    window.removeEventListener("scroll", this.updatePageProgress);
  },

  methods: {
    updatePageProgress() {
      if (this.scrollDirection === "vertical") {
        this.PageProgress = this.getCurrentVerticalScrollPosition(
          window.scrollY
        );
      } else {
        this.PageProgress = this.getCurrentHorizontalScrollPosition(
          window.scrollX
        );
      }
    },

    getCurrentVerticalScrollPosition(currentPosition) {
      const bodyHeight = document.body.clientHeight;
      const pageHeight = document.documentElement.clientHeight;
      return (currentPosition / (bodyHeight - pageHeight)) * 100;
    },

    getCurrentHorizontalScrollPosition(currentPosition) {
      const bodyWidth = this.calculateWidestElement();
      const pageWidth = document.body.clientWidth;
      return (currentPosition / (bodyWidth - pageWidth)) * 100;
    },

    calculateWidestElement() {
      const items = document.body.getElementsByTagName("*");
      let width = document.documentElement.clientWidth;
      for (let i in items) {
        if (items[i].clientWidth > width) {
          width = items[i].clientWidth;
        }
      }
      return width;
    }
  }
};
</script>

<style>
.page-progress__container {
  position: fixed;
  z-index: 9999;
}

.page-progress__container--top {
  top: 0;
  left: 0;
  width: 100%;
}

.page-progress__container--left {
  top: 0;
  left: 0;
  height: 100vh;
}
.page-progress__container--bottom {
  bottom: 0;
  left: 0;
  width: 100%;
}
.page-progress__container--right {
  top: 0;
  right: 0;
  height: 100vh;
}

.page-progress__meter {
  width: 0%;
  display: flex;
}
</style>