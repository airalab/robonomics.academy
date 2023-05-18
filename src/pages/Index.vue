<template>
  <Layout>

    <MetaInfo
      pageTitle = "Robonomics Academy"
      pageDescription = "Get experience in web 3.0 and blockchain techonologies with free online lessons."
      coursePageList
    />

    <section class="banner">
      <div class="container__wide">
        <g-image alt="Robonomics Academy Logo" src="@/assets/images/logo.svg" />
        <g-link class="btn banner__btn" to="/learn">{{$ts('Learn')}}</g-link>
        <!-- <g-image class="banner__img" src="@/assets/images/building.png" aria-hidden="true" /> -->
      </div>
    </section>

    <section id="about" class="team" ref="about">
      <div class="container__narrow">
        <h2>{{$ts('Welcome to Our Online School!')}}</h2>
        <g-image src="@/assets/images/team-new.png" aria-hidden="true" />
        <p class="text__center">{{$ts('The core developers of the Robonomics project, robotics specialists and PhD research scientists offer to pass through compendious experience based on 7 years of work with web 3.0 projects.')}}</p>
      </div>
    </section>

    <section class="discovery">
      <div class="container__mid">
        <h2>{{$ts('What can you discover for yourself in the academy?')}}</h2>

        <div class="grid-3 discovery__wrapper">

          <div>
            <h4>{{$ts('Web3 Advanced Applications')}}</h4>
            <p>Find out how cutting-edge web3 technologies can be integrated into personal, city, or corporate settings on examples with practical uses in real-life scenarios.</p>
          </div>

          <div>
            <h4>{{$ts('Strategies for IoT Decentralization')}}</h4>
            <p>Focus on decentralized IoT strategies that provide greater safety and flexibility compared to their centralized counterparts.</p>
          </div>

          <div>
            <h4>{{$ts('Latest Robotics Tools')}}</h4>
            <p>Study new robotics frameworks and SDKs and apply them to your projects.</p>
          </div>

          <div>
            <h4>{{$ts('Modern Cybernetics')}}</h4>
            <p>Peep insights how Norbert Wiener's principles of cybernetics are applied to modern autonomous systems.</p>
          </div>

          <div>
            <h4>{{$ts('Economic Processes for Robots')}}</h4>
            <p>Discover new mechanisms of techno-economic communication between machines and humans.</p>
          </div>

          <div>
            <h4>{{$ts('Engineering Skills')}}</h4>
            <p>Learn how to work with single board computers, sensors, smart devices and complex robots.</p>
          </div>

        </div>
      </div>
    </section>

    <section class="robonomics">
      <section class="container__narrow">
        <h2>{{$ts('What is Robonomics?')}}</h2>
        <p class="text__center">{{$ts('Robonomics is a secure, serverless and futuristic IoT platform that connects users and smart devices. It enables the exchange of technical and economic information in the form of atomic transactions between user applications, IoT services, and complex robotics.')}} <g-link>{{ $ts('Learn more on Robonomics website') }}</g-link></p>
      </section>

      <section class="container__mid">
        <div class="scheme">
          <div class="scheme-item">
            <div>{{$ts('User Dapp')}}</div>
          </div>
          <div class="scheme-a">
            <div class="scheme-a-right">
              <span>{{$ts('Function Request')}}</span>
              <span aria-hidden="true" class="arrow">
                <g-image src="@/assets/images/forward.svg"/>
              </span>
            </div>
            <div class="scheme-a-left">
              <span>{{$ts('Report')}}</span>
              <span aria-hidden="true" class="arrow">       
               <g-image src="@/assets/images/reverse.svg"/>
              </span>
            </div>
          </div>
          <div class="scheme-item">
            <div>{{$ts('Digital Twin')}}</div>
          </div>
          <div class="scheme-a">
            <div class="scheme-a-right">
              <span>{{$ts('Control')}}</span>
              <span aria-hidden="true" class="arrow">
                <g-image src="@/assets/images/forward.svg"/>
              </span>
            </div>
            <div class="scheme-a-left">
              <span>{{$ts('Log')}}</span>
              <span aria-hidden="true" class="arrow">       
               <g-image src="@/assets/images/reverse.svg"/>
              </span>
            </div>
          </div>
          <div class="scheme-item">
            <div>{{$ts('IoT Device')}}</div>
          </div>
        </div>
      </section>

      <section class="container__mid">
        <p class="technologies grid-6">
          <g-image src="@/assets/images/ethereum.svg" alt="Ethereum, Technology supported by Robonomics" />
          <g-image src="@/assets/images/polkadot.svg" alt="Polkadot, Technology supported by Robonomics" />
          <g-image src="@/assets/images/kusama.svg" alt="Kusama, Technology supported by Robonomics" style="max-width: 90px" />
          <g-image src="@/assets/images/ipfs.svg" alt="IPFS, Technology supported by Robonomics" />
          <g-image src="@/assets/images/substrate.svg" alt="Substrate, Technology supported by Robonomics" />
          <g-image src="@/assets/images/ros.svg" alt="ROS, Technology supported by Robonomics" style="max-width: 100px" />
        </p>
      </section>
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
        lastScrollPosition: 0,
      }
    },

    methods: {
      onScroll() {
      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset

      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        this.$store.commit('TOGGLE_SHOW_HEADER', false)
        return
      }
        // Here we determine whether we need to show or hide the navbar
        // Set the current scroll position as the last scroll position
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) {
          return
        }

        this.$store.commit('TOGGLE_SHOW_HEADER', currentScrollPosition > 500)
        this.lastScrollPosition = currentScrollPosition
      },
    },

    mounted() {
      window.addEventListener('scroll', this.onScroll)
      this.$store.commit('TOGGLE_SHOW_HEADER', false)
    },

    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    }

  }

</script>

<style scoped>
  .banner {
    position: relative;
    min-height: 860px;
    height: calc(100vh - 60px);
    /* background-color: #F4E282; */
    color: var(--color-text);
    overflow: hidden;
    padding-top: calc(var(--gap) * 3);
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
  }

  .banner::before {
    content:'';
    background-image: url('../assets/images/building.png');
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    bottom: 0;
    left: 4px;
    /* left: calc(50% - 960px); */
    position: absolute;
    /* width: 1930px;
    max-width: 1930px; */
    width: 100%;
    height: 736px;
    /* width: 100%; */
    z-index: 2;
  }

  .banner::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 388px;
    background-color: var(--color-main);
    z-index: 0;
  }

  .banner .container__wide {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* .banner__img {
    bottom: 0;
    left: calc(50% - 700px);
    position: absolute;
    width: 1400px;
    max-width: 1400px; rewrite one global style
    z-index: 2;
  } */

  .banner__btn {
    position: absolute;
    bottom: calc(var(--gap) * 2);
    z-index: 3;
  }

  .team {
    padding-bottom: 0;
    color: var(--color-text);
  }

  .team img {
    display: block;
    margin-top: calc(var(--gap)*2);
    margin-bottom: var(--gap);
  }

  .discovery .container__mid {
    position: relative;
    text-align: center;

  }

  .discovery .container__mid::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -38px;
    width: 100%;
    height: 422px;
    background-image: url('../assets/images/discover-image.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 0;
  }

  .discovery__wrapper {
    position: relative;
    font-size: var(--font-size);
    text-align: left;
    z-index: 2;
  }

  .discovery h2 {
    position: relative;
    display: inline-block;
    margin-bottom: calc(var(--gap) * 3);
  }

  .discovery h2::after {
    content: '';
    position: absolute;
    right: -48px;
    top: -25px;
    width: 60px;
    height: 33px;
    background-image: url('../assets/images/academy-hat.svg');
    background-repeat: no-repeat;
  }

  .discovery__wrapper h4 {
    margin-bottom: calc(var(--gap) * 0.5);
    font-family: var(--font-main);
    font-size: inherit;
    text-align: left;
    font-weight: 900;
  }

  .discovery__wrapper p {
    font-weight: 700;
  }


  .robonomics {
    color: var(--color-text);
  }


  .technologies {
    align-items: center;
    justify-items: center;
  }
  .technologies img {
    max-width: 60px;
  }

  /* scheme */
  .scheme {
    display: grid;
    grid-template-columns: 1fr 150px 1fr 150px 1fr;
    align-items: stretch;
    align-content: center;
    justify-items: stretch;
    justify-content: space-between;

    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .scheme > * {
    display: grid;
    align-content: center;
  }

  .scheme-item {
    min-height: 150px;
    font-weight: 500;
    border: 2.7px solid var(--color-text);
    padding: var(--space);
  }

  .scheme-a {
    font-size: 70%;
    color: var(--color-text);
  }

  .scheme-a span {
    display: block;
  }

  .scheme-a .arrow {
    white-space: nowrap;
  }

  .scheme-a-left {
    color: var(--color-text);
  }

  @media screen and (max-width: 1200px) {
    .scheme {
      grid-template-columns: 1fr 120px 1fr 120px 1fr;
      font-size: 80%;
    }
  }

  @media screen and (max-width: 940px) {
    .discovery .container__mid::after {
      height: 80%;
      background-image: url('../assets/images/discover-image-mobile.png');
    }

    .discovery h2 {
      max-width: 700px;
    }

    .discovery h2::after {
      right: 35px;
      top: -30px;
    }


  }

  @media screen and (max-width: 786px) {
    .scheme {
      grid-template-columns: 1fr;
      gap: calc(var(--gap) * 2);
    }

    .scheme .scheme-a {
      font-size: 80%;
      transform: rotate(90deg);
    }

    .scheme .scheme-a span:first-child {
      transform: rotate(180deg);
    }

    .scheme-a-right,
    .scheme-a-left {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  /* end of scheme */


  /* dark theme */

</style>