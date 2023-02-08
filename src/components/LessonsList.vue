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

            <g-image v-if="lesson.image" :src="require(`!!assets-loader!@/assets/images/${lesson.image}`)"/>
            
            <div class="lesson-preview-info">
        
                <div class="lesson-preview-id">
                    {{lesson.id}}
                </div>
                <div class="lesson-preview-text">
                    <h4>{{$ts(lesson.title)}}</h4>
                    <p class="line">
                        <span v-if="lesson.activity">{{$ts(lesson.activity)}}</span>
                        <span v-if="lesson.time">{{$ts(lesson.time)}}</span>
                        <span v-if="lesson.tools">/ {{$ts(lesson.tools)}}</span>
                    </p>
                </div>
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
        position: relative;
        --color: var(--color-text);
        color: var(--color) !important;
        border: 1px solid var(--color);
    }

    .lesson-preview-info {
        display: grid;
        gap: var(--gap);
        grid-template-columns: 60px auto;
    }

    .lesson-preview > div {
        padding: calc(var(--gap) * 0.5);
    }

    .lesson-preview-id {
        height: 60px;
        background-color: var(--color);
        color: var(--color-light);
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

    /* .lesson-preview__image {
        grid-template-columns: 60px 200px auto;
    } */

    .lesson-preview:hover {
        --color: var(--color-actions)
    }

    .line > *:not(:last-child) {
        margin-right: calc(var(--gap) * 0.5);
    }

    @media screen and (max-width: 1300px) {
        .grid-3 {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 850px) {
        .grid-3 {
            grid-template-columns: 1fr;
        }
    }

    /* dark theme */
    @media (prefers-color-scheme: dark) {
        .lesson-preview:hover {
            --color: var(--color-second)
        }

        .lesson-preview-id {
            background-color: var(--color-actions); 
        }
    } 
</style>