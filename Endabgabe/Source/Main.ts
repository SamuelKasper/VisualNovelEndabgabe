namespace Endabgabe {
  export import f = FudgeCore;
  export import fS = FudgeStory;
  console.log("FudgeStory main starting");

  /**Stuff needed in Scenes */
  //Both characters on screen
  export let miraPosWhenBoth: f.Vector2 = new fS.Position(-384, -360);
  export let nickPosWhenBoth: f.Vector2 = new fS.Position(384, -360);
  //delay
  export let signalDelay2s: fS.Signal = fS.Progress.defineSignal([() => fS.Progress.delay(2)]);
  //check if inventory open
  export let inventoryOpen: boolean;
  //variable to skip third bad ending
  export let skipBadEndingNr3: boolean = false;
  //mute piano songs
  export function mutePianoMusic(): void {
    console.log("Muting all Songs");
    fS.Sound.fade(sound.overworldTheme, 0, 0.1, false);
    fS.Sound.fade(sound.pianoSongGoing, 0, 0.1, false);
    fS.Sound.fade(sound.pianoSongDontStand, 0, 0.1, false);
    fS.Sound.fade(sound.pianoSongFlowerfield, 0, 0.1, false);
  }
  //move to left animation
  export function moveLeftAnim(): fS.AnimationDefinition {
    return {
      start: { translation: fS.positions.bottomcenter },
      end: { translation: miraPosWhenBoth },
      duration: 2,
      playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
   //move to right animation
   export function moveRightAnim(): fS.AnimationDefinition {
    return {
      start: { translation: miraPosWhenBoth },
      end: { translation: fS.positions.bottomcenter },
      duration: 2,
      playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export let sound = {
    //Music
    overworldTheme: "Audio/DoingStuff.mp3",
    overworldThemeDark: "Audio/slower.mp3",
    mysteryTheme: "Audio/AloneInDarkness.mp3",
    goodEnding: "Audio/Endings/NicksAliveV2.mp3",
    neutralEnding: "Audio/Endings/LosingSanity.mp3",
    badEnding: "Audio/Endings/LosingSanity.mp3",
    pianoSongGoing: "Audio/Piano/Going.mp3",
    pianoSongDontStand: "Audio/Piano/DontStand.mp3",
    pianoSongFlowerfield: "Audio/Piano/Flowerfield.mp3",
    tetris: "Audio/Tetris.mp3",
    nicksSong: "Audio/Piano/NicksSong_feat_Lara.mp3",
    harvest: "Audio/Harvest.mp3",
    //Sounds
    hitTheFloor: "Audio/Sounds/HitTheFloor.mp3",
    wateringPlants: "Audio/Sounds/WateringPlants.mp3",
    grabPaper: "Audio/Sounds/grabPaper.mp3",
    rain: "Audio/Sounds/Rain.mp3"
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

    nicksRoomBadWeatherNoPhoto: {
      name: "nicksRoomBadWeatherNoPhoto",
      background: "Images/Backgrounds/NicksZimmerBadWeatherNoPhoto.png"
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
    nicksBathroomRemSccsr: {
      name: "nicksBathroomRemSccsr",
      background: "Images/Backgrounds/Nicks_Badezimmer_Rem_Sccsr.png"
    },
    
    nicksBathroomDead: {
      name: "nicksBathroomDead",
      background: "Images/Backgrounds/Nicks_Badezimmer_tot.png"
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
      background: "Images/Backgrounds/GoodEnding.png"
    },

    goodEndingBlurred: {
      name: "goodEndingBlurred",
      background: "Images/Backgrounds/GoodEndingBlurred.png"
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
    },

    numberCode: {
      name: "numberCode",
      background: "Images/Backgrounds/NicksDoorCode.png"
    },

    colorBeforeEnding: {
      name: "colorBeforeEnding",
      background: "Images/Backgrounds/ColorBeforeEnding.png"
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
      name: "Elias: ",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        good: "Images/Characters/Nachbar/Nachbar_good.png",
        neutral: "Images/Characters/Nachbar/Nachbar_neutral.png"
      }
    }
  };

  export let dataToSave = {
    plantsOnDayOne: false,
    specialText: 0
  };

  export let items = {
    Image: {
      name: "Foto",
      description: "Ein Foto von Nick und Miras früherem Geheimversteck.",
      image: "Images/Backgrounds/VersteckFotoInventar.png",
      static: true
    },

    Code: {
      name: "Code",
      description: "Zahlencode für Nicks Haustür",
      image: "Images/Backgrounds/NicksDoorCodeInventar.png",
      static: true,
    }
  };

  //menu variables
  let showingMenu: boolean = true;
  let showingSpeech: boolean  = true;
  let showingCredits: boolean = true;
  let controlsObj: HTMLDivElement = <HTMLDivElement>document.getElementById("controls");
  let creditsObj: HTMLDivElement = <HTMLDivElement>document.getElementById("credit");

  //key inputs
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
      case f.KEYBOARD_CODE.I:
        if (inventoryOpen) {
          fS.Inventory.close();
          inventoryOpen = false;
        } else {
          fS.Inventory.open();
          inventoryOpen = true;
        }
        break;
      case f.KEYBOARD_CODE.M:
        let menuObj: HTMLDialogElement = <HTMLDialogElement>document.getElementsByClassName("gameMenu")[0];
        if (showingMenu) {
          menuObj.style.display = "none";
          showingMenu = false;
        } else {
          menuObj.style.display = "block";
          showingMenu = true;
        }
        break;
      case f.KEYBOARD_CODE.T:
        if (showingSpeech) {
          fS.Speech.hide();
          showingSpeech = false;
        } else {
          fS.Speech.show();
          showingSpeech = true;
        }
        break;
    }
  }
  
  //OutOfGameMenu
  let gameMenuOptions = {
    save: "Speichern",
    load: "Laden",
    control: "Steuerung",
    credits: "Credits"
  }

  let gameMenu: fS.Menu;
  console.log(gameMenu);
  async function Menu(_option: string): Promise<void> {
    switch (_option) {
      case gameMenuOptions.save:
        await fS.Progress.save();
        break;
      case gameMenuOptions.load:
        await fS.Progress.load();
        break;
      case gameMenuOptions.credits:
        showCredits();
        break;
      case gameMenuOptions.control:
        showControls();
        break;
    }
  }

  function showCredits(): void {
    if (showingCredits) {
      console.log("showing");
      creditsObj.style.display = "none";
      showingCredits = false;
    } else {
      console.log("hidden");
      creditsObj.style.display = "flex";
      controlsObj.style.display = "none";
      showingControls = false;
      showingCredits = true;
    }
  }

  let showingControls: boolean = false;
  function showControls(): void {
    if (showingControls) {
      controlsObj.style.display = "none";
      showingControls = false;
    } else {
      controlsObj.style.display = "flex";
      creditsObj.style.display = "none";
      showingCredits = false;
      showingControls = true;
    }
  }

  gameMenu = fS.Menu.create(gameMenuOptions, Menu, "gameMenu");

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: fS.Scenes = [
      
      { scene: WakeUp, name: "WakeUp" },
      //bad scenes
      { id: "DontRememberBirthday", scene: DontRememberBirthday, name: "DontRememberBirthday" },
      { id: "WaitForAnswer", scene: WaitForAnswer, name: "WaitForAnswer" },
      { id: "BadEnding", scene: BadEnding, name: "BadEnding", next: "endOfNovel" },
      //neutral scenes
      { id: "RememberWhilePiano", scene: RememberWhilePiano, name: "RememberWhilePiano" },
      { id: "NoAnswerFromNick", scene: NoAnswerFromNick, name: "NoAnswerFromNick" },
      { id: "neutralEnding", scene: NeutralEnding, name: "NeutralEnding", next: "endOfNovel" },
      //good scenes
      { id: "NicksBirthday", scene: NicksBirthday, name: "NicksBirthday" },
      { id: "AnswerFromNick", scene: AnswerFromNick, name: "AnswerFromNick" },
      { id: "NickNotAtHome", scene: NickNotAtHome, name: "NickNotAtHome" },
      { id: "FinalConversation", scene: FinalConversation, name: "FinalConversation" },
      { id: "GoodEnding", scene: GoodEnding, name: "GoodEnding", next: "endOfNovel" },

      //last Scene in Novel
      { id: "endOfNovel", scene: EndOfNovel, name: "EndOfNovel" }
    ];

    //set progress data
    fS.Progress.setData(dataToSave);

    // start the sequence
    fS.Progress.go(scenes);
  }
}