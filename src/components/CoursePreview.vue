<template>
    <g-link class="coursePreview" :to="'/online-courses/' + link">
        <span class="coursePreview-title">
            <font-awesome-icon :icon="'fa-solid fa-' + icon" v-if="icon" class="coursePreview-icon" />
            {{title}}
        </span>
        <span class="coursePreview-info" v-if="info" v-html="info" />
        <font-awesome-icon icon="fa-solid fa-circle-chevron-right" aria-hidden="true" class="coursePreview-arrow"/>
    </g-link>
</template>


<script>

export default {

  props: {

    icon: {
      type: String,
    //   validator: function (value) {
    //     return ['award'].indexOf(value) !== -1;
    //   }
    },
    info: {
      type: String
    },
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },

  },


}
</script>

<style scoped>
    .coursePreview {
        --color: var(--color-violet);

        border: 1px solid var(--color);
        color: var(--color);
        display: block;
        font-weight: bold;
        position: relative;
    }

    .coursePreview:not(:last-child) {
      margin-bottom: var(--gap);
    }

    .coursePreview:hover {
        --color: var(--color-yellow)
    }

    .coursePreview:hover .coursePreview-info, 
    .coursePreview:hover .coursePreview-title,
    .coursePreview:hover .coursePreview-arrow {
        color: var(--color-brown);
    }

    .coursePreview:hover .coursePreview-info {
        background-color: var(--color);
        border-top: 1px solid var(--color-brown)
    }

    .coursePreview-title, .coursePreview-info {
        display: block;
        padding: var(--gap);
        transition: 0.2s all linear;
    }

    .coursePreview-title {
        background-color: var(--color);
        color: var(--color-white);
        font-family: var(--font-title);
        font-size: calc(var(--font-size) * 1.3);
    }

    .coursePreview-icon {
        font-size: 200%;
        margin-right: calc(var(--gap) * 0.5);
    }

    .coursePreview-arrow {
        color: var(--color-white);
        font-size: 50px;
        position: absolute;
        right: calc(var(--gap) * 0.5);
        top: calc(var(--gap) * 1);
    }
</style>