<template>
    <header class="header" :class="{'header-home': !$store.state.showHeader}">
      <div class="container__wide">

        <div class="header-logo__wrapper">

            <g-link v-if="$store.state.showHeader" class="logo header__section" to="/"><g-image :immediate="true" src="@/assets/images/logo.svg" /></g-link>

        </div>

        <nav id="nav" class="nav header__section">
            <g-link class="nav__link" :class="{'active': $route.path.includes('learn')}" to="/learn/">{{$ts('Learn')}}</g-link>
            <!-- <g-link class="nav__link" :class="{'active': $route.path.includes('playground')}" to="/playground/">{{$ts('Playground')}}</g-link> -->
            <!-- <g-link class="nav__link" :class="{'active': $route.path.includes('certificates')}" to="/certificates/">{{$ts('Blockchain certificate')}}</g-link> -->
             <g-link class="nav__link"  to="https://robonomics.network/">{{$ts('Robonomics website')}}</g-link>
        </nav>

        <a href="#" class="nav__popup__close" @click="close('#nav')"><font-awesome-icon icon="fa-circle-xmark"/></a>
        <a href="#nav" class="nav__popup__link" @click.prevent="open('#nav')"><font-awesome-icon icon="fa-bars"/></a>

        <div class="header-right expand header__section" tabindex="0">
            <LanguageSwitcher/> 
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
        background-color: var(--color-dark);
        color: var(--color-light);
        font-family: var(--font-main);
        font-size: var(--font-size);
        font-weight: 500;
        padding-bottom: calc(var(--gap) * 0.5);
        padding-top: calc(var(--gap) * 0.5);
        position: sticky;
        top: 0;
        z-index: 10;
    }

    .header-home {
        color: var(--color-dark);
        background-color: var(--color-light);
    }

    .header .container__wide {
        padding-left: calc(var(--gap) * 3);
        position: relative;
        display: flex;
    }

    .header__section {
        display: inline-block;
        vertical-align: middle;
    }

    .header-logo__wrapper {
        margin-right: auto;
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

    .header-home a {
        color: var(--color-dark);
    }

    .header a:not(:last-child) {
        margin-right: var(--gap);
    }

    .header a:hover {
        color: var(--color-main)
    }

    .header a.active, .header a.active:hover {
        color: var(--color-main)
    }

    .header nav {
        text-align: center;
        margin-right: calc(var(--gap) * 4);
    }

    .header .expand {
        position: absolute;
        right: 0;
        top: 0;
    }

    .header .nav__popup__link:hover {
        color: var(--color-main);
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
            background: var(--color-main);
            color: var(--color-light);
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

        .nav a:hover {
            color: var(--color-blue);
        }

        .header a.active, .header a.active:hover {
            color: var(--color-actions);
            font-weight: 600;
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

</style>