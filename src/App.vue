<template>
  <div class="has-navbar-fixed-top">
    <nav-header />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import NavHeader from "./components/NavHeader.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "App",
  components: {
    NavHeader: NavHeader,
    FooterComponent: FooterComponent,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: Inter, sans-serif;
}
#app {
  color: #1b1b1b;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1em;
  font-weight: 500;
  line-height: 1.5;
}
.has-navbar-fixed-top {
  padding-top: 85px;
}
.container {
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
}
.section {
  padding: 3rem 1.5rem;
}
.columns {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
}
.columns:not(:last-child) {
  margin-bottom: calc(1.5rem - 0.75rem);
}
.has-text-centered {
  text-align: center !important;
}
img {
  height: auto;
  max-width: 100%;
}
a {
  color: #3273dc;
  cursor: pointer;
  text-decoration: none;
}
p.body1 {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
}
@media screen and (min-width: 1216px) {
  .container {
    max-width: 1152px;
  }
}
@media screen and (min-width: 769px), print {
  .columns:not(.is-desktop) {
    display: flex;
  }
}
</style>
