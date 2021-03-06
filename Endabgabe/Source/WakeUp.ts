namespace Endabgabe {
  export async function WakeUp(): fS.SceneReturn {
    console.log("WakeUp: starting");
    alert("Schwarzer Rahmen am rechten Rand? \n -> Spiele im Vollbild Modus (F11) \n \nDrücke ESC um das Ingame Menü ein/auszublenden.");

    //Text
    let text = {
      Mira: {
        T0000: "Hm? Schon ziemlich hell...",
        T0001: "Wie viel Uhr ist es?",
        T0002: "...",
        T0003: "Erst 8:30 Uhr. Soll ich schon aufstehen oder lieber noch ein bisschen weiter schlafen?"
      }
    };

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
    };
    let sleepNewsCalendar = await fS.Menu.getInput(sleepNewsCalendarAnswer, "decisionClass");

    switch (sleepNewsCalendar) {
      //Weiterschalfen
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
        return "DontRememberBirthday";

      //News:
      case sleepNewsCalendarAnswer.news:
        await fS.Speech.tell(characters.Mira, "Mal schauen ob es was Neues gibt.");
        fS.Speech.hide();
        await fS.Location.show(location.miraRoomHandyNews);
        await fS.update();
        await signalDelay2s();
        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
        await fS.Speech.tell(characters.Mira, "Spannend wie immer...");
        await fS.Speech.tell(characters.Mira, "Dann ist es wohl mal Zeit aufzustehen.");
        return "RememberWhilePiano";

      //Calendar
      case sleepNewsCalendarAnswer.calendar:
        dataToSave.specialText++;
        await fS.Location.show(location.miraRoomHandyCalendar);
        await fS.update();
        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
        await fS.Speech.tell(characters.Mira, "Noch eine Woche bis zu den Prüfungen. Ich sollte heute definitiv mal mit lernen anfangen.");
        await fS.Speech.tell(characters.Mira, "Oh, heute hat Nick Geburtstag. Wir haben uns schon lange nicht mehr gesehen.");
        await fS.Speech.tell(characters.Mira, "Vielleicht sollte ich mal wieder bei ihm vorbeischauen.");

        let goToBirthdayAnswer = {
          go: "Hingehen",
          dontGo: "Zuhause bleiben"
        };

        let goToBirthday = await fS.Menu.getInput(goToBirthdayAnswer, "decisionClass");

        switch (goToBirthday) {
          //go to Birthday
          case goToBirthdayAnswer.go:
            dataToSave.specialText++;
            await fS.Speech.tell(characters.Mira, "Ja, das mache ich. Da freut er sich sicher.");
            fS.Speech.hide();
            return "NicksBirthday";

          //dont go to Birthday
          case goToBirthdayAnswer.dontGo:
            await fS.Speech.tell(characters.Mira, "Hm, irgendwie ist mir gerade nicht danach. Ich schreib ihm später einfach mal.");
            return "DontRememberBirthday";
        }
        break;
    }
  }
}