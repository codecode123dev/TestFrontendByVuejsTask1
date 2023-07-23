<!-- eslint-disable prettier/prettier -->
<template>
  <header class="section jobs-header">
    <div class="container">
      <div class="columns is-desktop is-vcentered">
        <div class="column is-half">
          <h1>Work that sends a message</h1>
          <p class="body1">
            Millions of people use Signal every day to share the moments that matter in
            their lives. Join an organization that empowers users by making private
            communication simple.
          </p>
        </div>
        <div class="column is-half">
          <img src="../assets/images/headerCareers.png" alt="header careers" />
        </div>
      </div>
    </div>
  </header>
  <section class="jobs section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <i class="icon icon-eye-slash icon-3x"></i>
          <h3>Privacy First</h3>
          <p class="body2">
            We solve problems that matter and develop technology that respects our users.
            Targeted advertising isn't our style. We don't collect anything except more
            sleep at night.
          </p>
        </div>
        <div class="column">
          <i class="icon icon-users icon-3x"></i>
          <h3>Small Team</h3>
          <p class="body2">
            Have an immediate impact. Signal is an opportunity to do original work and
            closely collaborate without the overhead of endless meetings.
          </p>
        </div>
        <div class="column">
          <i class="icon icon-dollar-sign icon-3x"></i>
          <h3>Competitive Compensation</h3>
          <p class="body2">
            Healthcare premiums are fully covered for you and your family. Our 401(k) plan
            matches 100% of your contribution up to $20,500.
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <i class="icon icon-globe-americas icon-3x"></i>
          <h3>Work Remotely</h3>
          <p class="body2">
            Skip the commute. Work from home or take advantage of our co-working space
            subsidy. Focus on what drives you, not driving.
          </p>
        </div>
        <div class="column">
          <i class="icon icon-code icon-3x"></i>
          <h3>Open Source</h3>
          <p class="body2">
            Everything we produce is open source. Every time we write code, we get to
            share it with the world.
          </p>
        </div>
        <div class="column">
          <i class="icon icon-certificate icon-3x"></i>
          <h3>Nonprofit</h3>
          <p class="body2">
            Our goal is to protect free expression and enable secure global communication.
            We're working with users to build something sustainable.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="jobs section">
    <div class="jobs container has-text-centered">
      <h2>Open Roles</h2>
    </div>
    <div class="container content">
      <table class="table is-fullwidth is-striped">
        <tbody v-for="device in devices" :key="device.id">
          <tr>
            <td>
              <strong>{{ device.name }}</strong>
            </td>
            <td>{{ device.remote }}</td>
            <td>
              <a href="#">{{ device.href }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container content has-text-centered">
      <p class="body2">Sorry, we are not seeking interns at this time.</p>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      devices: [
        {
          id: 1,
          name: "Product Designer",
          remote: "Remote (US Timezones)",
          href: "View Role",
        },
        {
          id: 2,
          name: "Android Engineer",
          remote: "Remote (US Timezones)",
          href: "View Role",
        },
        {
          id: 3,
          name: "Desktop Engineer",
          remote: "Remote (US Timezones)",
          href: "View Role",
        },
        {
          id: 4,
          name: "iOS Engineer",
          remote: "Remote (US Timezones)",
          href: "View Role",
        },
        {
          id: 5,
          name: "Calling & Core Libraries Engineer",
          remote: "Remote (US Timezones)",
          href: "View Role",
        },
      ],
    };
  },
};
</script>
<style scoped>
header.jobs-header {
  background: #e7dfe0;
  margin-top: 12px;
  padding-bottom: 0;
  padding-top: 0;
}

.columns:last-child {
  margin-bottom: -0.75rem;
}
.columns.is-vcentered {
  align-items: center;
}
.column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
}

h1 {
  font-size: 60px;
  font-weight: 800;
  line-height: 64px;
}
header.jobs-header h1 {
  margin-bottom: 24px;
}

.jobs {
  margin-top: 40px;
}
.jobs h2 {
  margin-bottom: 24px;
}
h2 {
  font-size: 40px;
  font-weight: 800;
  line-height: 44px;
}
.container.content {
  margin-bottom: 1.5rem;
}
.table {
  background-color: #fff;
  color: #363636;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
.table.is-fullwidth {
  width: 100%;
}
.table tbody {
  background-color: transparent;
}
table td:not([align]),
table th:not([align]) {
  text-align: left;
}
.content table td,
.content table th {
  border: 1px solid #dbdbdb;
  border-width: 0 0 1px;
  padding: 0.5em 0.75em;
  vertical-align: top;
}
.table.is-striped tbody tr:not(.is-selected):nth-child(even) {
  background-color: #fafafa;
}

.jobs {
  margin-top: 40px;
}

.icon {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;
}
.icon {
  background-repeat: no-repeat;
  height: 16px;
  width: 16px;
}
.icon-3x {
  height: 40px;
  width: 40px;
}
.icon-eye-slash {
  background-image: url(../assets/icons/eyeSlash.svg);
}
.icon-users {
  background-image: url(../assets/icons/users.svg);
}
.icon-dollar-sign {
  background-image: url(../assets/icons/dollar.svg);
}
.icon-globe-americas {
  background-image: url(../assets/icons/globe.svg);
}
.icon-code {
  background-image: url(../assets/icons/code.svg);
}
.icon-certificate {
  background-image: url(../assets/icons/solid.svg);
}
h3 {
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
}
.jobs h3 {
  margin-top: 16px;
  margin-bottom: 16px;
}
p.body2 {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
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
}
</style>
