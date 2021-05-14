namespace Template {
  export import f = FudgeCore;
  export import fS = FudgeStory;

  console.log("FudgeStory template starting");

  export let sound ={
    //Music
    overworldTheme: "Audio/",
    overworldThemeMuted: "Audio/",
    mysteryTheme: "Audio/",
    goodEnding: "Audio/",
    neutralEnding: "Audio/",
    badEnding: "Audio/Endings/darker.mp3",
    pianoSong_1: "Audio/Piano_Room/Going.mp3",
    pianoSong_2: "Audio/",
    pianoSong_3: "Audio/",
    tetris: "Audio/",
    //Sounds
    fallingOnFloor: "Audio/",
    wateringPlants: "Audio/",
    grabPaper: "Audio/"
  };

  export let location = {
    miraRoom: {
      name: "mirasRoom",
      background: "Images/Backgrounds/Miras_Zimmer.png"
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

    miraRoomHandyAnswer:  {
      name: "miraRoomHandyAnswer",
      background: "Images/Backgrounds/Miras_Zimmer_Handy_Nachricht-Antwort.png"
    },

    miraRoomMath:  {
      name: "miraRoomMath",
      background: "Images/Backgrounds/Miras_Zimmer_Buch_Mathe.png"
    },

    miraRoomMath2:  {
      name: "miraRoomMath2",
      background: "Images/Backgrounds/Miras_Zimmer_Buch_Mathe_2.png"
    },

    miraRoomEnglish:  {
      name: "miraRoomEnglish",
      background: "Images/Backgrounds/Miras_Zimmer_Buch_Englisch.png"
    },

    miraRoomLaptop:  {
      name: "miraRoomLaptop",
      background: "Images/Backgrounds/Miras_Zimmer_Lapto.png"
    },

    pianoRoom:  {
      name: "pianoRoom",
      background: "Images/Backgrounds/Klavier_Zimmer.png"
    },

    nicksRoomGoodWeather:  {
      name: "nicksRoomGoodWeather",
      background: "Images/Nicks_Zimmer_Good_Weather.png"
    },

    nicksRoomBadWeather:  {
      name: "nicksRoomBadWeather",
      background: "Images/Nicks_Zimmer_Bad_Weather.png"
    },

    nicksRoomDoor:  {
      name: "nicksRoomDoor",
      background: "Images/Nicks_Zimemrtür.png"
    },

    nicksKitchen:  {
      name: "nicksKitchen",
      background: "Images/Nicks_Küche.png"
    },

    nicksBathroom:  {
      name: "nicksBathroom",
      background: "Images/Nicks_Badezimmer.png"
    },

    nicksBathroomDead:  {
      name: "nicksBathroomDead",
      background: "Images/Nicks_Badezimmer_tot.png"
    },

    nicksRoomTable:  {
      name: "nicksRoomTable",
      background: "Images/"
    },

    nicksRoomPicture:  {
      name: "nicksRoomPicture",
      background: "Images/VersteckFoto.png"
    },

    hideout:  {
      name: "hideout",
      background: "Images/Versteck.png"
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
      background: "Images/"
    },

    black: {
      name: "black",
      background: "Images/Backgrounds/Black.png"
    }
  }

  export let characters = {
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

  //save and load
  document.addEventListener("keydown", hndKeypress);
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch(_event.code){
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
      { scene: Scene, name: "Scene" }
    ];

    // start the sequence
    fS.Progress.go(scenes);
  }
}