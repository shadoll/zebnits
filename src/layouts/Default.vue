<template>
    <div class="layout">
        <!-- <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header> -->
        <slot />
        <s-footer />
    </div>
</template>

<script>
    import sFooter from "../components/sFooter.vue";
    export default {
        components: { sFooter },
    };
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
