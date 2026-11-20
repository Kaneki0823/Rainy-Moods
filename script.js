
/* =========================================================
   A LITTLE PLACE FOR RAIN
   Created with care by Kei

   Music files must stay in the same folder as index.html.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  // -------------------------------------------------------
  // ELEMENTS
  // -------------------------------------------------------

  const introScreen = document.getElementById("introScreen");
  const moodScreen = document.getElementById("moodScreen");
  const feelingScreen = document.getElementById("feelingScreen");
  const breathingScreen = document.getElementById("breathingScreen");
  const letterScreen = document.getElementById("letterScreen");

  const enterButton = document.getElementById("enterButton");
  const backButton = document.getElementById("backButton");
  const breatheButton = document.getElementById("breatheButton");
  const letterButton = document.getElementById("letterButton");
  const breathingBack = document.getElementById("breathingBack");
  const startBreathing = document.getElementById("startBreathing");
  const restartButton = document.getElementById("restartButton");

  const moodAudio = document.getElementById("moodAudio");
  const musicToggle = document.getElementById("musicToggle");
  const musicToggleIcon = document.getElementById("musicToggleIcon");

  const musicTitle = document.getElementById("musicTitle");
  const musicArtist = document.getElementById("musicArtist");
  const musicProgress = document.getElementById("musicProgress");
  const currentTime = document.getElementById("currentTime");
  const duration = document.getElementById("duration");

  const moodTitle = document.getElementById("moodTitle");
  const moodEyebrow = document.getElementById("moodEyebrow");
  const moodMessage = document.getElementById("moodMessage");
  const moodExtra = document.getElementById("moodExtra");
  const moodReminder = document.getElementById("moodReminder");
  const sceneSymbol = document.getElementById("sceneSymbol");
  const sceneParticles = document.getElementById("sceneParticles");

  const breathingOrbit = document.getElementById("breathingOrbit");
  const breathingInstruction = document.getElementById("breathingInstruction");
  const breathingCount = document.getElementById("breathingCount");

  const ambientBackground = document.getElementById("ambientBackground");


  // -------------------------------------------------------
  // MOOD CONTENT AND MUSIC
  // -------------------------------------------------------

  const moods = {

    tired: {
      title: "It's okay to rest.",
      eyebrow: "FOR THE DAYS THAT FEEL LONG",
      symbol: "☾",

      message:
        "Hey, Rain. If today has taken a lot out of you, you don't have to force yourself to keep going at the same pace. You are allowed to slow down. You are allowed to put things aside for a little while. Not everything needs your attention right now.",

      extra:
        "You don't have to earn your rest. You deserve it simply because you're human.",

      reminder:
        "One small step is enough. And sometimes, doing nothing for a while is exactly what you need.",

      song: "Tired.mp3",
      songTitle: "Bloom",
      artist: "The Paper Kites",
      sceneColor: "#514438"
    },

    sad: {
      title: "You can feel this, too.",
      eyebrow: "FOR THE HEAVY DAYS",
      symbol: "☂",

      message:
        "I wish I could make every difficult thing disappear for you. I know I can't, and I won't pretend that a few words can magically make everything better. But I hope you know that you don't have to hide your sadness here. You don't have to act okay when you're not.",

      extra:
        "It's okay if all you can do today is get through today.",

      reminder:
        "Your feelings are not a burden. You don't have to apologize for having a hard day.",

      song: "Sad.mp3",
      songTitle: "Sparks",
      artist: "Coldplay",
      sceneColor: "#293c50"
    },

    angry: {
      title: "You are allowed to be upset.",
      eyebrow: "FOR THE MOMENTS THAT BOIL OVER",
      symbol: "☼",

      message:
        "Sometimes things pile up. Sometimes people disappoint you, situations become unfair, and you reach a point where you just don't have the energy to be patient anymore. You don't have to force yourself to calm down immediately. Give yourself some space first.",

      extra:
        "You can take a step back without feeling guilty about needing that space.",

      reminder:
        "You deserve to be heard. Take your time before deciding what to do next.",

      song: "Angry.mp3",
      songTitle: "Yellow",
      artist: "Coldplay",
      sceneColor: "#50352f"
    },

    overwhelmed: {
      title: "One thing at a time.",
      eyebrow: "WHEN EVERYTHING FEELS LIKE TOO MUCH",
      symbol: "≈",

      message:
        "I know there are moments when everything seems to happen all at once. Too many thoughts, too many things to worry about, too many expectations, and not enough time to breathe. You don't have to figure everything out tonight. You can take things one moment at a time.",

      extra:
        "You are one person. You were never supposed to carry everything perfectly.",

      reminder:
        "You don't need to solve your entire world today. Just focus on the next little thing.",

      song: "Overwhelmed.mp3",
      songTitle: "Breathe Me",
      artist: "Sia",
      sceneColor: "#203c48"
    },

    confused: {
      title: "You don't need all the answers.",
      eyebrow: "FOR THE UNCERTAIN MOMENTS",
      symbol: "✧",

      message:
        "It's okay if you don't know what you're feeling. It's okay if your thoughts don't make sense yet, if you have questions you can't answer, or if you don't know what you want right now. You don't need to force a conclusion just to make the uncertainty go away.",

      extra:
        "Some things become clearer with time. You are allowed to take that time.",

      reminder:
        "Not knowing right now doesn't mean you'll never understand.",

      song: "Confused.mp3",
      songTitle: "Anchor",
      artist: "Novo Amor",
      sceneColor: "#302c4b"
    },

    okay: {
      title: "I hope you enjoy this moment.",
      eyebrow: "FOR THE LIGHTER DAYS",
      symbol: "❀",

      message:
        "If today feels a little lighter, I hope you let yourself enjoy it. You don't need a special reason to be happy. You don't have to wait until everything in life is perfect before allowing yourself to smile, laugh, or appreciate the little things.",

      extra:
        "You deserve peaceful days, little surprises, and moments that make you smile without trying.",

      reminder:
        "Let yourself enjoy the good moments, Rain. You deserve those, too.",

      song: "Okay.mp3",
      songTitle: "Leaves(Reimagined)",
      artist: "Ben&Ben",
      sceneColor: "#3c4937"
    }

  };


  // -------------------------------------------------------
  // SCREEN NAVIGATION
  // -------------------------------------------------------

  const screens = [
    introScreen,
    moodScreen,
    feelingScreen,
    breathingScreen,
    letterScreen
  ];

  function showScreen(targetScreen) {
    screens.forEach(screen => {
      screen.classList.remove("active");
    });

    targetScreen.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  enterButton.addEventListener("click", () => {
    showScreen(moodScreen);
  });

  backButton.addEventListener("click", () => {
    stopBreathing();
    showScreen(moodScreen);
  });

  breathingBack.addEventListener("click", () => {
    stopBreathing();
    showScreen(feelingScreen);
  });

  letterButton.addEventListener("click", () => {
    stopBreathing();
    createLetterStars();
    showScreen(letterScreen);
  });

  restartButton.addEventListener("click", () => {
    stopMusic();
    stopBreathing();
    showScreen(introScreen);
  });


  // -------------------------------------------------------
  // MUSIC PLAYER
  // -------------------------------------------------------

  let fadeTimer = null;
  let musicIsPlaying = false;

  function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return mins + ":" + String(secs).padStart(2, "0");
  }

  function clearMusicFade() {
    if (fadeTimer) {
      clearInterval(fadeTimer);
      fadeTimer = null;
    }
  }

  function updateMusicButton() {
    musicToggleIcon.textContent = musicIsPlaying ? "Ⅱ" : "▶";
    musicToggle.setAttribute(
      "aria-label",
      musicIsPlaying ? "Pause music" : "Play music"
    );
  }

  /*
    This function is called directly by the mood button click.
    Calling audio.play() here allows the browser to recognize
    the user's tap as permission to start playback.
  */

  function playMoodMusic(mood) {

    const selectedMood = moods[mood];

    if (!selectedMood) return;

    clearMusicFade();

    moodAudio.pause();
    moodAudio.currentTime = 0;

    moodAudio.src = selectedMood.song;
    moodAudio.volume = 0;

    musicTitle.textContent = selectedMood.songTitle;
    musicArtist.textContent = selectedMood.artist;

    musicProgress.style.width = "0%";
    currentTime.textContent = "0:00";
    duration.textContent = "0:00";

    musicIsPlaying = true;
    updateMusicButton();

    // Start immediately as part of the user's mood selection.
    const playback = moodAudio.play();

    if (playback && typeof playback.then === "function") {

      playback.then(() => {

        musicIsPlaying = true;
        updateMusicButton();

        // Gentle fade-in.
        let volume = 0;

        fadeTimer = setInterval(() => {
          volume += 0.035;

          if (volume >= 0.72) {
            volume = 0.72;
            clearMusicFade();
          }

          moodAudio.volume = volume;
        }, 100);

      }).catch(error => {

        musicIsPlaying = false;
        updateMusicButton();

        musicArtist.textContent = "Tap play to start your song";

        console.warn("Music could not start automatically:", error);

      });

    }
  }


  function pauseMusic() {
    clearMusicFade();
    moodAudio.pause();
    musicIsPlaying = false;
    updateMusicButton();
  }


  function resumeMusic() {

    if (!moodAudio.src) return;

    const playback = moodAudio.play();

    if (playback && typeof playback.then === "function") {
      playback.then(() => {
        musicIsPlaying = true;
        updateMusicButton();
      }).catch(() => {
        musicIsPlaying = false;
        updateMusicButton();
      });
    }
  }


  function stopMusic() {
    clearMusicFade();

    moodAudio.pause();
    moodAudio.currentTime = 0;

    musicIsPlaying = false;
    updateMusicButton();

    musicProgress.style.width = "0%";
    currentTime.textContent = "0:00";
  }


  musicToggle.addEventListener("click", () => {
    if (moodAudio.paused) {
      resumeMusic();
    } else {
      pauseMusic();
    }
  });


  // Update music progress.

  moodAudio.addEventListener("timeupdate", () => {

    if (!Number.isFinite(moodAudio.duration)) return;

    const progress =
      (moodAudio.currentTime / moodAudio.duration) * 100;

    musicProgress.style.width = progress + "%";

    currentTime.textContent = formatTime(moodAudio.currentTime);
  });


  moodAudio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(moodAudio.duration);
  });


  moodAudio.addEventListener("ended", () => {
    musicIsPlaying = false;
    updateMusicButton();
    musicProgress.style.width = "100%";
  });


  moodAudio.addEventListener("error", () => {
    musicIsPlaying = false;
    updateMusicButton();
    musicArtist.textContent = "Song unavailable — check the MP3 filename";
  });


  // -------------------------------------------------------
  // MOOD SELECTION
  // -------------------------------------------------------

  let currentMood = null;

  const moodButtons = document.querySelectorAll(".mood-card");

  moodButtons.forEach(button => {

    button.addEventListener("click", () => {

      const mood = button.dataset.mood;

      selectMood(mood);

    });

  });


  function selectMood(mood) {

    const data = moods[mood];

    if (!data) return;

    currentMood = mood;

    // Change the feeling screen content.

    moodTitle.textContent = data.title;
    moodEyebrow.textContent = data.eyebrow;
    moodMessage.textContent = data.message;
    moodExtra.textContent = data.extra;
    moodReminder.textContent = data.reminder;
    sceneSymbol.textContent = data.symbol;

    feelingScreen.dataset.mood = mood;

    ambientBackground.style.background =
      "radial-gradient(ellipse at 50% 15%, " +
      data.sceneColor +
      " 0%, transparent 65%), linear-gradient(145deg, #211b1b, #302321)";

    // Reset the scene animation.

    const sceneContent = document.querySelector(".scene-content");

    sceneContent.style.animation = "none";
    void sceneContent.offsetWidth;
    sceneContent.style.animation = "sceneReveal 1.2s ease both";

    createSceneParticles(mood);

    /*
      Important:
      Start the matching local MP3 before changing screens.
      This happens during the actual mood-button click.
    */

    playMoodMusic(mood);

    showScreen(feelingScreen);

  }


  // -------------------------------------------------------
  // ATMOSPHERIC PARTICLES
  // -------------------------------------------------------

  function createSceneParticles(mood) {

    sceneParticles.innerHTML = "";

    let amount = 19;

    if (window.innerWidth < 600) {
      amount = 12;
    }

    for (let i = 0; i < amount; i++) {

      const particle = document.createElement("span");

      particle.className = "particle";

      const left = Math.random() * 100;
      const delay = Math.random() * 9;
      const particleDuration = 7 + Math.random() * 8;

      particle.style.setProperty("--particle-left", left + "%");
      particle.style.setProperty("--particle-delay", delay + "s");
      particle.style.setProperty(
        "--particle-duration",
        particleDuration + "s"
      );

      if (mood === "sad") {
        particle.style.width = "2px";
        particle.style.height = "9px";
        particle.style.borderRadius = "2px";
        particle.style.background = "rgba(184, 211, 230, .45)";
      }

      if (mood === "angry") {
        particle.style.background = "rgba(255, 174, 112, .75)";
        particle.style.boxShadow = "0 0 12px rgba(255, 130, 75, .7)";
      }

      if (mood === "okay") {
        particle.style.background = "rgba(210, 231, 164, .8)";
        particle.style.boxShadow = "0 0 12px rgba(210, 231, 164, .6)";
      }

      if (mood === "confused") {
        particle.style.background = "rgba(202, 181, 255, .8)";
      }

      sceneParticles.appendChild(particle);
    }

  }


  // -------------------------------------------------------
  // BREATHING EXERCISE
  // -------------------------------------------------------

  let breathingTimer = null;
  let breathingActive = false;

  function wait(ms) {
    return new Promise(resolve => {
      breathingTimer = setTimeout(resolve, ms);
    });
  }

  async function startBreathingExercise() {

    if (breathingActive) return;

    breathingActive = true;
    startBreathing.disabled = true;
    startBreathing.style.opacity = ".45";

    const cycles = 3;

    for (let cycle = 0; cycle < cycles; cycle++) {

      if (!breathingActive) return;

      // Inhale.

      breathingInstruction.textContent = "Breathe in";
      breathingCount.textContent = "Slowly and gently · 4 seconds";

      breathingOrbit.className = "breathing-orbit inhale";

      await wait(4000);

      if (!breathingActive) return;

      // Hold.

      breathingInstruction.textContent = "Hold";
      breathingCount.textContent = "Just a little pause · 4 seconds";

      breathingOrbit.className = "breathing-orbit hold";

      await wait(4000);

      if (!breathingActive) return;

      // Exhale.

      breathingInstruction.textContent = "Breathe out";
      breathingCount.textContent = "Let it go slowly · 6 seconds";

      breathingOrbit.className = "breathing-orbit exhale";

      await wait(6000);

    }

    if (breathingActive) {

      breathingInstruction.textContent = "Well done.";
      breathingCount.textContent =
        "You made a little space for yourself. That's enough.";

      breathingOrbit.className = "breathing-orbit";

      breathingActive = false;
      breathingTimer = null;

      startBreathing.disabled = false;
      startBreathing.style.opacity = "1";

      startBreathing.querySelector("span").textContent =
        "Breathe again";

    }

  }


  function stopBreathing() {

    breathingActive = false;

    if (breathingTimer) {
      clearTimeout(breathingTimer);
      breathingTimer = null;
    }

    breathingOrbit.className = "breathing-orbit";
    breathingInstruction.textContent = "Ready?";
    breathingCount.textContent = "Whenever you're ready.";

    startBreathing.disabled = false;
    startBreathing.style.opacity = "1";
    startBreathing.querySelector("span").textContent =
      "Begin breathing";

  }


  breatheButton.addEventListener("click", () => {
    stopBreathing();
    showScreen(breathingScreen);
  });


  startBreathing.addEventListener("click", () => {
    startBreathingExercise();
  });


  // -------------------------------------------------------
  // FINAL LETTER STAR ANIMATION
  // -------------------------------------------------------

  function createLetterStars() {

    const container = document.getElementById("letterStars");

    container.innerHTML = "";

    const symbols = ["✦", "·", "✧", "⋆", "•"];

    for (let i = 0; i < 34; i++) {

      const star = document.createElement("span");

      star.className = "letter-star";

      star.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

      star.style.left = Math.random() * 100 + "%";
      star.style.top = (30 + Math.random() * 70) + "%";

      star.style.setProperty(
        "--duration",
        (5 + Math.random() * 7) + "s"
      );

      star.style.setProperty(
        "--delay",
        (Math.random() * 6) + "s"
      );

      star.style.fontSize =
        (8 + Math.random() * 10) + "px";

      container.appendChild(star);

    }

  }


  // -------------------------------------------------------
  // INITIAL STATE
  // -------------------------------------------------------

  showScreen(introScreen);

  musicIsPlaying = false;
  updateMusicButton();

});
