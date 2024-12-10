<template>
  <component
      :is="componentType"
      :class="classes"
      v-bind="$attrs"
      :disabled="this.loading"
  >
      <slot name="iconleft" />

      <Spinner v-if="this.loading" class="robo-button-loader" />

      <span class="robo-button-content">
          <slot />
      </span>

      <slot name="iconright" />
  </component>
</template>

<script>
  export default {
      components: {
          Spinner: () => import ('@/components/utils/LoaderSpin.vue')
      },

      props: {
          loading: {
              type: Boolean,
              default: false
          },
          type: {
              type: String,
              default: 'primary',
              validator: function (value) {
                  return ['primary', 'ok', 'error', 'na'].indexOf(value) !== -1;
              }
          }
      },

      computed: {
          componentType() {
              if(this.$attrs.to) {
                  return 'g-link'
              } else {
                  return 'button'
              }
          },

          classes() {
              return {
                  [`robo-button`]: true,
                  [`robo-button-${this.type}`]: this.type,
              };
          },
      }
  }
</script>

<style scoped>
  .robo-button {
      --color-background: var(--color-actions);
      --color-text: var(--color-light);
      --input-padding: 1.2rem;

      background-color: var( --color-background);
      border: 1px solid var(--color-dark);
      box-shadow: .2rem .2rem 0 var(--color-dark);
      color: var(--color-text);
      cursor: pointer;

      align-items: center;
      display: inline-flex;
      gap: var(--input-padding);
      justify-content: center;
  }

  .robo-button:hover {
      --color-background: var(--color-dark);
  }

  .robo-button-ok {
      --color-background: var(--color-green);
  }

  .robo-button-error {
      --color-background: var(--accent-color);
  }

  .robo-button-na, .robo-button[disabled] {
      --color-background: var(--color-note-accent);
  }

  .robo-button-ok, .robo-button-error, .robo-button-na, .robo-button[disabled] {
      cursor: default;
      pointer-events: none;
  }
</style>