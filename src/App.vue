<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/cv">CV</router-link> |
    <router-link to="/research">Research</router-link>|
    <router-link to="/consulting">Consulting</router-link>

    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Safinaz Buyukguzel, PhD
          </h1>
          <h2 class="subtitle">
            Primary subtitle
          </h2>
        </div>
      </div>
    </section>
    <div class="hero-foot">
      <div class="tabs is-left">
        <ul>
          <li class="is-active">
            <a>
              <span class="icon is-small"><i class="mdi mdi-human-greeting" aria-hidden="true"></i></span>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a class="tabcolor">
              <span class="icon is-small"><i class="mdi mdi-magnify" aria-hidden="true"></i></span>
              <span>Research</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="mdi mdi-fingerprint" aria-hidden="true"></i></span>
              <span>CV</span>
            </a>
          </li>
          <li>
            <a class="tabcolor">
              <span class="icon is-small"><i class="mdi mdi-lightbulb-on-outline" aria-hidden="true"></i></span>
              <span>Consulting</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>

  <router-view/>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }


  p {
    font-family:noto sans jp, sans-serif ;

  }

</style>
