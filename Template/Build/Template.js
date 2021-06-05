"use strict";
var Template;
(function (Template) {
    async function EndOfNovel() { }
    Template.EndOfNovel = EndOfNovel;
})(Template || (Template = {}));
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
        goodEnding: "Audio/Endings/NicksAlive.mp3",
        neutralEnding: "Audio/",
        badEnding: "Audio/Endings/darker.mp3",
        pianoSongGoing: "Audio/Piano/Going.mp3",
        pianoSongDontStand: "Audio/Piano/DontStand.mp3",
        pianoSongFlowerfield: "Audio/Piano/Flowerfield.mp3",
        tetris: "Audio/Tetris.mp3",
        nicksSong: "Audio/Piano/NicksSong_feat_Lara.mp3",
        //Sounds
        fallingOnFloor: "Audio/",
        wateringPlants: "Audio/",
        grabPaper: "Audio/"
    };
    Template.transition = {
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
    //Both characters on screen
    Template.miraPosWhenBoth = new Template.fS.Position(-384, -360);
    Template.nickPosWhenBoth = new Template.fS.Position(384, -360);
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
            { scene: Template.WakeUp, name: "WakeUp" },
            //bad scenes
            { id: "DontRememberBirthday", scene: Template.DontRememberBirthday, name: "DontRememberBirthday" },
            { id: "BadEnding1", scene: Template.BadEnding1, name: "BadEnding1", next: "endOfNovel" },
            //neutral scenes
            { id: "RememberWhilePiano", scene: Template.RememberWhilePiano, name: "RememberWhilePiano" },
            { id: "NoAnswerFromNick", scene: Template.NoAnswerFromNick, name: "NoAnswerFromNick" },
            { id: "neutralEnding", scene: Template.NeutralEnding, name: "NeutralEnding", next: "endOfNovel" },
            //good scenes
            { id: "NicksBirthday", scene: Template.NicksBirthday, name: "NicksBirthday" },
            { id: "AnswerFromNick", scene: Template.AnswerFromNick, name: "AnswerFromNick" },
            //last Scene in Novel
            { id: "endOfNovel", scene: Template.EndOfNovel, name: "EndOfNovel" }
        ];
        //set progress data
        Template.fS.Progress.setData(Template.dataToSave);
        // start the sequence
        Template.fS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    let signalDelay2s = Template.fS.Progress.defineSignal([() => Template.fS.Progress.delay(2)]);
    async function NeutralEnding() {
        console.log("neutralEnding: starting");
        Template.fS.Character.hideAll();
        Template.fS.Speech.hide();
        await Template.fS.Location.show(Template.location.black);
        Template.fS.Sound.fade(Template.sound.overworldTheme, 0, 1, false);
        await Template.fS.update(1.5);
        await signalDelay2s();
        await Template.fS.Text.print("2 Wochen später - Nach den Prüfungen.");
        await Template.fS.Text.print("Da Nick nicht auf deine Antworten reagiert beschließt du bei Nick vorbeizugehen um zu schauen wie es ihm geht.");
        await Template.fS.Text.print("Als du vor seiner Haustür stehst und keiner aufmacht wirst du von seinen Nachbarn angesprochen.");
        Template.fS.Sound.fade(Template.sound.badEnding, 0.2, 1.5, true);
        await Template.fS.Text.print("Von diesen erfährst du das Nick vor knapp ein einhalb Wochen verschwunden und seit dem vermisst ist.");
        Template.fS.Text.close();
        await Template.fS.update();
        await Template.fS.Location.show(Template.location.neutralEnding);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
        Template.fS.Sound.fade(Template.sound.badEnding, 0, 0.3, false);
    }
    Template.NeutralEnding = NeutralEnding;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function WakeUp() {
        console.log("WakeUp: starting");
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
        await Template.fS.update(0.7);
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
                return "DontRememberBirthday";
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
                return "RememberWhilePiano";
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
                        Template.fS.Speech.hide();
                        return "NicksBirthday";
                    //dont go to Birthday
                    case goToBirthdayAnswer.dontGo:
                        await Template.fS.Speech.tell(Template.characters.Mira, "Hm, irgendwie ist mir gerade nicht danach. Ich schreib ihm später einfach mal.");
                        return "DontRememberBirthday";
                }
                break;
        }
    }
    Template.WakeUp = WakeUp;
})(Template || (Template = {}));
var Template;
(function (Template) {
    //check if mira did the leaning part
    let learningDone = false;
    async function DontRememberBirthday() {
        console.log("DontRememberBirthday: starting");
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
        return "BadEnding1";
    }
    Template.DontRememberBirthday = DontRememberBirthday;
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
                await Template.fS.update();
                await Template.fS.Location.show(Template.location.pianoRoom);
                await Template.fS.update(Template.transition.swipe.duration, Template.transition.swipe.alpha, Template.transition.swipe.edge);
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
    async function NicksBirthday() {
        console.log("NicksBirthday: starting");
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
                T0004: "Fangen die Prüfungen bei dir auch nächste Woche an?",
                T0005: "Was denn sonst noch?"
            },
            Nick: {
                T0000: "Mira? Was machst du denn hier?",
                T0001: "Oh, äh. Danke. Hatte nicht erwartet das du dich daran erinnerst. Haben uns ja schließlich eine Ewigkeit nicht gesehen.",
                T0002: "Komm doch rein.",
                T0003: "Tut mir leid. Wenn ich gewusst hätte das du kommst hätte ich aufgeräumt.",
                T0004: ": Ja.. Da hast du wohl Recht.",
                T0005: "...",
                T0006: "Oh äh... ja... Alles gut. Ich hab nur... eh... gerade ziemlich viel zu tun. Bisschen stressig alles zur Zeit.",
                T0007: "Ja, unter anderem.",
                T0008: "... Naja.. Also... Weis auch nicht. Ich fühle mich seit einer Weile nicht so gut."
            }
        };
        //Story
        Template.fS.Sound.fade(Template.sound.overworldTheme, 0.2, 1.5, true);
        await Template.fS.Location.show(Template.location.nicksRoomDoor);
        await Template.fS.update(Template.transition.swipe.duration, Template.transition.swipe.alpha, Template.transition.swipe.edge);
        await Template.fS.Speech.tell(Template.characters.Mira, "", true, "hiddenText");
        await Template.fS.Speech.tell(Template.characters.Narrator, text.Narrator.T0000);
        /*-----Animation-----*/
        let moveLeftAnimation = {
            start: { translation: Template.fS.positions.bottomcenter },
            end: { translation: Template.miraPosWhenBoth },
            duration: 2,
            playmode: Template.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Character.animate(Template.characters.Mira, Template.characters.Mira.pose.good, moveLeftAnimation);
        await Template.fS.update(1);
        /*-----Animation End-----*/
        await Template.fS.Character.show(Template.characters.Nick, Template.characters.Nick.pose.neutral, Template.nickPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0000);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0000);
        //Emotion
        await Template.fS.Character.hide(Template.characters.Nick);
        await Template.fS.Character.show(Template.characters.Nick, Template.characters.Nick.pose.good, Template.nickPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0001);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0001);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0002);
        //hide for transition
        await Template.fS.Character.hide(Template.characters.Nick);
        await Template.fS.Character.hide(Template.characters.Mira);
        //change locations and show characters after
        await Template.fS.Location.show(Template.location.nicksRoomGoodWeather);
        Template.fS.Speech.hide();
        await Template.fS.update(Template.transition.swipe.duration, Template.transition.swipe.alpha, Template.transition.swipe.edge);
        await Template.fS.Character.show(Template.characters.Nick, Template.characters.Nick.pose.neutral, Template.nickPosWhenBoth);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.neutral, Template.miraPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0003);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0002);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0004);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0005);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0003);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0006);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0004);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0007);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0005);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0008);
        //Decision
        let explainOrHelpAnswer = {
            help: "Hilfe anbieten",
            explain: "Erklärung suchen"
        };
        let explainOrHelp = await Template.fS.Menu.getInput(explainOrHelpAnswer, "decisionClass");
        switch (explainOrHelp) {
            case explainOrHelpAnswer.help:
                await Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.miraPosWhenBoth);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Du weißt das du mich jeder Zeit anschreiben kannst, wenn du ein Problem hast.");
                await Template.fS.Character.hide(Template.characters.Nick);
                await Template.fS.Character.show(Template.characters.Nick, Template.characters.Nick.pose.good, Template.nickPosWhenBoth);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Nick, "Ja... Danke.");
                await Template.fS.Speech.tell(Template.characters.Mira, "Dafür sind Freunde doch da.");
                await Template.fS.Speech.tell(Template.characters.Nick, "Ja...");
                return "AnswerFromNick";
            case explainOrHelpAnswer.explain:
                await Template.fS.Speech.tell(Template.characters.Mira, "Hm, das liegt sicher nur am Stress. Das wird schon wieder.");
                await Template.fS.Speech.tell(Template.characters.Nick, "Ja, da hast du sicher recht...");
                return "NoAnswerFromNick";
        }
    }
    Template.NicksBirthday = NicksBirthday;
})(Template || (Template = {}));
var Template;
(function (Template) {
    //check if mira did the leaning part
    let learningDone = false;
    async function RememberWhilePiano() {
        console.log("RememberWhilePiano: starting");
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
            if (await whatToDo() == "NicksBirthday") {
                return "NicksBirthday";
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
        return "BadEnding1";
    }
    Template.RememberWhilePiano = RememberWhilePiano;
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
                await Template.fS.update();
                await Template.fS.Location.show(Template.location.pianoRoom);
                await Template.fS.update(Template.transition.swipe.duration, Template.transition.swipe.alpha, Template.transition.swipe.edge);
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
                        return "NicksBirthday";
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
    async function BadEnding1() {
        console.log("BadEnding1: starting");
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
    Template.BadEnding1 = BadEnding1;
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
                await Template.fS.update();
                await Template.fS.Location.show(Template.location.pianoRoom);
                await Template.fS.update(Template.transition.swipe.duration, Template.transition.swipe.alpha, Template.transition.swipe.edge);
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
    let signalDelay2s = Template.fS.Progress.defineSignal([() => Template.fS.Progress.delay(2)]);
    let plantsDone = false;
    let tetrisDone = false;
    let learningDone = false;
    let pianoDone = false;
    async function AnswerFromNick() {
        console.log("AnswerFromNick: starting");
        //Text
        let text = {
            Narrator: {
                T0000: "Hey, mir gehts gerade nicht gut. Schätze wir müssen unser Treffen auf wann anders verschieben... tut mir leid."
            },
            Mira: {
                T0000: "...",
                T0001: "Naja, ich wollte dich nicht vom Lernen abhalten. Wir können uns ja, wenn du möchtest, nach den Prüfungen mal wieder etwas mehr treffen. So wie füher eben...",
                T0002: "Klar, sonst hätte ich ja nicht gefragt.",
                T0003: "Naja dann gehe ich mal wieder. Schreib mich einfach mal an wenns dir passt.",
                T0004: "Supi. Bis dann.",
                T0005: "Morgen? Hm, eigentlich sollte ich lernen. In einer Woche gehts los und ich habe noch nicht angefangen... ",
                T0006: "Aber ein Tag mehr oder weniger wird da auch keinen Unterschied mehr machen.",
                T0007: "Alles klar. Dann morgen. Kommst du zu mir?",
                T0008: "Okay. Bis morgen dann.",
                T0009: "Neuer Tag neues Glück.",
                T0010: "Noch eine Woche bis zur ersten Prüfung und noch 3 Stunden bis Nick kommt.",
                T0011: "Was mache ich denn bis dahin?",
                T0012: "Nick sollte mittlerweile eigentlich schon längst da sein? Wo bleibt er nur?",
                T0013: "...",
                T0014: "Oh, er hat mir geschrieben.",
                T0015: "Hm... schade. Hoffe es ist nichts schlimmes.",
                T0016: "Naja dann wird eben weiter gelernt.",
                T0017: "...",
                T0018: "Eine Drehmatrize ist... eine reelle, orthogonale Matrix.",
                T0019: "...",
                T0020: "Rechtshändiges Koordinatensystem... Wie muss ich meine Hand nochmal halten?",
                T0021: "Daumen auf mich gerichtet, Zeigefinger nach oben...Mittelfinger... Nein, das stimmt glaube ich nicht.",
                T0022: "...",
                T0023: "Einheitsmatrix... multipliziert mit einer anderen Matrix bleibt die gleiche Matrix...",
                T0024: "Das müsste ja dann so stimmen.",
                T0025: "...",
                T0026: "Vielleicht sollte ich morgen mal bei ihm vorbei gehen und schauen wie es ihm geht.",
                T0027: "Er sah ja gestern schon irgendwie bedrückt aus...",
                T0028: "Andernfalls gibt es noch so viel Schulstoff den ich lernen sollte..."
            },
            Nick: {
                T0000: "Gerne, wenn das für dich in Ordnung geht.",
                T0001: "Stimmt...",
                T0002: "Okay... Mache ich.",
                T0003: "...",
                T0004: "Warte!",
                T0005: "...",
                T0006: "Hast du vielleicht Lust schon morgen etwas zusammen zu machen?",
                T0007: "Gerne.",
                T0008: "Bis morgen!",
            }
        };
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0000);
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.neutral, Template.miraPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0001);
        await Template.fS.Character.hide(Template.characters.Nick);
        await Template.fS.Character.show(Template.characters.Nick, Template.characters.Nick.pose.good, Template.nickPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0000);
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.miraPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0002);
        await Template.fS.Character.hide(Template.characters.Nick);
        await Template.fS.Character.show(Template.characters.Nick, Template.characters.Nick.pose.neutral, Template.nickPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0001);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0003);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0002);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0004);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0003);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0004);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0005);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0006);
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.neutral, Template.miraPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0005);
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.miraPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0006);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0007);
        await Template.fS.Character.hide(Template.characters.Nick);
        await Template.fS.Character.show(Template.characters.Nick, Template.characters.Nick.pose.good, Template.nickPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0007);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0008);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0008);
        //end day one
        await Template.fS.Character.hide(Template.characters.Nick);
        await Template.fS.Character.hide(Template.characters.Mira);
        Template.fS.Speech.hide();
        await Template.fS.Location.show(Template.location.black);
        await Template.fS.update(1);
        //start day two
        signalDelay2s();
        await Template.fS.Location.show(Template.location.miraRoom);
        await Template.fS.update(1);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0009);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0010);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0011);
        while (true) {
            if (learningDone && plantsDone && tetrisDone && pianoDone) {
                break;
            }
            else {
                await whatToDo();
            }
        }
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0012);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0013);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0014);
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.Location.show(Template.location.miraRoomHandyAnswer);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Narrator, text.Narrator.T0000);
        await Template.fS.Location.show(Template.location.miraRoom);
        await Template.fS.update();
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0015);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0016);
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.Location.show(Template.location.miraRoomMath2);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0017);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0018);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0019);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0020);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0021);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0022);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0023);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0024);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0025);
        Template.fS.Speech.hide();
        await Template.fS.Location.show(Template.location.black);
        await Template.fS.update(1);
        await Template.fS.Text.print("Einige Zeit später...");
        Template.fS.Text.close();
        await Template.fS.update();
        await Template.fS.Location.show(Template.location.miraRoomDarker);
        await Template.fS.update();
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.neutral, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0026);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0027);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0028);
        //visit Nick or learn
        let visitOrLearnAnswer = {
            besuchen: "Nick besuchen",
            lernen: "Lernen"
        };
        let visitOrLearn = await Template.fS.Menu.getInput(visitOrLearnAnswer, "decisionClass");
        switch (visitOrLearn) {
            case visitOrLearnAnswer.besuchen:
                break;
            case visitOrLearnAnswer.lernen:
                await Template.fS.Character.hide(Template.characters.Mira);
                Template.fS.Speech.hide();
                await Template.fS.Location.show(Template.location.black);
                await Template.fS.update(1);
                return "neutralEnding";
        }
        await Template.fS.Character.hide(Template.characters.Mira);
        Template.fS.Speech.hide();
        await Template.fS.Location.show(Template.location.black);
        await Template.fS.update(1);
        return "NickNotAtHome";
        async function whatToDo() {
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
                    await Template.fS.update();
                    await Template.fS.Location.show(Template.location.pianoRoom);
                    await Template.fS.update(Template.transition.swipe.duration, Template.transition.swipe.alpha, Template.transition.swipe.edge);
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
    }
    Template.AnswerFromNick = AnswerFromNick;
})(Template || (Template = {}));
var Template;
(function (Template) {
    let signalDelay2s = Template.fS.Progress.defineSignal([() => Template.fS.Progress.delay(2)]);
    let plantsDone = false;
    let tetrisDone = false;
    let learningDone = false;
    let pianoDone = false;
    let waitForNick = false;
    async function NoAnswerFromNick() {
        console.log("NoAnswerFromNick: starting");
        //Text
        let text = {
            Narrator: {
                T0000: "Hey, mir gehts gerade nicht gut. Schätze wir müssen unser Treffen auf wann anders verschieben... tut mir leid."
            },
            Mira: {
                T0000: "...",
                T0001: "Naja, ich wollte dich nicht vom Lernen abhalten. Wir können uns ja, wenn du möchtest, nach den Prüfungen mal wieder etwas mehr treffen. So wie füher eben...",
                T0002: "Klar, sonst hätte ich ja nicht gefragt.",
                T0003: "Naja dann gehe ich mal wieder. Schreib mich einfach mal an wenns dir passt.",
                T0004: "Supi. Bis dann.",
                T0005: "Morgen? Hm, eigentlich sollte ich lernen. In einer Woche gehts los und ich habe noch nicht angefangen... ",
                T0006: "Aber ein Tag mehr oder weniger wird da auch keinen Unterschied mehr machen.",
                T0007: "Alles klar. Dann morgen. Kommst du zu mir?",
                T0008: "Okay. Bis morgen dann.",
                T0009: "Neuer Tag neues Glück.",
                T0010: "Noch eine Woche bis zur ersten Prüfung und noch 3 Stunden bis Nick kommt.",
                T0011: "Was mache ich denn bis dahin?",
                T0012: "Nick sollte mittlerweile eigentlich schon längst da sein? Wo bleibt er nur?",
                T0013: "...",
                T0014: "Viellecht hat er es ja schon wieder vergessen. Ich schreib ihm mal.",
                T0015: "So, jetzt heißt es wieder warten.",
                T0016: "Vielleicht sollte ich nochmal Mathe lernen. Da hänge ich eh noch hinterher.",
                T0017: "...",
                T0018: "Eine Drehmatrize ist... eine reelle, orthogonale Matrix.",
                T0019: "...",
                T0020: "Rechtshändiges Koordinatensystem... Wie muss ich meine Hand nochmal halten?",
                T0021: "Daumen auf mich gerichtet, Zeigefinger nach oben...Mittelfinger... Nein, das stimmt glaube ich nicht.",
                T0022: "...",
                T0023: "Einheitsmatrix... multipliziert mit einer anderen Matrix bleibt die gleiche Matrix...",
                T0024: "Das müsste ja dann so stimmen.",
                T0025: "...",
            },
            Nick: {
                T0000: "Gerne, wenn das für dich in Ordnung geht.",
                T0001: "Stimmt...",
                T0002: "Okay... Mache ich.",
                T0003: "...",
                T0004: "Warte!",
                T0005: "...",
                T0006: "Hast du vielleicht Lust schon morgen etwas zusammen zu machen?",
                T0007: "Gerne.",
                T0008: "Bis morgen!",
            }
        };
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0000);
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.neutral, Template.miraPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0001);
        await Template.fS.Character.hide(Template.characters.Nick);
        await Template.fS.Character.show(Template.characters.Nick, Template.characters.Nick.pose.good, Template.nickPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0000);
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.miraPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0002);
        await Template.fS.Character.hide(Template.characters.Nick);
        await Template.fS.Character.show(Template.characters.Nick, Template.characters.Nick.pose.neutral, Template.nickPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0001);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0003);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0002);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0004);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0003);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0004);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0005);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0006);
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.neutral, Template.miraPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0005);
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.miraPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0006);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0007);
        await Template.fS.Character.hide(Template.characters.Nick);
        await Template.fS.Character.show(Template.characters.Nick, Template.characters.Nick.pose.good, Template.nickPosWhenBoth);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0007);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0008);
        await Template.fS.Speech.tell(Template.characters.Nick, text.Nick.T0008);
        //end day one
        await Template.fS.Character.hide(Template.characters.Nick);
        await Template.fS.Character.hide(Template.characters.Mira);
        Template.fS.Speech.hide();
        await Template.fS.Location.show(Template.location.black);
        await Template.fS.update(1);
        //start day two
        signalDelay2s();
        await Template.fS.Location.show(Template.location.miraRoom);
        await Template.fS.update(1);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.good, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0009);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0010);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0011);
        while (true) {
            if (learningDone && plantsDone && tetrisDone && pianoDone) {
                break;
            }
            else {
                await whatToDo();
            }
        }
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0012);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0013);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0014);
        await Template.fS.Speech.tell(Template.characters.Mira, "...");
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0015);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0016);
        //wait or do math
        let waitOrMathAnswer = {
            warten: "Warten",
            lernen: "Lernen"
        };
        let waitOrMath = await Template.fS.Menu.getInput(waitOrMathAnswer, "decisionClass");
        switch (waitOrMath) {
            case waitOrMathAnswer.warten:
                //fade out
                Template.fS.Speech.hide();
                Template.fS.Character.hide(Template.characters.Mira);
                await Template.fS.Location.show(Template.location.black);
                await Template.fS.update(1);
                await Template.fS.Text.print("Einige Zeit später...");
                Template.fS.Text.close();
                await Template.fS.update();
                //text
                await Template.fS.Location.show(Template.location.miraRoom);
                await Template.fS.update(1);
                await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.neutral, Template.fS.positions.bottomcenter);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.characters.Mira, "Echt jetzt, wo bleibt der... 2 Stunden gewartet für nichts. Da hätte ich meine Zeit sinnvoller nutzen können!");
                await Template.fS.Speech.tell(Template.characters.Mira, "Ich hoffe er hat einen guten Grund dafür!");
                await Template.fS.Speech.tell(Template.characters.Mira, "...");
                await Template.fS.Speech.tell(Template.characters.Mira, "Vielleicht sollte ich mir doch nochmal Mathe anschauen. Dann war der Tag immerhin nicht völlig umsonst.");
                waitForNick = true;
                break;
            case waitOrMathAnswer.lernen:
                break;
        }
        await Template.fS.Character.hide(Template.characters.Mira);
        await Template.fS.Location.show(Template.location.miraRoomMath2);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0017);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0018);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0019);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0020);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0021);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0022);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0023);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0024);
        await Template.fS.Speech.tell(Template.characters.Mira, text.Mira.T0025);
        Template.fS.Speech.hide();
        await Template.fS.Location.show(Template.location.black);
        await Template.fS.update(1);
        await Template.fS.Text.print("Einige Zeit später...");
        Template.fS.Text.close();
        await Template.fS.update();
        await Template.fS.Location.show(Template.location.miraRoomHandyNoMessage);
        await Template.fS.update();
        //after doing Math2
        if (waitForNick) {
            await Template.fS.Speech.tell(Template.characters.Mira, "Keine Nachrichten...");
            await Template.fS.Speech.tell(Template.characters.Mira, "Na danke auch! Lässt mich hier den ganzen Tag warten und meldet sich nicht!");
            await Template.fS.Speech.tell(Template.characters.Mira, "Vielleicht sollte ich morgen persöhnlich fragen was sein Problem ist! Wobei... am Ende macht er mir garnicht auf.");
            await Template.fS.Speech.tell(Template.characters.Mira, "Oder ich bereite mich auf meine Prüfungen vor...");
            let visitOrLearnAnswer = {
                besuchen: "Nick besuchen",
                lernen: "Lernen"
            };
            let visitOrLearn = await Template.fS.Menu.getInput(visitOrLearnAnswer, "decisionClass");
            switch (visitOrLearn) {
                case visitOrLearnAnswer.besuchen:
                    Template.fS.Speech.hide();
                    await Template.fS.Location.show(Template.location.black);
                    await Template.fS.update(1);
                    break;
                case visitOrLearnAnswer.lernen:
                    await Template.fS.Location.show(Template.location.miraRoomDarker);
                    await Template.fS.update(1);
                    await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.neutral, Template.fS.positions.bottomcenter);
                    await Template.fS.update();
                    await Template.fS.Speech.tell(Template.characters.Mira, "Lernen ist da wohl die sichere Variante.");
                    await Template.fS.Speech.tell(Template.characters.Mira, "Er kann mir auch noch nach den Prüfungen erklären aus welchem Grund er mich sitzen lassen hat.");
                    await Template.fS.Character.hide(Template.characters.Mira);
                    Template.fS.Speech.hide();
                    await Template.fS.Location.show(Template.location.black);
                    await Template.fS.update(1);
                    return "neutralEnding";
            }
        }
        else {
            await Template.fS.Speech.tell(Template.characters.Mira, "Keine Nachrichten...");
            await Template.fS.Speech.tell(Template.characters.Mira, "So langsam mache ich mir Sorgen...");
        }
        //Good Ending
        await Template.fS.Location.show(Template.location.miraRoomDarker);
        await Template.fS.update(1);
        await Template.fS.Character.show(Template.characters.Mira, Template.characters.Mira.pose.neutral, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Mira, "Naja, dann nutze ich den restlichen Tag mal noch zum lernen und schaue dann morgen mal bei ihm vorbei.");
        await Template.fS.Character.hide(Template.characters.Mira);
        Template.fS.Speech.hide();
        await Template.fS.Location.show(Template.location.black);
        await Template.fS.update(1);
        return "NickNotAtHome";
        async function whatToDo() {
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
                    await Template.fS.update();
                    await Template.fS.Location.show(Template.location.pianoRoom);
                    await Template.fS.update(Template.transition.swipe.duration, Template.transition.swipe.alpha, Template.transition.swipe.edge);
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
                    await Template.fS.Speech.tell(Template.characters.Mira, "Indirekte Rede...");
                    await Template.fS.Speech.tell(Template.characters.Mira, "...");
                    await Template.fS.Speech.tell(Template.characters.Mira, "Simple Present wird zu Simple Past");
                    await Template.fS.Speech.tell(Template.characters.Mira, "Simple Past, Present Perfect und Past Perfect wird zu... Past Perfect?");
                    await Template.fS.Speech.tell(Template.characters.Mira, "...");
                    await Template.fS.Speech.tell(Template.characters.Mira, "Will wird zu would");
                    await Template.fS.Speech.tell(Template.characters.Mira, "...");
                    await Template.fS.Speech.tell(Template.characters.Mira, "Orts und Zeitangaben im Satz müssen auch angepasst werden?");
                    await Template.fS.Speech.tell(Template.characters.Mira, "This wird zu that... now zu then und ago zu before");
                    await Template.fS.Speech.tell(Template.characters.Mira, "Da sollte ich mir bei gelegenheit mal noch ein paar Beispiele anschauen.");
                    Template.fS.Speech.hide();
                    learningDone = true;
                    break;
            }
        }
    }
    Template.NoAnswerFromNick = NoAnswerFromNick;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map