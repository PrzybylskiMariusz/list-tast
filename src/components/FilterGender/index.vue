<template>
    <div class="FilterGender">
        <span>Filter by gender:</span>
        <select @change="filterCharacters($event)" placeholder="Choose a gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>
    </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
