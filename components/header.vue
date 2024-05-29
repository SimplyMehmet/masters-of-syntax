<script setup lang="ts">
import { PageSection } from '~/assets/enums/page-section';
const mobileNavActive = ref(false);
const activePageSection = ref<PageSection | null>(null)
let headerHeight = 62;

const toggleMobileNav = () => {
    mobileNavActive.value = !mobileNavActive.value;
}

const scrollToSection = (section: PageSection): void => {
    const pageElem = document.getElementById(section);
    if (pageElem) {
        scrollTo(0, pageElem.offsetTop - headerHeight);
        mobileNavActive.value = false;
    }
}

const setActivePageSection = () => {
    const aboutElem = document.getElementById(PageSection.About);
    const skillsElem = document.getElementById(PageSection.Skills);
    const projectsElem = document.getElementById(PageSection.Projects);
    const contactElem = document.getElementById(PageSection.Contact);

    if (!aboutElem || !skillsElem || !projectsElem || !contactElem) {
        return;
    }

    switch (true) {
        case contactElem.offsetTop <= window.scrollY + headerHeight:
            activePageSection.value = PageSection.Contact
            break;
        case projectsElem.offsetTop <= window.scrollY + headerHeight:
            activePageSection.value = PageSection.Projects
            break;
        case skillsElem.offsetTop <= window.scrollY + headerHeight:
            activePageSection.value = PageSection.Skills
            break;
        case aboutElem.offsetTop <= window.scrollY + headerHeight:
            activePageSection.value = PageSection.About
            break;
        default:
            activePageSection.value = null;
    }
}

const setHeaderHeight = () => {
    const mdBreakpoint = 768;
    if (window.screen.availWidth >= mdBreakpoint) {
        headerHeight = 68;
        return;
    }

    headerHeight = 62;
}

onMounted(() => {
    window.addEventListener('resize', setHeaderHeight);
    window.addEventListener('scroll', setActivePageSection);
    setActivePageSection();
    setHeaderHeight();
})

</script>
<template>
    <div>
        <div class="md:hidden">
            <div class="pos-fixed left-0 right-0 bg-c-white z-2">
                <div class="border-b-2px border-b-c-purple border-b-solid flex justify-end">
                    <div @click="toggleMobileNav()" class="pos-relative h-20px w-20px m-5">
                        <span class="h-2px bg-c-black w-24px pos-absolute top-0 transition-all transition-duration-200"
                            :class="{ 'top-9px transform-rotate-45': mobileNavActive }">&nbsp;</span>
                        <span
                            class="h-2px bg-c-black w-24px pos-absolute top-9px transition-all transition-duration-200"
                            :class="{ 'transform-rotate-45': mobileNavActive }">&nbsp;</span>
                        <span
                            class="h-2px bg-c-black w-24px pos-absolute bottom-0 transition-all transition-duration-200"
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
                    <span @click="scrollToSection(PageSection.About)" class="c-black mb-4 font-league-gothic text-24px"
                        :class="{ 'underline': activePageSection === PageSection.About }">About</span>
                    <span @click="scrollToSection(PageSection.Skills)" class="c-black mb-4 font-league-gothic text-24px"
                        :class="{ 'underline': activePageSection === PageSection.Skills }">Skills</span>
                    <span @click="scrollToSection(PageSection.Projects)"
                        class="c-black mb-4 font-league-gothic text-24px"
                        :class="{ 'underline': activePageSection === PageSection.Projects }">Projects</span>
                    <span @click="scrollToSection(PageSection.Contact)" class="c-black font-league-gothic text-24px"
                        :class="{ 'underline': activePageSection === PageSection.Contact }">Contact</span>
                </div>
            </div>
        </div>
        <div class="hidden md:flex opacity-0" :class="{
            'pos-absolute bottom-5% right-5% flex-col opacity-100': activePageSection === null,
            'pos-fixed top-0 left-0 right-0 bg-c-white z-2 p-4 border-b-2px border-b-c-purple border-b-solid opacity-100 animate-[fade-in_.3s_ease-in-out_forwards]': activePageSection !== null,
        }">
            <span @click="scrollToSection(PageSection.About)"
                class="text-30px c-black font-league-gothic hover:underline hover:cursor-pointer"
                :class="{ 'underline': activePageSection === PageSection.About, 'ml-auto px-4': activePageSection !== null }">About</span>
            <span @click="scrollToSection(PageSection.Skills)"
                class="text-30px c-black font-league-gothic hover:underline hover:cursor-pointer"
                :class="{ 'underline': activePageSection === PageSection.Skills, 'px-4': activePageSection !== null }">Skills</span>
            <span @click="scrollToSection(PageSection.Projects)"
                class="text-30px c-black font-league-gothic hover:underline hover:cursor-pointer"
                :class="{ 'underline': activePageSection === PageSection.Projects, 'px-4': activePageSection !== null }">Projects</span>
            <span @click="scrollToSection(PageSection.Contact)"
                class="text-30px c-black font-league-gothic hover:underline hover:cursor-pointer"
                :class="{ 'underline': activePageSection === PageSection.Contact, 'px-4': activePageSection !== null }">Contact</span>
        </div>
    </div>
</template>