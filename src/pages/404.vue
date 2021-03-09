<template>
    <div class="wrapper">
        <div class="wrapper-content wrapper-content--fixed">
                <div class="container">
                    <h1 class="title">Page not found</h1>
                    <p>
                        Go to          
                        <router-link class="link" to="/">
                            Main page?
                        </router-link>
                    </p>
                </div>
        </div>
    </div>
</template> 

<style lang="scss" scoped>
    .wrapper-content {
        min-height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>