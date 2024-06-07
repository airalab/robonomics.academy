<template>
    <Layout>
        <section class="container__narrow">
            <h1>{{$t('Demo academic apps')}}</h1>
            <p class="pagedesc">{{$t('Here are some demonstrational applications for academic needs. Some of them can be active, some of them not.')}}</p>
        </section>

        <section class="container__narrow">
            <g-link to="/demoapps/johnnyb-lab/" class="cover">
                <g-image src="@/assets/images/demoapps/johnnyb-lab-cover.jpg" aria-hidden="true" alt="Hack Johnny's lab demo"/>
            </g-link>
            <g-link to="/demoapps/johnnyb-lab/" class="title">Hack Johnny's lab</g-link>
        </section>
    </Layout>
</template>

<style scoped>
.cover, .cover img {
    display: block;
}

.cover img {
    max-width: 100%;
}

.title {
    font-weight: 700;
    margin-top: 10px;
    display: block;
}
</style>