<template>
    <section class="section__brown">
      <div class="container__narrow text__hyphened">
        <h2>{{$ts('Completed the Course?')}}</h2>
        <List type="plus">
          <li>{{$ts('Add certificate to your LinkedIn profile')}}</li>
          <li>{{$ts('Apply for')}} <g-link to="https://robonomics.network/ambassador-program/">{{$ts('Robonomics ambassador program')}}</g-link></li>
          <li>{{$ts('Print it on the wall.')}}</li>
        </List>
        <section class="section__small text__center">
          <g-link class="btn" to="/certificates">{{$ts('Apply for certificate')}}</g-link>
        </section>
      </div>
    </section>
</template>

<style scoped>

  h2 {
   text-decoration: none;
  }
  .btn {
    width: 100%;
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