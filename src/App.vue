<template>
  <div class="app" :class="mode">
    <Header :mode="mode" @toggle="toggle()" />
    <Content :mode="mode" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Content from "@/components/Content";
export default {
  name: "app",
  data() {
    return {
      mode: "ligth"
    };
  },
  components: {
    Header,
    Content
  },
  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = "ligth";
      } else {
        this.mode = "dark";
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
.app {
  width: 100vw;
  min-height: 100vh;
  background: #f3f3f3;
  color: #15202b;
  transition: background 0.3s ease-in-out;
}
.dark {
  background: #192734;
  color: #e8e8e8;
}
</style>
