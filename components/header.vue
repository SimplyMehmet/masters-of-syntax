<script setup lang="ts">
import { PageSection } from '~/assets/enums/page-section';

const mobileNavActive = ref(false);

const toggleMobileNav = () => {
    mobileNavActive.value = !mobileNavActive.value;
}

const ScrollToSection = (section: PageSection): void => {
    const pageElem = document.getElementById(section);
    if (pageElem) {
        scrollTo(0, pageElem.offsetTop - 62);
        mobileNavActive.value = false;
    }
}



</script>
<template>
    <div class="md:hidden">
        <div class="pos-fixed left-0 right-0 bg-c-white z-2">
            <div class="border-b-2px border-b-c-purple border-b-solid flex justify-end">
                <div @click="toggleMobileNav()" class="pos-relative h-20px w-20px m-5">
                    <span class="h-2px bg-c-black w-24px pos-absolute top-0 transition-all transition-duration-200"
                        :class="{ 'top-9px transform-rotate-45': mobileNavActive }">&nbsp;</span>
                    <span class="h-2px bg-c-black w-24px pos-absolute top-9px transition-all transition-duration-200"
                        :class="{ 'transform-rotate-45': mobileNavActive }">&nbsp;</span>
                    <span class="h-2px bg-c-black w-24px pos-absolute bottom-0 transition-all transition-duration-200"
                        :class="{ 'top-9px transform-rotate-315': mobileNavActive }">&nbsp;</span>
                </div>
            </div>
        </div>
        <div ref="mobileNav"
            class="pos-fixed top-62px bottom-0 z-2 w-100% bg-[linear-gradient(90deg,var(--c-white)45%,rgba(255,255,255,.5))] transition-all ease-in-out transition-duration-300"
            :class="{
                'left-0': mobileNavActive,
                'left-100%': !mobileNavActive
            }">
            <div class="container flex flex-col pt-5">
                <span @click="ScrollToSection(PageSection.About)"
                    class="no-underline c-black mb-4 font-league-gothic text-24px">About</span>
                <span @click="ScrollToSection(PageSection.Skills)"
                    class="no-underline c-black mb-4 font-league-gothic text-24px">Skills</span>
                <span @click="ScrollToSection(PageSection.Projects)"
                    class="no-underline c-black mb-4 font-league-gothic text-24px">Projects</span>
                <span @click="ScrollToSection(PageSection.Contact)"
                    class="no-underline c-black font-league-gothic text-24px">Contact</span>
            </div>
        </div>
    </div>
</template>