<script setup lang="ts">
const { colors } = useAppConfig();
</script>

<template>
    <div class="container mt-20">
        <h1 class="font-league-gothic underline c-black font-400 my-0 mb-5 text-24px md:text-30px">Projects</h1>
    </div>
    <div class="md:container md:mx-auto md:px-4 container-mobile-full">
        <div id="projects" class="h-2xl w-full pos-relative overflow-hidden mb-20">
            <Particles :container="'#projects'" :background-color="colors.cPurple" :link-color="colors.cWhite"
                :particle-color="colors.cWhite" />
            <div class="pos-absolute z-1 top-[calc(50%-75px)] left-[calc(50%-200px)]
                md:top-[calc(50%-100px)] md:left-[calc(50%-300px)] 
                flex items-center justify-center h-150px w-400px md:h-200px md:w-600px text-40px md:text-60px 
                bg-[radial-gradient(var(--c-purple-see-through)45%,rgba(0,0,0,0)70%,transparent)]">
                <span class="c-white">Coming soon</span>
            </div>
        </div>
    </div>

</template>