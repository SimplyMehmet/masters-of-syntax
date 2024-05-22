<script setup lang="ts">

const disciplines = ref([{
    name: "Front-end",
    skills: [{
        img: "",
        name: "Angular"
    }, {
        img: "",
        name: "rxjs"
    }, {
        img: "",
        name: "nuxt"
    }],

},
{
    name: "Back-end",
    skills: [{
        img: "",
        name: "Angular"
    }],

},
{
    name: "Dev-ops/other",
    skills: [{
        img: "",
        name: "Angular"
    }],

}])

</script>

<template>
    <div class="container">
        <h1 class="font-league-gothic font-400 text-24px underline">Skills</h1>
    </div>
    <div class="container-mobile-full md:mx-auto md:px-4 grid">
        <div v-for="(discipline, index) of disciplines" class="bg-c-purple col-span-12 " :class="{
            'mb-0.5': index != disciplines.length - 1
        }">
            <div class="flex justify-between items-center px-4">
                <span class="c-white py-4 font-league-gothic text-24px">{{ discipline.name }}</span>
                <img class="md:hidden" src="~/assets/img/chevron.svg" />
            </div>
            <div class="px-4 bg-c-white border-b-10 border-b-solid border-b-c-purple grid grid-cols-12">
                <span class="col-span-6" v-for="skill of discipline.skills">{{ skill.name }}</span>
            </div>
        </div>
    </div>
</template>