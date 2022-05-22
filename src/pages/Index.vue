<template>
  <Layout>
    <section class="banner">
      <div class="container__wide">
        <g-image alt="Robonomics Academy Logo" src="@/assets/images/logo.svg" />
        <h1>Get new skills in using modern web technologies to build IoT solutions</h1>
        <div class="banner-btn">
          <g-link class="btn" to="/online-courses">Start online course</g-link>
          <g-image src="@/assets/images/building.png" aria-hidden="true" />
        </div>
      </div>
    </section>

    <section id="about" class="team section__brown">
      <div class="container__narrow">
        <h2>Welcome to our online school</h2>
        <p class="text__center">The core developers of the Robonomics project, robotics specialists and PhD research scientists offer to pass through compendious experience based on 7 years of work with web 3.0 projects.</p>
        <g-image src="@/assets/images/team.png" aria-hidden="true" />
      </div>
    </section>

    <section>
      <div class="container__mid">
        <h2>What you can learn</h2>

        <div class="grid-3 grid-border">

          <div>
            <h4>Deploying and operating networks of IoT devices</h4>
            <g-image src="@/assets/images/learn-1.png" aria-hidden="true" />
          </div>

          <div>
            <h4>Operating blockchain technologies</h4>
            <g-image src="@/assets/images/learn-2.png" aria-hidden="true" />
          </div>

          <div>
            <h4>Protected operations logging and storage of device data</h4>
            <g-image src="@/assets/images/learn-3.png" aria-hidden="true" />
          </div>

          <div>
            <h4>Building IoT Dapps</h4>
            <g-image src="@/assets/images/learn-4.png" aria-hidden="true" />
          </div>

          <div>
            <h4>Basics of robot economy</h4>
            <g-image src="@/assets/images/learn-5.png" aria-hidden="true" />
          </div>

          <div>
            <h4>Get through intense engineering practice</h4>
            <g-image src="@/assets/images/learn-6.png" aria-hidden="true" />
          </div>

        </div>
      </div>
    </section>

    <section>
      <div class="container__mid">
        <h2>What you can get</h2>

        <div class="grid-3 grid-border">

          <div>
            <g-image src="@/assets/images/bonus-1.png" aria-hidden="true" />
            <h4>Collect blockchain proved certificate</h4>
            <p>that you are familiar with the modern web technologies for the IoT. It will come in handy when hiring a technology company that wants to improve their corporate infrastructure using web3.</p>
          </div>

          <div>
            <g-image src="@/assets/images/bonus-2.png" aria-hidden="true" />
            <h4>Networking with professionals</h4>
            <p>with Robonomics engineers and even get advice at a personal consultation for your IoT research or engineering project.</p>
          </div>

          <div>
            <g-image src="@/assets/images/bonus-3.png" aria-hidden="true" />
            <h4>Jump into Robonomics team as an Ambassador</h4>
            <p>We started <g-link to="https://robonomics.network/ambassador-program/">Ambassador program</g-link> this year and looking forward talented inspired people!</p>
          </div>
          
        </div>
      </div>
    </section>

    <section class="section__brown">
      <section class="container__narrow">
        <h2>What is Robonomics?</h2>
        <p class="text__center">Robonomics is an open-source platform for IoT applications. We support a new generation of internet technologies (web3).</p>
        <p class="text__center">Robonomics implements the exchange of technical and economic information in the form of atomic transactions between user applications, IoT services, and complex robotics.</p>
      </section>

      <section class="container__mid">
        <div class="scheme">
          <div class="scheme-item">
            <div>User (D)App</div>
          </div>
          <div class="scheme-a">
            <div class="scheme-a-right">
              <span>Function request</span>
              <span aria-hidden="true" class="arrow">-----------------&gt;</span>
            </div>
            <div class="scheme-a-left">
              <span>Report</span>
              <span aria-hidden="true" class="arrow">&lt;-----------------</span>
            </div>
          </div>
          <div class="scheme-item">
            <div>Digital twin</div>
          </div>
          <div class="scheme-a">
            <div class="scheme-a-right">
              <span>Control</span>
              <span aria-hidden="true" class="arrow">-----------------&gt;</span>
            </div>
            <div class="scheme-a-left">
              <span>Log</span>
              <span aria-hidden="true" class="arrow">&lt;-----------------</span>
            </div>
          </div>
          <div class="scheme-item">
            <div>IoT Device</div>
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
        <p class="text__center"><g-link to="https://robonomics.network">More on our official website</g-link></p>
      </div>
    </section>

  </Layout>
</template>

<style scoped>
  .banner {
    background-color: var(--color-yellow);
    color: var(--color-brown);
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
    border: 1px dashed var(--color-white);
    padding: var(--space);
  }

  .scheme-a {
    font-size: 60%;
    color: var(--color-white);
  }

  .scheme-a span {
    display: block;
  }

  .scheme-a .arrow {
    white-space: nowrap;
  }

  .scheme-a-left {
    color: var(--color-white);
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
</style>