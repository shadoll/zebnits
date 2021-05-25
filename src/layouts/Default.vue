<template>
    <div class="layout">
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
