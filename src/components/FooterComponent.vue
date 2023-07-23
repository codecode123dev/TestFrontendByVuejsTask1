<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-two-fifths is-hidden-mobile">
          <span class="copyright">© 2013–2023 Signal, a 501c3 nonprofit.</span>
          <br />
          Signal is a registered trademark in the United States and other
          countries.
          <br />
          <br />
          For media inquiries, contact
          <a href="#"> press@signal.org</a>
        </div>
        <div class="column">
          <strong>Organization</strong>
          <ul>
            <li>
              <a href="#">Donate</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Terms & Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div class="column">
          <strong>Download</strong>
          <ul>
            <li>
              <a href="#">Android</a>
            </li>
            <li>
              <a href="#">iPhone & iPad</a>
            </li>
            <li>
              <a href="#">Windows</a>
            </li>
            <li>
              <a href="#">Mac</a>
            </li>
            <li>
              <a href="#">Linux</a>
            </li>
          </ul>
        </div>
        <div class="column">
          <strong>Social</strong>
          <ul>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div class="column">
          <strong>Help</strong>
          <ul>
            <li>
              <a href="#">Support Center</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer,
section {
  display: block;
}
.footer {
  background-color: #3c3744;
  color: #e9e9e9;
  font-size: 16px;
  line-height: 22px;
}
.footer {
  padding: 3rem 1.5rem 6rem;
}
.container {
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
}
.columns {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
}
.columns:last-child {
  margin-bottom: -0.75rem;
}
.column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
}
span {
  font-style: inherit;
  font-weight: inherit;
}
a {
  color: #3273dc;
  cursor: pointer;
  text-decoration: none;
}
.footer a {
  color: #e9e9e9;
}
.footer strong {
  color: #e9e9e9;
  display: block;
  font-weight: 600;
  margin-bottom: 12px;
}
ul {
  list-style: none;
  padding-inline-start: 0;
}
.footer a {
  color: #e9e9e9;
}
.columns {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
}
.columns:last-child {
  margin-bottom: -0.75rem;
}
.footer a:hover {
  text-decoration: underline;
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
  .column.is-two-fifths,
  .column.is-two-fifths-tablet {
    flex: none;
    width: 40%;
  }
  .columns:not(.is-desktop) {
    display: flex;
  }
}
</style>
