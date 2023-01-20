<template>
    <section class="section__brown">
      <div class="container__narrow text__hyphened">
        <h2>{{$ts('Completed the Course?')}}</h2>
        <p>{{$ts('You can apply for a certificate of completion, after which you will be able to:')}}</p>
        <List type="plus">
          <li>{{$ts('add certificate to your LinkedIn profile')}};</li>
          <li>{{$ts('apply for')}} <g-link to="https://robonomics.network/ambassador-program/">{{$ts('Robonomics Ambassador Program')}}</g-link>;</li>
          <li>{{$ts('print the certificate and hang it on the wall.')}}</li>
        </List>
        <section class="section__small text__center">
          <g-link class="btn" to="/certificates">{{$ts('Apply for Certificate')}}</g-link>
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