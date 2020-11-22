<template>
  <div id="nav">


    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title main">
            Safinaz Buyukguzel, PhD
          </h1>
          <h2 class="subtitle">
            UX Designer
          </h2>
        </div>
      </div>
    </section>
    <div class="hero-foot">
      <div class="tabs is-left">
        <ul>
          <li class="is-active">
            <router-link to="/">
              <!--span class="icon is-small"><i class="mdi mdi-human-greeting" aria-hidden="true"></i></span-->
              <span>Home</span>
            </router-link>
          </li>
          <li>
            <router-link to="/cv">
              <!--              <span class="icon is-small"><i class="mdi mdi-magnify" aria-hidden="true"></i></span>-->
              <span>CV</span>
            </router-link>
          </li>
          <li>
            <router-link to="/research">
              <!--              <span class="icon is-small"><i class="mdi mdi-fingerprint" aria-hidden="true"></i></span>-->
              <span>Research</span>
            </router-link>
          </li>
          <li>
            <router-link to="/consulting">
<!--              <span class="icon is-small"><i class="mdi mdi-lightbulb-on-outline" aria-hidden="true"></i></span>-->
              <span>Consulting</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>

  <router-view/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
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
  .main.title {
    font-family: 'VT323';
  }

</style>
