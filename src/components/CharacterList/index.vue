<template>
  <div class="CharacterList">
    CharacterList
    <ul>
      <li v-for="item in characters" :key="item.id">
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
