declare namespace Template {
    export import f = FudgeCore;
    export import fS = FudgeStory;
    let sound: {
        overworldTheme: string;
        overworldThemeMuted: string;
        mysteryTheme: string;
        goodEnding: string;
        neutralEnding: string;
        badEnding: string;
        pianoSongGoing: string;
        pianoSongDontStand: string;
        pianoSongFlowerfield: string;
        tetris: string;
        nicksSong: string;
        fallingOnFloor: string;
        wateringPlants: string;
        grabPaper: string;
    };
    let transition: {
        ants: {
            duration: number;
            alpha: string;
            edge: number;
        };
        transTwo: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let location: {
        miraRoom: {
            name: string;
            background: string;
        };
        miraRoomDarker: {
            name: string;
            background: string;
        };
        nickRoom: {
            name: string;
            background: string;
        };
        miraRoomHandyNews: {
            name: string;
            background: string;
        };
        miraRoomHandyCalendar: {
            name: string;
            background: string;
        };
        miraRoomHandyNoMessage: {
            name: string;
            background: string;
        };
        miraRoomHandyBirthday: {
            name: string;
            background: string;
        };
        miraRoomHandyAnswer: {
            name: string;
            background: string;
        };
        miraRoomMath: {
            name: string;
            background: string;
        };
        miraRoomMath2: {
            name: string;
            background: string;
        };
        miraRoomEnglish: {
            name: string;
            background: string;
        };
        miraRoomLaptop: {
            name: string;
            background: string;
        };
        pianoRoom: {
            name: string;
            background: string;
        };
        nicksRoomGoodWeather: {
            name: string;
            background: string;
        };
        nicksRoomBadWeather: {
            name: string;
            background: string;
        };
        nicksRoomDoor: {
            name: string;
            background: string;
        };
        nicksKitchen: {
            name: string;
            background: string;
        };
        nicksBathroom: {
            name: string;
            background: string;
        };
        nicksBathroomDead: {
            name: string;
            background: string;
        };
        nicksRoomTable: {
            name: string;
            background: string;
        };
        nicksRoomPicture: {
            name: string;
            background: string;
        };
        hideout: {
            name: string;
            background: string;
        };
        goodEnding: {
            name: string;
            background: string;
        };
        neutralEnding: {
            name: string;
            background: string;
        };
        badEnding: {
            name: string;
            background: string;
        };
        black: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Narrator: {
            name: string;
        };
        Mira: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                neutral: string;
                happy: string;
                sad: string;
                good: string;
                crying: string;
            };
        };
        Nick: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                neutral: string;
                good: string;
                sad: string;
                tired: string;
                crying: string;
            };
        };
        Nachbar: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                good: string;
                neutral: string;
            };
        };
    };
    let dataToSave: {
        sceneDesiscionPoints: number;
        plantsOnDayOne: boolean;
    };
}
declare namespace Template {
    class SceneDesicionClass {
        static chooseScene(_sceneDesicionPoints: number): "scene_2_good" | "scene_3_good" | "scene_2_bad" | "scene_3_bad" | "scene_2_neutral" | "scene_3_neutral" | "no valid sceneDesicionPoint";
    }
}
declare namespace Template {
    function Scene_1_beginn(): fS.SceneReturn;
}
declare namespace Template {
    function Scene_2_bad(): fS.SceneReturn;
}
declare namespace Template {
    function Scene_2_good(): fS.SceneReturn;
}
declare namespace Template {
    function Scene_2_neutral(): fS.SceneReturn;
}
declare namespace Template {
    function Scene_3_bad(): fS.SceneReturn;
}
declare namespace Template {
    function Scene_3_good(): fS.SceneReturn;
}
declare namespace Template {
    function Scene_3_neutral(): fS.SceneReturn;
}
