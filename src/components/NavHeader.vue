<!-- eslint-disable prettier/prettier -->
<template>
  <nav class="navbar signal-navbar is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <!-- <router-link :to="{ name: 'signal' }"> -->
        <a href="/">
          <img class="signal-logo" src="../assets/logo_signal.png" />
        </a>
        <!-- </router-link> -->
      </div>
      <div id="signalNavbar" class="navbar-menu">
        <div class="navbar-end">
          <router-link
            :to="{ name: 'download' }"
            @click="scrollToTop"
            class="navbar-item get-signal"
            >Get Signal</router-link
          >
          <!-- <router-link :to="{ name: 'home' }" class="navbar-item get-signal"
            >Help</router-link
          > -->
          <a href="https://support.signal.org/hc/en-us" class="navbar-item get-signal"
            >Help</a
          >
          <router-link
            :to="{ name: 'blog' }"
            @click="scrollToTop"
            class="navbar-item get-signal"
            >Blog</router-link
          >
          <router-link
            :to="{ name: 'developers' }"
            @click="scrollToTop"
            class="navbar-item get-signal"
            >Developers</router-link
          >
          <router-link
            :to="{ name: 'careers' }"
            @click="scrollToTop"
            class="navbar-item get-signal"
            >Careers</router-link
          >
          <router-link
            :to="{ name: 'donate' }"
            @click="scrollToTop"
            class="navbar-item get-signal"
            >Donate</router-link
          >
          <a href="" class="navbar-item get-signal">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="navbar-item get-signal">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="navbar-item get-signal">
            <i class="fas fa-globe" id="language-selector"></i>
            English
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0 });
    },
  },
};
</script>
<style scoped>
.navbar.is-fixed-top {
  top: 0;
}
.navbar.is-fixed-bottom,
.navbar.is-fixed-top {
  left: 0;
  position: fixed;
  right: 0;
  z-index: 30;
}

.signal-navbar {
  border-bottom: 1px solid #ebeaeb;
}
.navbar {
  background-color: #fff;
}
.navbar > .container {
  align-items: stretch;
  display: flex;
  min-height: 3.25rem;
  width: 100%;
}
.container {
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
}
.navbar-brand,
.navbar-tabs {
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 3.25rem;
}
.signal-navbar .navbar-brand {
  align-items: center;
  padding-left: 18px;
}
a {
  color: #3273dc;
  cursor: pointer;
  text-decoration: none;
}
@media screen and (min-width: 1216px) {
  .container {
    max-width: 1152px;
  }
}

@media screen and (min-width: 1024px) {
  .navbar,
  .navbar-end,
  .navbar-menu,
  .navbar-start {
    align-items: stretch;
    display: flex;
  }

  .container > .navbar .navbar-brand,
  .navbar > .container .navbar-brand {
    margin-left: -0.75rem;
  }
  .signal-navbar .navbar-brand {
    padding: 0px;
  }
  .signal-logo {
    height: 50px;
    vertical-align: middle;
  }
  .signal-navbar {
    padding: 16px 0;
  }
  .navbar {
    min-height: 3.25rem;
  }
  .navbar,
  .navbar-end,
  .navbar-menu,
  .navbar-start {
    align-items: stretch;
    display: flex;
  }
  .container > .navbar .navbar-menu,
  .navbar > .container .navbar-menu {
    margin-right: -0.75rem;
  }

  .navbar-menu {
    flex-grow: 1;
    flex-shrink: 0;
  }
  .navbar,
  .navbar-end,
  .navbar-menu,
  .navbar-start {
    align-items: stretch;
    display: flex;
  }
  .navbar-end {
    justify-content: flex-end;
    margin-left: auto;
  }
  .navbar-link,
  a.navbar-item {
    cursor: pointer;
  }
  .navbar-item {
    display: flex;
  }
  .navbar-item {
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .navbar-item,
  .navbar-link {
    color: #4a4a4a;
    display: block;
    line-height: 1.5;
    padding: 0.5rem 0.75rem;
    position: relative;
  }
  .signal-navbar .navbar-item,
  .signal-navbar .navbar-link {
    color: #1b1b1b;
    font-size: 16.4px;
  }
  .navbar-item,
  .navbar-link {
    align-items: center;
    display: flex;
  }
  .navbar-item,
  .navbar-link {
    color: #4a4a4a;
    display: block;
    line-height: 1.5;
    padding: 0.5rem 0.75rem;
    position: relative;
  }
  .navbar-item {
    display: flex;
  }
  .navbar-item .icon:only-child,
  .navbar-link .icon:only-child {
    margin-left: -0.25rem;
    margin-right: -0.25rem;
  }
  .fa-twitter {
    height: 20px;
    width: 20px;
  }

  .fas,
  .fab {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    height: 1.5rem;
    width: 1.5rem;
  }
  .fa-instagram {
    height: 20px;
    width: 20px;
  }
  .fa-globe {
    margin-right: 4px;
  }
  .signal-navbar a.navbar-item:hover {
    color: #2c6bed;
  }
}
@media screen and (max-width: 769px) {
  .signal-logo {
    height: 30px;
    vertical-align: middle;
  }
}
@media screen and (max-width: 1023px) {
  .navbar.is-fixed-top .navbar-menu,
  .navbar.is-fixed-top-touch .navbar-menu {
    -webkit-overflow-scrolling: touch;
    max-height: calc(100vh - 3.25rem);
    overflow: auto;
  }
  .navbar-menu {
    background-color: #fff;
    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
    padding: 0.5rem 0;
  }
  .navbar-menu {
    display: none;
  }
}
</style>
