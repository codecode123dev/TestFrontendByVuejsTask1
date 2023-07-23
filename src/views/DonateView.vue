<!-- eslint-disable prettier/prettier -->
<template>
  <section class="section">
    <div class="container content">
      <div class="columns is-centered">
        <div class="column">
          <h1 class="title has-text-centered">Donate to Signal</h1>
          <p class="has-text-centered mb-3">
            <a href="#" class="trailing-chevron">Or donate with cryptocurrency</a>
          </p>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column has-text-centered is-narrow">
          <iframe
            src="https://donorbox.org/embed/support-signal"
            width="300"
            height="620"
          ></iframe>
        </div>
        <div class="column is-5 is-offset-1">
          <p class="body1">
            The team at Signal is committed to the mission of developing open source
            privacy technology that protects free expression and enables secure global
            communication. Your contribution fuels this cause. No ads. No trackers. No
            kidding.
          </p>
          <p class="body1">
            Your donation helps pay for the development, servers, and bandwidth of an app
            used by millions around the world for private and instantaneous communication.
          </p>
          <p class="body1">
            If you provide an email, you will receive an email confirmation for your tax
            records. Signal Technology Foundation is an independent nonprofit charity and
            tax-exempt under section 501c3 of the Internal Revenue Code. Our Federal Tax
            ID Number is 82-4506840.
          </p>
          <p class="body1">
            Note: Signal is unable to offer badges if you donate here as opposed to using
            Google Pay or Apple Pay inside the Signal app.
          </p>
        </div>
      </div>
      <hr style="margin-top: -1em; margin-bottom: -4em" />
      <div
        id="cryptocurrency"
        style="padding-top: 6rem"
        class="columns is-centered is-reversed-column-order-mobile"
      >
        <div class="column has-text-centered is-narrow">
          <iframe
            frameborder="0"
            width="300"
            height="600"
            scrolling="no"
            src="https://tgbwidget.com/?charityID=824506840"
          ></iframe>
        </div>
        <div class="column is-5 is-offset-1">
          <h4 class="title">Donate Cryptocurrency</h4>
          <p class="body1">
            Cryptocurrency donations to Signal are processed through
            <a href="#">The Giving Block</a>
          </p>
          <p class="body1">
            If you want to receive a tax deduction in the US for the fair market value of
            your cryptocurrency donation, you can optionally provide an email address to
            receive a tax receipt. The Giving Block also supports anonymous donations.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="columns">
        <ul class="column has-text-centered separated-by-pipes">
          <li>
            <a href="#">Donor FAQs</a>
          </li>
          <li>
            <a href="#">Donor Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.columns.is-centered {
  justify-content: center;
}
.subtitle,
.title {
  word-break: break-word;
}
.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  color: #363636;
  font-weight: 600;
  line-height: 1.125;
}
.content h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
  margin-block-start: 0;
}
.title.has-text-centered {
  margin-bottom: 1.5rem;
}
.content p {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 10px;
}
.trailing-chevron::after {
  content: "\00bb";
  display: inline-block;
  margin-inline-start: 0.25em;
}
iframe {
  border: 0;
}
p.body1 {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin-block-start: 0;
}
.content blockquote:not(:last-child),
.content dl:not(:last-child),
.content ol:not(:last-child),
.content p:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child),
.content ul:not(:last-child) {
  margin-bottom: 1em;
}
hr {
  background-color: #f5f5f5;
  border: none;
  display: block;
  height: 2px;
  margin: 1.5rem 0;
}
.columns.is-centered {
  justify-content: center;
}
.columns:last-child {
  margin-bottom: -0.75rem;
}
.content h4 {
  font-size: 1.25em;
  margin-bottom: 0.8em;
  margin-block-start: 0;
}
.column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
}
.has-text-centered {
  text-align: center !important;
}
ul {
  list-style: none;
}
.separated-by-pipes li {
  display: inline-block;
}

.separated-by-pipes li:not(:first-child) {
  margin-inline-start: 0.5em;
  padding-inline-start: 0.5em;
  border-inline-start: 1px solid #999;
}

@media screen and (min-width: 769px), print {
  .column.is-narrow,
  .column.is-narrow-tablet {
    flex: none;
  }
  .column.is-offset-1,
  .column.is-offset-1-tablet {
    margin-left: 8.33333%;
  }
  .column.is-5,
  .column.is-5-tablet {
    flex: none;
    width: 41.66667%;
  }
}
</style>
