"use strict";
var Template;
(function (Template) {
    Template.f = FudgeCore;
    Template.fS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.sound = {
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
    Template.location = {
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
        miraRoomHandyAnswer: {
            name: "miraRoomHandyAnswer",
            background: "Images/"
        },
        miraRoomHandy: {
            name: "miraRoomHandy",
            background: "Images/"
        },
        miraRoomMath: {
            name: "miraRoomMath",
            background: "Images/"
        },
        miraRoomMath2: {
            name: "miraRoomMath2",
            background: "Images/"
        },
        miraRoomEnglish: {
            name: "miraRoomEnglish",
            background: "Images/"
        },
        miraRoomLaptop: {
            name: "miraRoomLaptop",
            background: "Images/"
        },
        pianoRoom: {
            name: "pianoRoom",
            background: "Images/"
        },
        nicksRoom: {
            name: "nicksRoom",
            background: "Images/"
        },
        nicksRoomDoor: {
            name: "nicksRoomDoor",
            background: "Images/"
        },
        nicksKitchen: {
            name: "nicksKitchen",
            background: "Images/"
        },
        nicksBathroom: {
            name: "nicksBathroom",
            background: "Images/"
        },
        nicksBathroomDead: {
            name: "nicksBathroomDead",
            background: "Images/"
        },
        nicksRoomTable: {
            name: "nicksRoomTable",
            background: "Images/"
        },
        nicksRoomPicture: {
            name: "nicksRoomPicture",
            background: "Images/"
        },
        hideout: {
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
    };
    Template.characters = {
        Mira: {
            name: "Mira",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Images/",
                thinking: "Images/"
            }
        }
    };
    //save and load
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Template.f.KEYBOARD_CODE.F2:
                console.log("Save");
                await Template.fS.Progress.save();
                break;
            case Template.f.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.fS.Progress.load();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
        ];
        // start the sequence
        Template.fS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map