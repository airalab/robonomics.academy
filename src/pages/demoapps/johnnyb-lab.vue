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
            <iframe id="appframe" src="https://johnnyb-lab.robonomics.academy" sandbox="allow-forms allow-scripts allow-cross-origin" referrerpolicy="cross-origin" scrolling="no" />
        </section>
    </Layout>
</template>

<script>

export default {

  components: {
    MetaInfo: () => import('~/components/MetaInfo.vue')
  },

    // methods: {
    //     resizeIframe() {
    //         if (typeof document !== 'undefined') {
    //             try{
    //                 const iframe = document.getElementById("appframe");
    //                 if(iframe) {
    //                     iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    //                 }
    //             } catch(e) {
    //                 console.log(e);
    //             }
    //         }
    //     }
    // },

    // mounted() {
    //   window.addEventListener('resize', this.resizeIframe);
    // },


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
</style>