namespace Template {
    let plantsDone: boolean = false;
    let tetrisDone: boolean = false;
    let learningDone: boolean = false;
    let pianoDone: boolean = false;
    export async function Scene_3_good(): fS.SceneReturn {
        console.log("Scene_3_good: starting");

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
                T0016: "Naja dann wird eben weiter gelernt."
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
        await fS.Location.show(location.miraRoom);
        await fS.update(1);
        await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0009);
        await fS.Speech.tell(characters.Mira, text.Mira.T0010);
        await fS.Speech.tell(characters.Mira, text.Mira.T0011);


        while (true) {
            if(learningDone && plantsDone && tetrisDone && pianoDone){
                break;
            }else{
                await whatToDo();
            }
        }
        await fS.Speech.tell(characters.Mira, text.Mira.T0012);
        await fS.Speech.tell(characters.Mira, text.Mira.T0013);
        await fS.Speech.tell(characters.Mira, text.Mira.T0014);
        await fS.Location.show(location.miraRoomHandyAnswer);
        await fS.update();
        await fS.Speech.tell(characters.Narrator, text.Narrator.T0000);
        await fS.Location.show(location.miraRoom);
        await fS.update();
        await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
        await fS.Speech.tell(characters.Mira, text.Mira.T0015);
        await fS.Speech.tell(characters.Mira, text.Mira.T0016);

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
                            fS.Sound.fade(sound.overworldTheme, 0, 0.3, false);
                            fS.Sound.fade(sound.pianoSongGoing, 0.3, 1.5, true);
                            await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                            await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                            break;
                        case songsAnswer.dontStand:
                            fS.Sound.fade(sound.overworldTheme, 0, 0.3, false);
                            fS.Sound.fade(sound.pianoSongDontStand, 0.3, 1.5, true);
                            await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                            await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                            break;
                        case songsAnswer.flowerfield:
                            fS.Sound.fade(sound.overworldTheme, 0, 0.3, false);
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
                    if (!dataToSave.plantsOnDayOne) {
                        await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
                        await fS.Location.show(location.miraRoom);
                        await fS.update();
                        await fS.Speech.tell(characters.Mira, "Hier ein bisschen Wasser für euch.");
                        //pflanzen gießen geräusch (wasser plätschern)
                        await fS.Character.hide(characters.Mira);
                        await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
                        await fS.update();
                        await fS.Speech.tell(characters.Mira, "Genauer betrachtet sehen die ziemlich schlimm aus...");
                        await fS.Speech.tell(characters.Mira, "Ich hoffe die werden wieder.");
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
                    await fS.Character.hide(characters.Mira);
                    await fS.Location.show(location.miraRoomLaptop);
                    await fS.update();
                    await fS.Speech.tell(characters.Mira, "Okay, los gehts.");
                    //start tetris musik
                    fS.Sound.fade(sound.overworldTheme, 0, 0.3, true);
                    fS.Sound.fade(sound.tetris, 0.2, 1.5, true);
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
                    await fS.Character.hide(characters.Mira);
                    await fS.Location.show(location.miraRoomEnglish);
                    await fS.update();
                    await fS.Speech.tell(characters.Mira, "Heute ist dann wohl Englisch drann.");
                    await fS.Speech.tell(characters.Mira, "indirekte Rede...");
                    await fS.Speech.tell(characters.Mira, "...");
                    await fS.Speech.tell(characters.Mira, "Simple Present wird zu Simple Past");
                    await fS.Speech.tell(characters.Mira, "Simple Past, Present Perfect und Past Perfect wird zu... Past Perfect?");
                    await fS.Speech.tell(characters.Mira, "...");
                    await fS.Speech.tell(characters.Mira, "Will wird zu would");
                    await fS.Speech.tell(characters.Mira, "...");
                    await fS.Speech.tell(characters.Mira, "Orts und Zeitangaben im Satz müssen auch angepasst werden?");
                    await fS.Speech.tell(characters.Mira, "this wird zu that... now zu then und ago zu before");
                    await fS.Speech.tell(characters.Mira, "Da sollte ich mir bei gelegenheit mal noch ein paar Beispiele anschauen.");
                    fS.Speech.hide();
                    learningDone = true;
                    break;
            }
        }
    }
}