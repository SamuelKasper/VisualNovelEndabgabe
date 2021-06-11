namespace Template {
    export async function FinalConversation(): fS.SceneReturn {
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

                T0009: "Erstmal schauen ob er verletzt ist.",
                T0010: "Sind das da an deinen Armen... Nick... warum nur...",
                T0011: "Egal, das hat Zeit bis später. Ich muss ihn erstmal nach Hause bringen bevor es noch mit Regen anfängt!",
                T0012: "Jetzt heist es warten...",

                T0013: "Nick! Endlich bist du wach!",
                T0014: "Was ich hier mache?",
                T0015: "Ich hab dich bewusstlos in unserem alten Geheimversteck gefunden und nach Hause getragen.",
                T0016: "Sag du mir lieber mal was das für ne Aktion war?",
                T0017: "Was bitte hattest du den vor? Was wenn ich dich nicht gefunden hätte?",
                T0018: "Wie weg? Wohin?",

                T0019: "Die Narben...",
                T0020: "W..Warst du das?",

                T0021: "Warum... Kann ich dir irgendwie helfen? Ich will nicht das du sowas machst.",

                T0022: "Glaubst du, dass du depressiv bist?",
                T0023: "Kennst du den Grund dafür? Also gibt es vielleicht etwas das dich runter zieht?",
                T0024: "...",
                T0025: "...",
                T0026: "Aber dann schreib mir doch.. Oder irgendwem... Einfach abzuhauen kann doch nicht die Lösung sein...",
                T0027: "Nick...",

                T0028: "Hm?",
                T0029: "...Aber zu es über sich ergehen zu lassen macht es doch auch nicht besser!",

                T0030: "Was redest du da?",
                T0031: "NICK! Hör auf!",
                T0032: "Es reicht! Hör auf sowas zu sagen! Ich bin froh das du existierst. ",

                T0033: "Denkst du oft über sowas nach?",
                T0034: "Ja, also das es besser wäre wenn du nicht existieren würdest...",
                T0035: "Sowas meine ich...",
                T0036: "... Ich weis nicht.",
                T0037: "Eigentlich nicht, nein...",
                T0038: "...",
                T0039: "... Warst du deswegen schon mal bei einem Psychologen?",
                T0040: "Warum nicht?",
                T0041: "Und wenn wir zusammen hingehen? Wäre das besser?",
                T0042: "Dann machen wir das so. Zusammen schaffen wir das!"
            },

            Nick: {
                T0000: "ar... argh...",
                T0001: "Wo ... bin ich?",
                T0002: "M.. Mira? Was machst du hier?",
                T0003: "... ich",
                T0004: "... ich wollte weg..von hier.",
                T0005: "... ist doch egal! Einfach weg! Ich halts nicht mehr aus...",
                T0006: "... Ich ...will nicht mehr...",

                T0007: "... ja",
                T0008: "Ich weis nicht... kann schon sein.",
                T0009: "Schwer zu sagen.",
                T0010: "Es gibt Tage, an denen fühle ich mich einfach nutzlos...",
                T0011: "Egal was ich mache, alles ergibt einfach keinen Sinn und bringt mich nicht weiter... ",
                T0012: "Ich habe auf nichts Lust, egal wie sehr ich versuche mich für etwas zu motivieren...",
                T0013: "Nichts bringt mich weiter. Tag für Tag immer das gleiche...",
                T0014: "Ich wollte dich eigentlich nicht mit sowas belasten...",
                T0015: "Du hast ja auch zu tun.",
                T0016: "Da musst du dich nicht auch noch um meine Probleme kümmern.",

                T0017: "Ich will nicht das du auch noch unter meinen Problemen leidest...",
                T0018: "Ich will dich nicht auch noch zusätzlich belasten...",
                T0019: "Es reicht doch schon das ich unter meinen Problemen leide...",
                T0020: "Nein.. Deswegen wäre es vielleicht auch besser wenn ich nicht weiter existieren würde...",
                T0021: "So würde ich niemanden mehr damit belasten und ich müsste auch nicht mehr leiden...",

                T0022: "Naja das wäre doch für alle das Beste.",
                T0023: "?",
                T0024: "...",

                T0025: "Was meinst du?",
                T0026: "Hin und wieder. Macht doch jeder mal oder?",
                T0027: "Du nicht?",
                T0028: "Oh...",
                T0029: "...",
                T0030: "Bisher nicht.",
                T0031: "Ist mir irgendwie unangenehm...",
                T0032: "...",
                T0033: "Denke schon."


            }
        }
        fS.Sound.fade(sound.overworldTheme, 0, 1, true);
        fS.Sound.fade(sound.mysteryTheme, 0.1, 4, true);
        await fS.Location.show(location.hideout);
        await fS.update(2);
        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
        await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0000);
        fS.Character.hideAll();
        await fS.Character.show(characters.Mira, characters.Mira.pose.sad, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0001);
        await fS.Speech.tell(characters.Mira, text.Mira.T0002);
        await fS.Speech.tell(characters.Mira, text.Mira.T0003);
        await fS.Speech.tell(characters.Mira, text.Mira.T0004);
        await fS.Speech.tell(characters.Mira, text.Mira.T0005);

        //wait or ambulance
        let waitOrAmbulanceAnswer = {
            wait: "Warten",
            ambulance: "Hilfe holen"
        };
        let waitOrAmbulance = await fS.Menu.getInput(waitOrAmbulanceAnswer, "decisionClass");
        switch (waitOrAmbulance) {
            case waitOrAmbulanceAnswer.wait:
                return await badEnding2();
            case waitOrAmbulanceAnswer.ambulance:
                break;
        }

        await fS.Speech.tell(characters.Mira, text.Mira.T0006);
        await fS.Speech.tell(characters.Mira, "...");
        await fS.Speech.tell(characters.Mira, text.Mira.T0007);
        await fS.Speech.tell(characters.Mira, text.Mira.T0008);
        await fS.Speech.tell(characters.Mira, "...");
        await fS.Speech.tell(characters.Mira, text.Mira.T0009);
        await fS.Speech.tell(characters.Mira, text.Mira.T0010);
        await fS.Speech.tell(characters.Mira, text.Mira.T0011);
        await fS.Speech.tell(characters.Narrator, "Mira trägt Nick nach Hause und legt ihn auf sein Bett.");
        fS.Sound.fade(sound.rain, 0.03, 3, true);
        fS.Sound.fade(sound.mysteryTheme, 0, 1, true);
        fS.Speech.hide();
        fS.Character.hideAll();
        await fS.Location.show(location.nicksRoomBadWeatherNoPhoto);
        await fS.update(transition.swipe.duration, transition.swipe.alpha, transition.swipe.edge);
        await fS.Character.show(characters.Mira, characters.Mira.pose.sad, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0012);
        fS.Speech.hide();
        fS.Character.hideAll();
        await fS.Location.show(location.black);
        await fS.update(1);
        await fS.Text.print("Zwei Stunden später...");
        fS.Text.close();
        await fS.update();
        await fS.Location.show(location.nicksRoomBadWeatherNoPhoto);
        await fS.update(1);
        await fS.Speech.tell(characters.Nick, text.Nick.T0000);
        await fS.Character.show(characters.Nick, characters.Nick.pose.tired, nickPosWhenBoth);
        await fS.Character.show(characters.Mira, characters.Mira.pose.sad, miraPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0001);
        fS.Character.hide(characters.Mira);
        await fS.Character.show(characters.Mira, characters.Mira.pose.crying, miraPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0013);
        fS.Character.hide(characters.Nick);
        await fS.Character.show(characters.Nick, characters.Nick.pose.sad, nickPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0002);
        await fS.Speech.tell(characters.Mira, text.Mira.T0014);
        await fS.Speech.tell(characters.Mira, text.Mira.T0015);
        await fS.Speech.tell(characters.Mira, text.Mira.T0016);
        await fS.Speech.tell(characters.Mira, text.Mira.T0017);
        await fS.Speech.tell(characters.Nick, text.Nick.T0003);
        fS.Character.hide(characters.Nick);
        await fS.Character.show(characters.Nick, characters.Nick.pose.crying, nickPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0004);
        fS.Character.hide(characters.Mira);
        await fS.Character.show(characters.Mira, characters.Mira.pose.sad, miraPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0018);
        await fS.Speech.tell(characters.Nick, text.Nick.T0005);
        await fS.Speech.tell(characters.Nick, text.Nick.T0006);

        //get angry or talk
        let getAngryOrTalkAnswer = {
            angry: "Wütend werden",
            scars: "Narben"
        };
        let getAngryOrTalk = await fS.Menu.getInput(getAngryOrTalkAnswer, "decisionClass");
        switch (getAngryOrTalk) {
            case getAngryOrTalkAnswer.angry:
                return await badEnding3();
            case getAngryOrTalkAnswer.scars:
                break;
        }

        await fS.Speech.tell(characters.Mira, text.Mira.T0019);
        await fS.Speech.tell(characters.Mira, text.Mira.T0020);
        await fS.Speech.tell(characters.Nick, "...");
        await fS.Speech.tell(characters.Nick, text.Nick.T0007);
        await fS.Speech.tell(characters.Mira, "...");
        fS.Character.hide(characters.Mira);
        await fS.Character.show(characters.Mira, characters.Mira.pose.crying, miraPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0021);
        await fS.Speech.tell(characters.Mira, "...");
        await fS.Speech.tell(characters.Nick, "...");
        await fS.Speech.tell(characters.Mira, text.Mira.T0022);
        await fS.Speech.tell(characters.Nick, text.Nick.T0008);
        fS.Character.hide(characters.Mira);
        await fS.Character.show(characters.Mira, characters.Mira.pose.crying, miraPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0023);
        fS.Character.hide(characters.Nick);
        await fS.Character.show(characters.Nick, characters.Nick.pose.sad, nickPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0009);
        await fS.Speech.tell(characters.Mira, text.Mira.T0024);
        await fS.Speech.tell(characters.Nick, text.Nick.T0010);
        await fS.Speech.tell(characters.Nick, text.Nick.T0011);
        await fS.Speech.tell(characters.Nick, text.Nick.T0012);
        await fS.Speech.tell(characters.Nick, text.Nick.T0013);
        await fS.Speech.tell(characters.Mira, text.Mira.T0025);
        fS.Character.hide(characters.Mira);
        await fS.Character.show(characters.Mira, characters.Mira.pose.sad, miraPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0026);
        await fS.Speech.tell(characters.Nick, text.Nick.T0014);
        await fS.Speech.tell(characters.Nick, text.Nick.T0015);
        await fS.Speech.tell(characters.Nick, text.Nick.T0016);
        await fS.Speech.tell(characters.Mira, text.Mira.T0027);

        //get angry or talk
        let ThanksOrContradictAnswer = {
            thanks: "Danke",
            contradict: "Widersprechen"
        };
        let ThanksOrContradict = await fS.Menu.getInput(ThanksOrContradictAnswer, "decisionClass");
        switch (ThanksOrContradict) {
            case ThanksOrContradictAnswer.thanks:
                await fS.Speech.tell(characters.Mira, "Das ist nett von dir.");
                await fS.Speech.tell(characters.Mira, "Stimmt schon. Ich hatte in letzter Zeit wirklich viel zu tun...");
                await fS.Speech.tell(characters.Mira, "Trotzdem solltest du dir darüber nicht so viele Gedanken machen.");
                await fS.Speech.tell(characters.Mira, "Es ist doch wichtiger das es dir gut geht...");
                await fS.Speech.tell(characters.Nick, "...");
                break;
            case ThanksOrContradictAnswer.contradict:
                await fS.Speech.tell(characters.Mira, "Deine Probleme sind hier ja gerade wohl wichtiger!");
                await fS.Speech.tell(characters.Mira, "Ich bekomme meine Probleme schon irgendwie auf die Reihe!");
                await fS.Speech.tell(characters.Nick, "...");
                break;
        }

        fS.Character.hide(characters.Nick);
        await fS.Character.show(characters.Nick, characters.Nick.pose.crying, nickPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0017);
        await fS.Speech.tell(characters.Mira, text.Mira.T0028);
        await fS.Speech.tell(characters.Nick, text.Nick.T0018);
        await fS.Speech.tell(characters.Nick, text.Nick.T0019);
        await fS.Speech.tell(characters.Mira, text.Mira.T0029);
        await fS.Speech.tell(characters.Nick, text.Nick.T0020);
        fS.Character.hide(characters.Nick);
        await fS.Character.show(characters.Nick, characters.Nick.pose.tired, nickPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0021);

        //get angry or talk
        let getAngryOrTalkAnswer2 = {
            angry: "Wütend werden",
            nick: "Nick!"
        };
        let getAngryOrTalk2 = await fS.Menu.getInput(getAngryOrTalkAnswer2, "decisionClass");
        switch (getAngryOrTalk2) {
            case getAngryOrTalkAnswer2.angry:
                return await badEnding3();
            case getAngryOrTalkAnswer2.nick:
                break;
        }

        await fS.Speech.tell(characters.Mira, text.Mira.T0030);
        await fS.Speech.tell(characters.Nick, text.Nick.T0022);
        fS.Character.hide(characters.Mira);
        await fS.Character.show(characters.Mira, characters.Mira.pose.crying, miraPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0031);
        await fS.Speech.tell(characters.Nick, text.Nick.T0023);
        await fS.Speech.tell(characters.Mira, text.Mira.T0032);
        fS.Character.hide(characters.Nick);
        await fS.Character.show(characters.Nick, characters.Nick.pose.sad, nickPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0024);
        await fS.Speech.tell(characters.Mira, text.Mira.T0033);
        await fS.Speech.tell(characters.Nick, text.Nick.T0025);
        await fS.Speech.tell(characters.Mira, text.Mira.T0034);
        fS.Character.hide(characters.Mira);
        await fS.Character.show(characters.Mira, characters.Mira.pose.sad, miraPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Mira, text.Mira.T0035);
        await fS.Speech.tell(characters.Nick, text.Nick.T0026);
        await fS.Speech.tell(characters.Mira, text.Mira.T0036);
        await fS.Speech.tell(characters.Nick, text.Nick.T0027);
        await fS.Speech.tell(characters.Mira, text.Mira.T0037);
        await fS.Speech.tell(characters.Nick, text.Nick.T0028);
        await fS.Speech.tell(characters.Mira, text.Mira.T0038);
        await fS.Speech.tell(characters.Nick, text.Nick.T0029);
        await fS.Speech.tell(characters.Mira, text.Mira.T0039);
        await fS.Speech.tell(characters.Nick, text.Nick.T0030);
        await fS.Speech.tell(characters.Mira, text.Mira.T0040);
        await fS.Speech.tell(characters.Nick, text.Nick.T0031);
        await fS.Speech.tell(characters.Mira, text.Mira.T0041);
        await fS.Speech.tell(characters.Nick, text.Nick.T0032);
        await fS.Speech.tell(characters.Nick, text.Nick.T0033);
        await fS.Speech.tell(characters.Mira, text.Mira.T0042);
        fS.Speech.hide();
        fS.Character.hideAll();
        
        await fS.Location.show(location.colorBeforeEnding);
        await fS.update(2);
        fS.Sound.fade(sound.goodEnding, 0.2, 2, true);
        await fS.Text.print("Kurz nach den Prüfungen beginnen Mira und Nick damit einen geeigneten Psychologen zu suchen, bei Nick sich wohlfühlt.");
        fS.Text.close();
        await fS.update();
        await fS.Speech.tell(characters.Narrator, "", true, "hiddenText");
        return "GoodEnding";



        async function badEnding2(): Promise<string> {
            await fS.Speech.tell(characters.Mira, "Vielleicht wacht er ja gleich auf");
            await fS.Speech.tell(characters.Narrator, "Du wartest 30 Minuten neben Nick. Es beginnt zu regnen.");
            fS.Sound.fade(sound.rain, 0.06, 3, true);
            await fS.Speech.tell(characters.Mira, "Oh man, er kommt nicht zu sich.");
            await fS.Speech.tell(characters.Mira, "Ich muss ihn erstmal nach Hause ins Trockene bringen!");
            fS.Character.hideAll();
            fS.Speech.hide();
            await fS.Location.show(location.black);
            await fS.update(1);
            await fS.Location.show(location.nicksRoomBadWeatherNoPhoto);
            await fS.update(1);
            await fS.Character.show(characters.Mira, characters.Mira.pose.sad, fS.positions.bottomcenter);
            await fS.update();
            await fS.Speech.tell(characters.Mira, "Was mache ich denn jetzt?");

            //wait or ambulance
            let waitOrChangeAnswer = {
                wait: "Warten",
                change: "Umziehen"
            };
            let waitOrChange = await fS.Menu.getInput(waitOrChangeAnswer, "decisionClass");
            switch (waitOrChange) {
                case waitOrChangeAnswer.wait:
                    await fS.Speech.tell(characters.Mira, "Bis er aufwacht dauert es sicher nicht mehr lange...");
                    await fS.Speech.tell(characters.Mira, "Oh man... bin ich...müde...");
                    fS.Character.hideAll();
                    fS.Speech.hide();
                    await fS.Location.show(location.black);
                    await fS.update(0.5);
                    await fS.Location.show(location.nicksRoomBadWeatherNoPhoto);
                    await fS.update(0.7);
                    await fS.Location.show(location.black);
                    await fS.update(0.3);
                    await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                    await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                    await fS.Location.show(location.black);
                    await fS.update(0.2);
                    await fS.Location.show(location.nicksRoomBadWeatherNoPhoto);
                    await fS.update(0.7);
                    await fS.Location.show(location.black);
                    await fS.update(0.2);
                    await fS.Location.show(location.nicksRoomBadWeatherNoPhoto);
                    await fS.update(0.7);
                    await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
                    await fS.update();
                    await fS.Speech.tell(characters.Mira, "Mist, ich bin eingeschlafen.");
                    fS.Character.hideAll();
                    await fS.Character.show(characters.Mira, characters.Mira.pose.sad, fS.positions.bottomcenter);
                    await fS.update();
                    await fS.Speech.tell(characters.Mira, "Ich hoffe bei Nick ist alles okay.");
                    break;
                case waitOrChangeAnswer.change:
                    await fS.Speech.tell(characters.Mira, "Ich bin ganz nass vom Regen. Ich sollte schnell nach Hause gehen und mich umziehen bevor ich noch krank werde.");
                    fS.Character.hideAll();
                    fS.Speech.hide();
                    await fS.Location.show(location.black);
                    await fS.update(1);
                    await fS.Text.print("30 Minuten später...");
                    fS.Text.close();
                    await fS.update();
                    await fS.Location.show(location.nicksRoomBadWeatherNoPhoto);
                    await fS.update(1);
                    break;
            }

            await fS.Character.show(characters.Mira, characters.Mira.pose.sad, fS.positions.bottomcenter);
            await fS.update();
            await fS.Speech.tell(characters.Mira, "Vielleicht sollte ich seine Atmung überprüfen.");
            await fS.Speech.tell(characters.Mira, "...");
            fS.Character.hideAll();
            await fS.Character.show(characters.Mira, characters.Mira.pose.crying, fS.positions.bottomcenter);
            await fS.update();
            await fS.Speech.tell(characters.Mira, "Oh nein...");
            await fS.Speech.tell(characters.Mira, "Bitte nicht...");
            await fS.Speech.tell(characters.Mira, "Nein.");
            await fS.Speech.tell(characters.Mira, "Nein..");
            await fS.Speech.tell(characters.Mira, "Nein...");
            fS.Character.hideAll();
            fS.Speech.hide();
            await fS.Location.show(location.black);
            await fS.update(2);
            return "BadEnding";
        }

        async function badEnding3(): Promise<string> {
            await fS.Speech.tell(characters.Mira, "Du spinnst doch! Glaubst du wirklich das würde irgendwas ändern?");
            await fS.Speech.tell(characters.Nick, "...");
            await fS.Speech.tell(characters.Mira, "Merkst du denn nicht, dass es dadurch nur schlimmer wird? Reiß dich mal zusammen!");
            await fS.Speech.tell(characters.Nick, "...");
            await fS.Speech.tell(characters.Nick, "Tut mir leid...");
            await fS.Speech.tell(characters.Mira, "Sollte es auch! Ich hab mir echt Sorgen gemacht!");
            await fS.Speech.tell(characters.Nick, "...");
            await fS.Speech.tell(characters.Mira, "Mach sowas nicht nochmal! ");
            await fS.Speech.tell(characters.Nick, "Ok...");
            await fS.Speech.tell(characters.Mira, "Versprochen? Du läufst nicht mehr weg?");
            fS.Character.hide(characters.Nick);
            await fS.Character.show(characters.Nick, characters.Nick.pose.tired, nickPosWhenBoth);
            await fS.update();
            await fS.Speech.tell(characters.Nick, "Ja... kein Weglaufen mehr...");
            await fS.Speech.tell(characters.Nick, "Ich muss mal aufs Klo... Komme gleich wieder.");
            fS.Character.hide(characters.Nick);
            await fS.update(1);

            /*-----Animation-----*/
            let moveRightAnimation: fS.AnimationDefinition = {
                start: { translation: miraPosWhenBoth },
                end: { translation: fS.positions.bottomcenter },
                duration: 2,
                playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
            };

            await fS.Character.hide(characters.Mira);
            await fS.Character.animate(characters.Mira, characters.Mira.pose.sad, moveRightAnimation);
            await fS.update();
            /*-----Animation End-----*/
            await fS.Speech.tell(characters.Narrator, "", true, "hiddenText");
            await fS.Sound.fade(sound.hitTheFloor, 1, 0.5);
            await fS.Speech.tell(characters.Mira, "Nick? Alles okay?");

            //lookOrWait
            let lookOrWaitAnswer = {
                look: "Nachschauen",
                wait: "Warten"
            };
            let lookOrWait = await fS.Menu.getInput(lookOrWaitAnswer, "decisionClass");
            switch (lookOrWait) {
                case lookOrWaitAnswer.look:
                    break;
                case lookOrWaitAnswer.wait:
                    fS.Speech.hide();
                    fS.Character.hideAll();
                    await fS.Location.show(location.black);
                    await fS.update(1);
                    await fS.Text.print("Ein paar Minuten später...");
                    fS.Text.close();
                    await fS.update();
                    await fS.Location.show(location.nicksRoomBadWeatherNoPhoto);
                    await fS.update(1);
                    await fS.Character.show(characters.Mira, characters.Mira.pose.neutral, fS.positions.bottomcenter);
                    await fS.update();
                    await fS.Speech.tell(characters.Mira, "Nick?");
                    await fS.Speech.tell(characters.Nick, "...");
                    await fS.Speech.tell(characters.Mira, "Das dauert mir zu lange.");
                    await fS.Speech.tell(characters.Mira, "Nick, ich komme jetzt rein.");
            }

            fS.Speech.hide();
            fS.Character.hideAll();
            await fS.Location.show(location.nicksBathroomDead);
            await fS.update(transition.swipe.duration, transition.swipe.alpha, transition.swipe.edge);
            await fS.Speech.tell(characters.Narrator, "", true, "hiddenText");
            await fS.Location.show(location.black);
            await fS.update(2);
            return "BadEnding";
        }
    }
}