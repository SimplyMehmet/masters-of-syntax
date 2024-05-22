<script setup lang="ts">

const disciplines = ref([{
    name: "Front-end",
    skills: [{
        img: "/logo/angular.svg",
        name: "Angular"
    }, {
        img: "/logo/rxjs.svg",
        name: "rxJS"
    }, {
        img: "/logo/nuxtjs.svg",
        name: "Nuxt"
    }, {
        img: "/logo/vuejs.svg",
        name: "Vue"
    }],
},
{
    name: "Back-end",
    skills: [{
        img: "/logo/net.svg",
        name: "ASP.NET"
    }, {
        img: "/logo/golang.svg",
        name: "Golang"
    }, {
        img: "/logo/gin-gonic.svg",
        name: "Gin-gonic"
    }, {
        img: "/logo/nodejs.svg",
        name: "NodeJS"
    }, {
        img: "/logo/expressjs.svg",
        name: "ExpressJS"
    }],

},
{
    name: "Dev-ops/other",
    skills: [{
        img: "/logo/Azure.svg",
        name: "Azure"
    }, {
        img: "/logo/azure.svg",
        name: "GCP"
    }, {
        img: "/logo/alloydb.svg",
        name: "AlloyDB"
    }, {
        img: "/logo/psql.svg",
        name: "PSQL"
    }, {
        img: "/logo/mysql.svg",
        name: "MySQL"
    }, {
        img: "/logo/mssql.svg",
        name: "MSSQL"
    }, {
        img: "/logo/linux.svg",
        name: "Linux"
    }, {
        img: "/logo/docker.svg",
        name: "Docker"
    }, {
        img: "/logo/kubernetes.svg",
        name: "Kubernetes"
    }, {
        img: "/logo/terraform.svg",
        name: "Terraform"
    }, {
        img: "/logo/cicd.svg",
        name: "CI/CD"
    }, {
        img: "/logo/git.svg",
        name: "Git"
    }],
}]);

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
                <NuxtImg class="md:hidden" src="/icon/chevron.svg" lazy="true" />
            </div>
            <div class="px-4 bg-c-white border-b-10 border-b-solid border-b-c-purple grid grid-cols-12">
                <div class="col-span-6" v-for="skill of discipline.skills">
                    <NuxtImg :src="skill.img" lazy="true" />
                    <span>{{ skill.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>