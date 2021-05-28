namespace Template {
  export import f = FudgeCore;
  export import fS = FudgeStory;

  console.log("FudgeStory main starting");

  export let sound = {
    //Music
    overworldTheme: "Audio/DoingStuff.mp3",
    overworldThemeMuted: "Audio/",
    mysteryTheme: "Audio/",
    goodEnding: "Audio/",
    neutralEnding: "Audio/",
    badEnding: "Audio/Endings/darker.mp3",
    pianoSongGoing: "Audio/Piano/Going.mp3",
    pianoSongDontStand: "Audio/Piano/DontStand.mp3",
    pianoSongFlowerfield: "Audio/Piano/Flowerfield.mp3",
    tetris: "Audio/Tetris.mp3",
    nicksSong: "Audio/Piano/NicksSong.mp3",
    //Sounds
    fallingOnFloor: "Audio/",
    wateringPlants: "Audio/",
    grabPaper: "Audio/"
  };

  export let transition = {
    ants: {
      duration: 1.5,
      alpha: "Transitions/circlewipe-cw.jpg",
      edge: 1
    },

    transTwo: {
      duration: 1.5,
      alpha: "Transitions/039.jpg",
      edge: 1
    }
  };

  export let location = {
    miraRoom: {
      name: "mirasRoom",
      background: "Images/Backgrounds/Miras_Zimmer.png"
    },

    miraRoomDarker: {
      name: "mirasRoom",
      background: "Images/Backgrounds/MirasZimmerDarker.png"
    },

    nickRoom: {
      name: "nicksRoom",
      background: "Images/Backgrounds/Nicks_Zimmer_Good_Weather.png"
    },

    miraRoomHandyNews: {
      name: "miraRoomHandyNews",
      background: "Images/Backgrounds/Miras_Zimmer_Handy_News.png"
    },

    miraRoomHandyCalendar: {
      name: "miraRoomHandyCalendar",
      background: "Images/Backgrounds/Miras_Zimmer_Handy_Kalender.png"
    },

    miraRoomHandyNoMessage: {
      name: "miraRoomHandyNoMessage",
      background: "Images/Backgrounds/Miras_Zimmer_Handy_Nachricht-Keine_Nachricht.png"
    },

    miraRoomHandyBirthday: {
      name: "miraRoomHandyBirthday",
      background: "Images/Backgrounds/Miras_Zimmer_Handy_Nachricht-Geburtstag.png"
    },

    miraRoomHandyAnswer: {
      name: "miraRoomHandyAnswer",
      background: "Images/Backgrounds/Miras_Zimmer_Handy_Nachricht-Antwort.png"
    },

    miraRoomMath: {
      name: "miraRoomMath",
      background: "Images/Backgrounds/Miras_Zimmer_Buch_Mathe.png"
    },

    miraRoomMath2: {
      name: "miraRoomMath2",
      background: "Images/Backgrounds/Miras_Zimmer_Buch_Mathe_2.png"
    },

    miraRoomEnglish: {
      name: "miraRoomEnglish",
      background: "Images/Backgrounds/Miras_Zimmer_Buch_Englisch.png"
    },

    miraRoomLaptop: {
      name: "miraRoomLaptop",
      background: "Images/Backgrounds/Miras_Zimmer_Lapto.png"
    },

    pianoRoom: {
      name: "pianoRoom",
      background: "Images/Backgrounds/Klavier_Zimmer.png"
    },

    nicksRoomGoodWeather: {
      name: "nicksRoomGoodWeather",
      background: "Images/Backgrounds/Nicks_Zimmer_Good_Weather.png"
    },

    nicksRoomBadWeather: {
      name: "nicksRoomBadWeather",
      background: "Images/Backgrounds/Nicks_Zimmer_Bad_Weather.png"
    },

    nicksRoomDoor: {
      name: "nicksRoomDoor",
      background: "Images/Backgrounds/Nicks_Zimmertuer.png"
    },

    nicksKitchen: {
      name: "nicksKitchen",
      background: "Images/Backgrounds/Nicks_Kueche.png"
    },

    nicksBathroom: {
      name: "nicksBathroom",
      background: "Images/Backgrounds/Nicks_Badezimmer.png"
    },

    nicksBathroomDead: {
      name: "nicksBathroomDead",
      background: "Images/Backgrounds/Nicks_Badezimmer_tot.png"
    },

    nicksRoomTable: {
      name: "nicksRoomTable",
      background: "Images/"
    },

    nicksRoomPicture: {
      name: "nicksRoomPicture",
      background: "Images/Backgrounds/VersteckFoto.png"
    },

    hideout: {
      name: "hideout",
      background: "Images/Backgrounds/Versteck.png"
    },

    goodEnding: {
      name: "goodEnding",
      background: "Images/"
    },

    neutralEnding: {
      name: "neutralEnding",
      background: "Images/"
    },

    badEnding: {
      name: "badEnding",
      background: "Images/Backgrounds/BadEnding.png"
    },

    black: {
      name: "black",
      background: "Images/Backgrounds/Black.png"
    }
  }

  export let characters = {
    Narrator: {
      name: "",
    },

    Mira: {
      name: "Mira: ",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "Images/Characters/Mira/MC_neutral.png",
        happy: "Images/Characters/Mira/MC_happy.png",
        sad: "Images/Characters/Mira/MC_sad.png",
        good: "Images/Characters/Mira/MC_good.png",
        crying: "Images/Characters/Mira/MC_cry.png"
      }
    },

    Nick: {
      name: "Nick: ",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "Images/Characters/Nick/Friend_neutral.png",
        good: "Images/Characters/Nick/Friend_good.png",
        sad: "Images/Characters/Nick/Friend_sad.png",
        tired: "Images/Characters/Nick/Friend_tired.png",
        crying: "Images/Characters/Nick/Friend_cry.png"
      }
    },

    Nachbar: {
      name: "Josh: ",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        good: "Images/Characters/Nachbar/Nachbar_good.png",
        neutral: "Images/Characters/Nachbar/Nachbar_neutral.png"
      }
    }
  };

  export let dataToSave = {
    sceneDesiscionPoints: 0,
    plantsOnDayOne: false
  };

  

  //save and load
  document.addEventListener("keydown", hndKeypress);
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case f.KEYBOARD_CODE.F2:
        console.log("Save");
        await fS.Progress.save();
        break;
      case f.KEYBOARD_CODE.F9:
        console.log("Load");
        await fS.Progress.load();
        break;
    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: fS.Scenes = [
      /*
      { scene: Scene_1_beginn, name: "Scene_1_beginn" },
      //bad scenes
      { id: "scene_2_bad", scene: Scene_2_bad, name: "Scene_2_bad" },
      { id: "scene_3_bad", scene: Scene_3_bad, name: "Scene_3_bad" /**next: reload page/ end *//* },
      //neutral scenes
      
      { id: "scene_2_neutral", scene: Scene_2_neutral, name: "Scene_2_neutral" },
      { id: "scene_3_neutral", scene: Scene_3_neutral, name: "Scene_3_neutral" },
      //good scenes*/
      { id: "scene_2_good", scene: Scene_2_good, name: "Scene_2_good" },
      { id: "scene_3_good", scene: Scene_3_good, name: "Scene_3_good" }
    ];

    //set progress data
    fS.Progress.setData(dataToSave);

    // start the sequence
    fS.Progress.go(scenes);
  }
}