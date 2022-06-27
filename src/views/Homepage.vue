<template>
  <div>
    <Tab @facechange="changeface"></Tab>
    <Content ref="content"></Content>
    <User></User>
  </div>
</template>

<script>
import Tab from '../components/Tab.vue'
import Content from '../components/Content.vue'
import User from '../components/User.vue'
import Calendar from '../components/Calendar.vue'

export default {
  name: 'App',

  components: {
    Tab,
    Content,
    User,
    Calendar
  },
  data() {
    return {}
  },
  methods: {
    changeface(val) {
      switch (val) {
        case 1:
          this.$refs.content.change1()
          break
        case 2:
          this.$refs.content.change2()
          break
        case 3:
          this.$refs.content.change3()
          break
        case 4:
          this.$refs.content.change4()
          break
        case 5:
          this.$refs.content.change5()
          break
        case 6:
          this.$refs.content.change6()
          break
      }
    }
  },
  //改变背景颜色
  beforeCreate() {
    this.$nextTick(() => {
      document.body.setAttribute('style', 'background:#d7def7')
    })
  },
  beforeDestroy() {
    document.body.removeAttribute('style')
  }
}
</script>

<style lang="less">
</style>
