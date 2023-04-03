<template>
  <video ref="video" mute v-bind="$attrs" v-if="videos">
    <template v-for="video in videos">
      <source :src="getSrc(video.src)" :type="`video/${video.type}`" :key="video.id" />
  </template>
  </video>
</template>

<script>
export default {
name: 'LessonVideo',
props: {
  videos: {
    type: Array,
    default: null,
    required: true
  },

  local: {
    type: Boolean,
    default: false
  },
},
data() {
  return {
    offsetTop: 0,
  }
},
watch: {
  offsetTop (val) {
    this.toggleAutoplay()
  }
},

methods: {
  handelScroll() {
    this.offsetTop = document.pageYOffset || document.scrollTop;
  },

  toggleAutoplay() {
      const video = this.$refs.video;
      video.muted = true;
        let playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then((_) => {
            let observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                    if (
                        entry.intersectionRatio !== 1 &&
                        !video.paused
                    ) {
                        video.pause();
                    } else if (video.paused) {
                        video.play();
                    }
                });
              },
              { threshold: 0.2 }
            );
            observer.observe(video);
        });
      }
    },

    getSrc(src) {
      if(this.local) {
        return require(`!!assets-loader!@/assets${src}`).src + '#t=0.001'
      } else {
        return src + '#t=0.001'
      }
    }
  },

  mounted() {

    if(this.$refs.video.getAttribute('autoplay')) {
      document.addEventListener('scroll',this.handelScroll );
    }
  },

  beforeDestroy () {
      if(this.$refs.video.getAttribute('autoplay')) {
        document.removeEventListener('scroll',this.handelScroll )
      }
    },
  }
</script>

<style scoped>
video {
  
  width: 100%;
  display: block;
  margin: 0 auto;
  margin-bottom: var(--gap);
}
.box {
  height: 0;
  width: 0;
}
</style>