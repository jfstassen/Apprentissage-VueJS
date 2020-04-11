<template>
  <div>
    <h3>Edit the User</h3>
    {{$route.params.id}}
    <p>Locale: {{$route.query.locale }}</p>
    <p>Analytics: {{$route.query.q }}</p>
  </div>
</template>