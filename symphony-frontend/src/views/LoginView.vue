<script setup lang="ts">
import { setAuthToken } from '@/authentication/authentication-utils';
import { AjaxVerbs, type RequestOptions } from '@/util/request-utilities';
import { ref } from 'vue';
import router from '../router';
interface loginPayload {
  userName: string;
  password: string;
}
const userName = ref('');
const password = ref('');

/**
 * @param event
 * /users
 * POST to create
 */

/**
 *
 * /authentication
 * also post
 * { accessToken to save in memory  }
 */

/**
 *
 * /pokes | /rooms
 * { 'Content-Type': 'application/json', 'Authorization': 'Bearer <accessToken>' }
 */
function sendRegistration(event: loginPayload) {
  const options: RequestOptions = {
    method: AjaxVerbs.POST,
    headers: { 'Content-Type': 'application/json' } as unknown as Headers,
    body: JSON.stringify({ email: event.userName, password: event.password, strategy: 'local' })
  };
  fetch('http://localhost:3030/users/', options).then((result) => {
    setAuthToken(result.body.token);
    router.push('/login');
  });
}
function sendLogin(event: loginPayload) {
  const options: RequestOptions = {
    method: AjaxVerbs.POST,
    headers: { 'Content-Type': 'application/json' } as unknown as Headers,
    body: JSON.stringify({ email: event.userName, password: event.password, strategy: 'local' })
  };
  fetch('http://localhost:3030/authentication/', options)
    .then((result) => {
      return result.json();
    })
    .then((body) => {
      setAuthToken(body.accessToken);
      router.push('/home');
    });
}
</script>
<template>
  <section>
    <h2>Login</h2>
    <form @submit.prevent>
      <input type="text" v-model="userName" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="button" @click="sendLogin({ userName, password })">Login</button>
    </form>
  </section>
</template>
<style lang="css" scoped>
h2,
form,
input,
button {
  margin: 10px 0;
}
h2 {
  text-align: center;
}
section {
  padding: 0 50px;
}
form {
  display: flex;
  flex-direction: column;
}
input {
  max-width: 200px;
  padding: 15px;
  border-radius: 10px;
  border-color: lightgrey;
  border-style: solid;
  margin: 10px auto;
}
button {
  width: 150px;
  padding: 15px;
  border-radius: 10px;
  margin: 10px auto;
}
</style>
