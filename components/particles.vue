<script setup lang="ts">
import type { Container, ISourceOptions } from "@tsparticles/engine";
const emit = defineEmits(["loaded"])
const props = defineProps({
  container: {
    default: "particles",
    type: String,
  },
  repulseSelector: {
    default: "",
    type: String,
  },
  backgroundColor: {
    default: '#000',
    type: String,
  },
  particleColor: {
    default: '#fff',
    type: String,
  },
  linkColor: {
    default: '#fff',
    type: String,
  }
});

const {
  repulseSelector,
  backgroundColor,
  particleColor,
  linkColor
} = props;

const options: ISourceOptions = {
  id: 'particles',
  fullScreen: {
    enable: false,
  },
  background: {
    color: {
      value: backgroundColor,
    },
  },
  particles: {
    color: {
      value: particleColor,
    },
    links: {
      color: linkColor,
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
        parallax: {
          enable: true,
          smooth: 20,
          force: 100,
        },
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: {
        delay: 0,
        enable: true,
      },
      onDiv: {
        enable: !!repulseSelector,
        mode: "repulse",
        selectors: repulseSelector,
        type: "rectangle",
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
  emit("loaded");
};

const particlesScreenWidthBasedConfig = () => {
  if (!particlesContainer) { return; }
  if (window.innerWidth < 764 && !mobile) {
    mobile = true;
    particlesContainer.stop();
    particlesContainer.options.particles.number.value = 40;
    particlesContainer.start();
    return;
  }

  if (window.innerWidth >= 764 && mobile) {
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
  <NuxtParticles id="particles" :options="options" @load="onLoad"
    class="pos-absolute -top-10 -bottom-10 -left-10 -right-10 z-0" />
</template>
