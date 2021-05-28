namespace Template {
    export async function Scene_2_good(): fS.SceneReturn {
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
        }

        //Story
        await fS.Location.show(location.nicksRoomDoor);
        await fS.update();
        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
        await fS.Speech.tell(characters.Narrator, text.Narrator.T0000);
        await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positionPercent(20, 100));
        await fS.Character.show(characters.Nick, characters.Nick.pose.neutral, fS.positionPercent(80, 100));
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0000);
        await fS.Speech.tell(characters.Mira, text.Mira.T0000);

        //Emotion
        await fS.Character.hide(characters.Nick);
        await fS.Character.show(characters.Nick, characters.Nick.pose.good, fS.positionPercent(80, 100));
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0001);
        await fS.Speech.tell(characters.Mira, text.Mira.T0001);

        //Emotion
        await fS.Character.hide(characters.Nick);
        await fS.Character.show(characters.Nick, characters.Nick.pose.neutral, fS.positionPercent(80, 100));
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0002);
        await fS.Speech.tell(characters.Mira, text.Mira.T0002);

        await fS.Speech.tell(characters.Nick, text.Nick.T0003);
        await fS.Speech.tell(characters.Nick, text.Nick.T0004);

        await fS.Speech.tell(characters.Mira, text.Mira.T0003);
        await fS.Speech.tell(characters.Nick, text.Nick.T0005);

        await fS.Speech.tell(characters.Mira, text.Mira.T0004);
        await fS.Speech.tell(characters.Nick, text.Nick.T0006);

        await fS.Speech.tell(characters.Mira, text.Mira.T0005);
        await fS.Speech.tell(characters.Nick, text.Nick.T0007);

        //Decision
        let explainOrHelpAnswer = {
            help: "Hilfe anbieten",
            explain: "Erklärung suchen"
        };

        let explainOrHelp = await fS.Menu.getInput(explainOrHelpAnswer, "decisionClass");

        switch (explainOrHelp) {
            case explainOrHelpAnswer.help:
                await fS.Speech.tell(characters.Mira, "Du weißt das du mich jeder Zeit anschreiben kannst, wenn du ein Probem hast.");
                await fS.Speech.tell(characters.Nick, "Ja... Danke.");
                await fS.Speech.tell(characters.Mira, "Dafür sind Freunde doch da.");
                await fS.Speech.tell(characters.Nick, "Ja...");
                //Scene_3_good
                dataToSave.sceneDesiscionPoints = 2002;
                break;
            case explainOrHelpAnswer.explain:
                await fS.Speech.tell(characters.Mira, "Hm, das liegt sicher nur am Stress. Das wird schon wieder.");
                await fS.Speech.tell(characters.Nick, "Ja, da hast du sicher recht...");
                //Scene_3_neutral
                dataToSave.sceneDesiscionPoints = 1002;
                break;
        }

        //chose next scene
        return SceneDesicionClass.chooseScene(dataToSave.sceneDesiscionPoints);
    }
}