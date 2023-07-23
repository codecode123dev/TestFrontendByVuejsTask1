<!-- eslint-disable prettier/prettier -->
<template>
  <section class="hero-main hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-two-fifths">
            <h1>Speak Freely</h1>
            <p class="body1">
              Say "hello" to a different messaging experience. An unexpected focus on
              privacy, combined with all of the features you expect.
            </p>
            <p>
              <a href="#" class="get-signal button button-white">Get Signal</a>
            </p>
          </div>
          <div class="column mobile-screenshots">
            <img class="screenshot1" src="../assets/phone1.png" />
            <img class="screenshot2" src="../assets/phone2.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="why-signal section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column has-text-centered">
          <h2>Why use Signal?</h2>
          <p class="body1">
            Explore below to see why Signal is a simple, powerful, and secure messenger
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="section information">
    <div class="container">
      <div class="columns is-desktop is-centered">
        <div class="column has-text-right">
          <div class="lottie-wrapper">
            <div class="lottie-animation">
              <!-- <lottie-animation /> -->
              <LottieAnimation
                :animation-data="AnimationJSON"
                :auto-play="true"
                :loop="true"
                :speed="1"
                ref="anim"
              />
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <h2>Share Without Insecurity</h2>
          <p class="body1">
            State-of-the-art end-to-end encryption (powered by the open source Signal
            Protocol) keeps your conversations secure. We can't read your messages or
            listen to your calls, and no one else can either. Privacy isn’t an optional
            mode — it’s just the way that Signal works. Every message, every call, every
            time.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="section features">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half has-text-centered">
          <div class="box">
            <img src="../assets/catlove.png" alt="cat" />
            <h3>Say Anything</h3>
            <p class="body2">
              Share text, voice messages, photos, videos, GIFs and files for free. Signal
              uses your phone's data connection so you can avoid SMS and MMS fees.
            </p>
          </div>
        </div>
        <div class="column is-half has-text-centered">
          <div class="box">
            <img src="../assets/people.png" alt="people" />
            <h3>Speak Freely</h3>
            <p class="body2">
              Make crystal-clear voice and video calls to people who live across town, or
              across the ocean, with no long-distance charges.
            </p>
          </div>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-half has-text-centered">
          <div class="box">
            <img src="../assets/cat.png" alt="cat" />
            <h3>Make Privacy Stick</h3>
            <p class="body2">
              Add a new layer of expression to your conversations with encrypted stickers.
              You can also create and share your own sticker packs.
            </p>
          </div>
        </div>
        <div class="column is-half has-text-centered">
          <div class="box">
            <img src="../assets/chat.png" alt="chat" />
            <h3>Get Together with Groups</h3>
            <p class="body2">
              Group chats make it easy to stay connected to your family, friends, and
              coworkers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section information">
    <div class="container">
      <div class="columns is-desktop">
        <div class="column">
          <img src="../assets/noads.png" alt="ads" />
        </div>
        <div class="column is-one-third">
          <h2>No ads. No trackers. No kidding.</h2>
          <p class="body1">
            There are no ads, no affiliate marketers, and no creepy tracking in Signal. So
            focus on sharing the moments that matter with the people who matter to you.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="section information">
    <div class="container">
      <div class="columns is-desktop">
        <div class="column is-hidden-desktop">
          <img src="../assets/globle.png" alt="globle" />
        </div>
        <div class="column is-one-third">
          <h2>Free for Everyone</h2>
          <p class="body1">
            Signal is an independent nonprofit. We're not tied to any major tech
            companies, and we can never be acquired by one either. Development is
            supported by grants and donations from people like you.
          </p>
          <a class="button button2" href="#"> Donate to Signal </a>
        </div>
        <div class="column is-hidden-touch has-text-right">
          <img src="../assets/globle.png" alt="globle" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import { onMounted, ref } from "vue";
import { LottieAnimation } from "lottie-web-vue";
import AnimationJSON from "../animation/animation.json";
</script>

<style scoped>
.hero {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-main .hero-body {
  padding-bottom: 0;
}

.hero-body {
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
}
.lottie-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
}
.has-text-right {
  text-align: right !important;
}

.hero.hero-main {
  background-color: #9dbbf8;
  color: #1b1b1b;
  max-height: 760px;
}

.columns:last-child {
  margin-bottom: -0.75rem;
}

.hero-main .mobile-screenshots {
  position: relative;
}

img {
  height: auto;
  max-width: 100%;
}

.hero-main .mobile-screenshots .screenshot2 {
  margin-left: -32px;
  position: absolute;
  top: 0px;
}

.button {
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top;
}

.button {
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
}

.button {
  background-color: #2c6bed;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  font-family: BlinkMacSystemFont, Arial, sans-serif;
}

.button-white {
  background-color: #fff;
  color: #2c6bed;
  font-size: 20px;
  line-height: 28px;
  padding: 0 20px;
}

.hero-main h1 {
  margin-bottom: 24px;
}

h1 {
  font-size: 56px;
  font-weight: 800;
  line-height: 64px;
}

.section.why-signal h2 {
  margin-bottom: 16px;
}

.columns.is-centered {
  justify-content: center;
}

.section.information .columns {
  flex-direction: row-reverse;
}

.has-text-right {
  text-align: right !important;
}

.lottie-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.lottie-animation {
  background-color: #a5cad5;
  border-radius: 16px;
  padding: 16px;
}

.section.features {
  background-color: #f6f6f6;
}

.box {
  background-color: #fff;
  border-radius: 6px;
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
}
.box {
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0px 0px 0px 1px rgba(10, 10, 10, 0.02);
}

.section.features .box {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.08);
  padding: 30px;
}

.section.features h3 {
  color: #1b1b1b;
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
  margin-top: 18px;
  margin-bottom: 4px;
}

p.body2 {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}

.section.information img {
  border-radius: 16px;
}

.section.information h2 {
  margin-bottom: 32px;
  margin-block-start: 0;
}

h2 {
  font-size: 40px;
  font-weight: 800;
  line-height: 44px;
  color: #1b1b1b;
  margin-block-start: 0;
}

.section.information .columns {
  flex-direction: row-reverse;
}

.button2 {
  background-color: #fff;
  border-radius: 8px;
  border: 2px solid #2c6bed;
  color: #2c6bed;
  font-size: 20px;
  line-height: 28px;
  padding-top: 0;
  padding-bottom: 0;
}
.has-text-right {
  text-align: right !important;
}

/* PC */
@media (min-width: 1024px) {
  .hero.hero-main {
    max-height: 680px;
  }

  .hero-main {
    margin-bottom: 4rem;
  }
  .hero-main .mobile-screenshots .screenshot1 {
    margin-left: 0px;
    margin-top: 46px;
    width: 320px;
  }

  .hero-main .mobile-screenshots .screenshot2 {
    width: 300px;
  }

  .hero-main h1 {
    margin-top: 120px;
  }
  .columns.is-desktop {
    display: flex;
  }

  .column.is-one-third,
  .column.is-one-third-tablet {
    flex: none;
    width: 33.3333%;
  }

  .is-hidden-desktop {
    display: none !important;
  }
  .hero-main .mobile-screenshots .screenshot1 {
    width: 320px;
  }
}
.hero-main .mobile-screenshots .screenshot1 {
  margin-left: -50px;
  margin-top: 55px;
}
.hero-main .mobile-screenshots img {
  transform: rotate(22.5deg);
  width: 218px;
}
/* tablet */
@media screen and (min-width: 769px) {
  .column.is-two-fifths,
  .column.is-two-fifths-tablet {
    flex: none;
    width: 38%;
  }

  .section.information img,
  .section.information .lottie-animation {
    width: 680px;
  }

  .column.is-half,
  .column.is-half-tablet {
    flex: none;
    width: 50%;
  }

  .section.features img {
    width: 370px;
  }
}

@media (max-width: 768px) {
  h2 {
    font-size: 28px;
    font-weight: 800;
    line-height: 32px;
  }
  p.body1 {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
  .hero-main .mobile-screenshots img {
    transform: rotate(22.5deg);
    width: 190px;
  }
  .hero-main .mobile-screenshots .screenshot1 {
    margin-left: -50px;
    margin-top: 0;
  }
  h1 {
    font-size: 40px;
    font-weight: 800;
    line-height: 44px;
  }
}
</style>
