import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Penalty Trivia Champ", "img/projects/project-1-icon.png", 
    `
    <div class="paragraph">
     <strong>Penalty Trivia Champ</strong> was a free-to-play trivia game developed by Champ Productions. It featured over 60 categories and 4,000 questions about past and present football. Each correct answer scored a penalty, while wrong answers missed the shot.

Although developed with a small team, I was the sole programmer responsible for both the prototype and the final release. The official multiplayer server was shut down in 2023 and the game was removed from both Play Store and iOS.  
In 2025, I took the effort to release a local offline version of the game, which is now available on Huawei and Itch.io
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/94J8tJBPB-s" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="notice">
        Play it on <a href="https://ikimiuki.itch.io/penalty-trivia-champ" target="_blank">itch.io</a>.
    </div>

    <div class="paragraph">
        Notable Features:
        <ul>
        <li>Multiplayer turn-based matches (Matchmaking & Private)</li>
        <li>Matchmaking & Private Matches</li>
        <li>Player accounts & Global Rankings</li>
        <li>Multilanguage Support</li>
        <li>Cross-Platform (Android & iOS)</li>
        <li>Customizable Matches & Unlockable Progress</li>
        </ul>
    </div>

    <div class="paragraph">
        Tech Stack:
        <ul>
        <li>Engines: Godot Engine 3 (prototype, GDScript), Unity (final release, C#)</li>
        <li>Backend: Firebase (accounts), LAMP (PHP, MySQL, Apache)</li>
        <li>Networking: JSON for data exchange</li>
        <li>Security: SHA-256 encryption for passwords</li>
        <li>Graphics: Custom shaders for billboards</li>
        <li>Monetization: Google AdMob</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/tpc1.png" alt="TPC" />
        <img class="phone-screenshot" src="img/projects/tpc2.png" alt="TPC" />
    </div>
    `, "#23bd69", true),
    new ProjectData("project-2", "Epic Heroes", "img/projects/project-2-icon.png", `
    <div class="paragraph">
        <strong>Epic Heroes</strong> is a 2D strategy and action game where players control a squad of four elite members, each with unique abilities, to overcome challenging scenarios. The goal is to neutralize hostile forces, protect civilians, and successfully resolve critical situations.
The game was developed for Android and was available for free both via browser and on Google Play until 2024.
It was created entirely by me as the sole programmer, during multiple live streaming sessions, with valuable contributions from my followers in terms of ideas and graphics.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/gjTa2QCxVRk" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Notable Features:
        <ul>
        <li>Enemy and player navigation powered by Godot’s pathfinding system.</li>
        <li>Enemy AI with vision cones and last-known-position tracking.</li>
        <li>Alert-level system: enemies coordinate and search until the alert decreases.</li>
        <li>Controllable squad members with unique abilities (e.g., long-range attacks, area effects, disguises).</li>
        <li>Five handcrafted levels, each with distinct objectives and narrative.</li>
        </ul>
    </div>

    <div class="paragraph">
        Tech Stack:
        <ul>
        <li>Engine: Godot Engine 3 (GDScript)</li>
        <li>Platforms: HTML5/Android</li>
        <li>Art Assets: Community-contributed textures and sprites (from YouTube followers).</li>
        <li>Gameplay: Raycasting implemented for projectile mechanics</li>
        <li>Visual Effects: Particle system for projectiles.</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        HTML5 build is available on <a href="https://ikimiuki.itch.io/heroes-epicos" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/ikicapitan/Heroes-Epicos" target="_blank">GitHub</a>.
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/he1.png" alt="HE" />
    <img class="pc-screenshot" src="img/projects/he2.png" alt="HE" />
    </div>
    `, "#5a78af"),
    new ProjectData("project-3", "VideoGame Recreations", "img/projects/project-3-icon.png", `
    <div class="paragraph">
        As part of my work as an instructor and author, I developed multiple playable prototypes based on well-known retro games. These recreations were not commercial projects but educational exercises designed to teach game development concepts through courses, books, and tutorials.

Each prototype focused on explaining different mechanics, such as platforming, shooting, AI behavior, physics, or UI systems. By recreating familiar titles, students and readers could more easily understand the design and programming patterns behind them.
<br><br>Notable Examples:

<br><strong>Pinball (NES)</strong>
<br>
    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/pinbmini.gif" alt="Pinball" />
    </div>

    </div>


    <div class="paragraph">
        Project Info:
        <ul>
        <li>Engine: Godot Engine 3</li>
        </ul>
    </div>

    <br>
    <div class="paragraph">
        We recreated the following core aspects of the game:
        <ul>
        <li>Game board and its components</li>
        <li>Physical elements and mechanics (bumpers, impulses, collisions)</li>
        <li>Scoring system, high scores, and data saving</li>
        </ul>
    </div>

    <br>
    <div class="paragraph center">
    ------------------------------------------------
    </div>
<br><strong>Super Mario Bros (NES)</strong>
<br>
    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/mbrossmini.gif" alt="SMB" />
    </div>

    </div>


    <div class="paragraph">
        Project Info:
        <ul>
        <li>Engine: Godot Engine 3</li>
        </ul>
    </div>

    <br>
    <div class="paragraph">
        We recreated the following core aspects of the game:
        <ul>
        <li>Level 1 mapping with collisions and base elements</li>
        <li>Player (Mario) creation with basic movements, animations, and advanced ground detection</li>
        <li>Interactive level elements: blocks and bricks</li>
        <li>Power-ups: Mushroom, Fire Flower, and others</li>
        <li>Player transformations: Small Mario, Super Mario, and Fire Mario</li>
        <li>Fireball projectiles with sinusoidal movement and collision detection</li>
        <li>Basic enemy type with simple AI</li>
        <li>Death transition sequence</li>
        <li>Extended Level 1 mapping with additional elements and features</li>
        <li>Koopa enemy with full phases and behaviors</li>
        <li>1-Up Green Mushroom</li>
        <li>Main menu and navigation</li>
        <li>Scoring system and time limit</li>
        <li>Sound effects (SFX) and background music (BGM)</li>
        <li>Invincibility Star</li>
        <li>Glow shader effect</li>
        <li>Bonus level and pipe transitions</li>
        <li>Checkpoint system</li>
        <li>End-of-level flag</li>
        </ul>
    </div>

    <br>
    <div class="paragraph center">
    ------------------------------------------------
    </div>
<br><strong>Chess</strong>
<br>
    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/chessmini.gif" alt="SMB" />
    </div>

    </div>


    <div class="paragraph">
        Project Info:
        <ul>
        <li>Engine: Unity</li>
        </ul>
    </div>

    <br>
    A digital recreation of chess designed for two players on the same device.

    <br>
    <div class="paragraph center">
    ------------------------------------------------
    </div>
<br><strong>Contra (NES)</strong>
<br>
    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/cursocontramini.gif" alt="SMB" />
    </div>

    </div>


    <div class="paragraph">
        Project Info:
        <ul>
        <li>Engine: Godot Engine 3, 4 & Unity</li>
        </ul>
    </div>

    <br>
    <div class="paragraph">
        We recreated the following core aspects of the game:
        <ul>
        <li>Game menu with data persistence between scenes and multiplayer option selection</li>
        <li>Character control and animations using the Animator system</li>
        <li>Creation and release of multiple projectile types</li>
        <li>Power-ups and collectible items</li>
        <li>Advanced collision detection with raycasting</li>
        <li>Variety of enemies with basic AI implementation</li>
        <li>Life system and death handling</li>
        <li>Final boss creation and logic</li>
        <li>Camera system with boundaries, movement, and multiplayer support</li>
        </ul>
    </div>

    <br>
    <div class="paragraph center">
    ------------------------------------------------
    </div>
<br><strong>Flappy Bird</strong>
<br>
    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/flappymini.gif" alt="SMB" />
    </div>

    </div>


    <div class="paragraph">
        Project Info:
        <ul>
        <li>Engine: Godot Engine 3, 4 & Unity</li>
        </ul>
    </div>

    <br>
    <div class="paragraph center">
    ------------------------------------------------
    </div>
<br><strong>Pipe Mania</strong>
<br>
    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/pipemini.gif" alt="SMB" />
    </div>

    </div>


    <div class="paragraph">
        Project Info:
        <ul>
        <li>Engine: Godot Engine 3</li>
        </ul>
    </div>

    <br>
    <div class="paragraph">
        We recreated the following core aspects of the game:
        <ul>
        <li>Dynamic board and tile generation</li>
        <li>Logic for node and tree (tile) connections</li>
        <li>Random generation of Start and Finish points for the algorithm</li>
        <li>Custom A* (A-Star) algorithm for pipe generation</li>
        <li>Interactive mechanics with individual tiles</li>
        <li>Water pathfinding: problem generation and solution using the same system</li>
        </ul>
    </div>

    <br>
    <div class="paragraph center">
    ------------------------------------------------
    </div>
<br><strong>Soccer (NES)</strong>
<br>
    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/soccer.png" alt="SMB" />
    </div>

    </div>


    <div class="paragraph">
        Project Info:
        <ul>
        <li>Engine: Godot Engine 3</li>
        </ul>
    </div>

    <br>
    <div class="paragraph center">
    ------------------------------------------------
    </div>
<br><strong>Pokemon Red (GameBoy)</strong>
<br>
    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/pkmn1-5mini.gif" alt="SMB" />
    </div>

    </div>


    <div class="paragraph">
        Project Info:
        <ul>
        <li>Engine: Godot Engine 3</li>
        </ul>
    </div>

    <br>
    <div class="paragraph">
        We recreated the following core aspects of the game:
        <ul>
        <li>Main character: grid-based movement and animations</li>
        <li>Scenes: Ash’s house (two floors) and Pallet Town, built with region-based tiles</li>
        <li>Scene transitions with fade-in/fade-out</li>
        <li>Progressive dialogue system</li>
        <li>Object and tile interaction</li>
        <li>NPC interaction via raycasting</li>
        <li>Dynamic dialogue system for NPCs</li>
        <li>Multiple NPC movement patterns</li>
        <li>Advanced tilemap system with tile detection</li>
        <li>Exclusive dynamic animated tiles</li>
        <li>Initial game menu</li>
        <li>Naming system for characters and Pokémon</li>
        <li>Data persistence between scenes using a singleton</li>
        <li>Pathfinding and intelligent navigation system</li>
        <li>Pokémon cards (Pokédex descriptions) generator</li>
        <li>Pokémon stats generator</li>
        <li>In-game menu with Pokémon and character sub-menus</li>
        <li>Pokémon class with properties, generation, and data display</li>
        <li>Save/load system for game progress</li>
        <li>Custom navigation paths</li>
        <li>Battle animations (in/out)</li>
        <li>Battle state system</li>
        <li>Rival editor</li>
        <li>Pokémon recognition in dialogues</li>
        <li>Attacks editor</li>
        </ul>
    </div>

    <br>
    <div class="paragraph center">
    ------------------------------------------------
    </div>
<br><strong>Bomberman</strong>
<br>
    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/bombmini.gif" alt="SMB" />
    </div>

    </div>


    <div class="paragraph">
        Project Info:
        <ul>
        <li>Engine: Godot Engine 3</li>
        </ul>
    </div>

    <br>
    <div class="paragraph">
        We recreated the following core aspects of the game:
        <ul>
        <li>Game board and its components</li>
        <li>Top-down, grid-based player movement</li>
        <li>Scoring and time system</li>
        <li>Enemies with basic AI</li>
        </ul>
    </div>

    <br>
    <div class="paragraph center">
    ------------------------------------------------
    </div>
<br><strong>Tetris</strong>
<br>
    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/tetris.png" alt="SMB" />
    </div>

    </div>


    <div class="paragraph">
        Project Info:
        <ul>
        <li>Frameworks: C++ & Glut (OpenGL)</li>
        </ul>
    </div>

    <br>

    <br>
    <div class="paragraph center">

    </div>

    <div class="paragraph">
        <div class="notice">
        Some Playable Prototypes in the browser (WebGL) on <a href="https://ikicapitan.itch.io/" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/ikicapitan" target="_blank">GitHub</a>.
        </div>
    </div>


    `, "#383838"),
    new ProjectData("project-4", "Bolikas Marble Tournament", "img/projects/project-4-icon.png", `
    <div class="paragraph">
    <strong>Bolikas Marble Tournament™</strong> is an online multiplayer battle royale featuring marbles as the core gameplay element. Currently in development.
    </div>
    
     <div class="paragraph">
        Notable Features:
        <ul>
        <li>AI-controlled players, available as rivals or cooperative teammates</li>
        <li>Multiplayer realtime matches (Matchmaking & Private)</li>
        <li>Unlockable & Customizable Content</li>
        <li>Multiple Selectable Giant Scenarios</li>
        <li>Skills</li>
        </ul>
    </div>

    <div class="paragraph">
        Tech Stack:
        <ul>
        <li>Engine: Unreal Engine 5</li>
        <li>Multiplayer: Online Services (EOSGS) + Steam SDK</li>
        </ul>
    </div>

    First Scenario 3D Models Test on UEFN:
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/TvkOQHuU8wk" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        <div class="notice">
        Try out the first scenario of the game in Fortnite <a href="https://www.fortnite.com/@ikimen/4172-0289-5426" target="_blank">https://www.fortnite.com/@ikimen/4172-0289-5426</a>.
        </div>
    </div>
    `, "#e80fb7"),
    new ProjectData("project-5", "?????", "img/projects/project-5-icon.png", `
    <div class="paragraph">
        <strong>????????</strong> is a multiplayer game under development, with details to be revealed soon.
    </div>
    
     <div class="paragraph">
        Notable Features:
        <ul>
        <li>Singleplayer Mode Against AI</li>
        <li>Multiplayer turn-based matches (Matchmaking & Private)</li>
        <li>Unlockable & Customizable Content</li>
        </ul>
    </div>

    <div class="paragraph">
        Tech Stack:
        <ul>
        <li>Engine: Unreal Engine 5</li>
        <li>Multiplayer: Online Services (EOSGS) + Steam SDK</li>
        </ul>
    </div>

    `, "#e48246")
];