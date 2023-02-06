<template>

  <Layout>

    <MetaInfo
      pageTitle = "Playground"
      pageDescription = "playground page"
    />

    <page-title 
      :title="$ts(`Playground`)"
      :breadcrumbs="breadcrumbs"
      text="Complete hands-on exercises and tutorials to interact with devices’ simulations using Robonomics Parachain (Polkadot), IPFS and other web3 tools. The Playground provides a more seamless learning experience and allows you to immediately apply your knowledge and skills in a practical setting."
      :content="true"
    >
      <div class="container__narrow playground__header-content">
        <div class="playground__video-wrapper">
          <robo-academy-youtube link="https://www.youtube.com/watch?v=mKr352z8vio"/>
        </div>
      </div>
    </page-title>
    
    <section class="container__wide playground">

      <div class="playground__wrapper">
        <PlaygroundItem
          v-for="item in playgroundItems"
          :key="item.id"
          :link="item.link"
          :title="item.title"
          :img="item.img"
          :imagesClasses="item.imagesClasses"
        />
      </div>

    </section>

  </Layout>
  
</template>

<script>
export default {

  components: {
    PageTitle: () => import('~/components/PageTitle.vue'),
    MetaInfo: () => import('~/components/MetaInfo.vue'),
    PlaygroundItem: () => import('~/components/PlaygroundItem.vue')
  },

  data() {
    return {
      breadcrumbs: [
        {
          to: '/',
          text: 'Robonomics Academy'
        }
      ],
      playgroundItems: [
        {
          id: 0,
          link: '/playground/connect-mars-curiosity-rover',
          title: 'Connect Mars Curiosity Rover',
          img: 'mars-curiosity'
        },
        {
          id: 1,
          link: '/playground/connect-any-ros-compatible-drone',
          title: 'Connect ROS-compatible drone',
          img: 'connect-drone'
        },
        {
          id: 2,
          link: '/playground/kuka',
          title: 'Connect Kuka manipulator',
          img: 'kuka'
        },
        {
          id: 3,
          link: '/playground/iris-drone',
          title: 'Connect unmanned aerial vehicle',
          img: 'connect-vehicle'
        },
        {
          id: 4,
          link: '/playground/baxter',
          title: 'Control Baxter robot',
          img: 'baxter'
        },
        {
          id: 5,
          link: '/playground/ros-smart-projects',
          title: 'ROS-based projects for smart spaces',
          img: 'ros-nedir',
          imagesClasses: 'img-big'
        },
        {
          id: 6,
          link: '/playground/spot-try-it-out',
          title: 'Operate Boston Dynamics Spot',
          img: 'spot'
        }
      ]
    }
  }

}
</script>

<style scoped>

  .playground.container__mid {
    max-width: 1060px
  }

  .playground__header-content {
    position: absolute;
    top: 235px;
    width: 405px;
    border: none !important;
  }

  .playground__video-wrapper {
    width: 100%;
    border: 6px solid var(--color-light);
  }

  .playground__wrapper {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: var(--gap)
  }

  @media screen and (max-width: 1450px) {
    .playground__header-content {
      position: static;
      max-width: 700px;
      width: 100%;
      margin-top: calc(var(--gap) * 2);
    }

    .playground__wrapper {
      grid-template-columns: repeat(2,1fr);
    }
  }
  @media screen and (max-width: 1010px) {
    .playground__wrapper {
      grid-template-columns: 1fr;
    }
    
  }

</style>