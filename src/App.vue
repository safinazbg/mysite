<template>
<div id="gridLayout">
  <div>
    <ul class="uk-iconnav uk-iconnav-vertical">
      <li @click="$router.push('/')">
          <a uk-icon="icon: home"></a>
      </li>
      <li @click="$router.push('/research')"><a uk-icon="icon: file-edit"></a></li>
      <li @click="$router.push('/cv')"><a uk-icon="icon: user"></a></li>
      <li><a uk-icon="icon: settings"></a></li>
    </ul>
  </div>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>


<style>
 #gridLayout {
   height: 100vh;
   display: grid;
   grid-template-columns: 50px 1fr;
 }
 #gridLayout > :first-child {
   background-color: #e3dde3;
 }
</style>

<!--<style>-->
<!--  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');-->
<!--  #app {-->
<!--    font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--    -webkit-font-smoothing: antialiased;-->
<!--    -moz-osx-font-smoothing: grayscale;-->
<!--    text-align: center;-->
<!--    color: #2c3e50;-->
<!--  }-->

<!--  #nav {-->
<!--    padding: 30px;-->
<!--  }-->

<!--  #nav a {-->
<!--    font-weight: bold;-->
<!--    color: #2c3e50;-->
<!--  }-->

<!--  #nav a.router-link-exact-active {-->
<!--    color: #42b983;-->
<!--  }-->


<!--  p {-->
<!--    font-family:noto sans jp, sans-serif ;-->

<!--  }-->
<!--  .main.title {-->
<!--    font-family: 'VT323';-->
<!--  }-->

<!--</style>-->
