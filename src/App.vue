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
 #gridLayout > :first-child {
   background-color: #e3dde3;
 }
</style>

