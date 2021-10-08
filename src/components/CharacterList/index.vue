<template>
  <div class="CharacterList">
    CharacterList
    <ul>
      <li v-for="(item, index) in charackters" :key="index">
        <p>{{ item.species }}</p>
        <h2>{{ item.name }}</h2>
        <img :src="item.image" alt="Charackter image">
        <p><span>Gender: </span>{{ item.gender }}</p>
        <p><span>Status: </span>{{ item.status }}</p>
        <p><span>Type: </span>{{ item.type }}</p>
      </li>
    </ul>
  </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
