<script setup lang="ts">
const { colors } = useAppConfig();
const loadedParticles = ref(false)

const showText = () => {
    loadedParticles.value = true
}
</script>

<template>
    <div class="mb-7">
        <div id="projects" class="h-1px" />
        <div class="container">
            <h1 class="font-league-gothic underline c-black font-400 my-0 mb-7 text-24px md:text-30px">Projects</h1>
        </div>
        <div class="md:mx-auto md:px-4 container-mobile-full">
            <div id="projects" class="h-lg md:h-2xl w-full pos-relative overflow-hidden mb-20">
                <Particles :container="'#projects'" :background-color="colors.cPurple" :link-color="colors.cWhite"
                    :particle-color="colors.cWhite" @loaded="showText" />
                <div class="pos-absolute z-1 top-[calc(50%-75px)] left-[calc(50%-200px)]
                md:top-[calc(50%-100px)] md:left-[calc(50%-300px)] 
                items-center justify-center h-150px w-400px md:h-200px md:w-600px text-40px md:text-60px 
                bg-[radial-gradient(var(--c-purple-see-through)45%,rgba(0,0,0,0)70%,transparent)]" :class="{
                    'hidden': !loadedParticles,
                    'flex': loadedParticles
                }">
                    <span class="c-white">Coming soon</span>
                </div>
            </div>
        </div>
    </div>

</template>