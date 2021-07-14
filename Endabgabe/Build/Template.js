"use strict";
var Endabgabe;
(function (Endabgabe) {
    async function AnswerFromNick() {
        let plantsDone = false;
        let tetrisDone = false;
        let learningDone = false;
        let pianoDone = false;
        console.log("AnswerFromNick: starting");
        //Text
        let text = {
            Narrator: {
                T0000: "Hey, mir gehts gerade nicht gut. Schätze wir müssen unser Treffen auf wann anders verschieben... tut mir leid."
            },
            Mira: {
                T0000: "...",
                T0001: "Hm, ich wollte dich nicht vom Lernen abhalten. Wir können uns ja, wenn du möchtest, nach den Prüfungen mal wieder etwas mehr treffen. So wie früher eben...",
                T0002: "Klar, sonst hätte ich ja nicht gefragt.",
                T0003: "Naja dann gehe ich mal wieder. Schreib mich einfach mal an, wenn es dir passt.",
                T0004: "Supi. Bis dann.",
                T0005: "Morgen? Hm, eigentlich sollte ich lernen. In einer Woche gehts los und ich habe noch nicht angefangen...",
                T0006: "Aber ein Tag mehr oder weniger wird da auch keinen Unterschied mehr machen.",
                T0007: "Alles klar. Dann morgen. Kommst du zu mir?",
                T0008: "Okay. Bis morgen dann.",
                T0009: "Neuer Tag neues Glück.",
                T0010: "Noch eine Woche bis zur ersten Prüfung und noch 3 Stunden bis Nick kommt.",
                T0011: "Was mache ich denn bis dahin?",
                T0012: "Nick sollte mittlerweile eigentlich schon längst da sein? Wo bleibt er nur?",
                T0013: "...",
                T0014: "Oh, er hat mir geschrieben.",
                T0015: "Hm... schade. Hoffe, es ist nichts Schlimmes.",
                T0016: "Naja dann wird eben weiter gelernt.",
                T0017: "...",
                T0018: "Eine Drehmatrix ist... eine reelle, orthogonale Matrix.",
                T0019: "...",
                T0020: "Rechtshändiges Koordinatensystem... Wie muss ich meine Hand nochmal halten?",
                T0021: "Daumen auf mich gerichtet, Zeigefinger nach oben...Mittelfinger... Nein, ich glaube, das stimmt nicht.",
                T0022: "...",
                T0023: "Einheitsmatrix... multipliziert mit einer anderen Matrix bleibt die gleiche Matrix...",
                T0024: "Das müsste ja dann so stimmen.",
                T0025: "...",
                T0026: "Vielleicht sollte ich morgen mal bei ihm vorbeigehen und schauen wie es ihm geht.",
                T0027: "Er sah ja gestern schon irgendwie bedrückt aus...",
                T0028: "Andernfalls gibt es noch so viel Schulstoff, den ich lernen sollte..."
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
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0000);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0001);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.good, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0000);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0002);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.neutral, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0001);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0003);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0002);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0004);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0003);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0004);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0005);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0006);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0005);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0006);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0007);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.good, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0007);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0008);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0008);
        //end day one
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        Endabgabe.fS.Speech.hide();
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        await Endabgabe.fS.update(1);
        //start day two
        Endabgabe.signalDelay2s();
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
        await Endabgabe.fS.update(1);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0009);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0010);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0011);
        while (true) {
            if (learningDone && plantsDone && tetrisDone && pianoDone) {
                break;
            }
            else {
                await whatToDo();
            }
        }
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0012);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0013);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0014);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomHandyAnswer);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0000);
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0015);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0016);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomMath2);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0017);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0018);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0019);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0020);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0021);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0022);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0023);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0024);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0025);
        Endabgabe.fS.Speech.hide();
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        await Endabgabe.fS.update(1);
        await Endabgabe.fS.Text.print("Einige Zeit später...");
        Endabgabe.fS.Text.close();
        await Endabgabe.fS.update();
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomDarker);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0026);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0027);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0028);
        //visit Nick or learn
        let visitOrLearnAnswer = {
            besuchen: "Nick besuchen",
            lernen: "Lernen"
        };
        let visitOrLearn = await Endabgabe.fS.Menu.getInput(visitOrLearnAnswer, "decisionClass");
        switch (visitOrLearn) {
            case visitOrLearnAnswer.besuchen:
                Endabgabe.dataToSave.specialText++;
                break;
            case visitOrLearnAnswer.lernen:
                await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                Endabgabe.fS.Speech.hide();
                await Endabgabe.fS.Location.show(Endabgabe.location.black);
                await Endabgabe.fS.update(2);
                return "neutralEnding";
        }
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        Endabgabe.fS.Speech.hide();
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        await Endabgabe.fS.update(2);
        return "NickNotAtHome";
        async function whatToDo() {
            let whatToDoAnswer = {
                klavier: "Klavier üben",
                pflanzen: "Pflanzen gießen",
                tetris: "Tetris spielen",
                lernen: "Lernen"
            };
            let whatToDo = await Endabgabe.fS.Menu.getInput(whatToDoAnswer, "decisionClass");
            switch (whatToDo) {
                //-------------------piano
                case whatToDoAnswer.klavier:
                    Endabgabe.dataToSave.specialText++;
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    Endabgabe.fS.Speech.hide();
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Location.show(Endabgabe.location.pianoRoom);
                    await Endabgabe.fS.update(Endabgabe.transition.swipe.duration, Endabgabe.transition.swipe.alpha, Endabgabe.transition.swipe.edge);
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Hm, was spiele ich denn heute?");
                    let songsAnswer = {
                        going: "Going",
                        dontStand: "Don't Stand",
                        circle: "Circle"
                    };
                    let songs = await Endabgabe.fS.Menu.getInput(songsAnswer, "decisionClass");
                    switch (songs) {
                        case songsAnswer.going:
                            Endabgabe.dataToSave.specialText++;
                            Endabgabe.mutePianoMusic();
                            Endabgabe.fS.Sound.play(Endabgabe.sound.pianoSongGoing, 0);
                            Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongGoing, 0.3, 1.5, true);
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            break;
                        case songsAnswer.dontStand:
                            Endabgabe.dataToSave.specialText++;
                            Endabgabe.mutePianoMusic();
                            Endabgabe.fS.Sound.play(Endabgabe.sound.pianoSongDontStand, 0);
                            Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongDontStand, 0.3, 1.5, true);
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            break;
                        case songsAnswer.circle:
                            Endabgabe.dataToSave.specialText++;
                            Endabgabe.mutePianoMusic();
                            Endabgabe.fS.Sound.play(Endabgabe.sound.pianoSongCircle, 0);
                            Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongCircle, 0.3, 1.5, true);
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            break;
                    }
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Nicht perfekt, aber ich mache Fortschritte.");
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongGoing, 0, 1, false);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongDontStand, 0, 1, false);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongCircle, 0, 1, false);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0.2, 1, true);
                    Endabgabe.fS.Speech.hide();
                    pianoDone = true;
                    break;
                //-------------------plants  
                case whatToDoAnswer.pflanzen:
                    Endabgabe.dataToSave.specialText++;
                    if (!Endabgabe.dataToSave.plantsOnDayOne) {
                        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
                        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
                        await Endabgabe.fS.update();
                        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Hier ein bisschen Wasser für euch.");
                        await Endabgabe.fS.Sound.fade(Endabgabe.sound.wateringPlants, 0.2, 1);
                        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
                        await Endabgabe.fS.update();
                        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Genauer betrachtet sehen die ziemlich schlimm aus...");
                        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ich hoffe die werden wieder.");
                        await Endabgabe.fS.Sound.fade(Endabgabe.sound.wateringPlants, 0, 1);
                        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
                        await Endabgabe.fS.update();
                    }
                    else {
                        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
                        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
                        await Endabgabe.fS.update();
                        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Die Erde ist noch von gestern feucht. Die brauchen noch kein Wasser.");
                    }
                    Endabgabe.fS.Speech.hide();
                    plantsDone = true;
                    break;
                //-------------------tetris
                case whatToDoAnswer.tetris:
                    Endabgabe.dataToSave.specialText++;
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomLaptop);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Okay, los gehts.");
                    //start tetris musik
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0, 0.3, true);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.tetris, 0.3, 1, true);
                    //fade out (game time)
                    Endabgabe.fS.Speech.hide();
                    await Endabgabe.fS.Location.show(Endabgabe.location.black);
                    await Endabgabe.fS.update(1);
                    await Endabgabe.fS.Text.print("Einige Runden später...");
                    Endabgabe.fS.Text.close();
                    await Endabgabe.fS.update();
                    //fade in
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomLaptop);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Das letzte Level war wirklich eine Herausforderung...");
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.tetris, 0, 0.3, true);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0.2, 1, true);
                    Endabgabe.fS.Speech.hide();
                    tetrisDone = true;
                    break;
                //-------------------lernen
                case whatToDoAnswer.lernen:
                    Endabgabe.dataToSave.specialText++;
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomEnglish);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Heute ist dann wohl Englisch dran.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Indirekte Rede...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Simple Present wird zu Simple Past.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Simple Past, Present Perfect und Past Perfect wird zu... Past Perfect?");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Will wird zu would.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Orts und Zeitangaben im Satz müssen auch angepasst werden?");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "This wird zu that... now zu then und ago zu before.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Da sollte ich mir bei Gelegenheit mal noch ein paar Beispiele anschauen.");
                    Endabgabe.fS.Speech.hide();
                    learningDone = true;
                    break;
            }
        }
    }
    Endabgabe.AnswerFromNick = AnswerFromNick;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function BadEnding() {
        console.log("BadEnding: starting");
        Endabgabe.fS.Character.hideAll();
        Endabgabe.fS.Speech.hide();
        //Bad Ending Screen
        Endabgabe.fS.Sound.fade(Endabgabe.sound.badEnding, 0.2, 0.5, true);
        await Endabgabe.fS.Location.show(Endabgabe.location.badEnding);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
        Endabgabe.fS.Sound.fade(Endabgabe.sound.badEnding, 0, 0.3, false);
    }
    Endabgabe.BadEnding = BadEnding;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function DontRememberBirthday() {
        console.log("DontRememberBirthday: starting");
        let learningDone = false;
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
        Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0.2, 1.5, true);
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0000);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0001);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0002);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0003);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0004);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        while (!learningDone) {
            await whatToDo();
        }
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomDarker);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0005);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0006);
        Endabgabe.fS.Speech.hide();
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        await Endabgabe.fS.update(2);
        return "WaitForAnswer";
        async function whatToDo() {
            let whatToDoAnswer = {
                klavier: "Klavier üben",
                pflanzen: "Pflanzen gießen",
                tetris: "Tetris spielen",
                lernen: "Lernen"
            };
            let whatToDo = await Endabgabe.fS.Menu.getInput(whatToDoAnswer, "decisionClass");
            switch (whatToDo) {
                //-------------------piano
                case whatToDoAnswer.klavier:
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Location.show(Endabgabe.location.pianoRoom);
                    await Endabgabe.fS.update(Endabgabe.transition.swipe.duration, Endabgabe.transition.swipe.alpha, Endabgabe.transition.swipe.edge);
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Erstmal ein wenig einspielen.");
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0, 0.3, false);
                    //play nicks song + Mädchenstimme die mit summt
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.nicksSong, 0.2, 1.5, true);
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Hm, irgendwie kommt mir diese Melodie bekannt vor. Aber woher?");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    Endabgabe.signalDelay2s();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ich kann mich nicht erinnern.");
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.nicksSong, 0, 1, false);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0.2, 1, true);
                    break;
                //-------------------plants  
                case whatToDoAnswer.pflanzen:
                    await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Hier ein bisschen Wasser für euch.");
                    await Endabgabe.fS.Sound.fade(Endabgabe.sound.wateringPlants, 0.2, 1);
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Genauer betrachtet sehen die ziemlich schlimm aus...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ich hoffe die werden wieder.");
                    await Endabgabe.fS.Sound.fade(Endabgabe.sound.wateringPlants, 0, 1);
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
                    await Endabgabe.fS.update();
                    Endabgabe.dataToSave.plantsOnDayOne = true;
                    break;
                //-------------------tetris
                case whatToDoAnswer.tetris:
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomLaptop);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Okay, los gehts.");
                    //start tetris musik
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0, 0.3, false);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.tetris, 0.3, 1, true);
                    //fade out (game time)
                    Endabgabe.fS.Speech.hide();
                    await Endabgabe.fS.Location.show(Endabgabe.location.black);
                    await Endabgabe.fS.update(1);
                    await Endabgabe.fS.Text.print("Einige Runden später...");
                    Endabgabe.fS.Text.close();
                    await Endabgabe.fS.update();
                    //fade in
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomLaptop);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.tetris, 0, 0.3, false);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0.2, 1, true);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Das hat Spaß gemacht.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Innovative Spielmechanik und angemessene Schwierigkeit.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Kein Wunder, dass das alle toll finden.");
                    break;
                //-------------------lernen
                case whatToDoAnswer.lernen:
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0.2, 1, true);
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomMath);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Als erstes Mathematik.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Komplexe Zahlen? Kam das überhaupt im Unterricht dran?");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Die komplexen Zahlen erweitern den Zahlenbereich der reellen Zahlen derart, dass die Gleichung x² + 1 =0 lösbar wird.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Die Zahl i wird als imaginäre Einheit bezeichnet.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Komplexe Zahlen lassen sich durch folgende Eigenschaften definieren: ");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Jede reelle Zahl ist eine komplexe Zahl.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Assoziativgesetz...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Kommutativgesetz...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Distributivgesetz...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Für jede komplexe Zahl x gibt es eine komplexe Zahl -x...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ich glaube, das muss ich mir später nochmal genauer anschauen.");
                    learningDone = true;
                    break;
            }
        }
    }
    Endabgabe.DontRememberBirthday = DontRememberBirthday;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function EndOfNovel() { }
    Endabgabe.EndOfNovel = EndOfNovel;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function FinalConversation() {
        let text = {
            Mira: {
                T0000: "...",
                T0001: "NICK??",
                T0002: "Nick, wach auf!",
                T0003: "Er ist ganz kalt...",
                T0004: "Und er reagiert auch nicht... Aber er atmet.",
                T0005: "Oh Gott, was mach ich denn jetzt?",
                T0006: "Ich sollte einen Krankenwagen rufen!",
                T0007: "Mist, kein Netz.",
                T0008: "Egal, dann halt nicht.",
                T0009: "Erstmal schauen, ob er verletzt ist.",
                T0010: "Sind das da an deinen Armen... Nick... warum nur...",
                T0011: "Egal, das hat Zeit bis später. Ich muss ihn erstmal nach Hause bringen bevor es noch mit Regen anfängt!",
                T0012: "Jetzt heißt es warten...",
                T0013: "Nick! Endlich bist du wach!",
                T0014: "Was ich hier mache?",
                T0015: "Ich hab dich bewusstlos in unserem alten Geheimversteck gefunden und nach Hause getragen.",
                T0016: "Sag du mir lieber mal was das für eine Aktion war?",
                T0017: "Was bitte hattest du denn vor? Was wenn ich dich nicht gefunden hätte?",
                T0018: "Wie weg? Wohin?",
                T0019: "Die Narben...",
                T0020: "W..Warst du das?",
                T0021: "Warum... Kann ich dir irgendwie helfen? Ich will nicht, dass du sowas machst.",
                T0022: "Glaubst du, dass du depressiv bist?",
                T0023: "Kennst du den Grund dafür? Also gibt es vielleicht etwas das dich runterzieht?",
                T0024: "...",
                T0025: "...",
                T0026: "Aber dann schreib mir doch.. Oder irgendwem... Einfach abzuhauen kann doch nicht die Lösung sein...",
                T0027: "Nick...",
                T0028: "Hm?",
                T0029: "Aber zu es über sich ergehen zu lassen macht es doch auch nicht besser!",
                T0030: "Was redest du da?",
                T0031: "NICK! Hör auf!",
                T0032: "Es reicht! Hör auf sowas zu sagen! Ich bin froh, dass du existierst. ",
                T0033: "Denkst du oft über sowas nach?",
                T0034: "Ja, also dass es besser wäre, wenn du nicht existieren würdest...",
                T0035: "Sowas meine ich...",
                T0036: "... Ich weiß nicht.",
                T0037: "Eigentlich nicht, nein...",
                T0038: "...",
                T0039: "... Warst du deswegen schon mal bei einem Psychologen?",
                T0040: "Warum nicht?",
                T0041: "Und wenn wir zusammen hingehen? Wäre das besser?",
                T0042: "Dann machen wir das so. Zusammen schaffen wir das!"
            },
            Nick: {
                T0000: "Ar... argh...",
                T0001: "Wo ... bin ich?",
                T0002: "M.. Mira? Was machst du hier?",
                T0003: "... ich",
                T0004: "... ich wollte weg... von hier.",
                T0005: "... ist doch egal! Einfach weg! Ich halte es nicht mehr aus...",
                T0006: "... Ich ... will nicht mehr...",
                T0007: "... Ja.",
                T0008: "Ich weiß nicht... kann schon sein.",
                T0009: "Schwer zu sagen.",
                T0010: "Es gibt Tage, an denen fühle ich mich einfach nutzlos...",
                T0011: "Egal was ich mache, alles ergibt einfach keinen Sinn und bringt mich nicht weiter... ",
                T0012: "Ich habe auf nichts Lust, egal wie sehr ich versuche mich für etwas zu motivieren...",
                T0013: "Nichts bringt mich weiter. Tag für Tag immer das Gleiche...",
                T0014: "Ich wollte dich eigentlich nicht mit sowas belasten...",
                T0015: "Du hast ja auch zu tun.",
                T0016: "Da musst du dich nicht auch noch um meine Probleme kümmern.",
                T0017: "Ich will nicht, dass du auch noch unter meinen Problemen leidest...",
                T0018: "Ich will dich nicht auch noch zusätzlich belasten...",
                T0019: "Es reicht doch schon, dass ich unter meinen Problemen leide...",
                T0020: "Nein.. Deswegen wäre es vielleicht auch besser, wenn ich nicht weiter existieren würde...",
                T0021: "So würde ich niemanden mehr damit belasten und ich müsste auch nicht mehr leiden...",
                T0022: "Naja das wäre doch für alle das Beste.",
                T0023: "?",
                T0024: "...",
                T0025: "Was meinst du?",
                T0026: "Hin und wieder. Macht doch jeder mal, oder?",
                T0027: "Du nicht?",
                T0028: "Oh...",
                T0029: "...",
                T0030: "Bisher nicht.",
                T0031: "Ist mir irgendwie unangenehm...",
                T0032: "...",
                T0033: "Denke schon."
            }
        };
        Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0, 1, true);
        Endabgabe.fS.Sound.fade(Endabgabe.sound.mysteryTheme, 0.1, 4, true);
        await Endabgabe.fS.Location.show(Endabgabe.location.hideout);
        await Endabgabe.fS.update(2);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0000);
        Endabgabe.fS.Character.hideAll();
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.sad, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0001);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0002);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0003);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0004);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0005);
        //wait or ambulance
        let waitOrAmbulanceAnswer = {
            wait: "Warten",
            ambulance: "Hilfe holen"
        };
        let waitOrAmbulance = await Endabgabe.fS.Menu.getInput(waitOrAmbulanceAnswer, "decisionClass");
        switch (waitOrAmbulance) {
            case waitOrAmbulanceAnswer.wait:
                return await badEnding2();
            case waitOrAmbulanceAnswer.ambulance:
                Endabgabe.dataToSave.specialText++;
                break;
        }
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0006);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0007);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0008);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0009);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0010);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0011);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, "Mira trägt Nick nach Hause und legt ihn auf sein Bett.");
        Endabgabe.fS.Sound.fade(Endabgabe.sound.rain, 0.015, 3, true);
        Endabgabe.fS.Sound.fade(Endabgabe.sound.mysteryTheme, 0, 1, false);
        Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldThemeDark, 0.03, 1, true);
        Endabgabe.fS.Speech.hide();
        Endabgabe.fS.Character.hideAll();
        await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomBadWeatherNoPhoto);
        await Endabgabe.fS.update(Endabgabe.transition.swipe.duration, Endabgabe.transition.swipe.alpha, Endabgabe.transition.swipe.edge);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.sad, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0012);
        Endabgabe.fS.Speech.hide();
        Endabgabe.fS.Character.hideAll();
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        await Endabgabe.fS.update(2);
        await Endabgabe.fS.Text.print("Zwei Stunden später...");
        Endabgabe.fS.Text.close();
        await Endabgabe.fS.update();
        await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomBadWeatherNoPhoto);
        await Endabgabe.fS.update(1);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0000);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.tired, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.sad, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0001);
        Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.crying, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0013);
        Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.sad, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0002);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0014);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0015);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0016);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0017);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0003);
        Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.crying, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0004);
        Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.sad, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0018);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0005);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0006);
        //get angry or talk
        let getAngryOrTalkAnswer = {
            angry: "Wütend werden",
            scars: "Narben"
        };
        let getAngryOrTalk = await Endabgabe.fS.Menu.getInput(getAngryOrTalkAnswer, "decisionClass");
        switch (getAngryOrTalk) {
            case getAngryOrTalkAnswer.angry:
                return await badEnding3();
            case getAngryOrTalkAnswer.scars:
                Endabgabe.dataToSave.specialText++;
                break;
        }
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0019);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0020);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "...");
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0007);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
        Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.crying, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0021);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "...");
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0022);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0008);
        Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.crying, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0023);
        Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.sad, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0009);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0024);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0010);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0011);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0012);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0013);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0025);
        Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.sad, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0026);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0014);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0015);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0016);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0027);
        //get angry or talk
        let ThanksOrContradictAnswer = {
            thanks: "Danke",
            contradict: "Widersprechen"
        };
        let ThanksOrContradict = await Endabgabe.fS.Menu.getInput(ThanksOrContradictAnswer, "decisionClass");
        switch (ThanksOrContradict) {
            case ThanksOrContradictAnswer.thanks:
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Das ist nett von dir.");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Stimmt schon. Ich hatte in letzter Zeit wirklich viel zu tun...");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Trotzdem solltest du dir darüber nicht so viele Gedanken machen.");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Es ist doch wichtiger das es dir gut geht...");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "...");
                break;
            case ThanksOrContradictAnswer.contradict:
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Deine Probleme sind hier ja gerade wohl wichtiger!");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ich bekomme meine Probleme schon irgendwie auf die Reihe!");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "...");
                break;
        }
        Endabgabe.dataToSave.specialText++;
        Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.crying, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0017);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0028);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0018);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0019);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0029);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0020);
        Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.tired, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0021);
        //get angry or talk
        let getAngryOrTalkAnswer2 = {
            angry: "Wütend werden",
            nick: "Nick!"
        };
        let getAngryOrTalk2 = await Endabgabe.fS.Menu.getInput(getAngryOrTalkAnswer2, "decisionClass");
        switch (getAngryOrTalk2) {
            case getAngryOrTalkAnswer2.angry:
                if (!Endabgabe.skipBadEndingNr3) {
                    return await badEnding3();
                }
                else {
                    //skip scissor scene
                    console.log("can't find obj: scissor - skipping badEnding3");
                    break;
                }
            case getAngryOrTalkAnswer2.nick:
                Endabgabe.dataToSave.specialText++;
                break;
        }
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0030);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0022);
        Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.crying, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0031);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0023);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0032);
        Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.sad, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0024);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0033);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0025);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0034);
        Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.sad, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0035);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0026);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0036);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0027);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0037);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0028);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0038);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0029);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0039);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0030);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0040);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0031);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0041);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0032);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0033);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0042);
        Endabgabe.fS.Speech.hide();
        Endabgabe.fS.Character.hideAll();
        await Endabgabe.fS.Location.show(Endabgabe.location.colorBeforeEnding);
        await Endabgabe.fS.update(2);
        Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldThemeDark, 0, 2, true);
        Endabgabe.fS.Sound.fade(Endabgabe.sound.goodEnding, 0.2, 2, true);
        await Endabgabe.fS.Text.print("Kurz nach den Prüfungen beginnen Mira und Nick damit einen geeigneten Psychologen zu suchen, bei Nick sich wohlfühlt.");
        Endabgabe.fS.Text.close();
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, "", true, "hiddenText");
        return "GoodEnding";
        async function badEnding2() {
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Vielleicht wacht er ja gleich auf.");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, "Du wartest 30 Minuten neben Nick. Es beginnt zu regnen.");
            Endabgabe.fS.Sound.fade(Endabgabe.sound.rain, 0.04, 1, true);
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Mist, er kommt nicht zu sich.");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ich muss ihn erstmal nach Hause ins Trockene bringen!");
            Endabgabe.fS.Sound.fade(Endabgabe.sound.rain, 0.02, 1, true);
            Endabgabe.fS.Sound.fade(Endabgabe.sound.mysteryTheme, 0, 1, false);
            Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldThemeDark, 0.03, 1, true);
            Endabgabe.fS.Character.hideAll();
            Endabgabe.fS.Speech.hide();
            await Endabgabe.fS.Location.show(Endabgabe.location.black);
            await Endabgabe.fS.update(1);
            Endabgabe.fS.Speech.hide();
            Endabgabe.fS.Character.hideAll();
            await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomBadWeatherNoPhoto);
            await Endabgabe.fS.update(Endabgabe.transition.swipe.duration, Endabgabe.transition.swipe.alpha, Endabgabe.transition.swipe.edge);
            await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.sad, Endabgabe.fS.positions.bottomcenter);
            await Endabgabe.fS.update();
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Was mache ich denn jetzt?");
            //wait or ambulance
            let waitOrChangeAnswer = {
                wait: "Warten",
                change: "Umziehen"
            };
            let waitOrChange = await Endabgabe.fS.Menu.getInput(waitOrChangeAnswer, "decisionClass");
            switch (waitOrChange) {
                case waitOrChangeAnswer.wait:
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Bis er aufwacht, dauert es sicher nicht mehr lange...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Oh man... bin ich...müde...");
                    Endabgabe.fS.Character.hideAll();
                    Endabgabe.fS.Speech.hide();
                    await Endabgabe.fS.Location.show(Endabgabe.location.black);
                    await Endabgabe.fS.update(0.5);
                    await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomBadWeatherNoPhoto);
                    await Endabgabe.fS.update(0.7);
                    await Endabgabe.fS.Location.show(Endabgabe.location.black);
                    await Endabgabe.fS.update(0.3);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldThemeDark, 0, 0.5, true);
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                    await Endabgabe.fS.Location.show(Endabgabe.location.black);
                    await Endabgabe.fS.update(0.2);
                    await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomBadWeatherNoPhoto);
                    await Endabgabe.fS.update(0.7);
                    await Endabgabe.fS.Location.show(Endabgabe.location.black);
                    await Endabgabe.fS.update(0.2);
                    await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomBadWeatherNoPhoto);
                    await Endabgabe.fS.update(0.7);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldThemeDark, 0.03, 0.5, true);
                    await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Mist, ich bin eingeschlafen.");
                    Endabgabe.fS.Character.hideAll();
                    await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.sad, Endabgabe.fS.positions.bottomcenter);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ich hoffe, dass bei Nick alles okay ist.");
                    break;
                case waitOrChangeAnswer.change:
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ich bin ganz nass vom Regen. Ich sollte schnell nach Hause gehen und mich umziehen bevor ich noch krank werde.");
                    Endabgabe.fS.Character.hideAll();
                    Endabgabe.fS.Speech.hide();
                    await Endabgabe.fS.Location.show(Endabgabe.location.black);
                    await Endabgabe.fS.update(1);
                    await Endabgabe.fS.Text.print("30 Minuten später...");
                    Endabgabe.fS.Text.close();
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomBadWeatherNoPhoto);
                    await Endabgabe.fS.update(1);
                    break;
            }
            await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.sad, Endabgabe.fS.positions.bottomcenter);
            await Endabgabe.fS.update();
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Vielleicht sollte ich seine Atmung überprüfen.");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
            Endabgabe.fS.Character.hideAll();
            await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.crying, Endabgabe.fS.positions.bottomcenter);
            await Endabgabe.fS.update();
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Oh nein...");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Bitte nicht...");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Nein.");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Nein..");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Nein...");
            Endabgabe.fS.Character.hideAll();
            Endabgabe.fS.Speech.hide();
            await Endabgabe.fS.Location.show(Endabgabe.location.black);
            await Endabgabe.fS.update(2);
            return "BadEnding";
        }
        async function badEnding3() {
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Du spinnst doch! Glaubst du wirklich, dass das etwas ändern würde?");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "...");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Merkst du denn nicht, dass es dadurch nur schlimmer wird? Reiß dich mal zusammen!");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "...");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "Tut mir leid...");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Sollte es auch! Ich hab mir echt Sorgen gemacht!");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "...");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Mach sowas nicht nochmal!");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "Ok...");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Versprochen? Du läufst nicht mehr weg?");
            Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
            await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.tired, Endabgabe.nickPosWhenBoth);
            await Endabgabe.fS.update();
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "Ja... kein Weglaufen mehr...");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "Ich muss mal aufs Klo... Komme gleich wieder.");
            Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
            await Endabgabe.fS.update(1);
            await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
            await Endabgabe.fS.Character.animate(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.sad, Endabgabe.moveRightAnim());
            await Endabgabe.fS.update();
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, "", true, "hiddenText");
            await Endabgabe.fS.Sound.fade(Endabgabe.sound.hitTheFloor, 3, 0.5);
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Nick? Alles okay?");
            //lookOrWait
            let lookOrWaitAnswer = {
                look: "Nachschauen",
                wait: "Warten"
            };
            let lookOrWait = await Endabgabe.fS.Menu.getInput(lookOrWaitAnswer, "decisionClass");
            switch (lookOrWait) {
                case lookOrWaitAnswer.look:
                    break;
                case lookOrWaitAnswer.wait:
                    Endabgabe.fS.Speech.hide();
                    Endabgabe.fS.Character.hideAll();
                    await Endabgabe.fS.Location.show(Endabgabe.location.black);
                    await Endabgabe.fS.update(1);
                    await Endabgabe.fS.Text.print("Ein paar Minuten später...");
                    Endabgabe.fS.Text.close();
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomBadWeatherNoPhoto);
                    await Endabgabe.fS.update(1);
                    await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Nick?");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Das dauert mir zu lange.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Nick, ich komme jetzt rein.");
            }
            Endabgabe.fS.Speech.hide();
            Endabgabe.fS.Character.hideAll();
            await Endabgabe.fS.Location.show(Endabgabe.location.nicksBathroomDead);
            await Endabgabe.fS.update(Endabgabe.transition.swipe.duration, Endabgabe.transition.swipe.alpha, Endabgabe.transition.swipe.edge);
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, "", true, "hiddenText");
            await Endabgabe.fS.Location.show(Endabgabe.location.black);
            await Endabgabe.fS.update(2);
            Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldThemeDark, 0, 1, true);
            return "BadEnding";
        }
    }
    Endabgabe.FinalConversation = FinalConversation;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function GoodEnding() {
        console.log("goodEnding: starting");
        console.log(Endabgabe.dataToSave.specialText); //23 wenn alles mitgenommen
        Endabgabe.fS.Character.hideAll();
        Endabgabe.fS.Speech.hide();
        //good Ending Screen
        await Endabgabe.fS.Location.show(Endabgabe.location.goodEnding);
        await Endabgabe.fS.update(2);
        //Special when enought options were clicked
        if (Endabgabe.dataToSave.specialText >= 23) {
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Bist du aufgeregt?");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "...");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "Ein bisschen.");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Wir schaffen das!");
        }
        Endabgabe.fS.Speech.hide();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, "", true, "hiddenText");
        await Endabgabe.fS.Location.show(Endabgabe.location.goodEndingBlurred);
        await Endabgabe.fS.update(0.7);
    }
    Endabgabe.GoodEnding = GoodEnding;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    Endabgabe.f = FudgeCore;
    Endabgabe.fS = FudgeStory;
    console.log("FudgeStory main starting");
    /**Stuff needed in Scenes */
    //Both characters on screen
    Endabgabe.miraPosWhenBoth = new Endabgabe.fS.Position(-384, -360);
    Endabgabe.nickPosWhenBoth = new Endabgabe.fS.Position(384, -360);
    //delay
    Endabgabe.signalDelay2s = Endabgabe.fS.Progress.defineSignal([() => Endabgabe.fS.Progress.delay(2)]);
    //variable to skip third bad ending
    Endabgabe.skipBadEndingNr3 = false;
    //mute piano songs
    function mutePianoMusic() {
        console.log("Muting all Songs");
        Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0, 0.1, false);
        Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongGoing, 0, 0.1, false);
        Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongDontStand, 0, 0.1, false);
        Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongCircle, 0, 0.1, false);
    }
    Endabgabe.mutePianoMusic = mutePianoMusic;
    //move to left animation
    function moveLeftAnim() {
        return {
            start: { translation: Endabgabe.fS.positions.bottomcenter },
            end: { translation: Endabgabe.miraPosWhenBoth },
            duration: 2,
            playmode: Endabgabe.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Endabgabe.moveLeftAnim = moveLeftAnim;
    //move to right animation
    function moveRightAnim() {
        return {
            start: { translation: Endabgabe.miraPosWhenBoth },
            end: { translation: Endabgabe.fS.positions.bottomcenter },
            duration: 2,
            playmode: Endabgabe.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Endabgabe.moveRightAnim = moveRightAnim;
    Endabgabe.sound = {
        //Music
        overworldTheme: "Audio/DoingStuff.mp3",
        overworldThemeDark: "Audio/slower.mp3",
        mysteryTheme: "Audio/AloneInDarkness.mp3",
        goodEnding: "Audio/Endings/NicksAliveV2.mp3",
        neutralEnding: "Audio/Endings/LosingSanity.mp3",
        badEnding: "Audio/Endings/LosingSanity.mp3",
        pianoSongGoing: "Audio/Piano/Going.mp3",
        pianoSongDontStand: "Audio/Piano/DontStand.mp3",
        pianoSongCircle: "Audio/Piano/Circle.mp3",
        tetris: "Audio/Tetris.mp3",
        nicksSong: "Audio/Piano/NicksSong_feat_Lara.mp3",
        harvest: "Audio/Harvest.mp3",
        //Sounds
        hitTheFloor: "Audio/Sounds/HitTheFloor.mp3",
        wateringPlants: "Audio/Sounds/WateringPlants.mp3",
        grabPaper: "Audio/Sounds/grabPaper.mp3",
        rain: "Audio/Sounds/Rain.mp3"
    };
    Endabgabe.transition = {
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
    Endabgabe.location = {
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
    };
    Endabgabe.characters = {
        Narrator: {
            name: "",
        },
        Mira: {
            name: "Mira: ",
            origin: Endabgabe.fS.ORIGIN.BOTTOMCENTER,
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
            origin: Endabgabe.fS.ORIGIN.BOTTOMCENTER,
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
            origin: Endabgabe.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                good: "Images/Characters/Nachbar/Nachbar_good.png",
                neutral: "Images/Characters/Nachbar/Nachbar_neutral.png"
            }
        }
    };
    Endabgabe.dataToSave = {
        plantsOnDayOne: false,
        specialText: 0
    };
    Endabgabe.items = {
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
    let showingMenu = false;
    let showingSpeech = true;
    let showingCredits = true;
    let controlsObj = document.getElementById("controls");
    let creditsObj = document.getElementById("credit");
    //key inputs
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Endabgabe.f.KEYBOARD_CODE.F2:
                console.log("Save");
                await Endabgabe.fS.Progress.save();
                break;
            case Endabgabe.f.KEYBOARD_CODE.F9:
                console.log("Load");
                await Endabgabe.fS.Progress.load();
                break;
            case Endabgabe.f.KEYBOARD_CODE.I:
                if (Endabgabe.inventoryOpen) {
                    Endabgabe.fS.Inventory.close();
                    Endabgabe.inventoryOpen = false;
                }
                else {
                    Endabgabe.fS.Inventory.open();
                    Endabgabe.inventoryOpen = true;
                }
                break;
            case Endabgabe.f.KEYBOARD_CODE.ESC:
                let menuObj = document.getElementsByClassName("gameMenu")[0];
                if (showingMenu) {
                    menuObj.style.display = "none";
                    showingMenu = false;
                }
                else {
                    menuObj.style.display = "block";
                    showingMenu = true;
                }
                break;
            case Endabgabe.f.KEYBOARD_CODE.T:
                if (showingSpeech) {
                    Endabgabe.fS.Speech.hide();
                    showingSpeech = false;
                }
                else {
                    Endabgabe.fS.Speech.show();
                    showingSpeech = true;
                }
                break;
        }
    }
    //OutOfGameMenu
    let gameMenuOptions = {
        save: "Speichern",
        load: "Laden",
        volumeUp: "Lauter",
        volumeDown: "Leiser",
        control: "Steuerung",
        credits: "Credits"
    };
    let gameMenu;
    console.log(gameMenu);
    async function Menu(_option) {
        let volumeCurrent = Endabgabe.f.AudioManager.default.volume;
        switch (_option) {
            case gameMenuOptions.save:
                await Endabgabe.fS.Progress.save();
                break;
            case gameMenuOptions.load:
                await Endabgabe.fS.Progress.load();
                break;
            case gameMenuOptions.volumeUp:
                if (volumeCurrent < 3) {
                    Endabgabe.fS.Sound.setMasterVolume(volumeCurrent + 0.2);
                }
                break;
            case gameMenuOptions.volumeDown:
                if (volumeCurrent > 0) {
                    Endabgabe.fS.Sound.setMasterVolume(volumeCurrent - 0.2);
                }
                break;
            case gameMenuOptions.credits:
                showCredits();
                break;
            case gameMenuOptions.control:
                showControls();
                break;
        }
    }
    function showCredits() {
        if (showingCredits) {
            console.log("showing");
            creditsObj.style.display = "none";
            showingCredits = false;
        }
        else {
            console.log("hidden");
            creditsObj.style.display = "flex";
            controlsObj.style.display = "none";
            showingControls = false;
            showingCredits = true;
        }
    }
    let showingControls = false;
    function showControls() {
        if (showingControls) {
            controlsObj.style.display = "none";
            showingControls = false;
        }
        else {
            controlsObj.style.display = "flex";
            creditsObj.style.display = "none";
            showingCredits = false;
            showingControls = true;
        }
    }
    gameMenu = Endabgabe.fS.Menu.create(gameMenuOptions, Menu, "gameMenu");
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Endabgabe.WakeUp, name: "WakeUp" },
            //bad scenes
            { id: "DontRememberBirthday", scene: Endabgabe.DontRememberBirthday, name: "DontRememberBirthday" },
            { id: "WaitForAnswer", scene: Endabgabe.WaitForAnswer, name: "WaitForAnswer" },
            { id: "BadEnding", scene: Endabgabe.BadEnding, name: "BadEnding", next: "endOfNovel" },
            //neutral scenes
            { id: "RememberWhilePiano", scene: Endabgabe.RememberWhilePiano, name: "RememberWhilePiano" },
            { id: "NoAnswerFromNick", scene: Endabgabe.NoAnswerFromNick, name: "NoAnswerFromNick" },
            { id: "neutralEnding", scene: Endabgabe.NeutralEnding, name: "NeutralEnding", next: "endOfNovel" },
            //good scenes
            { id: "NicksBirthday", scene: Endabgabe.NicksBirthday, name: "NicksBirthday" },
            { id: "AnswerFromNick", scene: Endabgabe.AnswerFromNick, name: "AnswerFromNick" },
            { id: "NickNotAtHome", scene: Endabgabe.NickNotAtHome, name: "NickNotAtHome" },
            { id: "FinalConversation", scene: Endabgabe.FinalConversation, name: "FinalConversation" },
            { id: "GoodEnding", scene: Endabgabe.GoodEnding, name: "GoodEnding", next: "endOfNovel" },
            //last Scene in Novel
            { id: "endOfNovel", scene: Endabgabe.EndOfNovel, name: "EndOfNovel" }
        ];
        //set progress data
        Endabgabe.fS.Progress.setData(Endabgabe.dataToSave);
        // start the sequence
        Endabgabe.fS.Progress.go(scenes);
    }
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function NeutralEnding() {
        console.log("neutralEnding: starting");
        Endabgabe.fS.Character.hideAll();
        Endabgabe.fS.Speech.hide();
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0, 1, false);
        await Endabgabe.fS.update(1.5);
        await Endabgabe.signalDelay2s();
        await Endabgabe.fS.Text.print("2 Wochen später - nach den Prüfungen.");
        await Endabgabe.fS.Text.print("Da Nick nicht auf deine Antworten reagiert, beschließt du bei ihm vorbeizugehen, um zu schauen, wie es ihm geht.");
        await Endabgabe.fS.Text.print("Als du vor seiner Haustür stehst und keiner aufmacht, wirst du von seinen Nachbarn angesprochen.");
        Endabgabe.fS.Sound.fade(Endabgabe.sound.badEnding, 0.2, 1.5, true);
        await Endabgabe.fS.Text.print("Von diesen erfährst du, dass Nick vor knapp eineinhalb Wochen verschwunden und seit dem vermisst ist.");
        Endabgabe.fS.Text.close();
        await Endabgabe.fS.update();
        await Endabgabe.fS.Location.show(Endabgabe.location.neutralEnding);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
        Endabgabe.fS.Sound.fade(Endabgabe.sound.badEnding, 0, 0.3, false);
    }
    Endabgabe.NeutralEnding = NeutralEnding;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function NickNotAtHome() {
        let nicksRoom = false;
        let bathroom = false;
        let kitchen = false;
        let scissorRemoved = false;
        //Text
        let text = {
            Narrator: {
                T0000: "*Klopf Klopf*"
            },
            Mira: {
                T0000: "10:00 Uhr. Nick sollte mittlerweile auch wach sein. Vielleicht sollte ich ihm mal noch schreiben, dass ich vorbeikomme.",
                T0001: "So, dann mal aufstehen, richten und frühstücken.",
                T0002: "Jetzt ist 11:30 und er hat immer noch nicht geantwortet...",
                T0003: "Naja ich geh einfach mal los. Wird schon klappen.",
                T0004: "Nick? Bist du da?",
                T0005: "...",
                T0006: "NICK?",
                T0007: "...",
                T0008: "Scheint keiner da zu sein. Vielleicht wissen ja die Nachbarn wo er ist oder wann er wieder kommt.",
                T0009: "Oh, hey Elias. Ich wollte dich eigentlich eben fragen, ob du weißt, wo Nick hingegangen ist.",
                T0010: "Oh okay, naja danke trotzdem.",
                T0011: "Bis dann.",
                T0012: "Oh Mann... jetzt mache ich mir wirklich Sorgen.",
                T0013: "Vielleicht sollte ich einfach mal rein und schauen, ob alles okay ist.",
                T0014: "Wenn ich mich richtig erinnere, hatte Nick hier doch irgendwo die Zahlenkombination für seine Tür versteckt.",
                T0015: "Wo könnte der Code sein?",
                T0016: "Vielleicht unter der Schuhmatte?",
                T0017: "Nein, da ist nix... Dann bleibt ja eigentlich nur noch der Blumentopf übrig...",
                T0018: "...",
                T0019: "Da ist er ja!",
                T0020: "Okay, dann mal schauen...",
                T0021: "Wo suche ich am besten als Erstes?",
                T0022: "Hier liegt immer noch das Foto von unserem früheren Geheimversteck...",
                T0023: "Könnte es sein, dass er da ist?",
                T0024: "Einen Versuch ist es ja wert...",
                T0025: "Ich mache mich gleich auf den Weg."
            },
            Nachbar: {
                T0000: "Hey Mira, was machst du denn hier?",
                T0001: "Nein, tut mir leid. Hab' ihn selbst seit vorgestern nicht mehr gesehen.",
                T0002: "...",
                T0003: "Wenn ich's mir recht überlege habe ich ihn nicht einmal gehört.",
                T0004: "Das gibt's eigentlich nicht oft. Normalerweise läuft bei ihm immer ein bisschen Musik.",
                T0005: "Naja, ich würde mich ja gerne noch etwas länger mit dir unterhalten, aber ich muss jetzt los.",
                T0006: "Kein Ding.",
                T0007: "Bis dann."
            }
        };
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0000);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0001);
        Endabgabe.fS.Speech.hide();
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        await Endabgabe.fS.update(1);
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
        await Endabgabe.fS.update(1);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0002);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0003);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        Endabgabe.fS.Speech.hide();
        await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomDoor);
        await Endabgabe.fS.update(Endabgabe.transition.swipe.duration, Endabgabe.transition.swipe.alpha, Endabgabe.transition.swipe.edge);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0000);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0004);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0005);
        //wait or knock again
        let waitOrKnockAnswer = {
            warten: "Warten",
            klopfen: "Nochmal Klopfen"
        };
        let waitOrKnock = await Endabgabe.fS.Menu.getInput(waitOrKnockAnswer, "decisionClass");
        switch (waitOrKnock) {
            case waitOrKnockAnswer.warten:
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Scheint keiner da zu sein... Dann geh ich wohl wieder.");
                return "neutralEnding";
            case waitOrKnockAnswer.klopfen:
                Endabgabe.dataToSave.specialText++;
                break;
        }
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0000);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0006);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0007);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0008);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.animate(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.moveLeftAnim());
        await Endabgabe.fS.update();
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nachbar, Endabgabe.characters.Nachbar.pose.good, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nachbar, text.Nachbar.T0000);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0009);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nachbar, text.Nachbar.T0001);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Nachbar);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nachbar, Endabgabe.characters.Nachbar.pose.neutral, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nachbar, text.Nachbar.T0002);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nachbar, text.Nachbar.T0003);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nachbar, text.Nachbar.T0004);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nachbar, text.Nachbar.T0005);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0010);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nachbar, text.Nachbar.T0006);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Nachbar);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nachbar, Endabgabe.characters.Nachbar.pose.good, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nachbar, text.Nachbar.T0007);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0011);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Nachbar);
        await Endabgabe.fS.update(1);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.animate(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.moveRightAnim());
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0012);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0013);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0014);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0015);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0016);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0017);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0018);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0019);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0020);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Location.show(Endabgabe.location.numberCode);
        await Endabgabe.fS.update(1);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, "", true, "hiddenText");
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomDoor);
        await Endabgabe.fS.update(1);
        Endabgabe.fS.Inventory.add(Endabgabe.items.Code);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, "Zahlencode wurde deinem Inventar hinzugefügt");
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, "Code eingeben: ");
        await inputCode();
        //waiting for input of the right code
        async function inputCode() {
            console.log("Nothing, don't look! \n https://github.com/SamuelKasper/VisualNovelEndabgabe/tree/main/Endabgabe/Other");
            let code = await Endabgabe.fS.Speech.getInput();
            if (code == "139181") {
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Das wäre geschafft.");
            }
            else if (code == "playHdnSong") {
                Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0, 0.2, true);
                Endabgabe.fS.Sound.fade(Endabgabe.sound.harvest, 0.3, 0.5, true);
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, "Playing harvest.mp3", true);
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, "Code eingeben:", false);
                await inputCode();
            }
            else if (code == "rmvScssor") {
                if (scissorRemoved) {
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, "'scissor' not found.", true);
                }
                else {
                    Endabgabe.skipBadEndingNr3 = true;
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, "Removed object: scissor.", true);
                    scissorRemoved = true;
                }
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, "Code eingeben:", false);
                await inputCode();
            }
            else {
                await inputCode();
            }
        }
        Endabgabe.fS.Sound.fade(Endabgabe.sound.harvest, 0, 0, false);
        //fS.Sound.fade(sound.overworldTheme, 0.2, 0.5, true);
        //progress story
        Endabgabe.fS.Speech.hide();
        Endabgabe.fS.Character.hideAll();
        await Endabgabe.fS.update();
        await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomGoodWeather);
        await Endabgabe.fS.update(Endabgabe.transition.swipe.duration, Endabgabe.transition.swipe.alpha, Endabgabe.transition.swipe.edge);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0021);
        Endabgabe.fS.Speech.hide();
        Endabgabe.fS.Character.hideAll();
        await Endabgabe.fS.update();
        while (true) {
            if (nicksRoom && bathroom && kitchen) {
                break;
            }
            else {
                await searchNick();
            }
        }
        async function searchNick() {
            //Where to search
            let whereToSearchAnswer = {
                Kueche: "Küche",
                NicksZimmer: "Nicks Zimmer",
                Badezimmer: "Badezimmer"
            };
            let whereToSearch = await Endabgabe.fS.Menu.getInput(whereToSearchAnswer, "decisionClass");
            switch (whereToSearch) {
                case whereToSearchAnswer.Kueche:
                    Endabgabe.dataToSave.specialText++;
                    Endabgabe.fS.Speech.hide();
                    Endabgabe.fS.Character.hideAll();
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Location.show(Endabgabe.location.nicksKitchen);
                    await Endabgabe.fS.update(Endabgabe.transition.swipe.duration, Endabgabe.transition.swipe.alpha, Endabgabe.transition.swipe.edge);
                    await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Nope, hier ist er nicht.");
                    kitchen = true;
                    break;
                case whereToSearchAnswer.NicksZimmer:
                    Endabgabe.dataToSave.specialText++;
                    Endabgabe.fS.Speech.hide();
                    Endabgabe.fS.Character.hideAll();
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomGoodWeather);
                    await Endabgabe.fS.update(Endabgabe.transition.swipe.duration, Endabgabe.transition.swipe.alpha, Endabgabe.transition.swipe.edge);
                    await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Hier ist niemand.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Wo könnte er nur sein?");
                    nicksRoom = true;
                    break;
                case whereToSearchAnswer.Badezimmer:
                    Endabgabe.dataToSave.specialText++;
                    Endabgabe.fS.Speech.hide();
                    Endabgabe.fS.Character.hideAll();
                    await Endabgabe.fS.update();
                    if (Endabgabe.skipBadEndingNr3) {
                        await Endabgabe.fS.Location.show(Endabgabe.location.nicksBathroomRemSccsr);
                    }
                    else {
                        await Endabgabe.fS.Location.show(Endabgabe.location.nicksBathroom);
                    }
                    await Endabgabe.fS.update(Endabgabe.transition.swipe.duration, Endabgabe.transition.swipe.alpha, Endabgabe.transition.swipe.edge);
                    await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Hier ist er auch nicht.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    if (!Endabgabe.skipBadEndingNr3) {
                        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ist das da an der Schere Blut?");
                        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    }
                    bathroom = true;
                    break;
            }
        }
        Endabgabe.fS.Speech.hide();
        Endabgabe.fS.Character.hideAll();
        await Endabgabe.fS.update();
        await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomGoodWeather);
        await Endabgabe.fS.update(Endabgabe.transition.swipe.duration, Endabgabe.transition.swipe.alpha, Endabgabe.transition.swipe.edge);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        //give up or search for hints
        let giveUpOrSearchAnswer = {
            GiveUp: "Suche aufgeben",
            Search: "Hinweise suchen"
        };
        let giveUpOrSearch = await Endabgabe.fS.Menu.getInput(giveUpOrSearchAnswer, "decisionClass");
        switch (giveUpOrSearch) {
            case giveUpOrSearchAnswer.GiveUp:
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Unwahrscheinlich. Warum sollte er dort hingegangen sein. Er hat ja auch genug zu tun.");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Wahrscheinlich sitzt er irgendwo in einem Café und lernt dort.");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ich sollte auch weiter lernen.");
                return "neutralEnding";
            case giveUpOrSearchAnswer.Search:
                Endabgabe.dataToSave.specialText++;
                break;
        }
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0022);
        Endabgabe.fS.Character.hideAll();
        await Endabgabe.fS.update();
        await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomPicture);
        await Endabgabe.fS.update(0.5);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0023);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0024);
        Endabgabe.fS.Sound.fade(Endabgabe.sound.grabPaper, 0.2, 1);
        //Foto in Inventar
        Endabgabe.fS.Inventory.add(Endabgabe.items.Image);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, "Das Foto wurde deinem Inventar hinzugefügt.");
        //--
        await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomBadWeatherNoPhoto);
        await Endabgabe.fS.update(0.5);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0025);
        Endabgabe.fS.Speech.hide();
        Endabgabe.fS.Character.hideAll();
        await Endabgabe.fS.update();
        Endabgabe.fS.Sound.fade(Endabgabe.sound.grabPaper, 0, 0.5);
        Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0, 0);
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        await Endabgabe.fS.update(2);
        Endabgabe.dataToSave.specialText++;
        return "FinalConversation";
    }
    Endabgabe.NickNotAtHome = NickNotAtHome;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
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
                T0002: "Ach, das macht doch nichts. Erinnert mich an früher, als wir zusammen gespielt haben. Da war es bei dir auch immer unordentlich.",
                T0003: "Ist bei dir alles okay? Du wirkst irgendwie merkwürdig.",
                T0004: "Fangen die Prüfungen bei dir auch nächste Woche an?",
                T0005: "Was denn sonst noch?"
            },
            Nick: {
                T0000: "Mira? Was machst du denn hier?",
                T0001: "Oh, äh. Danke. Hatte nicht erwartet, dass du dich daran erinnerst. Haben uns ja schließlich eine Ewigkeit nicht gesehen.",
                T0002: "Komm doch rein.",
                T0003: "Tut mir leid. Wenn ich gewusst hätte das du kommst hätte ich aufgeräumt.",
                T0004: "Ja.. Da hast du wohl Recht.",
                T0005: "...",
                T0006: "Oh äh... ja... Alles gut. Ich hab nur... eh... gerade ziemlich viel zu tun. Alles gerade etwas stressig.",
                T0007: "Ja, unter anderem.",
                T0008: "... Naja.. Also... Weiß auch nicht. Ich fühle mich seit einer Weile nicht so gut."
            }
        };
        //Story
        Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0.2, 1.5, true);
        await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomDoor);
        await Endabgabe.fS.update(Endabgabe.transition.swipe.duration, Endabgabe.transition.swipe.alpha, Endabgabe.transition.swipe.edge);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0000);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Character.animate(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.moveLeftAnim());
        await Endabgabe.fS.update();
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.neutral, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0000);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0000);
        //Emotion
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.good, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0001);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0001);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0002);
        //hide for transition
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        //change locations and show characters after
        await Endabgabe.fS.Location.show(Endabgabe.location.nicksRoomGoodWeather);
        Endabgabe.fS.Speech.hide();
        await Endabgabe.fS.update(Endabgabe.transition.swipe.duration, Endabgabe.transition.swipe.alpha, Endabgabe.transition.swipe.edge);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.neutral, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0003);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0002);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0004);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0005);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0003);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0006);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0004);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0007);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0005);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0008);
        //Decision
        let explainOrHelpAnswer = {
            help: "Hilfe anbieten",
            explain: "Erklärung suchen"
        };
        let explainOrHelp = await Endabgabe.fS.Menu.getInput(explainOrHelpAnswer, "decisionClass");
        switch (explainOrHelp) {
            case explainOrHelpAnswer.help:
                Endabgabe.dataToSave.specialText++;
                await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.miraPosWhenBoth);
                await Endabgabe.fS.update();
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Du weißt, dass du mich jeder Zeit anschreiben kannst, wenn du ein Problem hast.");
                await Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
                await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.good, Endabgabe.nickPosWhenBoth);
                await Endabgabe.fS.update();
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "Ja... Danke.");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Dafür sind Freunde doch da.");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "Ja...");
                return "AnswerFromNick";
            case explainOrHelpAnswer.explain:
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Hm, das liegt sicher nur am Stress. Das wird schon wieder.");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, "Ja, da hast du sicher recht...");
                return "NoAnswerFromNick";
        }
    }
    Endabgabe.NicksBirthday = NicksBirthday;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function NoAnswerFromNick() {
        console.log("NoAnswerFromNick: starting");
        let plantsDone = false;
        let tetrisDone = false;
        let learningDone = false;
        let pianoDone = false;
        let waitForNick = false;
        //Text
        let text = {
            Narrator: {
                T0000: "Hey, mir gehts gerade nicht gut. Schätze wir müssen unser Treffen auf wann anders verschieben... tut mir leid."
            },
            Mira: {
                T0000: "...",
                T0001: "Naja, ich wollte dich nicht vom Lernen abhalten. Wir können uns ja, wenn du möchtest, nach den Prüfungen mal wieder etwas mehr treffen. So wie früher eben...",
                T0002: "Klar, sonst hätte ich ja nicht gefragt.",
                T0003: "Naja, dann gehe ich mal wieder. Schreib mich einfach mal an, wenn es dir passt.",
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
                T0014: "Vielleicht hat er es ja schon wieder vergessen. Ich schreibe ihm mal.",
                T0015: "So, jetzt heißt es wieder warten.",
                T0016: "Vielleicht sollte ich nochmal Mathematik lernen. Da hänge ich eh noch hinterher.",
                T0017: "...",
                T0018: "Eine Drehmatrix ist... eine reelle, orthogonale Matrix.",
                T0019: "...",
                T0020: "Rechtshändiges Koordinatensystem... Wie muss ich meine Hand nochmal halten?",
                T0021: "Daumen auf mich gerichtet, Zeigefinger nach oben...Mittelfinger... Nein, ich glaube das stimmt nicht.",
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
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0000);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0001);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.good, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0000);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0002);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.neutral, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0001);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0003);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0002);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0004);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0003);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0004);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0005);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0006);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0005);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.miraPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0006);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0007);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Nick, Endabgabe.characters.Nick.pose.good, Endabgabe.nickPosWhenBoth);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0007);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0008);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Nick, text.Nick.T0008);
        //end day one
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Nick);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        Endabgabe.fS.Speech.hide();
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        await Endabgabe.fS.update(1);
        //start day two
        Endabgabe.signalDelay2s();
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
        await Endabgabe.fS.update(1);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0009);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0010);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0011);
        while (true) {
            if (learningDone && plantsDone && tetrisDone && pianoDone) {
                break;
            }
            else {
                await whatToDo();
            }
        }
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0012);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0013);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0014);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0015);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0016);
        //wait or do math
        let waitOrMathAnswer = {
            warten: "Warten",
            lernen: "Lernen"
        };
        let waitOrMath = await Endabgabe.fS.Menu.getInput(waitOrMathAnswer, "decisionClass");
        switch (waitOrMath) {
            case waitOrMathAnswer.warten:
                //fade out
                Endabgabe.fS.Speech.hide();
                Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                await Endabgabe.fS.Location.show(Endabgabe.location.black);
                await Endabgabe.fS.update(1);
                await Endabgabe.fS.Text.print("Einige Zeit später...");
                Endabgabe.fS.Text.close();
                await Endabgabe.fS.update();
                //text
                await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
                await Endabgabe.fS.update(1);
                await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
                await Endabgabe.fS.update();
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Echt jetzt, wo bleibt der... 2 Stunden gewartet für nichts. Da hätte ich meine Zeit sinnvoller nutzen können!");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ich hoffe, er hat einen guten Grund dafür!");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Vielleicht sollte ich mir doch nochmal Mathematik anschauen. Dann war der Tag immerhin nicht völlig umsonst.");
                waitForNick = true;
                break;
            case waitOrMathAnswer.lernen:
                break;
        }
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomMath2);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0017);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0018);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0019);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0020);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0021);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0022);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0023);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0024);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0025);
        Endabgabe.fS.Speech.hide();
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        await Endabgabe.fS.update(1);
        await Endabgabe.fS.Text.print("Einige Zeit später...");
        Endabgabe.fS.Text.close();
        await Endabgabe.fS.update();
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomHandyNoMessage);
        await Endabgabe.fS.update();
        //after doing Math2
        if (waitForNick) {
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Keine Nachrichten...");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Na danke auch! Lässt mich hier den ganzen Tag warten und meldet sich nicht!");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Vielleicht sollte ich morgen persönlich fragen, was sein Problem ist! Wobei... am Ende macht er mir gar nicht auf.");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Oder ich bereite mich auf meine Prüfungen vor...");
            let visitOrLearnAnswer = {
                besuchen: "Nick besuchen",
                lernen: "Lernen"
            };
            let visitOrLearn = await Endabgabe.fS.Menu.getInput(visitOrLearnAnswer, "decisionClass");
            switch (visitOrLearn) {
                case visitOrLearnAnswer.besuchen:
                    Endabgabe.fS.Speech.hide();
                    await Endabgabe.fS.Location.show(Endabgabe.location.black);
                    await Endabgabe.fS.update(1);
                    break;
                case visitOrLearnAnswer.lernen:
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomDarker);
                    await Endabgabe.fS.update(1);
                    await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Lernen ist da wohl die sichere Variante.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Er kann mir auch noch nach den Prüfungen erklären, aus welchem Grund er mich sitzen lassen hat.");
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    Endabgabe.fS.Speech.hide();
                    await Endabgabe.fS.Location.show(Endabgabe.location.black);
                    await Endabgabe.fS.update(1);
                    return "neutralEnding";
            }
        }
        else {
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Keine Nachrichten...");
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "So langsam mache ich mir Sorgen...");
        }
        //Good Ending
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomDarker);
        await Endabgabe.fS.update(1);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Naja, dann nutze ich den restlichen Tag mal noch um zu lernen und schaue dann morgen mal bei ihm vorbei.");
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        Endabgabe.fS.Speech.hide();
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        await Endabgabe.fS.update(1);
        return "NickNotAtHome";
        async function whatToDo() {
            let whatToDoAnswer = {
                klavier: "Klavier üben",
                pflanzen: "Pflanzen gießen",
                tetris: "Tetris spielen",
                lernen: "Lernen"
            };
            let whatToDo = await Endabgabe.fS.Menu.getInput(whatToDoAnswer, "decisionClass");
            switch (whatToDo) {
                //-------------------piano
                case whatToDoAnswer.klavier:
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    Endabgabe.fS.Speech.hide();
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Location.show(Endabgabe.location.pianoRoom);
                    await Endabgabe.fS.update(Endabgabe.transition.swipe.duration, Endabgabe.transition.swipe.alpha, Endabgabe.transition.swipe.edge);
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Hm, was spiele ich denn heute?");
                    let songsAnswer = {
                        going: "Going",
                        dontStand: "Don't Stand",
                        circle: "Circle"
                    };
                    let songs = await Endabgabe.fS.Menu.getInput(songsAnswer, "decisionClass");
                    switch (songs) {
                        case songsAnswer.going:
                            Endabgabe.mutePianoMusic();
                            Endabgabe.fS.Sound.play(Endabgabe.sound.pianoSongGoing, 0);
                            Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongGoing, 0.3, 1.5, true);
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            break;
                        case songsAnswer.dontStand:
                            Endabgabe.mutePianoMusic();
                            Endabgabe.fS.Sound.play(Endabgabe.sound.pianoSongDontStand, 0);
                            Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongDontStand, 0.3, 1.5, true);
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            break;
                        case songsAnswer.circle:
                            Endabgabe.mutePianoMusic();
                            Endabgabe.fS.Sound.play(Endabgabe.sound.pianoSongCircle, 0);
                            Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongCircle, 0.3, 1.5, true);
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            break;
                    }
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Nicht perfekt, aber ich mache Fortschritte.");
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongGoing, 0, 1, false);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongDontStand, 0, 1, false);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongCircle, 0, 1, false);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0.2, 1, true);
                    Endabgabe.fS.Speech.hide();
                    pianoDone = true;
                    break;
                //-------------------plants  
                case whatToDoAnswer.pflanzen:
                    if (!Endabgabe.dataToSave.plantsOnDayOne) {
                        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
                        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
                        await Endabgabe.fS.update();
                        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Hier ein bisschen Wasser für euch.");
                        await Endabgabe.fS.Sound.fade(Endabgabe.sound.wateringPlants, 0.2, 1);
                        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
                        await Endabgabe.fS.update();
                        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Genauer betrachtet sehen die ziemlich schlimm aus...");
                        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ich hoffe die werden wieder.");
                        await Endabgabe.fS.Sound.fade(Endabgabe.sound.wateringPlants, 0, 1);
                        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
                        await Endabgabe.fS.update();
                    }
                    else {
                        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
                        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
                        await Endabgabe.fS.update();
                        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Die Erde ist noch von gestern feucht. Die brauchen noch kein Wasser.");
                    }
                    Endabgabe.fS.Speech.hide();
                    plantsDone = true;
                    break;
                //-------------------tetris
                case whatToDoAnswer.tetris:
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomLaptop);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Okay, los gehts.");
                    //start tetris musik
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0, 0.3, true);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.tetris, 0.3, 1, true);
                    //fade out (game time)
                    Endabgabe.fS.Speech.hide();
                    await Endabgabe.fS.Location.show(Endabgabe.location.black);
                    await Endabgabe.fS.update(1);
                    await Endabgabe.fS.Text.print("Einige Runden später...");
                    Endabgabe.fS.Text.close();
                    await Endabgabe.fS.update();
                    //fade in
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomLaptop);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Das letzte Level war wirklich eine Herausforderung...");
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.tetris, 0, 0.3, true);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0.2, 1, true);
                    Endabgabe.fS.Speech.hide();
                    tetrisDone = true;
                    break;
                //-------------------lernen
                case whatToDoAnswer.lernen:
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomEnglish);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Heute ist dann wohl Englisch dran.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Indirekte Rede...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Simple Present wird zu Simple Past.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Simple Past, Present Perfect und Past Perfect wird zu... Past Perfect?");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Will wird zu would.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Orts und Zeitangaben im Satz müssen auch angepasst werden?");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "This wird zu that... now zu then und ago zu before.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Da sollte ich mir bei Gelegenheit mal noch ein paar Beispiele anschauen.");
                    Endabgabe.fS.Speech.hide();
                    learningDone = true;
                    break;
            }
        }
    }
    Endabgabe.NoAnswerFromNick = NoAnswerFromNick;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function RememberWhilePiano() {
        console.log("RememberWhilePiano: starting");
        let learningDone = false;
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
        Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0.2, 1.5, true);
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0000);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0001);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0002);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0003);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0004);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        while (!learningDone) {
            if (await whatToDo() == "NicksBirthday") {
                return "NicksBirthday";
            }
        }
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomDarker);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0005);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0006);
        Endabgabe.fS.Speech.hide();
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        await Endabgabe.fS.update(2);
        return "WaitForAnswer";
        async function whatToDo() {
            let whatToDoAnswer = {
                klavier: "Klavier üben",
                pflanzen: "Pflanzen gießen",
                tetris: "Tetris spielen",
                lernen: "Lernen"
            };
            let whatToDo = await Endabgabe.fS.Menu.getInput(whatToDoAnswer, "decisionClass");
            switch (whatToDo) {
                //-------------------piano
                case whatToDoAnswer.klavier:
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Location.show(Endabgabe.location.pianoRoom);
                    await Endabgabe.fS.update(Endabgabe.transition.swipe.duration, Endabgabe.transition.swipe.alpha, Endabgabe.transition.swipe.edge);
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Erstmal ein wenig einspielen.");
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0, 0.3, false);
                    //play nicks song + Mädchenstimme die mit summt
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.nicksSong, 0.2, 1.5, true);
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Hm, irgendwie kommt mir diese Melodie bekannt vor. Aber woher?");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    Endabgabe.signalDelay2s();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Jetzt weiß ich es. Das Lied hatten Nick und ich uns ausgedacht als wir noch klein waren.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Apropos, heute ist doch der dritte Februar. Da hat Nick Geburtstag.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Vielleicht sollte ich mal wieder bei ihm vorbeischauen. Haben uns ja lange nicht gesehen.");
                    //Go to birthday or not
                    let hingehenAnswer = {
                        hingehen: "Hingehen",
                        zuhauseDisable: "Zuhause bleiben"
                    };
                    let hingehen = await Endabgabe.fS.Menu.getInput(hingehenAnswer, "decisionClass");
                    switch (hingehen) {
                        case hingehenAnswer.hingehen:
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ja, das mache ich. Da freut er sich sicher.");
                            Endabgabe.fS.Sound.fade(Endabgabe.sound.nicksSong, 0, 1, false);
                            Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0.2, 1, true);
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Na dann mal los.");
                            Endabgabe.fS.Speech.hide();
                            await Endabgabe.fS.Location.show(Endabgabe.location.black);
                            await Endabgabe.fS.update(1.5);
                            return "NicksBirthday";
                        case hingehenAnswer.zuhauseDisable:
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Hm, irgendwie ist mir gerade nicht danach.");
                    }
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.nicksSong, 0, 1, false);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0.2, 1, true);
                    break;
                //-------------------plants  
                case whatToDoAnswer.pflanzen:
                    await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Hier ein bisschen Wasser für euch.");
                    await Endabgabe.fS.Sound.fade(Endabgabe.sound.wateringPlants, 0.2, 1);
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Genauer betrachtet sehen die ziemlich schlimm aus...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ich hoffe die werden wieder.");
                    await Endabgabe.fS.Sound.fade(Endabgabe.sound.wateringPlants, 0, 1);
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
                    await Endabgabe.fS.update();
                    Endabgabe.dataToSave.plantsOnDayOne = true;
                    break;
                //-------------------tetris
                case whatToDoAnswer.tetris:
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomLaptop);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Okay, los gehts.");
                    //start tetris musik
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0, 0.3, false);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.tetris, 0.3, 1, true);
                    //fade out (game time)
                    Endabgabe.fS.Speech.hide();
                    await Endabgabe.fS.Location.show(Endabgabe.location.black);
                    await Endabgabe.fS.update(1);
                    await Endabgabe.fS.Text.print("Einige Runden später...");
                    Endabgabe.fS.Text.close();
                    await Endabgabe.fS.update();
                    //fade in
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomLaptop);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.tetris, 0, 0.3, false);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0.2, 1, true);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Das hat Spaß gemacht.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Innovative Spielmechanik und angemessene Schwierigkeit.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Kein Wunder, dass das alle toll finden.");
                    break;
                //-------------------lernen
                case whatToDoAnswer.lernen:
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomMath);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Als erstes Mathematik.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Komplexe Zahlen? Kam das überhaupt im Unterricht dran?");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Die komplexen Zahlen erweitern den Zahlenbereich der reellen Zahlen derart, dass die Gleichung x² + 1 =0 lösbar wird.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Die Zahl i wird als imaginäre Einheit bezeichnet.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Komplexe Zahlen lassen sich durch folgende Eigenschaften definieren: ");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Jede reelle Zahl ist eine komplexe Zahl.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Assoziativgesetz...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Kommutativgesetz...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Distributivgesetz...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Für jede komplexe Zahl x gibt es eine komplexe Zahl -x...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ich glaube, das muss ich mir später nochmal genauer anschauen.");
                    learningDone = true;
                    break;
            }
        }
    }
    Endabgabe.RememberWhilePiano = RememberWhilePiano;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function WaitForAnswer() {
        console.log("WaitForAnswer: starting");
        let plantsDone = false;
        let tetrisDone = false;
        let learningDone = false;
        let pianoDone = false;
        //Text
        let text = {
            Mira: {
                T0000: "Neuer Tag, neues Glück.",
                T0001: "4.2... Warte?",
                T0002: "Gestern hatte doch Nick Geburtstag und ich habe ganz vergessen ihm zu gratulieren.",
                T0003: "Jetzt aber schnell!",
                T0004: "Oh Mann.",
                T0005: "Wie konnte ich das nur vergessen.",
                T0006: "Ich hoffe, er ist mir nicht böse.",
                T0007: "Was steht denn heute an?"
            }
        };
        //Story
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        await Endabgabe.fS.update(0.5);
        await Endabgabe.signalDelay2s();
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0000);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0001);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0002);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0003);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomHandyBirthday);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0004);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0005);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0006);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0007);
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        Endabgabe.fS.Speech.hide();
        while (true) {
            if (learningDone && plantsDone && tetrisDone && pianoDone) {
                Endabgabe.fS.Character.hideAll();
                Endabgabe.mutePianoMusic();
                Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0.2, 1, true);
                break;
            }
            else {
                await whatToDo();
            }
        }
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        await Endabgabe.fS.update(1);
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomDarker);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.update(1.5);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Vielleicht hat Nick mittlerweile ja geantwortet.");
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
        await Endabgabe.fS.Speech.hide();
        await Endabgabe.fS.update();
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomHandyBirthday);
        await Endabgabe.fS.update(1);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Keine Nachricht...");
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Anscheinend ist er doch Sauer. Vielleicht sollte ich mich die Tage bei ihm persönlich entschuldigen.");
        Endabgabe.fS.Speech.hide();
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0, 1, false);
        await Endabgabe.fS.update(1.5);
        await Endabgabe.signalDelay2s();
        await Endabgabe.fS.Text.print("2 Wochen später - nach den Prüfungen.");
        await Endabgabe.fS.Text.print("Da Nick nicht auf deine Antworten reagiert, beschließt du bei Nick vorbeizugehen, um zu schauen wie es ihm geht.");
        await Endabgabe.fS.Text.print("Als du vor seiner Haustür stehst und keiner aufmacht, wirst du von seinen Nachbarn angesprochen.");
        Endabgabe.fS.Sound.fade(Endabgabe.sound.badEnding, 0.2, 1.5, true);
        await Endabgabe.fS.Text.print("Von diesen erfährst du, dass Nick sich vor knapp eineinhalb Wochen selbst umgebracht hat.");
        Endabgabe.fS.Text.close();
        await Endabgabe.fS.update();
        return "BadEnding";
        async function whatToDo() {
            let whatToDoAnswer = {
                nachrichten: "Handy",
                klavier: "Klavier üben",
                pflanzen: "Pflanzen gießen",
                tetris: "Tetris spielen",
                lernen: "Lernen"
            };
            let whatToDo = await Endabgabe.fS.Menu.getInput(whatToDoAnswer, "decisionClass");
            switch (whatToDo) {
                //-------------------Handy
                case whatToDoAnswer.nachrichten:
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomHandyBirthday);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Hm, er hat noch nicht geantwortet...");
                    Endabgabe.fS.Speech.hide();
                    break;
                //-------------------piano
                case whatToDoAnswer.klavier:
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    Endabgabe.fS.Speech.hide();
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Location.show(Endabgabe.location.pianoRoom);
                    await Endabgabe.fS.update(Endabgabe.transition.swipe.duration, Endabgabe.transition.swipe.alpha, Endabgabe.transition.swipe.edge);
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Was spiele ich denn heute?");
                    let songsAnswer = {
                        going: "Going",
                        dontStand: "Don't Stand",
                        circle: "Circle"
                    };
                    let songs = await Endabgabe.fS.Menu.getInput(songsAnswer, "decisionClass");
                    switch (songs) {
                        case songsAnswer.going:
                            Endabgabe.mutePianoMusic();
                            Endabgabe.fS.Sound.play(Endabgabe.sound.pianoSongGoing, 0);
                            Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongGoing, 0.3, 1.5, true);
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            break;
                        case songsAnswer.dontStand:
                            Endabgabe.mutePianoMusic();
                            Endabgabe.fS.Sound.play(Endabgabe.sound.pianoSongDontStand, 0);
                            Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongDontStand, 0.3, 1.5, true);
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            break;
                        case songsAnswer.circle:
                            Endabgabe.mutePianoMusic();
                            Endabgabe.fS.Sound.play(Endabgabe.sound.pianoSongCircle, 0);
                            Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongCircle, 0.3, 1.5, true);
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                            break;
                    }
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Nicht perfekt, aber ich mache Fortschritte.");
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongGoing, 0, 1, false);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongDontStand, 0, 1, false);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.pianoSongCircle, 0, 1, false);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0.2, 1, true);
                    Endabgabe.fS.Speech.hide();
                    pianoDone = true;
                    break;
                //-------------------plants  
                case whatToDoAnswer.pflanzen:
                    if (!Endabgabe.dataToSave.plantsOnDayOne) {
                        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
                        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
                        await Endabgabe.fS.update();
                        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Hier ein bisschen Wasser für euch.");
                        await Endabgabe.fS.Sound.fade(Endabgabe.sound.wateringPlants, 0.2, 1);
                        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.neutral, Endabgabe.fS.positions.bottomcenter);
                        await Endabgabe.fS.update();
                        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Genauer betrachtet sehen die ziemlich schlimm aus...");
                        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ich hoffe die werden wieder.");
                        await Endabgabe.fS.Sound.fade(Endabgabe.sound.wateringPlants, 0, 1);
                        await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
                        await Endabgabe.fS.update();
                    }
                    else {
                        await Endabgabe.fS.Character.show(Endabgabe.characters.Mira, Endabgabe.characters.Mira.pose.good, Endabgabe.fS.positions.bottomcenter);
                        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
                        await Endabgabe.fS.update();
                        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Die Erde ist noch von gestern feucht. Die brauchen noch kein Wasser.");
                    }
                    Endabgabe.fS.Speech.hide();
                    plantsDone = true;
                    break;
                //-------------------tetris
                case whatToDoAnswer.tetris:
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomLaptop);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Okay, los gehts.");
                    //start tetris musik
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0, 0.3, true);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.tetris, 0.3, 1, true);
                    //fade out (game time)
                    Endabgabe.fS.Speech.hide();
                    await Endabgabe.fS.Location.show(Endabgabe.location.black);
                    await Endabgabe.fS.update(1);
                    await Endabgabe.fS.Text.print("Einige Runden später...");
                    Endabgabe.fS.Text.close();
                    await Endabgabe.fS.update();
                    //fade in
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomLaptop);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Das letzte Level war wirklich eine Herausforderung...");
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.tetris, 0, 0.3, true);
                    Endabgabe.fS.Sound.fade(Endabgabe.sound.overworldTheme, 0.2, 1, true);
                    Endabgabe.fS.Speech.hide();
                    tetrisDone = true;
                    break;
                //-------------------lernen
                case whatToDoAnswer.lernen:
                    await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                    await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomEnglish);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Heute ist dann wohl Englisch dran.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Indirekte Rede...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Simple Present wird zu Simple Past.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Simple Past, Present Perfect und Past Perfect wird zu... Past Perfect?");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Will wird zu would.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "...");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Orts und Zeitangaben im Satz müssen auch angepasst werden?");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "This wird zu that... now zu then und ago zu before.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Da sollte ich mir bei Gelegenheit mal noch ein paar Beispiele anschauen.");
                    Endabgabe.fS.Speech.hide();
                    learningDone = true;
                    break;
            }
        }
    }
    Endabgabe.WaitForAnswer = WaitForAnswer;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function WakeUp() {
        console.log("WakeUp: starting");
        alert("Schwarzer Rahmen am rechten Rand? \n -> Spiele im Vollbild Modus (F11) \n \nDrücke ESC um das Ingame Menü ein/auszublenden.");
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
        Endabgabe.fS.Speech.hide();
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomDarker);
        await Endabgabe.fS.update(0.7);
        await Endabgabe.fS.Location.show(Endabgabe.location.black);
        await Endabgabe.fS.update(0.2);
        await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomDarker);
        await Endabgabe.fS.update(0.5);
        //Text
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0000);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0001);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0002);
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, text.Mira.T0003);
        //get up or sleep
        let sleepNewsCalendarAnswer = {
            sleep: "Schlafen",
            news: "News lesen",
            calendar: "Kalender anschauen"
        };
        let sleepNewsCalendar = await Endabgabe.fS.Menu.getInput(sleepNewsCalendarAnswer, "decisionClass");
        switch (sleepNewsCalendar) {
            //Weiterschalfen
            case sleepNewsCalendarAnswer.sleep:
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Für einen Sonntag ist es ja noch ziemlich früh. Da kann man sich nochmal ein paar Stunden Schlaf gönnen.");
                Endabgabe.fS.Speech.hide();
                await Endabgabe.fS.Character.hide(Endabgabe.characters.Mira);
                await Endabgabe.fS.Location.show(Endabgabe.location.black);
                await Endabgabe.fS.update(0.5);
                await Endabgabe.signalDelay2s();
                await Endabgabe.fS.Location.show(Endabgabe.location.miraRoom);
                await Endabgabe.fS.update(0.3);
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Sonntag 10:30 Uhr. Jetzt bin ich bereit aufzustehen.");
                return "DontRememberBirthday";
            //News:
            case sleepNewsCalendarAnswer.news:
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Mal schauen ob es was Neues gibt.");
                Endabgabe.fS.Speech.hide();
                await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomHandyNews);
                await Endabgabe.fS.update();
                await Endabgabe.signalDelay2s();
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Spannend wie immer...");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Dann ist es wohl mal Zeit aufzustehen.");
                return "RememberWhilePiano";
            //Calendar
            case sleepNewsCalendarAnswer.calendar:
                Endabgabe.dataToSave.specialText++;
                await Endabgabe.fS.Location.show(Endabgabe.location.miraRoomHandyCalendar);
                await Endabgabe.fS.update();
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "", true, "hiddenText");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Noch eine Woche bis zu den Prüfungen. Ich sollte heute definitiv mal mit lernen anfangen.");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Oh, heute hat Nick Geburtstag. Wir haben uns schon lange nicht mehr gesehen.");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Vielleicht sollte ich mal wieder bei ihm vorbeischauen.");
                let goToBirthdayAnswer = {
                    go: "Hingehen",
                    dontGo: "Zuhause bleiben"
                };
                let goToBirthday = await Endabgabe.fS.Menu.getInput(goToBirthdayAnswer, "decisionClass");
                switch (goToBirthday) {
                    //go to Birthday
                    case goToBirthdayAnswer.go:
                        Endabgabe.dataToSave.specialText++;
                        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Ja, das mache ich. Da freut er sich sicher.");
                        Endabgabe.fS.Speech.hide();
                        return "NicksBirthday";
                    //dont go to Birthday
                    case goToBirthdayAnswer.dontGo:
                        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Mira, "Hm, irgendwie ist mir gerade nicht danach. Ich schreib ihm später einfach mal.");
                        return "DontRememberBirthday";
                }
                break;
        }
    }
    Endabgabe.WakeUp = WakeUp;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Template.js.map