<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal center" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <div>
            <slot name="header">
              <h2>Login Now</h2>
            </slot>

          </div>

          <button type="button" class="btn-close" @click="close" aria-label="Close modal">
            x
          </button>

        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <div class="center">
              <input id="email" type="email" placeholder="Email" v-model="email"> <br /> <br />
              <input id="password" type="password" placeholder="Password" v-model="password"> <br /> <br />
              <button @click="login">Register</button>
              <p>Need to Register <router-link style="color: blue" to="/register">Register</router-link></p>
            </div>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LoginPopupModal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style>
.center {
  text-align: center;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}
</style>
