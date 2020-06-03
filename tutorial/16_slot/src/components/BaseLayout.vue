<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <!-- nameのないslotは暗黙的にdefaultという名前を持つ -->
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
