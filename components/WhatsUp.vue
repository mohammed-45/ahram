<template>
  <a href="https://wa.me/+201205385813" target="_blank"
    ><div class="floating-button">
      <img src="~/assets/images/whatsapp.png" alt="whatsapp" class="icon wa" />
    </div>
  </a>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.floating-button {
  position: fixed;
  z-index: 110;
  bottom: 30px;
  width: 60px;
  height: 60px;
  background: #03ae03;
  border-radius: 50%;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color: #fff;
  cursor: pointer;
  img {
    width: 32px;
    height: 32px;
  }
  &::after,
  &::before {
    content: "";
    display: block;
    position: absolute;
    border: 50%;
    border: 1px solid #58ea00;
    left: -20px;
    right: -20px;
    top: -20px;
    bottom: -20px;
    border-radius: 50%;
    animation: animate 1.5s linear infinite;
    opacity: 0;
  }
  &::after {
    animation-delay: 0.5s;
  }
}

@media (max-width: 992px) {
  .floating-button {
    // bottom: 100px;
    width: 50px;
    height: 50px;
    img {
      width: 28px;
      height: 28px;
    }
  }
}

@keyframes animate {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
</style>
