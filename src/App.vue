<template>
<div>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link exact to="/" class="navbar-brand">NYSL</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/game_info" class="nav-link">Game Information</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/rules" class="nav-link">Rules</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/registration" class="nav-link">Registration</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div id="logo"></div>
  </header>
  <main>
    <router-view></router-view>
  </main>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#logo {
  height: 5rem;
  width: 5rem;
  margin: auto;
  background-image: url("assets/logo.png");
  background-size: cover
}
</style>
