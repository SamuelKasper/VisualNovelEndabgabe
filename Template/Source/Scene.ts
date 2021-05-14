namespace Template {
  export async function Scene(): fS.SceneReturn {
    console.log("Scene 1 starting");

    //Text

    //Scene 1
    await fS.Speech.hide();
    await fS.Location.show(location.black);
    await fS.update();
    await fS.Location.show(location.miraRoom);
    await fS.update(0.7);
    await fS.Location.show(location.black);
    await fS.update(0.2);
    await fS.Location.show(location.miraRoom);
    await fS.update(0.3);
    await fS.Character.show(characters.Mira, characters.Mira.pose.good, fS.positions.bottomcenter);
    await fS.Speech.show();
    await fS.update(1);
    await fS.Speech.tell(characters.Mira, "Guten Morgen");
  }
}