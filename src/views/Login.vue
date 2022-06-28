<template>
  <div class="background">
    <div class="container right-panel-active">
      <!-- Sign Up -->
      <div class="container__form container--signup">
        <form action="#" class="form" id="form1">
          <h2 class="form__title">Sign Up</h2>
          <input type="text" placeholder="User" class="input1" v-model="user" />
          <input type="email" placeholder="Email" class="input1" v-model="email" />
          <input type="password" placeholder="Password" class="input1" v-model="password" />
          <button class="btn" @click="submitData">Sign Up</button>
        </form>
      </div>

      <!-- Sign In -->
      <div class="container__form container--signin">
        <form action="#" class="form" id="form2">
          <h2 class="form__title">Sign In</h2>
          <input type="text" placeholder="User" class="input1" v-model="sign_in_user" />
          <input type="password" placeholder="Password" class="input1" v-model="sign_in_password" />
          <a href="#" class="link">Forgot your password?</a>
          <button class="btn" @click="Login">Sign In</button>
        </form>
      </div>

      <!-- Overlay -->
      <div class="container__overlay">
        <div class="overlay">
          <div class="overlay__panel overlay--left">
            <button class="btn" id="signIn" @click="signIn">Sign In</button>
          </div>
          <div class="overlay__panel overlay--right">
            <button class="btn" id="signUp" @click="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  mounted() {
    document.title = '智能制造云平台'
  },
  data() {
    return {
      sign_in_user: '',
      sign_in_password: '',
      user: '',
      email: '',
      password: '',
      user_list: [
        {
          username: 'admin',
          psw: '123456'
        }
      ]
    }
  },
  methods: {
    signIn() {
      const container = document.querySelector('.container')
      container.classList.remove('right-panel-active')
      this.user = ''
      this.email = ''
      this.password = ''
    },

    signUp() {
      const container = document.querySelector('.container')
      container.classList.add('right-panel-active')
      this.sign_in_user = ''
      this.sign_in_password = ''
    },
    submitData() {
      var flag = 1
      if (this.user == '' || this.email == '' || this.password == '') {
        alert('请填写完整信息')
        return
      }
      this.user_list.forEach(item => {
        if (item.username == this.user) {
          alert('用户已存在，请换一个用户名')
          flag = 0
        }
      })

      if (flag) {
        var item = {}
        item.username = this.user
        item.psw = this.password
        this.user_list.push(item)
        alert('注册成功')
        this.$router.push({
          path: '/',
          query: {
            list: this.user_list
          }
        })
        const container = document.querySelector('.container')
        container.classList.remove('right-panel-active')
      }
    },

    Login() {
      if (this.sign_in_user == '' || this.sign_in_password == '') {
        alert('请输入账号和密码')
        return
      }
      var ok = 0
      this.user_list.forEach(item => {
        if (item.username == this.sign_in_user && item.psw == this.sign_in_password) {
          ok = 1
        }
      })
      if (ok) {
        this.$router.replace('/Home')
      } else {
        alert('账户或者密码错误')
        this.sign_in_user = ''
        this.sign_in_password = ''
      }
    }
  }
}
</script>

<style scoped>
.background {
  align-items: center;
  background-color: #e9e9e9;
  background: url('http://pic.bizhi360.com/bbpic/32/10532.jpg');
  /* 决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。 */
  /* https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  height: 100vh;
  place-items: center;
}

.form__title {
  font-weight: 300;
  margin: 0;
  margin-bottom: 1.25rem;
}

.link {
  color: #333;
  font-size: 0.9rem;
  margin: 1.5rem 0;
  text-decoration: none;
}

.container {
  background-color: #e9e9e9;
  border-radius: 0.7rem;
  box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25), 0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
  height: 420px;
  max-width: 758px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.container__form {
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;
}

.container--signin {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .container--signin {
  transform: translateX(100%);
}

.container--signup {
  left: 0;
  opacity: 0;
  width: 50%;
  z-index: 1;
}

.container.right-panel-active .container--signup {
  animation: show 0.6s;
  opacity: 1;
  transform: translateX(100%);
  z-index: 5;
}

.container__overlay {
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: transform 0.6s ease-in-out;
  width: 50%;
  z-index: 100;
}

.container.right-panel-active .container__overlay {
  transform: translateX(-100%);
}

.overlay {
  background-color: #008997;
  background: url('http://pic.bizhi360.com/bbpic/32/10532.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left: -100%;
  position: relative;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 200%;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay__panel {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 50%;
}

.overlay--left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay--left {
  transform: translateX(0);
}

.overlay--right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay--right {
  transform: translateX(20%);
}

.btn {
  background-color: #0367a6;
  background-image: linear-gradient(90deg, #0367a6 0%, #008997 74%);
  border-radius: 20px;
  border: 1px solid #0367a6;
  color: #e9e9e9;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 0.9rem 4rem;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

.form > .btn {
  margin-top: 1.5rem;
}

.btn:active {
  transform: scale(0.95);
}

.btn:focus {
  outline: none;
}

.form {
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;
  height: 100%;
  text-align: center;
}

.input1 {
  background-color: #fff;
  border: none;
  padding: 0.9rem 0.9rem;
  margin: 0.5rem 0;
  width: 100%;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}
</style>