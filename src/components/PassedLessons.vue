<template>
    <section class="section__brown">
      <div class="container__narrow text__hyphened">
        <h2>{{$ts('Passed all lessons?')}}</h2>
        <p>{{$ts('Now you may apply for IPFS certificate. What you may do with this:')}}</p>
        <List type="plus">
          <li>{{$ts('Add certificate to your LinkedIn profile')}}</li>
          <li>{{$ts('Apply for')}} <g-link to="https://robonomics.network/ambassador-program/">{{$ts('Robonomics ambassador program')}}</g-link></li>
          <li>{{$ts('Print it on your wall')}}</li>
        </List>
        <section class="section__small text__center">
          <g-link class="btn" to="/certificates">{{$ts('Apply for certificate')}}</g-link>
        </section>
      </div>
    </section>
</template>

<style scoped>
  .btn {
    background-color: var(--color-main);
    border-color: var(--color-main);
    color: var(--color-brown-dark) !important;
  }
  .btn:hover {
    color: var(--color-light) !important;
  }


  @media (prefers-color-scheme: dark) { 
    a:hover {
      color: var(--color-light)
    }
  }
</style>