<template>
  <div class="about">
    <div class="container mockup-code max-w-xs">
      <pre data-prefix="$"><code>// This is an about page</code></pre>
    </div>

  </div>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
}

.about {
  padding: 5rem;
  display: grid;
  justify-items: center;
  align-items: center;
  align-content: center;
}
</style>
