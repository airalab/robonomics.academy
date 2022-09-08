<template>
    <section class="container__wide grid-3">
        <!-- <g-link 
        v-for = "lesson in lessons" :key = "lesson.id"
        :to = "'online-courses/' + courseLink + '/' + lesson.path"
        :class="lesson.image ? 'lesson-preview lesson-preview__image' : 'lesson-preview'"
        > -->
        <g-link 
        v-for = "lesson in lessons" :key = "lesson.id"
        :to = "'online-courses/' + courseLink + '/' + lesson.path"
        class="lesson-preview"
        >
        
            <div class="lesson-preview-id">
                {{lesson.id}}
            </div>
            
            <div class="lesson-preview-info">
                <g-image v-if="lesson.image" :src="require(`!!assets-loader!@/assets/images/${lesson.image}`)"/>
                <h4>{{$ts(lesson.title)}}</h4>
                <p class="line">
                    <span v-if="lesson.activity">{{$ts(lesson.activity)}}</span>
                    <span v-if="lesson.time">{{$ts(lesson.time)}}</span>
                </p>
            </div>

        </g-link>
    </section>
</template>

<script>

export default {

  props: {

    course: {
        type: Object,
        required: true
    },

  },

  computed: {
        courseLink() {
            return this.course.path
        },
        lessons() {
            return this.course.lessons
        }
    },


}
</script>

<style scoped>

    .lesson-preview {
        --color: var(--color-brown);

        border: 3px solid var(--color);
        color: var(--color) !important;
        display: grid;
        grid-template-columns: 60px auto;
    }

    /* .lesson-preview:not(:last-child) {
        margin-bottom: var(--gap);
    } */

    .lesson-preview > div {
        padding: calc(var(--gap) * 0.5);
    }

    .lesson-preview-id {
        background-color: var(--color);
        color: var(--color-white);
        font-family: var(--font-title);
        font-size: 200%;
        font-weight: bold;
        text-align: center;
    }

    .lesson-preview h4 {
        margin-bottom: calc(var(--gap) * 0.5);
        line-height: 1.2;
        text-align: left;
    }

    .lesson-preview__image {
        grid-template-columns: 60px 200px auto;
    }

    .lesson-preview:hover {
        --color: var(--color-violet)
    }

    .line > *:not(:last-child) {
        margin-right: calc(var(--gap) * 0.5);
    }
</style>