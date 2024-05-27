<script setup lang="ts">
    import { PageSection } from '~/assets/enums/page-section';
</script>

<template>
    <div class="bg-c-purple">
        <div :id="PageSection.About" class="h-1px" />
        <div class="container py-7">
            <div class="max-w-700px">
                <h1 class="font-league-gothic underline c-white font-400 my-0 mb-5 text-24px md:text-30px">
                    About me</h1>
                <p class="c-white text-16px">
                    Back when I was just 10 years old is where I first started experimenting with
                    software. One of the first things I did was make a operating system so that
                    I was able to play all the games I wanted.
                </p>

                <p class="c-white text-16px">
                    This is where I actually forgot that the whole idea was to put games on a console
                    and started to make emulators and other cool widgets for my machine. After being
                    able to make such software I even started to experiment with the hardware to interact
                    with the custom software.
                </p>
                <p class="c-white text-16px">
                    This all started in 2005 and after that it never stopped, fast forwarding to
                    today I became obsessed with understanding and setting up the most efficient software
                    possible. As you can imagine I love being challenged!
                </p>
            </div>
        </div>
    </div>
</template>