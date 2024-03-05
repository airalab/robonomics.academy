<template>
    <section class="section__brown">
      <div class="container__narrow text__hyphened">
        <h2>{{$t('Completed the Course?')}}</h2>
        <p>{{$t('You can apply for a certificate of completion, after which you will be able to:')}}</p>
        <List type="plus">
          <li>{{$t('add certificate to your LinkedIn profile')}};</li>
          <li>{{$t('apply for')}} <g-link to="https://robonomics.network/ambassador-program/">{{$t('Robonomics Ambassador Program')}}</g-link>;</li>
          <li>{{$t('print the certificate and hang it on the wall.')}}</li>
        </List>
        <section class="section__small text__center">
          <g-link class="btn" to="/certificates">{{$t('Apply for Certificate')}}</g-link>
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

</style>