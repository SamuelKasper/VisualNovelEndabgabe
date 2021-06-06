namespace Template {
    export async function NickNotAtHome(): fS.SceneReturn {
        let nicksRoom: boolean = false;
        let bathroom: boolean = false;
        let kitchen: boolean = false;
        //Text
        let text = {
            Narrator: {
                T0000: "*Klopf Klopf*"
            },

            Mira: {
                T0000: "10:00 Uhr. Nick sollte mittlerweile auch wach sein. Vielleicht sollte ich ihm mal noch  schreiben das ich vorbei komme.",
                T0001: "So, dann mal aufstehen, richten und frühstücken.",
                T0002: "Jetzt ist 11:30 und er hat immer noch nicht geantwortet...",
                T0003: "Naja ich geh einfach mal los. Wird schon klappen.",
                T0004: "Nick? Bist du da?",
                T0005: "...",
                T0006: "NICK?",
                T0007: "...",
                T0008: "Scheint keiner da zu sein. Vielleicht wissen ja die Nachbarn wo er ist oder wann er wieder kommt.",
                T0009: "Oh, hey Josh. Ich wollte dich eigenlich eben fragen ob du weist wo Nick hingegangen ist.",
                T0010: "Oh okay, naja danke trotzden.",
                T0011: "Bis dann.",
                T0012: "Oh man... jetzt mache ich mir wirklich Sorgen.",
                T0013: "Vielleicht sollte ich einfach mal rein und schauen ob alles okay ist.",
                T0014: "Wenn ich mich richtig erinnere hatte Nick doch immer einen Ersatzschlüssel irgendwo vor seiner Tür versteckt.",
                T0015: "Wo könnte der Schlüssel sein?",
                T0016: "Vielleicht unter der Schuhmatte?",
                T0017: "Nein, da ist nix... Dann bleibt ja eigentlich nur noch der Blumentopf übrig...",
                T0018: "...",
                T0019: "Da ist er ja!",
                T0020: "Okay, dann mal schauen...",
                T0021: "Wo suche ich am besten als erstes?",
                T0022: "Hier liegt immer noch das Foto von unseren früheren Geheimversteck...",
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
        }
        await fS.Location.show(location.miraRoom);
        await fS.update(0);
        await fS.Speech.tell(characters.Mira, text.Mira.T0000);
        await fS.Speech.tell(characters.Mira, "...");
        await fS.Speech.tell(characters.Mira, text.Mira.T0001);
        fS.Speech.hide();
        await fS.Location.show(location.black);
        await fS.update(2);
        await fS.Location.show(location.miraRoom);
        await fS.update(1);
        await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0002);
        await fS.Speech.tell(characters.Mira, text.Mira.T0003);
        await fS.Character.hide(characters.Mira);
        fS.Speech.hide();
        await fS.Location.show(location.black);
        await fS.update(2);
        await fS.update(transition.swipe.duration, transition.swipe.alpha, transition.swipe.edge);
        await fS.Location.show(location.nicksRoomDoor);
        await fS.update(1);
        await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Narrator, text.Narrator.T0000);
        await fS.Speech.tell(characters.Mira, text.Mira.T0004);
        await fS.Speech.tell(characters.Mira, text.Mira.T0005);

        //wait or knock again
        let waitOrKnockAnswer = {
            warten: "Warten",
            klopfen: "Nochmal Klopfen"
        };
        let waitOrKnock = await fS.Menu.getInput(waitOrKnockAnswer, "decisionClass");
        switch (waitOrKnock) {
            case waitOrKnockAnswer.warten:
                await fS.Speech.tell(characters.Mira, "...");
                await fS.Speech.tell(characters.Mira, "...");
                await fS.Speech.tell(characters.Mira, "...");
                await fS.Speech.tell(characters.Mira, "Scheint keiner da zu sein... Dann geh ich wohl wieder.");
                return "neutralEnding";
            case waitOrKnockAnswer.klopfen:
                break;
        }
        await fS.Speech.tell(characters.Narrator, text.Narrator.T0000);
        await fS.Speech.tell(characters.Mira, text.Mira.T0006);
        await fS.Speech.tell(characters.Mira, text.Mira.T0007);
        await fS.Speech.tell(characters.Mira, text.Mira.T0008);

        /*-----Animation-----*/
        let moveLeftAnimation: fS.AnimationDefinition = {
            start: { translation: fS.positions.bottomcenter },
            end: { translation: miraPosWhenBoth },
            duration: 2,
            playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
        };

        await fS.Character.hide(characters.Mira);
        await fS.Character.animate(characters.Mira, characters.Mira.pose.neutral, moveLeftAnimation);
        await fS.update(1);
        await fS.Character.show(characters.Nachbar, characters.Nachbar.pose.neutral, nickPosWhenBoth);
        await fS.update();
        /*-----Animation End-----*/

        await fS.Speech.tell(characters.Nachbar, text.Nachbar.T0000);
        await fS.Speech.tell(characters.Mira, text.Mira.T0009);
        await fS.Speech.tell(characters.Nachbar, text.Nachbar.T0001);
        await fS.Speech.tell(characters.Nachbar, text.Nachbar.T0002);
        await fS.Speech.tell(characters.Nachbar, text.Nachbar.T0003);
        await fS.Speech.tell(characters.Nachbar, text.Nachbar.T0004);
        await fS.Speech.tell(characters.Nachbar, text.Nachbar.T0005);
        await fS.Speech.tell(characters.Mira, text.Mira.T0010);
        await fS.Speech.tell(characters.Nachbar, text.Nachbar.T0006);
        await fS.Speech.tell(characters.Nachbar, text.Nachbar.T0007);
        await fS.Speech.tell(characters.Mira, text.Mira.T0011);
        await fS.Character.hide(characters.Nachbar);
        await fS.update(1);

        /*-----Animation-----*/
        let moveRightAnimation: fS.AnimationDefinition = {
            start: { translation: miraPosWhenBoth },
            end: { translation: fS.positions.bottomcenter },
            duration: 2,
            playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
        };

        await fS.Character.hide(characters.Mira);
        await fS.Character.animate(characters.Mira, characters.Mira.pose.neutral, moveRightAnimation);
        /*-----Animation End-----*/

        await fS.Speech.tell(characters.Mira, text.Mira.T0012);
        await fS.Speech.tell(characters.Mira, text.Mira.T0013);
        await fS.Speech.tell(characters.Mira, text.Mira.T0014);
        await fS.Speech.tell(characters.Mira, text.Mira.T0015);
        await fS.Speech.tell(characters.Mira, text.Mira.T0016);
        await fS.Speech.tell(characters.Mira, text.Mira.T0017);
        await fS.Speech.tell(characters.Mira, text.Mira.T0018);
        await fS.Speech.tell(characters.Mira, text.Mira.T0019);
        await fS.Speech.tell(characters.Mira, text.Mira.T0020);
        fS.Speech.hide();
        fS.Character.hideAll();
        await fS.update();
        await fS.Location.show(location.nicksRoomGoodWeather);
        await fS.update(transition.swipe.duration, transition.swipe.alpha, transition.swipe.edge);
        await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0021);
        fS.Speech.hide();
        fS.Character.hideAll();
        await fS.update();

        while (true) {
            if (nicksRoom && bathroom && kitchen) {
                break;
            } else {
                searchNick();
            }
        }

        async function searchNick(): Promise<void> {
            //Where to search
            let whereToSearchAnswer = {
                Kueche: "Küche",
                NicksZimmer: "Nicks Zimmer",
                Badezimmer: "Badezimmer"
            };
            let whereToSearch = await fS.Menu.getInput(whereToSearchAnswer, "decisionClass");
            switch (whereToSearch) {
                case whereToSearchAnswer.Kueche:
                    fS.Speech.hide();
                    fS.Character.hideAll();
                    await fS.update();
                    await fS.Location.show(location.nicksKitchen);
                    await fS.update(transition.swipe.duration, transition.swipe.alpha, transition.swipe.edge);
                    await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
                    await fS.update();
                    await fS.Speech.tell(characters.Mira, "Nope, hier ist er nicht.");
                    kitchen = true;
                    break;
                case whereToSearchAnswer.NicksZimmer:
                    fS.Speech.hide();
                    fS.Character.hideAll();
                    await fS.update();
                    await fS.Location.show(location.nicksRoomGoodWeather);
                    await fS.update(transition.swipe.duration, transition.swipe.alpha, transition.swipe.edge);
                    await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
                    await fS.update();
                    await fS.Speech.tell(characters.Mira, "Hier ist niemand.");
                    await fS.Speech.tell(characters.Mira, "Wo könnte er nur sein?");
                    nicksRoom = true;
                    break;
                case whereToSearchAnswer.Badezimmer:
                    fS.Speech.hide();
                    fS.Character.hideAll();
                    await fS.update();
                    await fS.Location.show(location.nicksBathroom);
                    await fS.update(transition.swipe.duration, transition.swipe.alpha, transition.swipe.edge);
                    await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
                    await fS.update();
                    await fS.Speech.tell(characters.Mira, "Hier ist er auch nicht.");
                    await fS.Speech.tell(characters.Mira, "...");
                    await fS.Speech.tell(characters.Mira, "Ist das da an der Schere Blut?");
                    await fS.Speech.tell(characters.Mira, "...");
                    bathroom = true;
                    break;
            }
        }
        fS.Speech.hide();
        fS.Character.hideAll();
        await fS.update();
        await fS.Location.show(location.nicksRoomGoodWeather);
        await fS.update(transition.swipe.duration, transition.swipe.alpha, transition.swipe.edge);
        await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
        await fS.update();
        
        //give up or search for hints
        let giveUpOrSearchAnswer = {
            GiveUp: "Suche aufgeben",
            Search: "Nach Hinweisen suchen"
        };
        let giveUpOrSearch = await fS.Menu.getInput(giveUpOrSearchAnswer, "decisionClass");
        switch (giveUpOrSearch) {
            case giveUpOrSearchAnswer.GiveUp:
                await fS.Speech.tell(characters.Mira, "Unwahrscheinlich. Warum sollte er dort hingegangen sein. Er hat ja auch genug zu tun.");
                await fS.Speech.tell(characters.Mira, "Wahrscheinlich sitzt er irgendwo in einem Cafe und lernt dort.");
                await fS.Speech.tell(characters.Mira, "Ich sollte auch weiter lernen.");
                return "neutralEnding";
            case giveUpOrSearchAnswer.Search:
                break;
        }

        await fS.Speech.tell(characters.Mira, text.Mira.T0022);
        //Foto anzeigen
        await fS.Speech.tell(characters.Mira, text.Mira.T0023);
        //Papier geräusch
        //Foto in Inventar
        await fS.Speech.tell(characters.Mira, text.Mira.T0024);
        await fS.Speech.tell(characters.Mira, text.Mira.T0025);
        //Ausblenden oder so
    }
}