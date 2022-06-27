<template>
  <div class="user_info">

    <div class="logout">
      <Logout></Logout>
    </div>

    <div class="uploader">
      <UpLoader></UpLoader>
    </div>
    <div class="clock">
      <FlipClock></FlipClock>
    </div>
    <div class="calendar">
      <Calendar></Calendar>
    </div>
  </div>
</template>

<script>
import Logout from '@/components/Logout.vue'
import UpLoader from './UpLoader.vue'
import FlipClock from '@/components/FlipClock.vue'
import Calendar from '@/components/Calendar.vue'

export default {
  data() {
    return {
      value1: true
    }
  },

  components: {
    Logout,
    UpLoader,
    FlipClock,
    Calendar
  },
  methods: {}
}
</script>

<style scoped>
.user_info {
  position: absolute;
  right: 50px;
  width: 450px;
  height: 700px;
  border-radius: 33px;
  background: #f6f9fd;
}

.logout {
  position: absolute;
  bottom: 25px;
  right: 70px;
}

.el-icon-s-tools {
  font-size: 25px;
  position: absolute;
  right: 100px;
  top: 50px;
}

.el-icon-s-tools:hover {
  cursor: pointer;
}

.el-icon-chat-dot-square {
  font-size: 25px;
  position: absolute;
  right: 140px;
  top: 50px;
}

.el-icon-chat-dot-square:hover {
  cursor: pointer;
}

.el-icon-more {
  font-size: 25px;
  position: absolute;
  right: 180px;
  top: 50px;
}

.el-icon-more:hover {
  cursor: pointer;
}

.uploader {
  position: absolute;
  top: 100px;
  right: 100px;
}

.avatar:hover {
  cursor: pointer;
}

.clock {
  position: absolute;
  width: 275px;
  height: 55px;
  top: 30px;
  left: 190px;
}

.calendar {
  width: 280px;
  height: 350px;
  position: absolute;
  top: 200px;
  left: 173px;
}
</style>