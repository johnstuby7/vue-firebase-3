<template>
  <div>
    <h1>Register</h1>
    <input id="email" type="email" placeholder="Email" v-model="email"> <br />
    <input id="password" type="password" placeholder="Password" v-model="password"> <br />
    <button @click="register">Register</button>
    <p>Already have a account? <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
  name: "RegisterPage",
  data() {
    return {
      email: "",
      password: "",
      initials: "",
    }
  },
  methods: {
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          console.log(user);
        },
        (err) => {
          alert(err)
        }
      );
    }
  }
}
</script>

<style></style>