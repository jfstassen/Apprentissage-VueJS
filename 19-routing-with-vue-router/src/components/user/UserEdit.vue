<template>
  <div>
    <h3>Edit the User</h3>
    {{$route.params.id}}
    <p>Locale: {{$route.query.locale }}</p>
    <p>Analytics: {{$route.query.q }}</p>
    <div style="height: 900px"></div>
    <p id="data">some extra data</p>
  </div>
</template>