namespace Template{
    export async function GoodEnding(): fS.SceneReturn {
        console.log("goodEnding: starting");
        fS.Character.hideAll();
        fS.Speech.hide();
        //good Ending Screen
        await fS.Location.show(location.black);
        fS.Sound.fade(sound.goodEnding, 0.2, 1, true);
        await fS.update();

        await fS.Speech.tell(characters.Narrator, "", true, "hiddenText");
    }
}