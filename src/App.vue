<script setup>
const orbCount = Array.from({ length: 6 }, (_, index) => index + 1)
const gridLines = Array.from({ length: 12 }, (_, index) => index + 1)
</script>

<template>
  <main class="dopamine-stage">
    <div class="glow-grid"></div>

    <div class="spark-lines">
      <span
        v-for="line in gridLines"
        :key="line"
        :style="{
          top: `${line * 7}%`,
          animationDelay: `${line * 0.5}s`,
        }"
      ></span>
    </div>

    <h1 class="hero-shout">小柯是帅哥！</h1>

    <div class="orb-layer" aria-hidden="true">
      <span v-for="orb in orbCount" :key="orb" :style="{ '--i': orb }"></span>
    </div>
  </main>
</template>

<style scoped>
.dopamine-stage {
  position: relative;
  min-height: 100vh;
  padding: clamp(1rem, 5vw, 3rem);
  color: #f4f3ff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glow-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 10% -20%, rgba(255, 128, 230, 0.35), transparent 45%),
    radial-gradient(circle at 80% 10%, rgba(102, 214, 255, 0.25), transparent 45%),
    linear-gradient(180deg, rgba(7, 0, 26, 0.9), rgba(8, 0, 35, 0.98));
  filter: blur(1px);
  opacity: 0.8;
  animation: breathe 16s ease-in-out infinite;
  z-index: 0;
}

.spark-lines {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.spark-lines span {
  position: absolute;
  width: 200%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
  animation: slide 10s linear infinite;
  opacity: 0.25;
}

.spark-lines span:nth-child(odd) {
  animation-duration: 8s;
}

.hero-shout {
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: clamp(3rem, 18vw, 7rem);
  line-height: 1.1;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff8f1;
  text-shadow: 0 30px 60px rgba(10, 0, 32, 0.8), 0 0 20px rgba(255, 136, 209, 0.7);
}

.orb-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.orb-layer span {
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 120, 210, 0.8), transparent 60%);
  filter: blur(6px);
  opacity: 0.5;
  animation: orb-glow 10s ease-in-out infinite;
  top: calc(var(--i) * 12%);
  left: calc(100% - var(--i) * 12%);
}

.orb-layer span:nth-child(even) {
  background: radial-gradient(circle, rgba(94, 224, 255, 0.75), transparent 60%);
}

@keyframes breathe {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

@keyframes slide {
  0% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(110%);
  }
}

@keyframes orb-glow {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translate3d(5px, -10px, 0) scale(1.2);
    opacity: 0.8;
  }
}
</style>
