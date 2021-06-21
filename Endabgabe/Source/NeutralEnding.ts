namespace Endabgabe{
    export async function NeutralEnding(): fS.SceneReturn {
        console.log("neutralEnding: starting");
        fS.Character.hideAll();
        fS.Speech.hide();
        await fS.Location.show(location.black);
        fS.Sound.fade(sound.overworldTheme, 0, 1, false);
        await fS.update(1.5);
        await signalDelay2s();
        await fS.Text.print("2 Wochen später - Nach den Prüfungen."); 
        await fS.Text.print("Da Nick nicht auf deine Antworten reagiert beschließt du bei Nick vorbeizugehen um zu schauen wie es ihm geht."); 
        await fS.Text.print("Als du vor seiner Haustür stehst und keiner aufmacht wirst du von seinen Nachbarn angesprochen.");
        fS.Sound.fade(sound.badEnding, 0.2, 1.5, true);
        await fS.Text.print("Von diesen erfährst du das Nick vor knapp ein einhalb Wochen verschwunden und seit dem vermisst ist.");
        fS.Text.close();
        await fS.update();
        await fS.Location.show(location.neutralEnding);
        await fS.update();
        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
        fS.Sound.fade(sound.badEnding, 0, 0.3, false);        
    }
}