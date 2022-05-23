<template>
  <div class="game">
    <Game></Game>
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '@/components/Game.vue'

export default {
  name: 'GameView',
  components: {
    Game,
  }
}
</script>
