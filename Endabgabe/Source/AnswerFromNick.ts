namespace Endabgabe {
    export async function AnswerFromNick(): fS.SceneReturn {
        let plantsDone: boolean = false;
        let tetrisDone: boolean = false;
        let learningDone: boolean = false;
        let pianoDone: boolean = false;
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
        }
        await fS.Speech.tell(characters.Mira, text.Mira.T0000);
        await fS.Character.hide(characters.Mira);
        await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, miraPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0001);
        await fS.Character.hide(characters.Nick);
        await fS.Character.show(characters.Nick, characters.Nick.pose.good, nickPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0000);
        await fS.Character.hide(characters.Mira);
        await fS.Character.show(characters.Mira, characters.Mira.pose.good, miraPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0002);
        await fS.Character.hide(characters.Nick);
        await fS.Character.show(characters.Nick, characters.Nick.pose.neutral, nickPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0001);
        await fS.Speech.tell(characters.Mira, text.Mira.T0003);
        await fS.Speech.tell(characters.Nick, text.Nick.T0002);
        await fS.Speech.tell(characters.Mira, text.Mira.T0004);
        await fS.Speech.tell(characters.Nick, text.Nick.T0003);

        await fS.Speech.tell(characters.Nick, text.Nick.T0004);
        await fS.Speech.tell(characters.Nick, text.Nick.T0005);
        await fS.Speech.tell(characters.Nick, text.Nick.T0006);

        await fS.Character.hide(characters.Mira);
        await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, miraPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0005);
        await fS.Character.hide(characters.Mira);
        await fS.Character.show(characters.Mira, characters.Mira.pose.good, miraPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0006);
        await fS.Speech.tell(characters.Mira, text.Mira.T0007);

        await fS.Character.hide(characters.Nick);
        await fS.Character.show(characters.Nick, characters.Nick.pose.good, nickPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0007);
        await fS.Speech.tell(characters.Mira, text.Mira.T0008);
        await fS.Speech.tell(characters.Nick, text.Nick.T0008);

        //end day one
        await fS.Character.hide(characters.Nick);
        await fS.Character.hide(characters.Mira);
        fS.Speech.hide();
        await fS.Location.show(location.black);
        await fS.update(1);

        //start day two
        signalDelay2s();
        await fS.Location.show(location.miraRoom);
        await fS.update(1);
        await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0009);
        await fS.Speech.tell(characters.Mira, text.Mira.T0010);
        await fS.Speech.tell(characters.Mira, text.Mira.T0011);


        while (true) {
            if (learningDone && plantsDone && tetrisDone && pianoDone) {
                break;
            } else {
                await whatToDo();
            }
        }
        await fS.Speech.tell(characters.Mira, text.Mira.T0012);
        await fS.Speech.tell(characters.Mira, text.Mira.T0013);
        await fS.Speech.tell(characters.Mira, text.Mira.T0014);
        await fS.Character.hide(characters.Mira);
        await fS.Location.show(location.miraRoomHandyAnswer);
        await fS.update();
        await fS.Speech.tell(characters.Narrator, text.Narrator.T0000);
        await fS.Location.show(location.miraRoom);
        await fS.update();
        await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0015);
        await fS.Speech.tell(characters.Mira, text.Mira.T0016);

        await fS.Character.hide(characters.Mira);
        await fS.Location.show(location.miraRoomMath2);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0017);
        await fS.Speech.tell(characters.Mira, text.Mira.T0018);
        await fS.Speech.tell(characters.Mira, text.Mira.T0019);
        await fS.Speech.tell(characters.Mira, text.Mira.T0020);
        await fS.Speech.tell(characters.Mira, text.Mira.T0021);
        await fS.Speech.tell(characters.Mira, text.Mira.T0022);
        await fS.Speech.tell(characters.Mira, text.Mira.T0023);
        await fS.Speech.tell(characters.Mira, text.Mira.T0024);
        await fS.Speech.tell(characters.Mira, text.Mira.T0025);
        fS.Speech.hide();
        await fS.Location.show(location.black)
        await fS.update(1);
        await fS.Text.print("Einige Zeit später...");
        fS.Text.close();
        await fS.update();
        await fS.Location.show(location.miraRoomDarker)
        await fS.update();
        await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0026);
        await fS.Speech.tell(characters.Mira, text.Mira.T0027);
        await fS.Speech.tell(characters.Mira, text.Mira.T0028);

        //visit Nick or learn
        let visitOrLearnAnswer = {
            besuchen: "Nick besuchen",
            lernen: "Lernen"
        };
        let visitOrLearn = await fS.Menu.getInput(visitOrLearnAnswer, "decisionClass");
        switch (visitOrLearn) {
            case visitOrLearnAnswer.besuchen:
                dataToSave.specialText++;
                break;
            case visitOrLearnAnswer.lernen:
                await fS.Character.hide(characters.Mira);
                fS.Speech.hide();
                await fS.Location.show(location.black);
                await fS.update(1);
                return "neutralEnding";
        }

        await fS.Character.hide(characters.Mira);
        fS.Speech.hide();
        await fS.Location.show(location.black);
        await fS.update(1);
        return "NickNotAtHome";

        async function whatToDo(): Promise<void> {

            let whatToDoAnswer = {
                klavier: "Klavier üben",
                pflanzen: "Pflanzen gießen",
                tetris: "Tetris spielen",
                lernen: "Lernen"
            };

            let whatToDo = await fS.Menu.getInput(whatToDoAnswer, "decisionClass");

            switch (whatToDo) {
                //-------------------piano
                case whatToDoAnswer.klavier:
                    dataToSave.specialText++;
                    await fS.Character.hide(characters.Mira);
                    await fS.update();
                    await fS.Location.show(location.pianoRoom);
                    await fS.update(transition.swipe.duration, transition.swipe.alpha, transition.swipe.edge);
                    await fS.Speech.tell(characters.Mira, "Hm, was spiele ich denn heute?");

                    let songsAnswer = {
                        going: "Going",
                        dontStand: "Don't Stand",
                        flowerfield: "Flowerfield"
                    };

                    let songs = await fS.Menu.getInput(songsAnswer, "decisionClass");

                    switch (songs) {
                        case songsAnswer.going:
                            dataToSave.specialText++;
                            mutePianoMusic();
                            fS.Sound.play(sound.pianoSongGoing, 0);
                            fS.Sound.fade(sound.pianoSongGoing, 0.3, 1.5, true);
                            await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                            await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                            break;
                        case songsAnswer.dontStand:
                            dataToSave.specialText++;
                            mutePianoMusic();
                            fS.Sound.play(sound.pianoSongDontStand, 0);
                            fS.Sound.fade(sound.pianoSongDontStand, 0.3, 1.5, true);
                            await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                            await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                            break;
                        case songsAnswer.flowerfield:
                            dataToSave.specialText++;
                            mutePianoMusic();
                            fS.Sound.play(sound.pianoSongFlowerfield, 0);
                            fS.Sound.fade(sound.pianoSongFlowerfield, 0.3, 1.5, true);
                            await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                            await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                            break;
                    }

                    await fS.Speech.tell(characters.Mira, "Nicht perfekt, aber ich mache Fortschritte.");
                    fS.Sound.fade(sound.pianoSongGoing, 0, 1, false);
                    fS.Sound.fade(sound.pianoSongDontStand, 0, 1, false);
                    fS.Sound.fade(sound.pianoSongFlowerfield, 0, 1, false);
                    fS.Sound.fade(sound.overworldTheme, 0.2, 1, true);
                    fS.Speech.hide();
                    pianoDone = true;
                    break;

                //-------------------plants  
                case whatToDoAnswer.pflanzen:
                    dataToSave.specialText++;
                    if (!dataToSave.plantsOnDayOne) {
                        await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
                        await fS.Location.show(location.miraRoom);
                        await fS.update();
                        await fS.Speech.tell(characters.Mira, "Hier ein bisschen Wasser für euch.");
                        await fS.Sound.fade(sound.wateringPlants, 0.2, 1);
                        await fS.Character.hide(characters.Mira);
                        await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
                        await fS.update();
                        await fS.Speech.tell(characters.Mira, "Genauer betrachtet sehen die ziemlich schlimm aus...");
                        await fS.Speech.tell(characters.Mira, "Ich hoffe die werden wieder.");
                        await fS.Sound.fade(sound.wateringPlants, 0, 1);
                        await fS.Character.hide(characters.Mira);
                        await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
                        await fS.update();
                    } else {
                        await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
                        await fS.Location.show(location.miraRoom);
                        await fS.update();
                        await fS.Speech.tell(characters.Mira, "Die Erde ist noch von gestern feucht. Die brauchen noch kein Wasser.");
                    }
                    fS.Speech.hide();
                    plantsDone = true;
                    break;

                //-------------------tetris
                case whatToDoAnswer.tetris:
                    dataToSave.specialText++;
                    await fS.Character.hide(characters.Mira);
                    await fS.Location.show(location.miraRoomLaptop);
                    await fS.update();
                    await fS.Speech.tell(characters.Mira, "Okay, los gehts.");
                    //start tetris musik
                    fS.Sound.fade(sound.overworldTheme, 0, 0.3, true);
                    fS.Sound.fade(sound.tetris, 0.3, 1, true);
                    //fade out (game time)
                    fS.Speech.hide();
                    await fS.Location.show(location.black)
                    await fS.update(1);
                    await fS.Text.print("Einige Runden später...");
                    fS.Text.close();
                    await fS.update();

                    //fade in
                    await fS.Location.show(location.miraRoomLaptop);
                    await fS.update();
                    await fS.Speech.tell(characters.Mira, "Das letzte Level war wirklich eine Herausforderung...");
                    fS.Sound.fade(sound.tetris, 0, 0.3, true);
                    fS.Sound.fade(sound.overworldTheme, 0.2, 1, true);
                    fS.Speech.hide();
                    tetrisDone = true;
                    break;

                //-------------------lernen
                case whatToDoAnswer.lernen:
                    dataToSave.specialText++;
                    await fS.Character.hide(characters.Mira);
                    await fS.Location.show(location.miraRoomEnglish);
                    await fS.update();
                    await fS.Speech.tell(characters.Mira, "Heute ist dann wohl Englisch dran.");
                    await fS.Speech.tell(characters.Mira, "Indirekte Rede...");
                    await fS.Speech.tell(characters.Mira, "...");
                    await fS.Speech.tell(characters.Mira, "Simple Present wird zu Simple Past.");
                    await fS.Speech.tell(characters.Mira, "Simple Past, Present Perfect und Past Perfect wird zu... Past Perfect?");
                    await fS.Speech.tell(characters.Mira, "...");
                    await fS.Speech.tell(characters.Mira, "Will wird zu would.");
                    await fS.Speech.tell(characters.Mira, "...");
                    await fS.Speech.tell(characters.Mira, "Orts und Zeitangaben im Satz müssen auch angepasst werden?");
                    await fS.Speech.tell(characters.Mira, "This wird zu that... now zu then und ago zu before.");
                    await fS.Speech.tell(characters.Mira, "Da sollte ich mir bei Gelegenheit mal noch ein paar Beispiele anschauen.");
                    fS.Speech.hide();
                    learningDone = true;
                    break;
            }
        }
    }
}