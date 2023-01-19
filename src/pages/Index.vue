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
        <h1>{{$ts('Get New Skills in Using Modern Web Technologies to Build IoT Solutions')}}</h1>
        <div class="banner-btn">
          <g-link class="btn" to="/online-courses">{{$ts('Start Online Courses')}}</g-link>
          <g-image src="@/assets/images/building.png" aria-hidden="true" />
        </div>
      </div>
    </section>

    <section id="about" class="team section__brown" ref="about">
      <div class="container__narrow">
        <h2>{{$ts('Welcome to Our Online School!')}}</h2>
        <p class="text__center">{{$ts('The core developers of the Robonomics Network, robotics specialists and PhD scientists offer to pass through compendious experience based on about 10 years of work with web3 projects.')}}</p>
        <g-image src="@/assets/images/team.png" aria-hidden="true" />
      </div>
    </section>

    <section>
      <div class="container__mid">
        <h2>{{$ts('Learn')}}</h2>

        <div class="grid-3 grid-border">

          <div>
            <h4>{{$ts('Deploying and Operating Networks of IoT Devices')}}</h4>
            <g-image src="@/assets/images/learn-1.png" aria-hidden="true" />
          </div>

          <div>
            <h4>{{$ts('Operating Blockchain Technologies')}}</h4>
            <g-image src="@/assets/images/learn-2.png" aria-hidden="true" />
          </div>

          <div>
            <h4>{{$ts('Protected Operations Logging and Storage of Device Data')}}</h4>
            <g-image src="@/assets/images/learn-3.png" aria-hidden="true" />
          </div>

          <div>
            <h4>{{$ts('Building IoT Dapps')}}</h4>
            <g-image src="@/assets/images/learn-4.png" aria-hidden="true" />
          </div>

          <div>
            <h4>{{$ts('Basics of Robot Economy')}}</h4>
            <g-image src="@/assets/images/learn-5.png" aria-hidden="true" />
          </div>

          <div>
            <h4>{{$ts('Intense Engineering Practice')}}</h4>
            <g-image src="@/assets/images/learn-6.png" aria-hidden="true" />
          </div>

        </div>
      </div>
    </section>

    <section>
      <div class="container__mid">
        <h2>{{$ts('Obtain')}}</h2>

        <div class="grid-3 grid-border">

          <div>
            <g-image src="@/assets/images/bonus-1.png" aria-hidden="true" />
            <h4>{{$ts('Blockchain Proved Certificate')}}</h4>
            <p>{{$ts('that you are familiar with the modern web technologies for the IoT. It will come in handy when hiring a technology company that wants to improve their corporate infrastructure using web3.')}}</p>
          </div>

          <div>
            <g-image src="@/assets/images/bonus-2.png" aria-hidden="true" />
            <h4>{{$ts('Networking with Professionals')}}</h4>
            <p>{{$ts('with Robonomics engineers and even get advice at a personal consultation for your IoT research or engineering project.')}}</p>
          </div>

          <div>
            <g-image src="@/assets/images/bonus-3.png" aria-hidden="true" />
            <h4>{{$ts('Participation in Robonomics as Ambassador')}}</h4>
            <p>{{$ts('We have')}} <g-link to="https://robonomics.network/ambassador-program/"> {{$ts('Ambassador Program')}}</g-link>{{$ts(' and looking forward talented inspired people!')}}</p>
          </div>
          
        </div>
      </div>
    </section>

    <section class="section__brown">
      <section class="container__narrow">
        <h2>{{$ts('What is Robonomics?')}}</h2>
        <p class="text__center">{{$ts('Robonomics is a secure, serverless and futuristic IoT platform that connects users and smart devices.')}}</p>
        <p class="text__center">{{$ts('It enables the exchange of technical and economic information in the form of atomic transactions between user applications, IoT services, and complex robotics.')}}</p>
      </section>

      <section class="container__mid">
        <div class="scheme">
          <div class="scheme-item">
            <div>{{$ts('User Dapp')}}</div>
          </div>
          <div class="scheme-a">
            <div class="scheme-a-right">
              <span>{{$ts('Function Request')}}</span>
              <span aria-hidden="true" class="arrow">-----------------&gt;</span>
            </div>
            <div class="scheme-a-left">
              <span>{{$ts('Report')}}</span>
              <span aria-hidden="true" class="arrow">&lt;-----------------</span>
            </div>
          </div>
          <div class="scheme-item">
            <div>{{$ts('Digital Twin')}}</div>
          </div>
          <div class="scheme-a">
            <div class="scheme-a-right">
              <span>{{$ts('Control')}}</span>
              <span aria-hidden="true" class="arrow">-----------------&gt;</span>
            </div>
            <div class="scheme-a-left">
              <span>{{$ts('Log')}}</span>
              <span aria-hidden="true" class="arrow">&lt;-----------------</span>
            </div>
          </div>
          <div class="scheme-item">
            <div>{{$ts('IoT Device')}}</div>
          </div>
        </div>
      </section>

      <section class="container__mid">
        <p class="technologies grid-6">
          <g-image src="@/assets/images/ros.png" alt="ROS, Technology supported by Robonomics" style="max-width: 100px" />
          <g-image src="@/assets/images/substrate.png" alt="Substrate, Technology supported by Robonomics" />
          <g-image src="@/assets/images/ipfs.png" alt="IPFS, Technology supported by Robonomics" />
          <g-image src="@/assets/images/ethereum.png" alt="Ethereum, Technology supported by Robonomics" />
          <g-image src="@/assets/images/polkadot.png" alt="Polkadot, Technology supported by Robonomics" />
          <g-image src="@/assets/images/kusama.png" alt="Kusama, Technology supported by Robonomics" style="max-width: 90px" />
        </p>
      </section>

      <div class="container__narrow">
        <p class="text__center"><g-link to="https://robonomics.network">{{$ts('Official website of Robonomics')}}</g-link></p>
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

      scrollToTeam() {
        const el = this.$refs.about

        if (el) {
          el.scrollIntoView({behavior: 'smooth'});
        }

      },
    },

    mounted() {
      window.addEventListener('scroll', this.onScroll)
      setTimeout(this.scrollToTeam, 100)
    },

    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    }

  }

</script>

<style scoped>
  .banner {
    background-color: #F4E282;
    color: var(--color-text);
    overflow: hidden;
    padding-top: calc(var(--gap) * 3);
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
  }

  .banner h1 {
    font-family: var(--font-text);
    font-size: 24px;
    margin: calc(var(--gap) * 1.5) auto;
    max-width: 450px;
    color: #534E4B;
  }

  .banner-btn {
    align-items: flex-end;
    display: flex;
    justify-content: center;
    height: 420px;
    position: relative;
  }

  .banner-btn img {
    bottom: 0;
    left: calc(50% - 700px);
    position: absolute;
    width: 1400px;
    max-width: 1400px; /* rewrite one global style */
    z-index: 0;
  }

  .banner-btn .btn {
    margin-bottom: calc(var(--gap) * 2);
    position: relative;
    z-index: 1;
  }

  .team {
    padding-bottom: 0;
  }

  .team img {
    display: block;
    margin-top: calc(var(--gap)*2);
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
    border: 1px dashed var(--color-light);
    padding: var(--space);
  }

  .scheme-a {
    font-size: 60%;
    color: var(--color-light);
  }

  .scheme-a span {
    display: block;
  }

  .scheme-a .arrow {
    white-space: nowrap;
  }

  .scheme-a-left {
    color: var(--color-light);
  }

  @media screen and (max-width: 1200px) {
    .scheme {
      grid-template-columns: 1fr 120px 1fr 120px 1fr;
      font-size: 80%;
    }
  }

  @media screen and (max-width: 786px) {
    .scheme {
      grid-template-columns: 1fr;
    }

    .scheme .scheme-a {
      font-size: 80%;
      transform: rotate(90deg);
    }
  }

  /* end of scheme */


  /* dark theme */
  @media (prefers-color-scheme: dark) { 
    .text__center a {
      color: var(--color-light-lesson);
    }

    .text__center a:hover {
      color: var(--color-light);
    }

  }

</style>