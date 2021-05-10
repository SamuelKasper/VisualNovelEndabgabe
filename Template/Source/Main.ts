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
    badEnding: "Audio/",
    pianoSong_1: "Audio/",
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
      background: "Images/"
    },

    nickRoom: {
      name: "nicksRoom",
      background: "Images/"
    },

    miraRoomHandyNews: {
      name: "miraRoomHandyNews",
      background: "Images/"
    },

    miraRoomHandyCalendar: {
      name: "miraRoomHandyCalendar",
      background: "Images/"
    },

    miraRoomHandyNoMessage: {
      name: "miraRoomHandyNoMessage",
      background: "Images/"
    },

    miraRoomHandyBirthday: {
      name: "miraRoomHandyBirthday",
      background: "Images/"
    },

    miraRoomHandyAnswer:  {
      name: "miraRoomHandyAnswer",
      background: "Images/"
    },

    miraRoomHandy:  {
      name: "miraRoomHandy",
      background: "Images/"
    },

    miraRoomMath:  {
      name: "miraRoomMath",
      background: "Images/"
    },

    miraRoomMath2:  {
      name: "miraRoomMath2",
      background: "Images/"
    },

    miraRoomEnglish:  {
      name: "miraRoomEnglish",
      background: "Images/"
    },

    miraRoomLaptop:  {
      name: "miraRoomLaptop",
      background: "Images/"
    },

    pianoRoom:  {
      name: "pianoRoom",
      background: "Images/"
    },

    nicksRoom:  {
      name: "nicksRoom",
      background: "Images/"
    },

    nicksRoomDoor:  {
      name: "nicksRoomDoor",
      background: "Images/"
    },

    nicksKitchen:  {
      name: "nicksKitchen",
      background: "Images/"
    },

    nicksBathroom:  {
      name: "nicksBathroom",
      background: "Images/"
    },

    nicksBathroomDead:  {
      name: "nicksBathroomDead",
      background: "Images/"
    },

    nicksRoomTable:  {
      name: "nicksRoomTable",
      background: "Images/"
    },

    nicksRoomPicture:  {
      name: "nicksRoomPicture",
      background: "Images/"
    },

    hideout:  {
      name: "hideout",
      background: "Images/"
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
    }
  }

  export let characters = {
    Mira: {
      name: "Mira",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "Images/",
        happy: "Images/",
        sad: "Images/",
        worried: "Images/",
        crying: "Images/"
      }
    },

    Nick: {
      name: "Nick",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "Images/",
        smile: "Images/",
        sad: "Images/",
        tired: "Images/",
        crying: "Images/"
      }
    },

    Nachbar: {
      name: "Nachbar",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        happy: "Images/",
        thinking: "Images/"
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