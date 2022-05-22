<template>
    <footer class="footer">
      <div class="container__wide">
        <g-link class="logo" to="/"><g-image src="@/assets/images/logo.svg" /></g-link>
        <h3>Get our support on</h3>
        <g-link class="btn__outline" to="https://discord.gg/kFPqNktKrJ"><g-image src="@/assets/images/discord.svg" /></g-link>
      </div>
    </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-brown-dark);
  color: var(--color-white);
  padding-top: calc(var(--gap) * 2);
  padding-bottom: calc(var(--gap) * 2);
  text-align: center;
}

.footer .container__wide > * {
  margin-bottom: var(--gap);
}

.footer .btn__outline {
  --btn-color: var(--color-white);
}

.footer .btn__outline img {
  display: block
}

</style>