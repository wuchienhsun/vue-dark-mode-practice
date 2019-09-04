<template>
  <div class="app" :class="modeStatus">
    <Header />
    <Content />
    <!-- <router-link :to="{ name: 'home'}">Home</router-link> -->
  </div>
</template>

<script>
import Header from "@/components/Header";
import Content from "@/components/Content";
import { mapGetters } from "vuex";
export default {
  name: "app",
  components: {
    Header,
    Content
  },
  computed: {
    ...mapGetters(["modeStatus"])
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
