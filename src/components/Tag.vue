<template>
  <button 
    class="btn btn__tag btn-learn" 
    :class="{active: isActive === tag.id}"
    @click="(e) => activateTag(e, tag)"
  >
    <span class="btn__text"> {{ tag.name }}</span>
    <span v-if="isActive === tag.id" class="delete-tag"></span>
  </button>
</template>

<script>
export default {

  props: {
    tag: {
      type: Object,
      required: true,
    }
  },

  data() {
    return {
      isActive: null
    }
  },

  methods: {
    activateTag(e, {id, name}) {
      this.isActive = id;
      this.$emit('activateTag', id)

      if(e.target.classList.contains('delete-tag')) {
        this.removeActive(name);
      } else {
        this.$store.commit('SET_ACTIVE_TAGS', name)
      }

    },

    removeActive(name) {
      this.isActive = null;
      this.$store.commit('REMOVE_ACTIVE_TAGS', name)

    }
  }

}
</script>

<style scoped>

  .btn__tag:hover {
    border: 3px solid var(--color-blue);
    color: var(--color-light);
    background-color: var(--color-blue);
  }

  .btn__tag.active {
    color: var(--color-light);
    background-color: var(--color-actions);
  }

  .btn__tag.active .btn__text {
    display: inline-block;
    margin-right: var(--gap);
  }
  

  .delete-tag {
    display: inline-block;
    /* padding: calc(var(--gap) * 0.3) calc(var(--gap) * 0.4); */
    width: 16px;
    height: 18px;
    background-image: url("data:image/svg+xml,%3Csvg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 2L20.7383 20.7383' stroke='white' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M20.7383 2L1.99995 20.7383' stroke='white' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-size: 15px 15px;
    background-position: left;
  }

</style>