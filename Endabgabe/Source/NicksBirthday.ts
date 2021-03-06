namespace Endabgabe {
    export async function NicksBirthday(): fS.SceneReturn {
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
        }

        //Story
        fS.Sound.fade(sound.overworldTheme, 0.2, 1.5, true);
        await fS.Location.show(location.nicksRoomDoor);
        await fS.update(transition.swipe.duration, transition.swipe.alpha, transition.swipe.edge);
        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
        await fS.Speech.tell(characters.Narrator, text.Narrator.T0000);

        await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
        await fS.update();
        await fS.Character.animate(characters.Mira, characters.Mira.pose.good, moveLeftAnim());
        await fS.update();

        await fS.Character.show(characters.Nick, characters.Nick.pose.neutral, nickPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0000);
        await fS.Speech.tell(characters.Mira, text.Mira.T0000);

        //Emotion
        await fS.Character.hide(characters.Nick);
        await fS.Character.show(characters.Nick, characters.Nick.pose.good, nickPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0001);
        await fS.Speech.tell(characters.Mira, text.Mira.T0001);
        await fS.Speech.tell(characters.Nick, text.Nick.T0002);

        //hide for transition
        await fS.Character.hide(characters.Nick);
        await fS.Character.hide(characters.Mira);

        //change locations and show characters after
        await fS.Location.show(location.nicksRoomGoodWeather);
        fS.Speech.hide();
        await fS.update(transition.swipe.duration, transition.swipe.alpha, transition.swipe.edge);
        await fS.Character.show(characters.Nick, characters.Nick.pose.neutral, nickPosWhenBoth);
        await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, miraPosWhenBoth);
        await fS.update();

        await fS.Speech.tell(characters.Nick, text.Nick.T0003);
        await fS.Speech.tell(characters.Mira, text.Mira.T0002);

        await fS.Speech.tell(characters.Nick, text.Nick.T0004);
        await fS.Speech.tell(characters.Nick, text.Nick.T0005);

        await fS.Speech.tell(characters.Mira, text.Mira.T0003);
        await fS.Speech.tell(characters.Nick, text.Nick.T0006);

        await fS.Speech.tell(characters.Mira, text.Mira.T0004);
        await fS.Speech.tell(characters.Nick, text.Nick.T0007);

        await fS.Speech.tell(characters.Mira, text.Mira.T0005);
        await fS.Speech.tell(characters.Nick, text.Nick.T0008);

        //Decision
        let explainOrHelpAnswer = {
            help: "Hilfe anbieten",
            explain: "Erklärung suchen"
        };

        let explainOrHelp = await fS.Menu.getInput(explainOrHelpAnswer, "decisionClass");

        switch (explainOrHelp) {
            case explainOrHelpAnswer.help:
                dataToSave.specialText++;
                await fS.Character.hide(characters.Mira);
                await fS.Character.show(characters.Mira, characters.Mira.pose.good, miraPosWhenBoth);
                await fS.update();
                await fS.Speech.tell(characters.Mira, "Du weißt, dass du mich jeder Zeit anschreiben kannst, wenn du ein Problem hast.");
                await fS.Character.hide(characters.Nick);
                await fS.Character.show(characters.Nick, characters.Nick.pose.good, nickPosWhenBoth);
                await fS.update();
                await fS.Speech.tell(characters.Nick, "Ja... Danke.");
                await fS.Speech.tell(characters.Mira, "Dafür sind Freunde doch da.");
                await fS.Speech.tell(characters.Nick, "Ja...");
                return "AnswerFromNick";
            case explainOrHelpAnswer.explain:
                await fS.Speech.tell(characters.Mira, "Hm, das liegt sicher nur am Stress. Das wird schon wieder.");
                await fS.Speech.tell(characters.Nick, "Ja, da hast du sicher recht...");
                return "NoAnswerFromNick";
        }
    }
}