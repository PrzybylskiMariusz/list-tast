<template>
  <div class="CharacterList">
    CharacterList
    <span>Filter by gender:</span>
    <select @change="filterCharackters($event)">
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="genderless">Genderless</option>
      <option value="unknown">Unknown</option>
    </select>
    <button @click="loadCharackters()">Clear Filter</button>
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
