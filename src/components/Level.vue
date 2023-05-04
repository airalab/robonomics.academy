<template>
  <div 
    :class="`level--${level} ${cls}`"
    @click="$emit('activateLevel')"
  >
    <span class="level-bar learn__level-bar"></span>
    <span class="level-bar learn__level-bar"></span>
    <span class="level-bar learn__level-bar"></span>
    <span class="level-bar learn__level-bar"></span>
  </div>
</template>

<script>
export default {

  props: {
    level: {
      type: String,
      default: '1'
    },
    cls: {
      type: String,
      default: ''
    }
  }

}
</script>

<style scoped>

.level-bar {
  display: inline-block;
  width: 9px;
  margin-right: 4px;
  border: 1px solid var(--color-dark);
  background-color: var(--color-light)
}

.level-bar:first-of-type {
  height: 11px;
}

.level-bar:nth-of-type(2){
  height: 22px;
}

.level-bar:nth-of-type(3) {
  height: 33px;
}

.level-bar:nth-of-type(4) {
  height: 44px;
  margin-right: 0;
}

.level--1 .level-bar:first-of-type {
  background-color: var(--color-dark);
}

.level--2 .level-bar:first-of-type,
.level--2 .level-bar:nth-of-type(2) {
  background-color: var(--color-dark);
}

.level--3 .level-bar:first-of-type,
.level--3 .level-bar:nth-of-type(2),
.level--3 .level-bar:nth-of-type(3) {
  background-color: var(--color-dark);
}

.level--4 .level-bar {
  background-color: var(--color-dark);
} 


.filter__level-item .level-bar {
  width: 6.5px;
}


.filter__level-item .level-bar:first-of-type {
  height: 8px;
}

.filter__level-item .level-bar:nth-of-type(2){
  height: 16px;
}

.filter__level-item .level-bar:nth-of-type(3) {
  height: 24px;
}

.filter__level-item .level-bar:nth-of-type(4) {
  height: 33px;
  margin-right: 0;
}

</style>