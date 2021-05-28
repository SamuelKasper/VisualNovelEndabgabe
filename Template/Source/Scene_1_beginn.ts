namespace Template {
  export async function Scene_1_beginn(): fS.SceneReturn {
    console.log("Scene_1_beginn: starting");
    let signalDelay2s: fS.Signal = fS.Progress.defineSignal([() => fS.Progress.delay(2)]);

    //Text
    let text = {
      Mira: {
        T0000: "Hm? Schon ziemlich hell...",
        T0001: "Wie viel Uhr ist es?",
        T0002: "...",
        T0003: "Erst 8:30 Uhr. Soll ich schon aufstehen oder lieber noch ein bisschen weiter schlafen?"
      }
    }

    //Wake up
    fS.Speech.hide();
    await fS.Location.show(location.black);
    await fS.update();
    await fS.Location.show(location.miraRoomDarker);
    await fS.update(0.7);
    await fS.Location.show(location.black);
    await fS.update(0.2);
    await fS.Location.show(location.miraRoomDarker);
    await fS.update(0.5);

    //Text
    await fS.Speech.tell(characters.Mira, text.Mira.T0000);
    await fS.Speech.tell(characters.Mira, text.Mira.T0001);
    await fS.Speech.tell(characters.Mira, text.Mira.T0002);
    await fS.Speech.tell(characters.Mira, text.Mira.T0003);

    //get up or sleep
    let sleepNewsCalendarAnswer = {
      sleep: "Schlafen",
      news: "News lesen",
      calendar: "Kalender anschauen"
    }
    let sleepNewsCalendar = await fS.Menu.getInput(sleepNewsCalendarAnswer, "decisionClass");

    switch (sleepNewsCalendar) {
      //Weiterschalfen: scene_2_bad (sceneDesicionPoints = 1)
      case sleepNewsCalendarAnswer.sleep:
        await fS.Speech.tell(characters.Mira, "Für einen Sonntag ist es ja noch ziemlich früh. Da kann man sich nochmal ein paar Stunden Schlaf gönnen.");
        fS.Speech.hide();
        await fS.Character.hide(characters.Mira);
        await fS.Location.show(location.black);
        await fS.update(0.5);
        await signalDelay2s();
        await fS.Location.show(location.miraRoom);
        await fS.update(0.3);
        await fS.Speech.tell(characters.Mira, "Sonntag 10:30 Uhr. Jetzt bin ich bereit aufzustehen.");
        dataToSave.sceneDesiscionPoints = 1;
        break;

      //News: scene_2_neutral (sceneDesicionPoints = 1001)  
      case sleepNewsCalendarAnswer.news:
        await fS.Speech.tell(characters.Mira, "Mal schauen ob's was neues gibt.")
        fS.Speech.hide();
        await fS.Location.show(location.miraRoomHandyNews);
        await fS.update();
        await signalDelay2s();
        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
        await fS.Speech.tell(characters.Mira, "Spannend wie immer...");
        await fS.Speech.tell(characters.Mira, "Dann ist es wohl mal Zeit aufzustehen.");
        dataToSave.sceneDesiscionPoints = 1001;
        break;

      //Calendar
      case sleepNewsCalendarAnswer.calendar:
        await fS.Location.show(location.miraRoomHandyCalendar);
        await fS.update();
        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
        await fS.Speech.tell(characters.Mira, "Noch eine Woche bis zu den Prüfungen. Ich sollte heute definitv mal mit lernen anfangen.");
        await fS.Speech.tell(characters.Mira, "Oh, heute hat Nick Geburtstag. Wir haben uns schon lange nicht mehr gesehen.");
        await fS.Speech.tell(characters.Mira, "Vielleicht sollte ich mal wieder bei Ihm vorbei schauen.");

        let goToBirthdayAnswer = {
          go: "Hingehen",
          dontGo: "Zuhause bleiben"
        };

        let goToBirthday = await fS.Menu.getInput(goToBirthdayAnswer, "decisionClass");

        switch (goToBirthday) {
          //go to Birthday: scene_2_good (sceneDesiscionPoints = 2001)
          case goToBirthdayAnswer.go:
            await fS.Speech.tell(characters.Mira, "Ja, das mache ich. Da freut er sich sicher.");
            dataToSave.sceneDesiscionPoints = 2001;
            break;

          //dont go to Birthday: scene_2_bad (sceneDesicionPoints = 1)  
          case goToBirthdayAnswer.dontGo:
            await fS.Speech.tell(characters.Mira, "Hm, irgendwie ist mir gerade nicht danach. Ich schreib ihm später einfach mal.");
            dataToSave.sceneDesiscionPoints = 1;
            break;
        }
        break;
    }

    //chose next scene
    return SceneDesicionClass.chooseScene(dataToSave.sceneDesiscionPoints);
  }
}