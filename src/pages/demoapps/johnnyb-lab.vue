<template>

    <Layout>
        <MetaInfo
            pageTitle = "Hack Johnny's lab"
            pageDescription = "Johny's crypto lab is a cutting-edge hub filled with all sorts of smart gadgets, including a TurtleBot 4 robot that is known as a base for an iRobot vacuum. But imagine the thrill—and the risk—if someone managed to hack into the robot's camera. Ready to dive into the world of cybersecurity and test your hacking skills?"
        />

        <!-- <MetaInfo
            pageTitle = "Hack Johnny's lab"
            pageDescription = "Johny's crypto lab is a cutting-edge hub filled with all sorts of smart gadgets, including a TurtleBot 4 robot that is known as a base for an iRobot vacuum. But imagine the thrill—and the risk—if someone managed to hack into the robot's camera. Ready to dive into the world of cybersecurity and test your hacking skills?"
            pageImage = "'/ogstatic/johnnyb-lab-cover.jpg'"
        /> -->

        <section class="container__narrow">
            <h1>{{$t("Hack Johnny's lab")}}</h1>
        </section>

        <section class="container__narrow">
            <div class="pagedesc">
                <p>{{$t("Johny's crypto lab is a cutting-edge hub filled with all sorts of smart gadgets, including a TurtleBot 4 robot that is known as a base for an iRobot vacuum. But imagine the thrill—and the risk—if someone managed to hack into the robot's camera. Ready to dive into the world of cybersecurity and test your hacking skills? See what you can uncover!")}} <a href="https://robonomics.network/blog/robonomics-school-2024-hack-johnny-lab/" target="_blank">{{$t("Rules of the game")}}</a></p>
            </div>
        </section>

        <section class="container__mid">
            <div class="iframecontainer">
                <div class="iframecontrols">
                    <a href="javascript:;" @click.prevent="expand" v-if="!expanded">Expand application</a>
                    <a href="javascript:;" @click.prevent="collapse" v-if="expanded">Collapse application</a>
                </div>
                <iframe id="appframe" src="https://johnnyb-lab.robonomics.academy" sandbox="allow-forms allow-scripts allow-same-origin" />
                <!-- <iframe id="appframe" src="https://johnnyb-lab.robonomics.academy" sandbox="allow-forms allow-scripts allow-same-origin" referrerpolicy="strict-origin-when-cross-origin" scrolling="no" /> -->
            </div>
        </section>
    </Layout>
</template>

<script>

export default {

  components: {
    MetaInfo: () => import('~/components/MetaInfo.vue')
  },

  data() {
      return {
        expanded: false,
      }
    },

    methods: {
        resizeIframe() {
            if (typeof document !== 'undefined') {
                try{
                    const iframe = document.getElementById("appframe");
                    if(iframe) {
                        const iframeinner = (iframe.contentDocument) 
                        ? iframe.contentDocument 
                        : iframe.contentWindow.document;
                        iframe.style.height = iframeinner.body.scrollHeight + 'px';
                    }
                } catch(e) {
                    // console.log(e);
                }
            }
        },

        expand() {
            const iframe = document.querySelector(".iframecontainer");
            if(iframe) {
                iframe.classList.add('expanded');
                this.expanded = true;
            }
        },

        collapse() {
            const iframe = document.querySelector(".iframecontainer");
            if(iframe) {
                iframe.classList.remove('expanded');
                this.expanded = false;
            }
        }
    },

    mounted() {
      window.addEventListener('resize', this.resizeIframe);
    },


}
</script>

<style scoped>
.pagedesc {
    font-weight: 700;
    font-size: 0.9em;
}

iframe {
    width: 100%;
    height: 1100px;
    border: 0;
}

.iframecontainer {
    position: relative;
}

.iframecontainer.expanded {
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(100vh - 30px);
    z-index: 100;
}

.iframecontainer.expanded iframe {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(100% - 110px);
}

.iframecontrols {
    text-align: right;
}

.iframecontrols a {
    display: inline-block;
    background: var(--color-main);
    padding: 5px 20px;
    color: var(--color-text);
    font-weight: bold;
}
</style>