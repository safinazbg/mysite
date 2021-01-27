<template>
  <div class="small">
  <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
    <div id="me" class="uk-flex-last@s uk-card-media-right">
      <canvas width="600" height="500"></canvas>
      <div class="subtitle uk-overlay uk-light uk-position-bottom-right uk-padding-remove-right">
        <p>{{ displayedLine }}</p>
      </div>
    </div>
    <div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">About Me</h3>
        <p>I am a researcher, user experience designer, and front-end developer. I <a> research </a> the ways in which software development teams coordinate and collaborate in face to face and hybrid settings. I <a> design </a> and <a> develop </a>  user friendly web applications. I am currently about to finish my second PhD at the <a href="https://www.sdu.dk/"> University of Southern Denmark </a> in Design, IT, and Communication. </p>

        <ul class="uk-iconnav">
          <li><a href="#" uk-icon="icon: linkedin"></a></li>
          <li><a href="#" uk-icon="icon: github"></a></li>
          <li><a href="#" uk-icon="icon: twitter"></a></li>
          <li><a href="#" uk-icon="icon: mail"></a></li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "AboutMe",
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
.subtitle {
  text-align: center;
  width: 50%;
}
.subtitle p {
  font-size: 105%;
  color: #46feb7;
  font-weight: 800;
  font-family: monospace!important;
}

</style>
