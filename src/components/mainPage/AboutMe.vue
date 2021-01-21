<template>
  <div class="small">
  <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
    <div id="me" class="uk-flex-last@s uk-card-media-right uk-cover-container">
      <canvas width="600" height="500"></canvas>
    </div>
    <div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">Media Right</h3>
        <p>Lorem ipsum dolor sit amet, consectetur <em>adipiscing elit</em>, sed do eiusmod tempor incididunt.</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
name: "AboutMe"
  data () {
    return {
      displayedLine: '',
      lineBeingWritten: -1,
      lines: [
          "Researcher",
          "User Experience Designer",
          "Front-end Developer"
      ],
      lineTimeout: null,
      typingTimeout: null,
    }
  },
  mounted() {
    this.typeNextLine()
  },
  methods: {
    typeLines() {
      if (this.timeToNextLine)  this.timeToNextLine = clearTimeout(this.timeToNextLine)
      this.timeToNextLine = setTimeout(this.typeNextLine, 2000)
    },
    typeNextLine() {
      this.lineBeingWritten += 1
      if (this.lineBeingWritten >= this.lines.length) this.lineBeingWritten = 0
      this.displayedLine = ''
      this.typeNextChar()
    },
    typeNextChar() {
      const line = this.lines[this.lineBeingWritten]
      const charToWrite = line[this.displayedLine.length]
      const done = !charToWrite
      if (done) {
        this.typeLines()
      } else {
        const duration = Math.random() * 500
        if (this.typingTimeout) this.typingTimeout = clearTimeout(this.typingTimeout)
        this.typingTimeout = setTimeout(this.typeCharacter, duration, charToWrite)
      }
    },
    typeCharacter (char) {
      this.displayedLine += char
      this.typeNextChar()
    },
    deleteChar () {
      this.displayedLine = this.displayedLine.substring(0, this.displayedLine.length - 2)
    }
  }
}
</script>

<style>
#me {
  background-image: url('../../assets/safi_green.png');
  background-size: cover;
  background-position-y: -23px;
}


</style>
