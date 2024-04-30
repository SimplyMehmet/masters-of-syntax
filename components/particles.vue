<script setup lang="ts">
import type { Container, ISourceOptions } from "@tsparticles/engine";
const props = defineProps({
  repulseSelector: {
    default: "",
    type: String,
  },
});

const { repulseSelector } = props;
const options: ISourceOptions = {
  id: "particles",
  fullScreen: {
    enable: false,
  },
  background: {
    color: {
      value: "#000",
    },
  },
  particles: {
    color: {
      value: "#fff",
    },
    links: {
      color: "#fff",
      enable: true,
      distance: 80,
    },
    move: {
      enable: true,
      speed: 1,
    },
    number: {
      value: 120,
    },
  },
  detectRetina: true,
  fpsLimit: 144,
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "bubble"],
      },
      onDiv: {
        enable: true,
        mode: "repulse",
        selectors: repulseSelector,
        type: "rectangle",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: {
        delay: 0,
        enable: true,
      },
    },
    modes: {
      grab: {
        distance: 200,
      },
      bubble: {
        size: 10,
      },
      repulse: {
        distance: 1000,
      },
    },
  },
};

let particlesContainer: Container | null = null;
let mobile = false;

const onLoad = (container: Container) => {
  particlesContainer = container;
  particlesScreenWidthBasedConfig();
};

const particlesScreenWidthBasedConfig = () => {
  if (particlesContainer && window.innerWidth < 764 && !mobile) {
    mobile = true;
    particlesContainer.stop();
    particlesContainer.options.particles.number.value = 40;
    particlesContainer.start();
    return;
  }

  if (particlesContainer && window.innerWidth >= 764 && mobile) {
    mobile = false;
    particlesContainer.stop();
    particlesContainer.options.particles.number.value = 120;
    particlesContainer.start();
    return;
  }
};

onBeforeMount(() => {
  window.addEventListener("resize", particlesScreenWidthBasedConfig);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", particlesScreenWidthBasedConfig);
});
</script>

<template>
  <NuxtParticles
    id="particles"
    :options="options"
    @load="onLoad"
    class="pos-absolute top-0 bottom-0 left-0 right-0"
  />
</template>
