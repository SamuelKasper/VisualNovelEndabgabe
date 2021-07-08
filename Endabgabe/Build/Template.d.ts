declare namespace Endabgabe {
    function AnswerFromNick(): fS.SceneReturn;
}
declare namespace Endabgabe {
    function BadEnding(): fS.SceneReturn;
}
declare namespace Endabgabe {
    function DontRememberBirthday(): fS.SceneReturn;
}
declare namespace Endabgabe {
    function EndOfNovel(): fS.SceneReturn;
}
declare namespace Endabgabe {
    function FinalConversation(): fS.SceneReturn;
}
declare namespace Endabgabe {
    function GoodEnding(): fS.SceneReturn;
}
declare namespace Endabgabe {
    export import f = FudgeCore;
    export import fS = FudgeStory;
    /**Stuff needed in Scenes */
    let miraPosWhenBoth: f.Vector2;
    let nickPosWhenBoth: f.Vector2;
    let signalDelay2s: fS.Signal;
    let inventoryOpen: boolean;
    let skipBadEndingNr3: boolean;
    function mutePianoMusic(): void;
    function moveLeftAnim(): fS.AnimationDefinition;
    function moveRightAnim(): fS.AnimationDefinition;
    let sound: {
        overworldTheme: string;
        overworldThemeDark: string;
        mysteryTheme: string;
        goodEnding: string;
        neutralEnding: string;
        badEnding: string;
        pianoSongGoing: string;
        pianoSongDontStand: string;
        pianoSongCircle: string;
        tetris: string;
        nicksSong: string;
        harvest: string;
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
        nicksBathroomRemSccsr: {
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
            static: boolean;
        };
        Code: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
}
declare namespace Endabgabe {
    function NeutralEnding(): fS.SceneReturn;
}
declare namespace Endabgabe {
    function NickNotAtHome(): fS.SceneReturn;
}
declare namespace Endabgabe {
    function NicksBirthday(): fS.SceneReturn;
}
declare namespace Endabgabe {
    function NoAnswerFromNick(): fS.SceneReturn;
}
declare namespace Endabgabe {
    function RememberWhilePiano(): fS.SceneReturn;
}
declare namespace Endabgabe {
    function WaitForAnswer(): fS.SceneReturn;
}
declare namespace Endabgabe {
    function WakeUp(): fS.SceneReturn;
}
