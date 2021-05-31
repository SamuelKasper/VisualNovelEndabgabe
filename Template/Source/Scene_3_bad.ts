namespace Template {
    let signalDelay2s: fS.Signal = fS.Progress.defineSignal([() => fS.Progress.delay(2)]);
    let plantsDone: boolean = false;
    let tetrisDone: boolean = false;
    let learningDone: boolean = false;
    let pianoDone: boolean = false;
    export async function Scene_3_bad(): fS.SceneReturn {
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
        }

        //Story
        await fS.Location.show(location.black);
        await fS.update(0.5);
        await signalDelay2s();
        await fS.Location.show(location.miraRoom);
        await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0000);
        await fS.Character.hide(characters.Mira);
        await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0001);
        await fS.Speech.tell(characters.Mira, text.Mira.T0002);
        await fS.Speech.tell(characters.Mira, text.Mira.T0003);
        await fS.Character.hide(characters.Mira);
        await fS.update();
        await fS.Location.show(location.miraRoomHandyBirthday);
        await fS.update();
        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
        await fS.Location.show(location.miraRoom);
        await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0004);
        await fS.Speech.tell(characters.Mira, text.Mira.T0005);
        await fS.Speech.tell(characters.Mira, text.Mira.T0006);
        await fS.Character.hide(characters.Mira);
        await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0007);
        await fS.Character.hide(characters.Mira);
        fS.Speech.hide();

        while (true) {
            if(learningDone && plantsDone && tetrisDone && pianoDone){
                break;
            }else{
                await whatToDo();
            }
        }
        await fS.Location.show(location.black);
        await fS.update(1);
        await fS.Location.show(location.miraRoomDarker);
        await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
        await fS.update(1.5);
        await fS.Speech.tell(characters.Mira, "Vielleicht hat Nick mittlerweile ja geantwortet.");
        await fS.Character.hide(characters.Mira);
        await fS.Speech.hide();
        await fS.update();
        await fS.Location.show(location.miraRoomHandyBirthday);
        await fS.update(1);
        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
        await fS.Speech.tell(characters.Mira, "Keine Nachricht...");
        await fS.Speech.tell(characters.Mira, "Anscheinend ist er doch Sauer. Vielleicht sollte ich mich die Tage bei ihm persönlich entschuldigen.");
        fS.Speech.hide();
        await fS.Location.show(location.black);
        fS.Sound.fade(sound.overworldTheme, 0, 1, false);
        await fS.update(1.5);
        await signalDelay2s();
        await fS.Text.print("2 Wochen später - Nach den Prüfungen."); 
        await fS.Text.print("Da Nick nicht auf deine Antworten reagiert beschließt du bei Nick vorbeizugehen um zu schauen wie es ihm geht."); 
        await fS.Text.print("Als du vor seiner Haustür stehst und keiner aufmacht wirst du von seinen Nachbarn angesprochen.");
        fS.Sound.fade(sound.badEnding, 0.2, 1.5, true);
        await fS.Text.print("Von diesen Erfährst du das Nick sich vor knapp ein einhalb Wochen selbst umgebracht hat.");
        fS.Text.close();
        await fS.update();
        await fS.Location.show(location.badEnding);
        await fS.update();
        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
        fS.Sound.fade(sound.badEnding, 0, 0.3, false);
    }

    async function whatToDo(): Promise<void> { 

        let whatToDoAnswer = {
            nachrichten: "Handy",
            klavier: "Klavier üben",
            pflanzen: "Pflanzen gießen",
            tetris: "Tetris spielen",
            lernen: "Lernen"
        };

        let whatToDo = await fS.Menu.getInput(whatToDoAnswer, "decisionClass");

        switch (whatToDo) {
            //-------------------Handy
            case whatToDoAnswer.nachrichten:
                await fS.Character.hide(characters.Mira);
                await fS.update();
                await fS.Location.show(location.miraRoomHandyBirthday);
                await fS.update();
                await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                await fS.Speech.tell(characters.Mira, "Hm, er hat noch nicht geantwortet...");
                fS.Speech.hide();
                break;

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