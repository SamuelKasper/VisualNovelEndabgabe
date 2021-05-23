namespace Template {
    let signalDelay2s: fS.Signal = fS.Progress.defineSignal([() => fS.Progress.delay(2)]);
    export async function Scene_3_bad(): fS.SceneReturn {
        console.log("Scene_3_bad: starting");
        let plantsDone: boolean = false;
        let tetrisDone: boolean = false;
        let learningDone: boolean = false;
        let pianoDone: boolean = false;

        //Text
        let text = {
            Mira: {
                T0000: "Neuer Tag, neues Glück.",
                T0001: "4.2... Warte?",
                T0002: "Gestern hatte doch Nick Geburtstag und ich habe ganz vergessen ihm zu gratulieren.",
                T0003: "Jetzt aber schnell",
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
        await fS.Speech.tell(characters.Mira, text.Mira.T0001);
        await fS.Speech.tell(characters.Mira, text.Mira.T0002);
        await fS.Speech.tell(characters.Mira, text.Mira.T0003);
        await fS.Character.hide(characters.Mira);
        await fS.update();
        await fS.Location.show(location.miraRoomHandyBirthday);
        await fS.update();
        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
        await fS.Location.show(location.miraRoom);
        await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0004);
        await fS.Speech.tell(characters.Mira, text.Mira.T0005);
        await fS.Speech.tell(characters.Mira, text.Mira.T0006);
        await fS.Speech.tell(characters.Mira, text.Mira.T0007);
        await fS.Character.hide(characters.Mira);

        while(!learningDone && !plantsDone && !tetrisDone && !pianoDone){
            await whatToDo();
        }
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
            //-------------------piano
            case whatToDoAnswer.klavier:
                await fS.Character.hide(characters.Mira);
                await fS.Location.show(location.pianoRoom);
                await fS.update();
                await fS.Speech.tell(characters.Mira, "Hm, was spiele ich denn heute?");
                
                let songsAnswer = {
                    going: "Going",
                    dontStand: "Don't Stand",
                    flowerfield: "Flowerfield"
                };
        
                let songs = await fS.Menu.getInput(songsAnswer, "decisionClass");
        
                switch(songs) {
                    case songsAnswer.going:
                        fS.Sound.fade(sound.pianoSongGoing, 0.3, 1.5, false);
                        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                        break;
                    case songsAnswer.dontStand:
                        fS.Sound.fade(sound.pianoSongDontStand, 0.3, 1.5, false);
                        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                        break;
                    case songsAnswer.flowerfield:
                        fS.Sound.fade(sound.pianoSongFlowerfield, 0.3, 1.5, false);
                        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                        break;
                }

                await fS.Speech.tell(characters.Mira, "Nicht perfekt, aber ich mache Fortschritte.");
                fS.Sound.fade(sound.pianoSongGoing, 0, 1, false);
                fS.Sound.fade(sound.pianoSongDontStand, 0, 1, false);
                fS.Sound.fade(sound.pianoSongFlowerfield, 0, 1, false);
               break;

            //-------------------plants  
            case whatToDoAnswer.pflanzen:
                await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
                await fS.Location.show(location.miraRoom);
                await fS.update();
                await fS.Speech.tell(characters.Mira, "Hier ein bisschen Wasser für euch.");
                //pflanzen gießen geräusch (wasser plätschern)
                await fS.Speech.tell(characters.Mira, "Genauer betrachtet sehen die ziemlich schlimm aus...");
                await fS.Speech.tell(characters.Mira, "Ich hoffe die werden wieder.");
                break;

            //-------------------tetris
            case whatToDoAnswer.tetris:
                await fS.Character.hide(characters.Mira);
                await fS.Location.show(location.miraRoomLaptop);
                await fS.update();
                await fS.Speech.tell(characters.Mira, "Okay, los gehts.");
                //start tetris musik

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
                await fS.Speech.tell(characters.Mira, "Das hat Spaß gemacht.");
                await fS.Speech.tell(characters.Mira, "Innovative Spielmechanik und angemessene Schwierigkeit.");
                await fS.Speech.tell(characters.Mira, "Kein Wunder dass das alle toll finden.");
                break;

            //-------------------lernen
            case whatToDoAnswer.lernen:
                await fS.Character.hide(characters.Mira);
                await fS.Location.show(location.miraRoomMath);
                await fS.update();
                await fS.Speech.tell(characters.Mira, "Als erstes Mathe.");
                await fS.Speech.tell(characters.Mira, "Komplexe Zahlen? Kam das überhaupt im Unterricht drann?");
                await fS.Speech.tell(characters.Mira, "...");
                await fS.Speech.tell(characters.Mira, "Die komplexen Zahlen erweitern den Zahlenbereich der reelenZahlen derart, dass die Gleichung x² + 1 =0 lösbar wird.");
                await fS.Speech.tell(characters.Mira, "...");
                await fS.Speech.tell(characters.Mira, "Die Zahl i wird als imaginäre Einheit bezeichnet.");
                await fS.Speech.tell(characters.Mira, "...");
                await fS.Speech.tell(characters.Mira, "Komplexe Zahlen lassen sich durch folgende Eigenschaften definieren: ");
                await fS.Speech.tell(characters.Mira, "Jede reele Zahl ist eine komplexe Zahl.");
                await fS.Speech.tell(characters.Mira, "Assoziativgesetz...");
                await fS.Speech.tell(characters.Mira, "Kommutativgesetz...");
                await fS.Speech.tell(characters.Mira, "Distributivgesetz...");
                await fS.Speech.tell(characters.Mira, "Für jede komplexe Zahl x gibt es eine komplexe Zahl -x...");
                await fS.Speech.tell(characters.Mira, "Ohje. Ich glaube das muss ich mir später nochmal genauer anschauen.");
               
                break;
        }
    }
}