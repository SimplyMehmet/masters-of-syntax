<script setup lang="ts">
import { PageSection } from '~/assets/enums/page-section';
import { Discipline } from '~/assets/enums/discipline';

const activeDiscipline = ref<Discipline | null>(null)

const toggleDiscipline = (discipline: Discipline) => {
    if (activeDiscipline.value === discipline) {
        activeDiscipline.value = null
        return;
    }

    activeDiscipline.value = discipline;
}

const disciplines = ref([{
    name: Discipline.FrontEnd,
    skills: [{
        img: "/img/logo/angular.svg",
        name: "Angular"
    }, {
        img: "/img/logo/rxjs.svg",
        name: "rxJS"
    }, {
        img: "/img/logo/nuxt.png",
        name: "Nuxt"
    }, {
        img: "/img/logo/vue.png",
        name: "Vue"
    }, {
        img: "/img/logo/react.svg",
        name: "React"
    }, {
        img: "/img/logo/bootstrap.svg",
        name: "Bootstrap"
    }, {
        img: "/img/logo/redux.svg",
        name: "Redux"
    }, {
        img: "/img/logo/tailwind.svg",
        name: "Tailwind"
    }, {
        img: "/img/logo/scss.svg",
        name: "SCSS"
    }, {
        img: "/img/logo/unocss.svg",
        name: "UnoCSS"
    }],
},
{
    name: Discipline.BackEnd,
    skills: [{
        img: "/img/logo/net.svg",
        name: "ASP.NET"
    }, {
        img: "/img/logo/golang.svg",
        name: "Golang"
    }, {
        img: "/img/logo/gin-gonic.svg",
        name: "Gin-gonic"
    }, {
        img: "/img/logo/nodejs.svg",
        name: "NodeJS"
    }, {
        img: "/img/logo/expressjs.svg",
        name: "ExpressJS"
    }],

},
{
    name: Discipline.DevOpsOther,
    skills: [{
        img: "/img/logo/azure.svg",
        name: "Azure"
    }, {
        img: "/img/logo/gcp.svg",
        name: "GCP"
    }, {
        img: "/img/logo/alloydb.svg",
        name: "AlloyDB"
    }, {
        img: "/img/logo/psql.svg",
        name: "PSQL"
    }, {
        img: "/img/logo/mysql.svg",
        name: "MySQL"
    }, {
        img: "/img/logo/mssql.svg",
        name: "MSSQL"
    }, {
        img: "/img/logo/linux.svg",
        name: "Linux"
    }, {
        img: "/img/logo/docker.svg",
        name: "Docker"
    }, {
        img: "/img/logo/kubernetes.svg",
        name: "Kubernetes"
    }, {
        img: "/img/logo/terraform.svg",
        name: "Terraform"
    }, {
        img: "/img/logo/cicd.svg",
        name: "CI/CD"
    }, {
        img: "/img/logo/git.svg",
        name: "Git"
    }, {
        img: "/img/logo/typescript.svg",
        name: "Typescript"
    }],
}]);

</script>

<template>
    <div>
        <div :id="PageSection.Skills" class="h-1px" />
        <div class="pt-7">
            <div class="container">
                <h1 class="font-league-gothic font-400 md:text-30px text-24px underline mt-0 mb-7">Skills</h1>
            </div>
            <div class="container-mobile-full md:mx-auto md:px-4 md:flex md:justify-between">
                <div @click="toggleDiscipline(discipline.name)" v-for="(discipline, index) of disciplines"
                    class="bg-c-purple md:max-w-420px w-100% flex flex-col" :class="{
                        'mb-0.5': index != disciplines.length - 1,
                        'md:mx-3': index != 0 && index != disciplines.length - 1,
                    }">
                    <div class="flex justify-between items-center px-4">
                        <span class="c-white py-4 font-league-gothic text-24px capitalize">{{ discipline.name }}</span>
                        <img class="md:hidden" src="/img/icon/chevron.svg" :class="{
                            'transform-rotate-180': discipline.name == activeDiscipline
                        }" />
                    </div>
                    <div class="px-4 bg-c-white md:border-b-6 md:border-b-solid md:border-b-c-purple 
                md:border-l-6 md:border-r-6 md:border-l-solid md:border-r-solid md:border-l-c-purple md:border-r-c-purple md:h-[100%] overflow-hidden transition transition-duration-1000"
                        :class="{
                            'h-0%': activeDiscipline != discipline.name,
                            'h-100% border-b-6 border-b-solid border-b-c-purple': activeDiscipline == discipline.name
                        }">
                        <div class="grid grid-cols-12">
                            <div class="col-span-6" v-for="skill of discipline.skills">
                                <div class="flex items-center my-3 h-36px md:h-53px">
                                    <img :src="skill.img" class="max-w-36px max-h-36px lg:max-w-53px lg:max-h-53px" />
                                    <span class="ml-4 text-14px md:text-20px">{{ skill.name }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>