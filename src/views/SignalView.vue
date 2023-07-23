<!-- eslint-disable prettier/prettier -->
<template>
  <section id="download" class="download section">
    <div class="container">
      <div class="columns">
        <div class="column is-6 has-text-centered">
          <h2>Signal for Mobile</h2>
        </div>
        <div class="column is-6 has-text-centered">
          <h2>Signal for Desktop</h2>
        </div>
      </div>
      <div class="columns">
        <div class="column is-6 has-text-centered">
          <div class="download-window columns">
            <div class="column">
              <div class="download-window-wrapper">
                <img src="../assets/chatmobile.png" alt="chat" width="360" />
              </div>
            </div>
          </div>
          <a class="button large-button" href="#"> Android </a>
          <a class="button large-button" href="#"> iPhone or iPad </a>
          <p>&nbsp;</p>
          <p>
            Or visit
            <a href="#">signal.org/install</a>
            from your phone
          </p>
        </div>
        <div class="column is-6 has-text-centered">
          <div id="Windows">
            <div class="download-window columns">
              <div class="column">
                <div class="download-window-wrapper">
                  <img src="../assets/chatwindown.png" alt="chat" width="438" />
                </div>
              </div>
            </div>
            <a class="download-primary download-windows button large-button">
              Download for Windows
            </a>
            <article class="message">
              <div class="message-body">
                To use the Signal desktop app, Signal must first be installed on your
                phone.
              </div>
            </article>
            <h3>Not on Windows?</h3>
            <ul>
              <li>
                <a class="download-primary download-mac">Signal for Mac</a>
              </li>
              <li>
                <a class="download-primary download-linux">
                  Signal for Linux - Debian-based distros
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  font-size: 40px;
  font-weight: 800;
  line-height: 44px;
  margin-block-start: 0;
}
.download h2 {
  margin-bottom: 32px;
}
.download-window.columns {
  background-color: #9dbbf8;
  border-radius: 12px;
  height: 300px;
  margin: 0;
  margin-bottom: 25px;
}
.download-window .download-window-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  margin: 0 auto;
}

.button,
.file-cta,
.file-name,
.input,
.pagination-ellipsis,
.pagination-link,
.pagination-next,
.pagination-previous,
.select select,
.textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
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
  padding-left: 1em;
  padding-right: 1em;
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
}
.download .button {
  margin: 15px 30px;
}

.download h2 {
  margin-bottom: 32px;
}
.download-window .download-window-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  margin: 0 auto;
}
.download-window .column {
  padding-bottom: 0;
}

.has-text-centered {
  text-align: center !important;
}
.column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
}
h3 {
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
}
.download .message {
  background: #f6f6f6;
  margin-top: 16px;
  margin-bottom: 24px;
}
.message-body {
  border-color: #dbdbdb;
  border-radius: 4px;
  border-style: solid;
  border-width: 0 0 0 4px;
  color: #4a4a4a;
  padding: 1.25em 1.5em;
}
.download .message-body {
  border: none;
  font-size: 14px;
  line-height: 20px;
}
.download h3 {
  margin-bottom: 24px;
}
ul {
  list-style: none;
  padding-inline-start: 0;
}

@media screen and (min-width: 769px) {
  .column.is-6,
  .column.is-6-tablet {
    flex: none;
    width: 50%;
  }
  .download h2 {
    margin-bottom: 32px;
  }
}
</style>
