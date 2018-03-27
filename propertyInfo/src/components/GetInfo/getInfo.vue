<template>
  <div class="GetInfo">
      <h1> {{title}} </h1>
      <input type="text" v-model="address" class="form-control" placeholder="Address" aria-label="Address" aria-describedby="basic-addon1">
      <input type="text" v-model="zipcode" class="form-control" placeholder="Zipcode" aria-label="Zipcode" aria-describedby="basic-addon1">
      <button type="button" v-on:click="submit()" class="btn btn-secondary">Submit</button>
</div>
</template>
<script src="./getInfo.js"></script>
<style src="./getInfo.scss"></style>
