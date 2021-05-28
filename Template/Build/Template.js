"use strict";
var Template;
(function (Template) {
    Template.f = FudgeCore;
    Template.fS = FudgeStory;
    console.log("FudgeStory main starting");
    Template.sound = {
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
    Template.transition = {
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
    Template.location = {
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
    };
    Template.characters = {
        Narrator: {
            name: "",
        },
        Mira: {
            name: "Mira: ",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                good: "Images/Characters/Nachbar/Nachbar_good.png",
                neutral: "Images/Characters/Nachbar/Nachbar_neutral.png"
            }
        }
    };
    Template.dataToSave = {
        plantsOnDayOne: false
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
            { scene: Template.Scene_1_beginn, name: "Scene_1_beginn" },
            //bad scenes
            { id: "scene_2_bad", scene: Template.Scene_2_bad, name: "Scene_2_bad" },
            { id: "scene_3_bad", scene: Template.Scene_3_bad, name: "Scene_3_bad" /**next: reload page/ end */ },
            //neutral scenes
            { id: "scene_2_neutral", scene: Template.Scene_2_neutral, name: "Scene_2_neutral" },
            { id: "scene_3_neutral", scene: Template.Scene_3_neutral, name: "Scene_3_neutral" },
            //good scenes
            { id: "scene_2_good", scene: Template.Scene_2_good, name: "Scene_2_good" },
            { id: "scene_3_good", scene: Template.Scene_3_good, name: "Scene_3_good" }
        ];
        //set progress data
        Template.fS.Progress.setData(Template.dataToSave);
        // start the sequence
        Template.fS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene_1_beginn() {
        console.log("Scene_1_beginn: starting");
        let signalDelay2s = Template.fS.Progress.defineSignal([() => Template.fS.Progress.delay(2)]);
        //Text
        let text = {
            Mira: {
                T0000: "Hm? Schon ziemlich hell...",
                T0001: "Wie viel Uhr ist es?",
                T0002: "...",
                T0003: "Erst 8:30 Uhr. Soll ich schon aufstehen oder lieber noch ein bisschen weiter schlafen?"
            }
        };
        //Wake up
        Template.fS.Speech.hide();
        await Template.fS.Location.show(Template.location.black);
        await Template.fS.update();
        await Template.fS.Location.show(Template.location.miraRoomDarker);
        //await fS.update(0.7);
        await Template.fS.update(Template.transition.ants.duration, Template.transition.ants.alpha, Template.transition.ants.edge);
        await Template.fS.Location.show(Template.location.black);
        await Template.fS.update(0.2);
        await Template.fS.Location.show(Template.location.miraRoomDarker);
        await Template.fS.update(0.5);
        //Text
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0000);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0001);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0002);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0003);
        //get up or sleep
        let sleepNewsCalendarAnswer = {
            sleep: "Schlafen",
            news: "News lesen",
            calendar: "Kalender anschauen"
        };
        let sleepNewsCalendar = await Template.fS.Menu.getInput(sleepNewsCalendarAnswer, "decisionClass");
        switch (sleepNewsCalendar) {
            //Weiterschalfen
            case sleepNewsCalendarAnswer.sleep:
                await Template.fS.Speech.tell(Template.characters.Mira, "Für einen Sonntag ist es ja noch ziemlich früh. Da kann man sich nochmal ein paar Stunden Schlaf gönnen.");
                Template.fS.Speech.hide();
                await Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.Location.show(Template.location.black);
                await Template.fS.update(0.5);
                await signalDelay2s();
                await Template.fS.Location.show(Template.location.miraRoom);
                await Template.fS.update(0.3);
                await Template.fS.Speech.tell(Template.characters.Mira, "Sonntag 10:30 Uhr. Jetzt bin ich bereit aufzustehen.");
                return "scene_2_bad";
            //News:
            case sleepNewsCalendarAnswer.news:
                await Template.fS.Speech.tell(Template.characters.Mira, "Mal schauen ob's was neues gibt.");
                Template.fS.Speech.hide();
                await Template.fS.Location.show(Template.location.miraRoomHandyNews);
                await Template.fS.update();
                await signalDelay2s();
                await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
                await Template.fS.Speech.tell(Template.characters.Mira, "Spannend wie immer...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Dann ist es wohl mal Zeit aufzustehen.");
                return "scene_2_neutral";
            //Calendar
            case sleepNewsCalendarAnswer.calendar:
                await Template.fS.Location.show(Template.location.miraRoomHandyCalendar);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
                await Template.fS.Speech.tell(Template.characters.Mira, "Noch eine Woche bis zu den Prüfungen. Ich sollte heute definitv mal mit lernen anfangen.");
                await Template.fS.Speech.tell(Template.characters.Mira, "Oh, heute hat Nick Geburtstag. Wir haben uns schon lange nicht mehr gesehen.");
                await Template.fS.Speech.tell(Template.characters.Mira, "Vielleicht sollte ich mal wieder bei Ihm vorbei schauen.");
                let goToBirthdayAnswer = {
                    go: "Hingehen",
                    dontGo: "Zuhause bleiben"
                };
                let goToBirthday = await Template.fS.Menu.getInput(goToBirthdayAnswer, "decisionClass");
                switch (goToBirthday) {
                    //go to Birthday
                    case goToBirthdayAnswer.go:
                        await Template.fS.Speech.tell(Template.characters.Mira, "Ja, das mache ich. Da freut er sich sicher.");
                        return "scene_2_good";
                    //dont go to Birthday
                    case goToBirthdayAnswer.dontGo:
                        await Template.fS.Speech.tell(Template.characters.Mira, "Hm, irgendwie ist mir gerade nicht danach. Ich schreib ihm später einfach mal.");
                        return "scene_2_bad";
                }
                break;
        }
    }
    Template.Scene_1_beginn = Scene_1_beginn;
})(Template || (Template = {}));
var Template;
(function (Template) {
    //check if mira did the leaning part
    let learningDone = false;
    async function Scene_2_bad() {
        console.log("Scene_2_bad: starting");
        //Text
        let text = {
            Mira: {
                T0000: "Was steht denn heute alles an?",
                T0001: "In einer Woche sind Prüfungen... Ich sollte wirklich mal mit dem lernen anfangen.",
                T0002: "Ich sollte meine Pflanzen mal wieder gießen. Die sahen auch schon mal besser aus.",
                T0003: "Noch einen Monat bis zum Auftritt mit meinem Musikverein. Ich könnte mir schon mal die Stücke genauer anschauen.",
                T0004: "Sollte heute nicht das neue Tetris rauskommen? Ich könnte das ja mal ein wenig anspielen.",
                T0005: "Was? Schon 22:00?",
                T0006: "Ich sollte schlafen gehen damit ich morgen fit bin..."
            }
        };
        //Story
        //Music on
        //GEHT NICHT AUF DEM VOLUME fS.Sound.play(sound.overworldTheme, 0.2, true);
        Template.fS.Sound.fade(Template.sound.overworldTheme, 0.2, 1.5, true);
        await Template.fS.Location.show(Template.location.miraRoom);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0000);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0001);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0002);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0003);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0004);
        await Template.fS.Character.hide(Template.characters.Mira);
        while (!learningDone) {
            await whatToDo();
        }
        await Template.fS.Location.show(Template.location.miraRoomDarker);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0005);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0006);
        Template.fS.Speech.hide();
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.update();
        await Template.fS.Location.show(Template.location.black);
        await Template.fS.update(2);
        return "scene_3_bad";
    }
    Template.Scene_2_bad = Scene_2_bad;
    async function whatToDo() {
        let signalDelay2s = Template.fS.Progress.defineSignal([() => Template.fS.Progress.delay(2)]);
        let whatToDoAnswer = {
            klavier: "Klavier üben",
            pflanzen: "Pflanzen gießen",
            tetris: "Tetris spielen",
            lernen: "Lernen"
        };
        let whatToDo = await Template.fS.Menu.getInput(whatToDoAnswer, "decisionClass");
        switch (whatToDo) {
            //-------------------piano
            case whatToDoAnswer.klavier:
                await Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.Location.show(Template.location.pianoRoom);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Erstmal ein wenig einspielen.");
                Template.fS.Sound.fade(Template.sound.overworldTheme, 0, 0.3, false);
                //play nicks song + Mädchenstimme die mit summt
                Template.fS.Sound.fade(Template.sound.nicksSong, 0.2, 1.5, true);
                await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
                await Template.fS.Speech.tell(Template.characters.Mira, "Hm, irgendwie kommt mir diese Melodie bekannt vor. Aber woher?");
                await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
                await Template.fS.Speech.tell(Template.characters.Mira, "...");
                signalDelay2s();
                await Template.fS.Speech.tell(Template.characters.Mira, "Ich kann mich nicht errinnern.");
                Template.fS.Sound.fade(Template.sound.nicksSong, 0, 1, false);
                Template.fS.Sound.fade(Template.sound.overworldTheme, 0.2, 1, true);
                break;
            //-------------------plants  
            case whatToDoAnswer.pflanzen:
                await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positions.bottomcenter);
                await Template.fS.Location.show(Template.location.miraRoom);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Hier ein bisschen Wasser für euch.");
                //pflanzen gießen geräusch (wasser plätschern)
                await Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.neutral, Template.fS.positions.bottomcenter);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Genauer betrachtet sehen die ziemlich schlimm aus...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Ich hoffe die werden wieder.");
                await Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positions.bottomcenter);
                await Template.fS.update();
                Template.dataToSave.plantsOnDayOne = true;
                break;
            //-------------------tetris
            case whatToDoAnswer.tetris:
                await Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.Location.show(Template.location.miraRoomLaptop);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Okay, los gehts.");
                //start tetris musik
                Template.fS.Sound.fade(Template.sound.overworldTheme, 0, 0.3, false);
                Template.fS.Sound.fade(Template.sound.tetris, 0.2, 1.5, true);
                //fade out (game time)
                Template.fS.Speech.hide();
                await Template.fS.Location.show(Template.location.black);
                await Template.fS.update(1);
                await Template.fS.Text.print("Einige Runden später...");
                Template.fS.Text.close();
                await Template.fS.update();
                //fade in
                await Template.fS.Location.show(Template.location.miraRoomLaptop);
                Template.fS.Sound.fade(Template.sound.tetris, 0, 0.3, false);
                Template.fS.Sound.fade(Template.sound.overworldTheme, 0.2, 1, true);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Das hat Spaß gemacht.");
                await Template.fS.Speech.tell(Template.characters.Mira, "Innovative Spielmechanik und angemessene Schwierigkeit.");
                await Template.fS.Speech.tell(Template.characters.Mira, "Kein Wunder dass das alle toll finden.");
                break;
            //-------------------lernen
            case whatToDoAnswer.lernen:
                await Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.Location.show(Template.location.miraRoomMath);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Als erstes Mathe.");
                await Template.fS.Speech.tell(Template.characters.Mira, "Komplexe Zahlen? Kam das überhaupt im Unterricht drann?");
                await Template.fS.Speech.tell(Template.characters.Mira, "...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Die komplexen Zahlen erweitern den Zahlenbereich der reelenZahlen derart, dass die Gleichung x² + 1 =0 lösbar wird.");
                await Template.fS.Speech.tell(Template.characters.Mira, "...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Die Zahl i wird als imaginäre Einheit bezeichnet.");
                await Template.fS.Speech.tell(Template.characters.Mira, "...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Komplexe Zahlen lassen sich durch folgende Eigenschaften definieren: ");
                await Template.fS.Speech.tell(Template.characters.Mira, "Jede reele Zahl ist eine komplexe Zahl.");
                await Template.fS.Speech.tell(Template.characters.Mira, "Assoziativgesetz...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Kommutativgesetz...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Distributivgesetz...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Für jede komplexe Zahl x gibt es eine komplexe Zahl -x...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Ohje. Ich glaube das muss ich mir später nochmal genauer anschauen.");
                learningDone = true;
                break;
        }
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene_2_good() {
        console.log("Scene_2_good: starting");
        //Text
        let text = {
            Narrator: {
                T0000: "*Klopf Klopf*"
            },
            Mira: {
                T0000: "Hey Nick! Alles Gute zum Geburtstag.",
                T0001: "Na doch klar. Als ob ich den Geburtstag meines besten Freundes vergessen würde.",
                T0002: "Ach das macht doch nix. Erinnert mich an früher als wir zusammen gespielt haben. Da war's bei dir auch immer unordentlich.",
                T0003: "Ist bei dir alles okay? Du wirkst irgendwie merkwürdig",
                T0004: "Fangen die Prüfungen bei dir auch nächste Woche an.",
                T0005: "Was denn sonst noch?"
            },
            Nick: {
                T0000: "Mira? Was machst du denn hier?",
                T0001: "Oh, äh. Danke. Hatte nicht erwartet das du dich daran erinnerst. Haben uns ja schließlich eine Ewigkeit nicht gesehen.",
                T0002: "Tut mir leid. Wenn ich gewusst hätte das du kommst hätte ich aufgeräumt.",
                T0003: ": Ja.. Da hast du wohl Recht.",
                T0004: "...",
                T0005: "Oh äh... ja... Alles gut. Ich hab nur... eh... gerade ziemlich viel zu tun. Bisschen stressig alles zur Zeit.",
                T0006: "Ja, unter anderem.",
                T0007: "... Naja.. Also... Weis auch nicht. Ich fühle mich seit einer Weile nicht so gut."
            }
        };
        //Story
        await Template.fS.Location.show(Template.location.nicksRoomDoor);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
        await Template.fS.Speech.tell(Template.characters.Narrator, text.Narrator.T0000);
        /*-----Animation*/
        //Animation
        let moveLeftAnimation = {
            start: { translation: Template.fS.positions.bottomcenter },
            end: { translation: Template.fS.positions.bottomleft },
            duration: 1,
            playmode: Template.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, "ANIMATION START");
        await Template.fS.Character.animate(Template.characters.Mira, Template.characters.Mira.pose.good, moveLeftAnimation);
        await Template.fS.update(1);
        await Template.fS.Speech.tell(Template.characters.Mira, "ANIMATION ENDE");
        /*-----Animation*/
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positionPercent(20, 100));
        await Template.fS.Character.show(Template.characters.Nick, Template.characters.Nick.pose.neutral, Template.fS.positionPercent(80, 100));
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0000);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0000);
        //Emotion
        await Template.fS.Character.hide(Template.characters.Nick);
        await Template.fS.Character.show(Template.characters.Nick, Template.characters.Nick.pose.good, Template.fS.positionPercent(80, 100));
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0001);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0001);
        //Emotion
        await Template.fS.Character.hide(Template.characters.Nick);
        await Template.fS.Character.show(Template.characters.Nick, Template.characters.Nick.pose.neutral, Template.fS.positionPercent(80, 100));
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0002);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0002);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0003);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0004);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0003);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0005);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0004);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0006);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0005);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0007);
        //Decision
        let explainOrHelpAnswer = {
            help: "Hilfe anbieten",
            explain: "Erklärung suchen"
        };
        let explainOrHelp = await Template.fS.Menu.getInput(explainOrHelpAnswer, "decisionClass");
        switch (explainOrHelp) {
            case explainOrHelpAnswer.help:
                await Template.fS.Speech.tell(Template.characters.Mira, "Du weißt das du mich jeder Zeit anschreiben kannst, wenn du ein Probem hast.");
                await Template.fS.Speech.tell(Template.characters.Nick, "Ja... Danke.");
                await Template.fS.Speech.tell(Template.characters.Mira, "Dafür sind Freunde doch da.");
                await Template.fS.Speech.tell(Template.characters.Nick, "Ja...");
                return "scene_3_good";
            case explainOrHelpAnswer.explain:
                await Template.fS.Speech.tell(Template.characters.Mira, "Hm, das liegt sicher nur am Stress. Das wird schon wieder.");
                await Template.fS.Speech.tell(Template.characters.Nick, "Ja, da hast du sicher recht...");
                return "scene_3_neutral";
        }
    }
    Template.Scene_2_good = Scene_2_good;
})(Template || (Template = {}));
var Template;
(function (Template) {
    //check if mira did the leaning part
    let learningDone = false;
    async function Scene_2_neutral() {
        console.log("Scene_2_neutral: starting");
        //Text
        let text = {
            Mira: {
                T0000: "Was steht denn heute alles an?",
                T0001: "In einer Woche sind Prüfungen... Ich sollte wirklich mal mit dem lernen anfangen.",
                T0002: "Ich sollte meine Pflanzen mal wieder gießen. Die sahen auch schon mal besser aus.",
                T0003: "Noch einen Monat bis zum Auftritt mit meinem Musikverein. Ich könnte mir schon mal die Stücke genauer anschauen.",
                T0004: "Sollte heute nicht das neue Tetris rauskommen? Ich könnte das ja mal ein wenig anspielen.",
                T0005: "Was? Schon 22:00?",
                T0006: "Ich sollte schlafen gehen damit ich morgen fit bin..."
            }
        };
        //Story
        //Music on
        Template.fS.Sound.fade(Template.sound.overworldTheme, 0.2, 1.5, true);
        await Template.fS.Location.show(Template.location.miraRoom);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0000);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0001);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0002);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0003);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0004);
        await Template.fS.Character.hide(Template.characters.Mira);
        while (!learningDone) {
            if (await whatToDo() == "scene_2_good") {
                return "scene_2_good";
            }
        }
        await Template.fS.Location.show(Template.location.miraRoomDarker);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0005);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0006);
        Template.fS.Speech.hide();
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.update();
        await Template.fS.Location.show(Template.location.black);
        await Template.fS.update(2);
        return "scene_3_bad";
    }
    Template.Scene_2_neutral = Scene_2_neutral;
    async function whatToDo() {
        let signalDelay2s = Template.fS.Progress.defineSignal([() => Template.fS.Progress.delay(2)]);
        let whatToDoAnswer = {
            klavier: "Klavier üben",
            pflanzen: "Pflanzen gießen",
            tetris: "Tetris spielen",
            lernen: "Lernen"
        };
        let whatToDo = await Template.fS.Menu.getInput(whatToDoAnswer, "decisionClass");
        switch (whatToDo) {
            //-------------------piano
            case whatToDoAnswer.klavier:
                await Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.Location.show(Template.location.pianoRoom);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Erstmal ein wenig einspielen.");
                Template.fS.Sound.fade(Template.sound.overworldTheme, 0, 0.3, false);
                //play nicks song + Mädchenstimme die mit summt
                Template.fS.Sound.fade(Template.sound.nicksSong, 0.2, 1.5, true);
                await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
                await Template.fS.Speech.tell(Template.characters.Mira, "Hm, irgendwie kommt mir diese Melodie bekannt vor. Aber woher?");
                await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
                await Template.fS.Speech.tell(Template.characters.Mira, "...");
                signalDelay2s();
                await Template.fS.Speech.tell(Template.characters.Mira, "Jetzt weis ich's. Das Lied hatten Nick und ich uns ausgedacht als wir noch klein waren.");
                await Template.fS.Speech.tell(Template.characters.Mira, "Apropos, heute ist doch der dritte Februar. Da hat Nick Geburtstag.");
                await Template.fS.Speech.tell(Template.characters.Mira, "Vielleicht sollte ich mal wieder bei ihm vorbei schauen. Haben uns ja lange nicht gesehen.");
                //Go to birthday or not
                let hingehenAnswer = {
                    hingehen: "Hingehen",
                    zuhauseDisable: "Zuhause bleiben"
                };
                let hingehen = await Template.fS.Menu.getInput(hingehenAnswer, "decisionClass");
                switch (hingehen) {
                    case hingehenAnswer.hingehen:
                        await Template.fS.Speech.tell(Template.characters.Mira, "Ja, das mache ich. Da freut er sich sicher.");
                        Template.fS.Sound.fade(Template.sound.nicksSong, 0, 1, false);
                        Template.fS.Sound.fade(Template.sound.overworldTheme, 0.2, 1, true);
                        await Template.fS.Speech.tell(Template.characters.Mira, "Na dann mal los.");
                        Template.fS.Speech.hide();
                        await Template.fS.Location.show(Template.location.black);
                        await Template.fS.update(1.5);
                        return "scene_2_good";
                    case hingehenAnswer.zuhauseDisable:
                        await Template.fS.Speech.tell(Template.characters.Mira, "Hm, irgendwie ist mir gerade nicht danach.");
                }
                Template.fS.Sound.fade(Template.sound.nicksSong, 0, 1, false);
                Template.fS.Sound.fade(Template.sound.overworldTheme, 0.2, 1, true);
                break;
            //-------------------plants  
            case whatToDoAnswer.pflanzen:
                await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positions.bottomcenter);
                await Template.fS.Location.show(Template.location.miraRoom);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Hier ein bisschen Wasser für euch.");
                //pflanzen gießen geräusch (wasser plätschern)
                await Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.neutral, Template.fS.positions.bottomcenter);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Genauer betrachtet sehen die ziemlich schlimm aus...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Ich hoffe die werden wieder.");
                await Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positions.bottomcenter);
                await Template.fS.update();
                Template.dataToSave.plantsOnDayOne = true;
                break;
            //-------------------tetris
            case whatToDoAnswer.tetris:
                await Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.Location.show(Template.location.miraRoomLaptop);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Okay, los gehts.");
                //start tetris musik
                Template.fS.Sound.fade(Template.sound.overworldTheme, 0, 0.3, false);
                Template.fS.Sound.fade(Template.sound.tetris, 0.2, 1.5, true);
                //fade out (game time)
                Template.fS.Speech.hide();
                await Template.fS.Location.show(Template.location.black);
                await Template.fS.update(1);
                await Template.fS.Text.print("Einige Runden später...");
                Template.fS.Text.close();
                await Template.fS.update();
                //fade in
                await Template.fS.Location.show(Template.location.miraRoomLaptop);
                Template.fS.Sound.fade(Template.sound.tetris, 0, 0.3, false);
                Template.fS.Sound.fade(Template.sound.overworldTheme, 0.2, 1, true);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Das hat Spaß gemacht.");
                await Template.fS.Speech.tell(Template.characters.Mira, "Innovative Spielmechanik und angemessene Schwierigkeit.");
                await Template.fS.Speech.tell(Template.characters.Mira, "Kein Wunder dass das alle toll finden.");
                break;
            //-------------------lernen
            case whatToDoAnswer.lernen:
                await Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.Location.show(Template.location.miraRoomMath);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Als erstes Mathe.");
                await Template.fS.Speech.tell(Template.characters.Mira, "Komplexe Zahlen? Kam das überhaupt im Unterricht drann?");
                await Template.fS.Speech.tell(Template.characters.Mira, "...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Die komplexen Zahlen erweitern den Zahlenbereich der reelenZahlen derart, dass die Gleichung x² + 1 =0 lösbar wird.");
                await Template.fS.Speech.tell(Template.characters.Mira, "...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Die Zahl i wird als imaginäre Einheit bezeichnet.");
                await Template.fS.Speech.tell(Template.characters.Mira, "...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Komplexe Zahlen lassen sich durch folgende Eigenschaften definieren: ");
                await Template.fS.Speech.tell(Template.characters.Mira, "Jede reele Zahl ist eine komplexe Zahl.");
                await Template.fS.Speech.tell(Template.characters.Mira, "Assoziativgesetz...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Kommutativgesetz...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Distributivgesetz...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Für jede komplexe Zahl x gibt es eine komplexe Zahl -x...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Ohje. Ich glaube das muss ich mir später nochmal genauer anschauen.");
                learningDone = true;
                break;
        }
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    let signalDelay2s = Template.fS.Progress.defineSignal([() => Template.fS.Progress.delay(2)]);
    let plantsDone = false;
    let tetrisDone = false;
    let learningDone = false;
    let pianoDone = false;
    async function Scene_3_bad() {
        console.log("Scene_3_bad: starting");
        //Text
        let text = {
            Mira: {
                T0000: "Neuer Tag, neues Glück.",
                T0001: "4.2... Warte?",
                T0002: "Gestern hatte doch Nick Geburtstag und ich habe ganz vergessen ihm zu gratulieren.",
                T0003: "Jetzt aber schnell!",
                T0004: "Oh man.",
                T0005: "Wie konnte ich das nur vergessen.",
                T0006: "Ich hoffe er ist mir nicht böse.",
                T0007: "Was steht denn heute an?"
            }
        };
        //Story
        await Template.fS.Location.show(Template.location.black);
        await Template.fS.update(0.5);
        await signalDelay2s();
        await Template.fS.Location.show(Template.location.miraRoom);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0000);
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.neutral, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0001);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0002);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0003);
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.update();
        await Template.fS.Location.show(Template.location.miraRoomHandyBirthday);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
        await Template.fS.Location.show(Template.location.miraRoom);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.neutral, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0004);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0005);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0006);
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0007);
        await Template.fS.Character.hide(Template.characters.Mira);
        Template.fS.Speech.hide();
        while (true) {
            if (learningDone && plantsDone && tetrisDone && pianoDone) {
                break;
            }
            else {
                await whatToDo();
            }
        }
        await Template.fS.Location.show(Template.location.black);
        await Template.fS.update(1);
        await Template.fS.Location.show(Template.location.miraRoomDarker);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.neutral, Template.fS.positions.bottomcenter);
        await Template.fS.update(1.5);
        await Template.fS.Speech.tell(Template.characters.Mira, "Vielleicht hat Nick mittlerweile ja geantwortet.");
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.Speech.hide();
        await Template.fS.update();
        await Template.fS.Location.show(Template.location.miraRoomHandyBirthday);
        await Template.fS.update(1);
        await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
        await Template.fS.Speech.tell(Template.characters.Mira, "Keine Nachricht...");
        await Template.fS.Speech.tell(Template.characters.Mira, "Anscheinend ist er doch Sauer. Vielleicht sollte ich mich die Tage bei ihm persönlich entschuldigen.");
        Template.fS.Speech.hide();
        await Template.fS.Location.show(Template.location.black);
        Template.fS.Sound.fade(Template.sound.overworldTheme, 0, 1, false);
        await Template.fS.update(1.5);
        await signalDelay2s();
        await Template.fS.Text.print("2 Wochen später - Nach den Prüfungen.");
        await Template.fS.Text.print("Da Nick nicht auf deine Antworten reagiert beschließt du bei Nick vorbeizugehen um zu schauen wie es ihm geht.");
        await Template.fS.Text.print("Als du vor seiner Haustür stehst und keiner aufmacht wirst du von seinen Nachbarn angesprochen.");
        Template.fS.Sound.fade(Template.sound.badEnding, 0.2, 1.5, true);
        await Template.fS.Text.print("Von diesen Erfährst du das Nick sich vor knapp ein einhalb Wochen selbst umgebracht hat.");
        Template.fS.Text.close();
        await Template.fS.update();
        await Template.fS.Location.show(Template.location.badEnding);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
        Template.fS.Sound.fade(Template.sound.badEnding, 0, 0.3, false);
    }
    Template.Scene_3_bad = Scene_3_bad;
    async function whatToDo() {
        let whatToDoAnswer = {
            nachrichten: "Handy",
            klavier: "Klavier üben",
            pflanzen: "Pflanzen gießen",
            tetris: "Tetris spielen",
            lernen: "Lernen"
        };
        let whatToDo = await Template.fS.Menu.getInput(whatToDoAnswer, "decisionClass");
        switch (whatToDo) {
            //-------------------Handy
            case whatToDoAnswer.nachrichten:
                await Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.update();
                await Template.fS.Location.show(Template.location.miraRoomHandyBirthday);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
                await Template.fS.Speech.tell(Template.characters.Mira, "Hm, er hat noch nicht geantwortet...");
                Template.fS.Speech.hide();
                break;
            //-------------------piano
            case whatToDoAnswer.klavier:
                await Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.Location.show(Template.location.pianoRoom);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Hm, was spiele ich denn heute?");
                let songsAnswer = {
                    going: "Going",
                    dontStand: "Don't Stand",
                    flowerfield: "Flowerfield"
                };
                let songs = await Template.fS.Menu.getInput(songsAnswer, "decisionClass");
                switch (songs) {
                    case songsAnswer.going:
                        Template.fS.Sound.fade(Template.sound.overworldTheme, 0, 0.3, false);
                        Template.fS.Sound.fade(Template.sound.pianoSongGoing, 0.3, 1.5, true);
                        await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
                        await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
                        break;
                    case songsAnswer.dontStand:
                        Template.fS.Sound.fade(Template.sound.overworldTheme, 0, 0.3, false);
                        Template.fS.Sound.fade(Template.sound.pianoSongDontStand, 0.3, 1.5, true);
                        await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
                        await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
                        break;
                    case songsAnswer.flowerfield:
                        Template.fS.Sound.fade(Template.sound.overworldTheme, 0, 0.3, false);
                        Template.fS.Sound.fade(Template.sound.pianoSongFlowerfield, 0.3, 1.5, true);
                        await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
                        await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
                        break;
                }
                await Template.fS.Speech.tell(Template.characters.Mira, "Nicht perfekt, aber ich mache Fortschritte.");
                Template.fS.Sound.fade(Template.sound.pianoSongGoing, 0, 1, false);
                Template.fS.Sound.fade(Template.sound.pianoSongDontStand, 0, 1, false);
                Template.fS.Sound.fade(Template.sound.pianoSongFlowerfield, 0, 1, false);
                Template.fS.Sound.fade(Template.sound.overworldTheme, 0.2, 1, true);
                Template.fS.Speech.hide();
                pianoDone = true;
                break;
            //-------------------plants  
            case whatToDoAnswer.pflanzen:
                if (!Template.dataToSave.plantsOnDayOne) {
                    await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positions.bottomcenter);
                    await Template.fS.Location.show(Template.location.miraRoom);
                    await Template.fS.update();
                    await Template.fS.Speech.tell(Template.characters.Mira, "Hier ein bisschen Wasser für euch.");
                    //pflanzen gießen geräusch (wasser plätschern)
                    await Template.fS.Character.hide(Template.characters.Mira);
                    await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.neutral, Template.fS.positions.bottomcenter);
                    await Template.fS.update();
                    await Template.fS.Speech.tell(Template.characters.Mira, "Genauer betrachtet sehen die ziemlich schlimm aus...");
                    await Template.fS.Speech.tell(Template.characters.Mira, "Ich hoffe die werden wieder.");
                    await Template.fS.Character.hide(Template.characters.Mira);
                    await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positions.bottomcenter);
                    await Template.fS.update();
                }
                else {
                    await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positions.bottomcenter);
                    await Template.fS.Location.show(Template.location.miraRoom);
                    await Template.fS.update();
                    await Template.fS.Speech.tell(Template.characters.Mira, "Die Erde ist noch von gestern feucht. Die brauchen noch kein Wasser.");
                }
                Template.fS.Speech.hide();
                plantsDone = true;
                break;
            //-------------------tetris
            case whatToDoAnswer.tetris:
                await Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.Location.show(Template.location.miraRoomLaptop);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Okay, los gehts.");
                //start tetris musik
                Template.fS.Sound.fade(Template.sound.overworldTheme, 0, 0.3, true);
                Template.fS.Sound.fade(Template.sound.tetris, 0.2, 1.5, true);
                //fade out (game time)
                Template.fS.Speech.hide();
                await Template.fS.Location.show(Template.location.black);
                await Template.fS.update(1);
                await Template.fS.Text.print("Einige Runden später...");
                Template.fS.Text.close();
                await Template.fS.update();
                //fade in
                await Template.fS.Location.show(Template.location.miraRoomLaptop);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Das letzte Level war wirklich eine Herausforderung...");
                Template.fS.Sound.fade(Template.sound.tetris, 0, 0.3, true);
                Template.fS.Sound.fade(Template.sound.overworldTheme, 0.2, 1, true);
                Template.fS.Speech.hide();
                tetrisDone = true;
                break;
            //-------------------lernen
            case whatToDoAnswer.lernen:
                await Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.Location.show(Template.location.miraRoomEnglish);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Heute ist dann wohl Englisch drann.");
                await Template.fS.Speech.tell(Template.characters.Mira, "indirekte Rede...");
                await Template.fS.Speech.tell(Template.characters.Mira, "...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Simple Present wird zu Simple Past");
                await Template.fS.Speech.tell(Template.characters.Mira, "Simple Past, Present Perfect und Past Perfect wird zu... Past Perfect?");
                await Template.fS.Speech.tell(Template.characters.Mira, "...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Will wird zu would");
                await Template.fS.Speech.tell(Template.characters.Mira, "...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Orts und Zeitangaben im Satz müssen auch angepasst werden?");
                await Template.fS.Speech.tell(Template.characters.Mira, "this wird zu that... now zu then und ago zu before");
                await Template.fS.Speech.tell(Template.characters.Mira, "Da sollte ich mir bei gelegenheit mal noch ein paar Beispiele anschauen.");
                Template.fS.Speech.hide();
                learningDone = true;
                break;
        }
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene_3_good() {
        console.log("Scene_3_good: starting");
        //Text
        let text = {
            Narrator: {
                T0000: ""
            },
            Mira: {
                T0000: "",
                T0001: "",
                T0002: "",
                T0003: "",
                T0004: "",
                T0005: ""
            },
            Nick: {
                T0000: "",
                T0001: "",
                T0002: "",
                T0003: "",
                T0004: "",
                T0005: "",
                T0006: "",
                T0007: ""
            }
        };
        await Template.fS.Speech.tell(Template.characters.Nick, text.Mira.T0000);
    }
    Template.Scene_3_good = Scene_3_good;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene_3_neutral() {
        console.log("Scene_3_neutral: starting");
        //Text
        let text = {
            Narrator: {
                T0000: ""
            },
            Mira: {
                T0000: "",
                T0001: "",
                T0002: "",
                T0003: "",
                T0004: "",
                T0005: ""
            },
            Nick: {
                T0000: "",
                T0001: "",
                T0002: "",
                T0003: "",
                T0004: "",
                T0005: "",
                T0006: "",
                T0007: ""
            }
        };
        await Template.fS.Speech.tell(Template.characters.Nick, text.Mira.T0000);
    }
    Template.Scene_3_neutral = Scene_3_neutral;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map