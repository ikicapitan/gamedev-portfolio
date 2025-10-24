<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Alan Wilhelm (known as Iki)</strong>, a creator of different artistic projects on different disciplines.
      <br />Graduated as a technician game developer & designer in 2018, I've been working teaching, writing books, making videos and doing projects (mostly games) under contract for some companies.
      <br />Before my graduation, I was already learning and teaching on Youtube and creating Udemy courses.
      <br />I worked on variable enviorements, solo or as a team.
      <br />
      <br />For two years now I have been working hard creating my own games while learning Unreal Engine.
      <br />
      <br />Besides that, I made several songs and participated on a couple of bands as a musician. Also I've been prototyping storybooks and playing around with different ways of making art.

      <div style="margin-top:20px; margin-bottom:20px;" v-if="false">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Alan Wilhelm (Iki)" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Founder & Game Developer - Ikimiuki🐾</h3>
      <h4>2019-Present</h4>

      <div>Developing my own videogames, books, courses, and music (from concept to release).</div>

      <div class="tech-stack">Unreal Engine 5, Unity, C++, C#, Epic Online Services (EOS), Steam SDK,  UEFN, Jira, Github, Blender</div>

      <h3>Senior Tool Developer - The Sandbox</h3>
      <h4>2022-2023</h4>

      <div>Contributed to the development of VoxEdit (voxel animation software) by implementing new features, optimizing workflows, and resolving technical issues.</div>

      <div class="tech-stack">Processing, Java, Jira, ClickUp, Scrum, Github, Slack</div>

      <h3>Content Creator & Instructor – Escuela de Juegos (YouTube Educational Channel)</h3>
      <h4>2017-2023</h4>

      <div>Created and taught video lessons on game development, reaching more than 12.000 suscribers.</div>

      <div class="tech-stack">Godot Engine (2, 3 & 4), Unity, OpenGL, Box2D, SFML 2, Haxeflixel, Arduino, C++, C#, GDScript</div>

      <h3>Instructor – Udemy</h3>
      <h4>2018-2023</h4>

      <div>Created over 10 courses on game development, reaching more than 10,000 students worldwide.</div>

      <div class="tech-stack">Godot Engine (3 & 4), Unity, GDScript, C#</div>

      <h3>Game Programmer – Champ Productions</h3>
      <h4>2021-2022</h4>

      <div>Sole Game Programmer for a turn-based online Soccer Trivia videogame (for Android & iOS), responsible for all gameplay systems, scoring mechanics, user interface, and networked multiplayer functionality.</div>

      <div class="tech-stack">Godot Engine 3 (prototyping), Unity (production version), Firebase, LAMP (Linux, Apache, MySQL & PHP), Google Cloud Platform</div>

      <h3>University Instructor – Universidad Nacional del Litoral</h3>
      <h4>2021-2022</h4>

      <div>Taught the "Introduction to C++" course for the Video Game Technical Degree program, covering foundational programming concepts and practical exercises.</div>

      <div class="tech-stack">C++, ZinjaI, Moodle</div>

      <h3>Composer & Producer</h3>
      <h4>2005-2018</h4>

      <div>Band & Videogame Music Composer – Independent Projects.</div>

      <div class="tech-stack">Cubase, Guitar Pro, Reason, Cakewalk, Amplitube, Guitar Rig, Spectrasonics, Bias FX, EzDrummer</div>


      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Game Development</h3>
        <SkillRate name="Unreal Engine" :rate="4" />
        <SkillRate name="Unity" :rate="4" />
        <SkillRate name="Godot Engine" :rate="4" />
        <SkillRate name="C++/C#" :rate="4" />
        <SkillRate name="Networking/Multiplayer" :rate="2" />
        <SkillRate name="Game Design (GDD)" :rate="3" />
      </div>

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Technical Degree in Game Design and Development - Universidad Nacional del Litoral</h3>
      <h4>2015 - 2018</h4>
      <div>Key Skills Acquired: C++, SFML 2, OpenGL, Box2D, Unity, Godot Engine, HaxeFlixel</div>

      <h2>Languages</h2>

      <h3>Spanish</h3>
      <div>Native language</div>

      <h3>English</h3>
      <div>Intermediate Level</div>



    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>