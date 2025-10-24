<template>
  <div style="margin-bottom: 80px;">
    <h1>About Me</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Alan Wilhelm</strong> — a Game Developer, Musician, and Author passionate about creating immersive experiences that blend gameplay with narrative.<br/>
        I’ve developed games in Unreal Engine, Unity, and Godot, authored four beginner-friendly programming books, and have taught both online and at universities.
      </div>

      <div style="margin-top: 20px;">
        My work combines creativity and technical expertise: from contributing to the ongoing development of 
        <router-link to="/other-projects"><strong>VoxEdit</strong></router-link> at <strong>The Sandbox</strong> — enhancing features, debugging, and refining its functionality — 
        to composing original soundtracks and building visually striking worlds inspired by colorful, artistic styles.
      </div>

      <div style="margin-top: 20px;">
        Recently, I’ve been focusing on Unreal Engine projects and exploring multiplayer systems, 
        beginning to get experience with networked gameplay while continuing to refine solid, maintainable game architectures.
      </div>

      <div style="margin-top: 40px;">
        You can reach me at <a href="mailto:ikicapitan141@gmail.com">ikicapitan141@gmail.com</a> or 
        <router-link to="/contact">through here</router-link>.
      </div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Alan Wilhelm" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>


<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>