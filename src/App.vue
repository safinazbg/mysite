<template>
  <div id="gridLayout">
    <div id="nav" class="uk-padding-small">
      <ul class="uk-iconnav uk-iconnav-vertical">
        <li @click="$router.push('/')">
            <a uk-icon="icon: home"></a>
        </li>
        <li @click="$router.push('/research')"><a uk-icon="icon: file-edit"></a></li>
        <li @click="$router.push('/cv')"><a uk-icon="icon: user"></a></li>
        <li><a uk-icon="icon: settings"></a></li>
      </ul>
    </div>
    <div id="body" class="uk-padding">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
  };
</script>


<style>
@font-face {
  font-family: Roboto;
  src: url("assets/Roboto/Roboto-Regular.ttf");
}
@font-face {
  font-family: Roboto-bold;
  src: url("assets/Roboto/Roboto-Bold.ttf")
}
* {
  font-family: Roboto!important;
}
h1, h2, h3, h4, h5, h6, em {
  font-family: Roboto-bold!important;
}
em {
  text-decoration-style: none!important;
  color: #4f5452 !important;
}
 #gridLayout {
   height: 100vh;
   display: grid;
   grid-template-columns: 50px 1fr;
 }
 #nav {
   display: flex;
   justify-content: center;
   background-color: #aec4bc;
 }

 #nav svg {
   color: black;
 }
 #body {
   background-image: url('assets/safi_px.png');
   background-size: cover;
 }
</style>
