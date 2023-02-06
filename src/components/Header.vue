<template>
    <header class="header" v-if="$store.state.showHeader">
      <div class="container__wide">

        <g-link class="logo header__section" to="/"><g-image src="@/assets/images/logo.svg" /></g-link>

        <nav id="nav" class="nav header__section">
          <a class="nav__link" :class="{'active': !$route.path.includes('online-courses') && !$route.path.includes('course') && !$route.path.includes('certificates') && !$route.path.includes('privacy-policy') && !$route.path.includes('playground')}" href="/#about" @click="moveAndCloseAbout">{{$ts('About Academy')}}</a>
          <g-link class="nav__link" :class="{'active': $route.path.includes('online-courses') || $route.path.includes('course') }" to="/online-courses/">{{$ts('Online Courses')}}</g-link>
          <g-link class="nav__link" :class="{'active': $route.path.includes('playground')}" to="/playground/">{{$ts('Playground')}}</g-link>
          <g-link class="nav__link" :class="{'active': $route.path.includes('certificates')}" to="/certificates/">{{$ts('Apply for Certificate')}}</g-link>
        </nav>
        <a href="#" class="nav__popup__close" @click="close('#nav')"><font-awesome-icon icon="fa-circle-xmark"/></a>
        <a href="#nav" class="nav__popup__link" @click.prevent="open('#nav')"><font-awesome-icon icon="fa-bars"/></a>

        <div class="header-right expand header__section" tabindex="0">
            <LanguageSwitcher/>  
            <details >
            <summary>i</summary>

            <div class="expand__content text__hyphened">
                <p>{{$ts('We plan to expand Robonomics Academy courses and available lessons may be imperfect. Please feel free to')}} <g-link to="https://discord.gg/xqDgG3EGm9">{{$ts('discuss with us')}}</g-link> {{$ts('your suggestions and report bugs.')}}</p>
            </div>
            </details>
        </div>

      </div>
    </header>
</template>

<script>

export default {

    components: {
        LanguageSwitcher: () => import('~/components/LanguageSwitcher.vue'),
    },

    methods: {
        open(el) {
            document.querySelector(el).classList.remove('close')
            document.querySelector(el).classList.add('open')
        },

        close(el) {
            document.querySelector(el).classList.remove('open')
            document.querySelector(el).classList.add('close')
        },

        scrollToTeam() {
        const el = document.querySelector('#about');

        if (el) {
          el.scrollIntoView({behavior: 'smooth'});
        }

      },

      moveAndCloseAbout() {
        setTimeout(this.scrollToTeam, 100);
        this.close('#nav');
      }
    },

    mounted() {
    
        // Close all opened details on body click
    
        document.body.onclick = (e) => {
            const current = e.target.closest('details[tabindex="0"]'); //save clicked element to detect if it is our current detail

            document.body.querySelectorAll('details[tabindex="0"]')
                .forEach((e) => {
                    if(e !== current){ //we need this condition not to break details behavior
                        e.open = false
                    }
            })
        }

    }
};
</script>

<style>
    .header {
        background-color: var(--color-brown-dark);
        color: var(--color-light);
        font-family: var(--font-title);
        font-size: var(--font-size);
        font-weight: bold;
        padding-bottom: calc(var(--gap) * 0.5);
        padding-top: calc(var(--gap) * 0.5);
        position: sticky;
        top: 0;
        z-index: 10;
    }

    .header .container__wide {
        padding-left: calc(var(--gap) * 3);
        position: relative;
    }

    .header__section {
        display: inline-block;
        vertical-align: middle;
    }

    .header .logo {
        left: 0;
        max-width: calc(var(--gap) * 1.8);
        position: absolute;
        top: calc(var(--gap) * -0.3);
    }

    .header .logo img {
        display: block;
        width: 100%;
    }

    .header a {
        color: var(--color-light);
    }

    .header a:not(:last-child) {
        margin-right: var(--gap);
    }

    .header a:hover {
        color: var(--color-second)
    }

    .header a.active, .header a.active:hover {
        color: var(--color-main)
    }

    .header nav {
        margin-right: calc(var(--gap) * 3);
    }



    .header .expand {
        position: absolute;
        right: 0;
        top: 0;
    }

    .header .expand summary {
        background-color: var(--color-second);
        border-radius: var(--gap);
        padding: 0 calc(var(--gap) * 0.35);
    }

    .header .expand__content {
        background-color: var(--color-second);
        border-radius: calc(var(--gap) * 0.5);
        padding: calc(var(--gap) * 0.5);
        position: absolute;
        right: 0;
        top: calc(var(--gap) * 1.2);
        width: 300px;
    }

    .header .expand__content a {
        color: var(--color-text)
    }


    .expand summary::-webkit-details-marker, .expand summary::marker { display: none; font-size: 0; }
    .expand summary {
        cursor: pointer;
        display: inline-block;
        user-select: none;
    }

    .nav__popup__link, .nav__popup__close {
        display: none;
    }

    .nav__popup__close {
        position: fixed;
        top: calc(var(--gap) * 0.5);
        right: 0;
        z-index: 100;
        color: var(--color-text) !important;
        font-size: 2rem;
    }

    .header-right {
        display: inline-flex;
    }

    @media screen and (max-width: 1040px) {
        .nav {
            background: var(--color-light);
            color: var(--color-bworn);
            padding: calc(var(--gap) * 2) var(--gap);
            
            position: fixed;
            z-index: 100;
            bottom: 0;
            left: 0;
            right: 0;
            top: 0;
            margin: 0 !important;
            text-align: center;
        }

        @media (prefers-color-scheme: dark) {
            .nav {
                background: var(--color-brown-dark);
            }
        }

        /* .nav:not(:target) { */
        .nav:not(.open) {
            display: none;
        }

        /* .nav:target { */
        .nav.open {
            display: block;
        }

        /* .nav:target + .nav__popup__close { */
        .nav.open + .nav__popup__close {
            display: block;
        }

        .nav a {
            color: var(--color-text);
            font-size: 130%;
            display: block;
            width: 100%;
            margin-bottom: var(--gap);
        }

        .header .container__wide {
            text-align: right;
        }

        .header .expand {
            position: static;
        }

        .nav__popup__link {
            display: inline-block !important;
        }
    }

    @media (prefers-color-scheme: dark) { 
        .header .expand__content a {
            color: var(--color-actions);
        }
    }

</style>