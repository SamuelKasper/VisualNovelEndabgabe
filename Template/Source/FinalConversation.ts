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
                T0018: "Wie weg? Wohin?"
            },

            Nick: {
                T0000: "ar... argh...",
                T0001: "Wo ... bin ich?",
                T0002: "M.. Mira? Was machst du hier?",
                T0003: "... ich",
                T0004: "... ich wollte weg..von hier.",
                T0005: "... ist doch egal! Einfach weg! Ich halts nicht mehr aus...",
                T0006: "... Ich ...will nicht mehr..."
            }
        }

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
                badEnding2();
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
        fS.Speech.hide();
        fS.Character.hideAll();
        await fS.Location.show(location.nicksRoomBadWeather);
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
        await fS.Location.show(location.nicksRoomBadWeather);
        await fS.update(1);
        await fS.Speech.tell(characters.Nick, text.Nick.T0000);
        await fS.Character.show(characters.Nick, characters.Nick.pose.tired, nickPosWhenBoth);
        await fS.Character.show(characters.Mira, characters.Mira.pose.sad, miraPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0001);
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
        await fS.Speech.tell(characters.Nick, text.Nick.T0004);
        await fS.Speech.tell(characters.Mira, text.Mira.T0018);
        fS.Character.hide(characters.Nick);
        await fS.Character.show(characters.Nick, characters.Nick.pose.crying, nickPosWhenBoth);
        await fS.update();
        await fS.Speech.tell(characters.Nick, text.Nick.T0005);
        await fS.Speech.tell(characters.Nick, text.Nick.T0006);



        async function badEnding2(): Promise<string> {
            await fS.Speech.tell(characters.Mira, "Vielleicht wacht er ja gleich auf");
            await fS.Speech.tell(characters.Narrator, "Du wartest 30 Minuten neben Nick. Es beginnt zu regnen.");
            await fS.Speech.tell(characters.Mira, "Oh man, er kommt nicht zu sich.");
            await fS.Speech.tell(characters.Mira, "Ich muss ihn erstmal nach Hause ins Trockene bringen!");
            fS.Character.hideAll();
            fS.Speech.hide();
            await fS.Location.show(location.black);
            await fS.update(1);
            await fS.Location.show(location.nicksRoomBadWeather);
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
                    await fS.Location.show(location.nicksRoomBadWeather);
                    await fS.update(0.7);
                    await fS.Location.show(location.black);
                    await fS.update(0.3);
                    await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                    await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
                    await fS.Location.show(location.black);
                    await fS.update(0.2);
                    await fS.Location.show(location.nicksRoomBadWeather);
                    await fS.update(0.7);
                    await fS.Location.show(location.black);
                    await fS.update(0.2);
                    await fS.Location.show(location.nicksRoomBadWeather);
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
                    await fS.Location.show(location.nicksRoomBadWeather);
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
            return "BadEnding1";




        }
    }
}