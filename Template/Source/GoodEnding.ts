namespace Template {
    export async function GoodEnding(): fS.SceneReturn {
        console.log("goodEnding: starting");
        console.log(dataToSave.specialText); //23 wenn alles mitgenommen
        fS.Character.hideAll();
        fS.Speech.hide();
        //good Ending Screen
        await fS.Location.show(location.goodEnding);
        await fS.update(2);
        //Special when enought options were clicked
        if (dataToSave.specialText >= 23) {
            await fS.Speech.tell(characters.Mira, "Bist du aufgeregt?");
            await fS.Speech.tell(characters.Nick, "...");
            await fS.Speech.tell(characters.Nick, "Ein bisschen.");
            await fS.Speech.tell(characters.Mira, "Wir schaffen das!");
        }
        fS.Speech.hide();
        await fS.Speech.tell(characters.Narrator, "", true, "hiddenText");
        await fS.Location.show(location.goodEndingBlurred);
        await fS.update(0.7);
    }
}