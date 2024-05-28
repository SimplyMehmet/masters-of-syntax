<script setup lang="ts">
import { PageSection } from '~/assets/enums/page-section';


</script>

<template>
    <div class="bg-c-purple w-full">
        <div :id="PageSection.Contact" />
        <div class="container grid">
            <h1 class="c-white text-24px font-league-gothic font-400 underline my-0 pt-5 pb-2 col-span-12 md:text-30px">
                Contact</h1>
            <p class="text-14px c-white my-0 col-span-12 md:col-span-6 md:text-16px">Need a dev to make some great
                things? Feel free to call</p>

            <div class="pt-5 pb-6 col-span-12 md:col-span-6 md:flex justify-evenly md:pt-0">
                <div>
                    <a class="c-white no-underline text-14px flex items-center mb-3 md:text-16px"
                        href="mailto:mehmet@mastersofsyntax.nl">
                        <img src="/img/icon/mail.svg" class="w-24px md:w-30px mr-4" />
                        <span>Mehmet@mastersofsyntax.nl</span>
                    </a>
                    <a class="c-white no-underline text-14px flex items-center mb-3 md:text-16px"
                        href="tel:+31657943170">
                        <img src="/img/icon/phone.svg" class="w-24px md:w-30px mr-4" />
                        <span>+31&nbsp;6&nbsp;5794&nbsp;3170</span>
                    </a>
                </div>
                <div>
                    <a class="c-white no-underline text-14px flex items-center mb-3 md:text-16px"
                        href="https://github.com/simplymehmet">
                        <img src="/img/logo/github.svg" class="w-24px md:w-30px mr-4" />
                        <span>SimplyMehmet</span>
                    </a>
                    <a class="c-white no-underline text-14px flex items-center md:text-16px"
                        href="https://www.linkedin.com/in/mehmet-g%C3%B6nen-326886149/">
                        <img src="/img/logo/linkedin.svg" class="w-24px md:w-30px mr-4" />
                        <span>Mehmet Gönen</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-c-purple border-t-c-white border-t-1 border-t-solid">
        <div class="container py-2 flex justify-between flex md:grid md:grid-cols-12">
            <span class="c-white text-10px md:col-span-3 md:text-14px lg:col-span-2">KVK: 93542216</span>
            <span class="c-white text-10px md:col-span-3 md:text-14px lg:col-span-2">BTW: NL005026278B06</span>
            <span class="c-white text-10px md:col-span-6 md:text-end md:text-14px lg:col-span-8">Masters of
                Syntax</span>
        </div>
    </div>
</template>
