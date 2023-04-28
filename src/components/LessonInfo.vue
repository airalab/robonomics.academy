<template>
    <div class="lesson__tags">
        <div class="container__wide lessons__tags-container">

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
        padding-top: calc(var(--gap) * 0.5);
        background-color: var(--color-text);
        color: var(--color-main);   
        text-align: center;
    }

    .lessons__tags-container {
        max-width: 650px;
        margin: 0 auto;
        text-align: left; 
        white-space: nowrap;
    }

    .lesson__tags__tag {
        display: inline-block;
        margin-bottom: calc(var(--gap) * 0.5);
    }

    .lesson__tags__tag:not(:last-child) {
        margin-right: var(--gap);
    }

    .svg-inline--fa {
        height: 20px;
    }

    @media screen and (max-width: 900px) {
        .lessons__tags-container  {
            white-space: unset;
        }
    }

    @media screen and (max-width: 680px) {
        .lesson__tags {
            text-align: left;
        }

        .lessons__tags-container {
            padding-left: 10px;
        }
    }

    /* dark theme */
</style>