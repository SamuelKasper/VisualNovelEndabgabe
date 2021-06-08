namespace Template {
  export import f = FudgeCore;
  export import fS = FudgeStory;

  console.log("FudgeStory main starting");

  export let sound = {
    //Music
    overworldTheme: "Audio/DoingStuff.mp3",
    overworldThemeMuted: "Audio/",
    mysteryTheme: "Audio/",
    goodEnding: "Audio/Endings/NicksAlive.mp3",
    neutralEnding: "Audio/",
    badEnding: "Audio/Endings/darker.mp3",
    pianoSongGoing: "Audio/Piano/Going.mp3",
    pianoSongDontStand: "Audio/Piano/DontStand.mp3",
    pianoSongFlowerfield: "Audio/Piano/Flowerfield.mp3",
    tetris: "Audio/Tetris.mp3",
    nicksSong: "Audio/Piano/NicksSong_feat_Lara.mp3",
    //Sounds
    hitTheFloor: "Audio/Sounds/HitTheFloor.mp3",
    wateringPlants: "Audio/Sounds/WateringPlants.mp3",
    grabPaper: "Audio/Sounds/grabPaper.mp3"
  };

  export let transition = {
    blink: {
      duration: 0.7,
      alpha: "Transitions/blink.jpg",
      edge: 1
    },

    swipe: {
      duration: 0.7,
      alpha: "Transitions/swipe.jpg",
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
      background: "Images/Backgrounds/MissingEnding.png"
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
    plantsOnDayOne: false
  };

  //Both characters on screen
  export let miraPosWhenBoth: f.Vector2 = new fS.Position(-384, -360);
  export let nickPosWhenBoth: f.Vector2 = new fS.Position(384, -360);


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
      { scene: WakeUp, name: "WakeUp" },
      //bad scenes
      { id: "DontRememberBirthday", scene: DontRememberBirthday, name: "DontRememberBirthday" },
      { id: "BadEnding1", scene: BadEnding1, name: "BadEnding1", next: "endOfNovel" },
      //neutral scenes
      { id: "RememberWhilePiano", scene: RememberWhilePiano, name: "RememberWhilePiano" },
      { id: "NoAnswerFromNick", scene: NoAnswerFromNick, name: "NoAnswerFromNick" },
      { id: "neutralEnding", scene: NeutralEnding, name: "NeutralEnding", next: "endOfNovel" },
      //good scenes
      { id: "NicksBirthday", scene: NicksBirthday, name: "NicksBirthday" },
      { id: "AnswerFromNick", scene: AnswerFromNick, name: "AnswerFromNick" },
      { id: "NickNotAtHome", scene: NickNotAtHome, name: "NickNotAtHome" },*/
      { id: "FinalConversation", scene: FinalConversation, name: "FinalConversation"},
      { id: "GoodEnding", scene: GoodEnding, name: "GoodEnding", next: "endOfNovel"},

      //last Scene in Novel
      { id: "endOfNovel", scene: EndOfNovel, name: "EndOfNovel" }
    ];

    //set progress data
    fS.Progress.setData(dataToSave);

    // start the sequence
    fS.Progress.go(scenes);
  }
}