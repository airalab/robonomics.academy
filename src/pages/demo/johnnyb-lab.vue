<template>
    <Layout>
        <section class="container__narrow">
            <h1>{{$t("Hack Johnny's lab")}}</h1>
        </section>

        <section class="container__wide">
            <div class="jlab">
                <div class="pagedesc">
                    <p>{{$t("Johny's crypto lab is a cutting-edge hub filled with all sorts of smart gadgets, including a TurtleBot 4 robot that is known as a base for an iRobot vacuum. But imagine the thrill—and the risk—if someone managed to hack into the robot's camera. Ready to dive into the world of cybersecurity and test your hacking skills? See what you can uncover!")}}</p>
                </div>
                <div class="jlab-app">
                    <g-image class="jlab-app-icon" src="@/assets/images/tboticon.png" aria-hidden="true" />
                    <div class="jlab-app-info">
                        <div v-if="sessionactive" class="jlab-app-session">Now active: {{sessionactive}}</div>
                        <a class="jlab-app-discord" href="https://discord.com/channels/803947358492557312/1245395009964871772" target="_blank">Discord bot assistant</a>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script>

export default {

//   components: {
//     MetaInfo: () => import('~/components/MetaInfo.vue'),
//     Tags: () => import('~/components/Tags.vue'),
//     LessonsFilter: () => import('~/components/Filter.vue'),
//     LearnItem: () => import('~/components/LearnItem.vue'),
//   },

  data() {
    return {
      owner: "4HZdAcNcj85cpCNtDD5W9BwqhCTqz8heboS71WimdK1miq1h",
      controller: "4HfUX9Ex5KJZNf3ozDCSDwTY4xJ2zSt1zr15PrWuv6M4Z56z",
    }
  },

    computed: {
        sessionactive() {
            const now = new Date(Date.now()).getHours();
            // const day = new Date(Date.now()).toLocaleDateString();
            
            if(now > 11 && now < 21) {
                return 'Day session';
            } else {
                return 'Night session';
            }
        }
    },

    // mounted() {

    // }
}
</script>

<style scoped>
.pagedesc {
    font-weight: 900;
    font-size: 0.9em;
}

.jlab {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 3fr;
}

.jlab-app {
    background: #222;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    min-height: 200px;
    position: relative;
}

.jlab-app-session {
    color: greenyellow;
    font-family: 'Roboto Mono','Courier New', Courier, monospace;
    font-size: 0.8em;
    font-weight: bold;
}

.jlab-app-discord {
    background: rgb(88, 101, 242);
    border-radius: 5px;
    color: #fff;
    font-weight: 900;
    padding: 0.4rem 0.8rem;
}

.jlab-app-discord:hover {
    background: rgb(62, 73, 194);
    color: #fff;
}

.jlab-app-info {
    max-width: 280px;
    position: absolute;
    right: 1rem;
    text-align: right;
    top: 0.5rem;
}

.jlab-app-info > *:not(:last-child) {
    margin-bottom: 0.8rem;
}

.jlab-app-icon {
    left: 1rem;
    position: absolute;
    top: 0.5rem;
    width: 80px;
}

@media screen and (max-width: 800px) {
    .jlab {
        grid-template-columns: 1fr;
    }
}
</style>