declare namespace Template {
    function AnswerFromNick(): fS.SceneReturn;
}
declare namespace Template {
    function BadEnding(): fS.SceneReturn;
}
declare namespace Template {
    function DontRememberBirthday(): fS.SceneReturn;
}
declare namespace Template {
    function EndOfNovel(): fS.SceneReturn;
}
declare namespace Template {
    function FinalConversation(): fS.SceneReturn;
}
declare namespace Template {
    function GoodEnding(): fS.SceneReturn;
}
declare namespace Template {
    export import f = FudgeCore;
    export import fS = FudgeStory;
    let sound: {
        overworldTheme: string;
        overworldThemeDark: string;
        mysteryTheme: string;
        goodEnding: string;
        neutralEnding: string;
        badEnding: string;
        pianoSongGoing: string;
        pianoSongDontStand: string;
        pianoSongFlowerfield: string;
        tetris: string;
        nicksSong: string;
        hitTheFloor: string;
        wateringPlants: string;
        grabPaper: string;
        rain: string;
    };
    let transition: {
        blink: {
            duration: number;
            alpha: string;
            edge: number;
        };
        swipe: {
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
        nicksRoomBadWeatherNoPhoto: {
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
        goodEndingBlurred: {
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
        numberCode: {
            name: string;
            background: string;
        };
        colorBeforeEnding: {
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
        plantsOnDayOne: boolean;
        specialText: number;
    };
    let items: {
        Image: {
            name: string;
            description: string;
            image: string;
        };
        Code: {
            name: string;
            description: string;
            image: string;
        };
    };
    /**Stuff needed in Scenes */
    let miraPosWhenBoth: f.Vector2;
    let nickPosWhenBoth: f.Vector2;
    function mutePianoMusic(): void;
    let signalDelay2s: fS.Signal;
}
declare namespace Template {
    function NeutralEnding(): fS.SceneReturn;
}
declare namespace Template {
    function NickNotAtHome(): fS.SceneReturn;
}
declare namespace Template {
    function NicksBirthday(): fS.SceneReturn;
}
declare namespace Template {
    function NoAnswerFromNick(): fS.SceneReturn;
}
declare namespace Template {
    function RememberWhilePiano(): fS.SceneReturn;
}
declare namespace Template {
    function WaitForAnswer(): fS.SceneReturn;
}
declare namespace Template {
    function WakeUp(): fS.SceneReturn;
}
