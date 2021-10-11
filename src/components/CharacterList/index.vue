<template>
  <div class="CharacterList">
    CharacterList
    <FilterGender />
    <button @click="loadCharacters()">Clear Filter</button>
    <ul>
      <li v-for="(item, index) in characters" :key="index">
        <p>{{ item.species }}</p>
        <h2>{{ item.name }}</h2>
        <img :src="item.image" alt="Character image">
        <p><span>Gender: </span>{{ item.gender }}</p>
        <p><span>Status: </span>{{ item.status }}</p>
        <p><span>Type: </span>{{ item.type }}</p>
      </li>
    </ul>
  </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
