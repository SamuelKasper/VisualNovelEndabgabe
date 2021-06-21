namespace Endabgabe {
    export async function BadEnding(): fS.SceneReturn {
        console.log("BadEnding: starting");
        fS.Character.hideAll();
        fS.Speech.hide();
        //Bad Ending Screen
        fS.Sound.fade(sound.badEnding, 0.2, 0.5, true);
        await fS.Location.show(location.badEnding);
        await fS.update();
        await fS.Speech.tell(characters.Mira, "", true, "hiddenText");
        fS.Sound.fade(sound.badEnding, 0, 0.3, false);
        
    }
}