<template>
  <div id="app">
    <div class="wrapper">
        <div class="wrapper-content">
          <header>
            <div class="navbar">
              <div class="container">
                <div class="navbar-content">
                  <div class="logo">
                    Vue-cli
                  </div>
                  <ul class="navbar-list">
                    <li class="navbar-item" v-for="link in links" :key="link.title">
                      <router-link :to="link.url" class="navbar-link">
                        {{link.title}}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <router-view>
          </router-view>
    </div>
    </div>
  </div>

</template>

<script>

export default {
  data () {
    return {
      links: [
        {
          title: 'Home',
          url: '/'
        },
        {
          title: 'NotifyPage',
          url: '/NotifyPage'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
  .navbar-link {
    transition: .2s ease-in;
    &.router-link-exact-active {
      color: #5247e7;
    }
  }
</style>