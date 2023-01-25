<template>
  <g-link :to="link" class="playground__item">
    <div class="playground__img-wrapper">
      <g-image :class="imagesClasses" :src="require(`!!assets-loader!@/assets/images/playground-${img}.png`)"  :alt="title"/>
    </div>
    <h3 class="playground__title">{{ title }}</h3>
  </g-link>
</template>

<script>
export default {

  props: {
    link: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    img: {
      type: String
    },
    imagesClasses: {
      type: String
    }
  },

}
</script>

<style scoped>

  .playground__item {
    display: flex;
    padding: calc(var(--gap) * 2) var(--gap);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--color-light);
    border: 3px solid #534E4B;
    text-align: center;
    border-radius: 34px;
  }

  .playground__img-wrapper {
    margin-bottom: var(--gap);
    min-height: 240px;
  }

  .playground__img-wrapper img {
    --image-size: 295px;
    width: var(--image-size);
    /* max-height: 240px; */
    height: 100%;
    max-width: var(--image-size);
  }

  .playground__img-wrapper img.img-big {
    --image-size: 400px;
  }

  .playground__title {
    font-family: var(--font-text);
    font-size: calc(var(--font-size) * 0.8);
    color: #534E4B;

  }

  @media screen and (max-width: 530px) {

    .playground__item {
      padding: var(--gap) calc(var(--gap) * 0.5);
    }

    .playground__img-wrapper {
      min-height: unset;
    }

    .playground__img-wrapper img.img-big {
     --image-size: 250px;
    }

    .playground__img-wrapper img {
      --image-size: 255px;
    }
  }

</style>