namespace Template {
    //check if mira did the leaning part
    let learningDone: boolean = false;

    export async function Scene_2_bad(): fS.SceneReturn {
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
        }

        //Story
        await fS.Location.show(location.miraRoom);
        await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0000);
        await fS.Speech.tell(characters.Mira, text.Mira.T0001);
        await fS.Speech.tell(characters.Mira, text.Mira.T0002);
        await fS.Speech.tell(characters.Mira, text.Mira.T0003);
        await fS.Speech.tell(characters.Mira, text.Mira.T0004);
        await fS.Character.hide(characters.Mira);

        while(!learningDone){
            await whatToDo();
        }

        await fS.Location.show(location.miraRoom);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0005);
        await fS.Speech.tell(characters.Mira, text.Mira.T0006);
        await fS.Speech.hide();
        await fS.Character.hide(characters.Mira);
        await fS.update();
        await fS.Location.show(location.black);
        await fS.update(2);

        //Nächster Tag: scene_3_bad (sceneDesicionPoints = 2)
        //dataToSave.sceneDesiscionPoints = 2;
        return "scene_3_bad";
    }

    async function whatToDo(): Promise<void> {
        let signalDelay2s: fS.Signal = fS.Progress.defineSignal([() => fS.Progress.delay(2)]);

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
                await fS.Location.show(location.pianoRoom);
                await fS.update();
                await fS.Speech.tell(characters.Mira, "Erstmal ein wenig einspielen.");
                //play nicks song + Mädchenstimme die mit summt

                await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                await fS.Speech.tell(characters.Mira, "Hm, irgendwie kommt mir diese Melodie bekannt vor. Aber woher?");
                await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                await fS.Speech.tell(characters.Mira, "...");
                signalDelay2s();
                await fS.Speech.tell(characters.Mira, "Ich kann mich nicht errinnern.");
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
                dataToSave.plantsOnDayOne = true;
                break;

            //-------------------tetris
            case whatToDoAnswer.tetris:
                await fS.Character.hide(characters.Mira);
                await fS.Location.show(location.miraRoomLaptop);
                await fS.update();
                await fS.Speech.tell(characters.Mira, "Okay, los gehts.");
                //start tetris musik
                fS.Sound.fade(sound.tetris, 0.3, 1.5, true);
                //fade out (game time)
                fS.Speech.hide();
                await fS.Location.show(location.black)
                await fS.update(1);
                await fS.Text.print("Einige Runden später...");
                fS.Text.close();
                await fS.update();

                //fade in
                await fS.Location.show(location.miraRoomLaptop);
                fS.Sound.fade(sound.tetris, 0, 1, false);
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