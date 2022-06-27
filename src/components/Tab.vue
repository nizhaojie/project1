<template>
  <div class="tab">
    <!-- logo -->
    <div class="spinner">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul class="tab_ul">
      <li>
        <button class="button" @click="factory_manage">工厂管理</button>
      </li>
      <li>
        <button class="button" @click="device_manage">设备管理</button>
      </li>
      <li>
        <button class="button" @click="product_manage">产品管理</button>
      </li>
      <li>
        <button class="button" @click="order_manage">订单管理</button>
      </li>
      <li>
        <button class="button" @click="productionplan_manage">生产计划管理</button>
      </li>
      <li>
        <button class="button" @click="productionscheduling_manage">生产调度管理</button>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      change: 1
    }
  },
  methods: {
    // 点击按钮，把点击的选项传给app
    factory_manage() {
      this.change = 1
      this.$emit('facechange', this.change)
    },
    device_manage() {
      this.change = 2
      this.$emit('facechange', this.change)
    },
    product_manage() {
      this.change = 3
      this.$emit('facechange', this.change)
    },
    order_manage() {
      this.change = 4
      this.$emit('facechange', this.change)
    },
    productionplan_manage() {
      this.change = 5
      this.$emit('facechange', this.change)
    },
    productionscheduling_manage() {
      this.change = 6
      this.$emit('facechange', this.change)
    }
  }
}
</script>

<style lang="less" scoped>
li {
  list-style: none;
}

.tab {
  position: absolute;
  left: 50px;
  width: 260px;
  height: 700px;
  border-radius: 33px;
  background-color: #121432;
}

.tab_ul {
  position: absolute;
  left: -4px;
}

.spinner {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-top: 30px;
  margin-left: 36px;
}

.spinner span {
  position: absolute;
  top: 50%;
  left: var(--left);
  width: 35px;
  height: 7px;
  background: #ffff;
  animation: dominos 1s ease infinite;
  box-shadow: 2px 2px 3px 0px black;
}

.spinner span:nth-child(1) {
  --left: 80px;
  animation-delay: 0.125s;
}

.spinner span:nth-child(2) {
  --left: 70px;
  animation-delay: 0.3s;
}

.spinner span:nth-child(3) {
  left: 60px;
  animation-delay: 0.425s;
}

.spinner span:nth-child(4) {
  animation-delay: 0.54s;
  left: 50px;
}

.spinner span:nth-child(5) {
  animation-delay: 0.665s;
  left: 40px;
}

.spinner span:nth-child(6) {
  animation-delay: 0.79s;
  left: 30px;
}

.spinner span:nth-child(7) {
  animation-delay: 0.915s;
  left: 20px;
}

.spinner span:nth-child(8) {
  left: 10px;
}

@keyframes dominos {
  50% {
    opacity: 0.7;
  }

  75% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  80% {
    opacity: 1;
  }
}

.button {
  margin-top: 40px;
  width: 150px;
  height: 45px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  color: white;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  position: relative;
  transition: all 0.5s;
  z-index: 1;
}

.button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background-color: white;
  z-index: -1;
  transition: all 0.5s;
}

.button:hover::before {
  width: 100%;
}

.button:hover {
  color: black;
}

.button:active:before {
  background: #b9b9b9;
}
</style>