namespace Template {
    export async function RememberWhilePiano(): fS.SceneReturn {
        console.log("RememberWhilePiano: starting");

        let learningDone: boolean = false;

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
        }

        //Story
        fS.Sound.fade(sound.overworldTheme, 0.2, 1.5, true);
        await fS.Location.show(location.miraRoom);
        await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0000);
        await fS.Speech.tell(characters.Mira, text.Mira.T0001);
        await fS.Speech.tell(characters.Mira, text.Mira.T0002);
        await fS.Speech.tell(characters.Mira, text.Mira.T0003);
        await fS.Speech.tell(characters.Mira, text.Mira.T0004);
        await fS.Character.hide(characters.Mira);

        while (!learningDone) {
            if(await whatToDo() == "NicksBirthday"){
                return "NicksBirthday";
            }
        }

        await fS.Location.show(location.miraRoomDarker);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0005);
        await fS.Speech.tell(characters.Mira, text.Mira.T0006);
        fS.Speech.hide();
        await fS.Character.hide(characters.Mira);
        await fS.update();
        await fS.Location.show(location.black);
        await fS.update(2);
        return "BadEnding1";

        async function whatToDo(): fS.SceneReturn {
    
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
                    await fS.Speech.tell(characters.Mira, "Erstmal ein wenig einspielen.");
                    fS.Sound.fade(sound.overworldTheme, 0, 0.3, false);
                    //play nicks song + Mädchenstimme die mit summt
                    fS.Sound.fade(sound.nicksSong, 0.2, 1.5, true);
                    await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                    await fS.Speech.tell(characters.Mira, "Hm, irgendwie kommt mir diese Melodie bekannt vor. Aber woher?");
                    await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                    await fS.Speech.tell(characters.Mira, "...");
                    signalDelay2s();
                    await fS.Speech.tell(characters.Mira, "Jetzt weis ich's. Das Lied hatten Nick und ich uns ausgedacht als wir noch klein waren.");
                    await fS.Speech.tell(characters.Mira, "Apropos, heute ist doch der dritte Februar. Da hat Nick Geburtstag.");
                    await fS.Speech.tell(characters.Mira, "Vielleicht sollte ich mal wieder bei ihm vorbei schauen. Haben uns ja lange nicht gesehen.");
    
                    //Go to birthday or not
                    let hingehenAnswer = {
                        hingehen: "Hingehen",
                        zuhauseDisable: "Zuhause bleiben"
                    };
    
                    let hingehen = await fS.Menu.getInput(hingehenAnswer, "decisionClass");
                   
                    switch (hingehen) {
                        case hingehenAnswer.hingehen:
                            await fS.Speech.tell(characters.Mira, "Ja, das mache ich. Da freut er sich sicher.");
                            fS.Sound.fade(sound.nicksSong, 0, 1, false);
                            fS.Sound.fade(sound.overworldTheme, 0.2, 1, true);
                            await fS.Speech.tell(characters.Mira, "Na dann mal los.");
                            fS.Speech.hide();
                            await fS.Location.show(location.black);
                            await fS.update(1.5);
                            return "NicksBirthday";
                        case hingehenAnswer.zuhauseDisable:
                            await fS.Speech.tell(characters.Mira, "Hm, irgendwie ist mir gerade nicht danach.");
                    }
                    fS.Sound.fade(sound.nicksSong, 0, 1, false);
                    fS.Sound.fade(sound.overworldTheme, 0.2, 1, true);
                    break;
    
                //-------------------plants  
                case whatToDoAnswer.pflanzen:
                    await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
                    await fS.Location.show(location.miraRoom);
                    await fS.update();
                    await fS.Speech.tell(characters.Mira, "Hier ein bisschen Wasser für euch.");
                    await fS.Sound.fade(sound.wateringPlants, 0.3, 1);
                    await fS.Character.hide(characters.Mira);
                    await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
                    await fS.update();
                    await fS.Speech.tell(characters.Mira, "Genauer betrachtet sehen die ziemlich schlimm aus...");
                    await fS.Speech.tell(characters.Mira, "Ich hoffe die werden wieder.");
                    await fS.Sound.fade(sound.wateringPlants, 0, 1);
                    await fS.Character.hide(characters.Mira);
                    await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
                    await fS.update();
                    dataToSave.plantsOnDayOne = true;
                    break;
    
                //-------------------tetris
                case whatToDoAnswer.tetris:
                    await fS.Character.hide(characters.Mira);
                    await fS.Location.show(location.miraRoomLaptop);
                    await fS.update();
                    await fS.Speech.tell(characters.Mira, "Okay, los gehts.");
                    //start tetris musik
                    fS.Sound.fade(sound.overworldTheme, 0, 0.3, false);
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
                    fS.Sound.fade(sound.tetris, 0, 0.3, false);
                    fS.Sound.fade(sound.overworldTheme, 0.2, 1, true);
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
                    learningDone = true;
                    break;
            }
        }
    }
}