namespace Template {
    export async function GoodEnding(): fS.SceneReturn {
        console.log("goodEnding: starting");
        fS.Character.hideAll();
        fS.Speech.hide();
        //good Ending Screen
        await fS.Location.show(location.goodEnding);
        await fS.update(2);
        await fS.Speech.tell(characters.Narrator, "", true, "hiddenText");
        await fS.Location.show(location.goodEndingBlurred);
        await fS.update(0.7);
        
        let text = document.createElement('p');
        text.innerHTML = "Good Ending";
        document.getElementById("goodEndingText").appendChild(text);
        await fS.Speech.tell(characters.Narrator, "", true, "hiddenText");
    }
}