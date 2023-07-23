<!-- eslint-disable prettier/prettier -->
<template>
  <header class="section documentation">
    <div class="container">
      <div class="columns is-desktop is-vcentered">
        <div class="column is-half">
          <h1>Technical information</h1>
          <p class="body1">Specifications and software libraries for developers</p>
        </div>
        <div class="column is-half">
          <img src="../assets/images/headerDevelopers.png" />
        </div>
      </div>
    </div>
  </header>
  <section class="section docs">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <h2>Specifications</h2>
          <p class="body1">
            Encryption in messaging environments integrates many ideas which often need to
            be composed separately in different applications. We make an effort to break
            out ideas into independent specifications so that they can be integrated as
            appropriate for different projects.
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-6">
          <p class="body2 semibold">
            <a href="#">XEdDSA and VXEdDSA</a>
          </p>
          <p class="body2 spec">
            This document describes how to create and verify EdDSA-compatible signatures
            using public key and private key formats initially defined for the X25519 and
            X448 elliptic curve Diffie-Hellman functions. This document also describes
            "VXEdDSA" which extends XEdDSA to make it a verifiable random function, or
            VRF.
          </p>
          <p class="body2 semibold">
            <a href="#">X3DH</a>
          </p>
          <p class="body2 spec">
            This document describes the "X3DH" (or "Extended Triple Diffie-Hellman") key
            agreement protocol. X3DH establishes a shared secret key between two parties
            who mutually authenticate each other based on public keys. X3DH provides
            forward secrecy and cryptographic deniability.
          </p>
        </div>
        <div class="column is-6">
          <p class="body2 semibold">
            <a href="#">Double Ratchet</a>
          </p>
          <p class="body2 spec">
            This document describes the Double Ratchet algorithm, which is used by two
            parties to exchange encrypted messages based on a shared secret key. The
            parties derive new keys for every Double Ratchet message so that earlier keys
            cannot be calculated from later ones. The parties also send Diffie-Hellman
            public values attached to their messages. The results of Diffie-Hellman
            calculations are mixed into the derived keys so that later keys cannot be
            calculated from earlier ones. These properties give some protection to earlier
            or later encrypted messages in case of a compromise of a party's keys.
          </p>
          <p class="body2 semibold">
            <a href="#"> Sesame</a>
          </p>
          <p class="body2 spec">
            This document describes the Sesame algorithm for managing message encryption
            sessions in an asynchronous and multi-device setting.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="section docs">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2>Software libraries</h2>
          <ul>
            <li>
              <a href="#">Signal Protocol library</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
header.documentation {
  background-color: #f6f6f6;
  margin-bottom: 40px;
  margin-top: 12px;
  padding-bottom: 0;
  padding-top: 0;
}
.columns.is-vcentered {
  align-items: center;
}

h1 {
  font-size: 60px;
  font-weight: 800;
  line-height: 64px;
  color: #1b1b1b;
}
header.documentation h1 {
  margin-bottom: 24px;
}

h2 {
  font-size: 40px;
  font-weight: 800;
  line-height: 44px;
}

.semibold {
  font-weight: 600 !important;
}
.columns:last-child {
  margin-bottom: -0.75rem;
}
p.body2 {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}
.docs .body2.semibold {
  margin-bottom: 16px;
}
.docs .spec {
  margin-bottom: 30px;
}
.docs h2 {
  margin-bottom: 24px;
}
ul {
  list-style: none;
  margin-block-start: 0;
  padding-inline-start: 0;
}
.docs li {
  margin-bottom: 8px;
}
.docs li a {
  font-weight: 600;
}

@media screen and (min-width: 1024px) {
  .columns.is-desktop {
    display: flex;
  }
}
@media screen and (min-width: 769px), print {
  .column.is-half,
  .column.is-half-tablet {
    flex: none;
    width: 50%;
  }
  .column.is-6,
  .column.is-6-tablet {
    flex: none;
    width: 50%;
  }
}
</style>
