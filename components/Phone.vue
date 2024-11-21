<template>
  <a class="phone" href="tel:0222600777" target="_blank"
    ><div class="floating-button">
      <svg style="
            
           
          " xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" class="bi bi-telephone" viewBox="0 0 16 16">
          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
        </svg>
    </div>
  </a>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.phone .floating-button {
  position: fixed;
  z-index: 110;
  bottom: 30px;
  width: 60px;
  height: 60px;
  background: #03ae03;
  border-radius: 50%;
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color: #fff;
  cursor: pointer;
  svg {
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
  .phone .floating-button {
    // bottom: 100px;
    width: 50px;
    height: 50px;
    img,svg {
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
