<style>
@keyframes slide-in-to-right {
    0% {
        left: -200px;
        right: 200px;
        opacity: 0;
    }

    40% {
        opacity: 0;
    }

    100% {
        left: 0px;
        right: 0px;
        opacity: 1;
    }
}

@keyframes fade-top {
    0% {
        transform: translateY(-50px);
        opacity: 0;
    }

    10% {
        opacity: 0;
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fade-left {
    0% {
        transform: translateX(-50px);
        opacity: 0;
    }

    10% {
        opacity: 0;
    }


    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fade-bottom {
    0% {
        transform: translateY(50px);
        opacity: 0;
    }

    10% {
        opacity: 0;
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes expand-width {
    0% {
        width: 0;
    }

    100% {
        width: 100%;
    }
}


.banner-image {
    background-image: url("/img/lander_banner.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    border-top-right-radius: 35%;
    border-bottom-right-radius: 35%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    animation: slide-in-to-right 1.5s ease-out;
}

.logo-text {
    font-family: 'IBM Plex Sans', serif, sans-serif;
    font-weight: 700;
    font-size: 100px;
    line-height: 90px;
}

.fade-top {
    opacity: 0;
    animation: fade-top .6s ease-out forwards;
}

.fade-left {
    opacity: 0;
    animation: fade-left .4s ease-out forwards;
}

.fade-bottom {
    opacity: 0;
    animation: fade-bottom .6s ease-out forwards;
}

.draw {
    width: 0;
    animation: expand-width .4s .5s ease-in-out forwards;
}
</style>

<template>
    <div class="grid grid-cols-12">
        <div class="col-span-6 pos-relative h-dvh">
            <!-- <div class="banner-image"></div> -->
        </div>

        <div class="col-start-7 col-end-13 mt-6 text-white">
            <div class="flex h-100% justify-center items-center">
                <div class="logo-text">
                    <span class="block text-center fade-top">Masters</span>
                    <span class="fade-left inline-block">of&nbsp;</span>
                    <span class="fade-bottom inline-block">Syntax</span>
                    <span class="block bg-white w-full h-2 mt-6 draw"></span>
                </div>
            </div>
        </div>
    </div>
</template>