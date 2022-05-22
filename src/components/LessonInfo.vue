<template>
    <div class="lesson__tags">
        <div class="container__wide">

            <div class="lesson__tags__tag" v-if="type">
                <font-awesome-icon icon="fa-graduation-cap" v-if="type === 'Theory'" />
                <font-awesome-icon icon="fa-arrow-pointer" v-else-if="type === 'Practice'" />
                <font-awesome-icon icon="fa-file" v-else />
                {{type}}
            </div>

            <div class="lesson__tags__tag" v-if="time">
                <font-awesome-icon icon="fa-clock" />
                {{time}}
            </div>

            <div class="lesson__tags__tag" v-if="tools">
                <font-awesome-icon icon="fa-screwdriver-wrench" />
                {{tools}}
            </div>

        </div>
    </div>
</template>


<script>

export default {

  props: {

    type: {
        type: String
    },
    time: {
        type: String
    },
    tools: {
        type: String
    }

  }

}
</script>

<style scoped>
    .lesson__tags  {
        background-color: var(--color-brown);
        color: var(--color-yellow);
        padding-top: calc(var(--gap) * 0.5);
        text-align: center;
    }

    .lesson__tags__tag {
        display: inline-block;
        margin-bottom: calc(var(--gap) * 0.5);
    }

    .lesson__tags__tag:not(:last-child) {
        margin-right: var(--gap);
    }

    @media screen and (max-width: 680px) {
        .lesson__tags {
            text-align: left;
        }
    }
</style>