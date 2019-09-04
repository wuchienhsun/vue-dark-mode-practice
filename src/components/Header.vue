<template>
  <header>
    <h1>{{ modeStatus }} Mode</h1>
    <!-- Toggler -->
    <Toggle />
    <nav>
      <div class="test">
        <router-link to="/home">
          <dm-button :color="color">Home</dm-button>
        </router-link>
      </div>
      <div class="test">
        <router-link to="/about">
          <dm-button :color="color">About</dm-button>
        </router-link>
      </div>
      <div class="test">
        <router-link to="/content">
          <dm-button :color="color">Content</dm-button>
        </router-link>
      </div>
    </nav>
  </header>
</template> 

<script>
import Toggle from "@/components/Toggle";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      color: ""
    };
  },
  components: {
    Toggle
  },
  computed: {
    ...mapGetters(["modeStatus"])
  },
  created() {
    this.changeColor();
  },
  updated() {
    this.changeColor();
  },
  methods: {
    changeColor() {
      if (this.modeStatus === "dark") {
        this.color = "blue";
      } else {
        this.color = "black";
      }
    }
  }
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  height: 60px;
  background: #c3c3c3;
  transition: background 0.3s ease-in-out;
}

.dark header {
  background: #15202b;
}
header h1 {
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 900;
}

header nav {
  display: flex;
  height: 60px;
}
header nav .nav-link {
  display: flex;
  align-items: center;
  padding: 0px 15px;
}
header nav .nav-link:hover {
  background: #b0b0b0;
}

.dark header nav .nav-link:hover {
  background: #101520;
}

.test {
  padding: 10px;
}
</style>