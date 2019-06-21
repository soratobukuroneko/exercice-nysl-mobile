<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Teams</th>
          <th>Location</th>
          <th>Times</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in this.$store.getters.games" :key="uuid(game)">
          <td>{{game.date}}</td>
          <td>{{game.teams[0]}} and {{game.teams[1]}}</td>
          <td>{{game.location}}</td>
          <td>{{game.times}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import uuidv1 from 'uuid/v1'

export default {
  name: 'GameInfo',
  methods: {
    uuid: payload => uuidv1(payload)
  }
}
</script>
