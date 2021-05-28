namespace Template {
    export async function Scene_3_neutral(): fS.SceneReturn {
        console.log("Scene_3_neutral: starting");

        //Text
        let text = {
            Narrator:{
                T0000: ""
            },

            Mira: {
                T0000: "",
                T0001: "",
                T0002: "",
                T0003: "",
                T0004: "",
                T0005: ""
            },

            Nick: {
                T0000: "",
                T0001: "",
                T0002: "",
                T0003: "",
                T0004: "",
                T0005: "",
                T0006: "",
                T0007: ""
            }
        }
        await fS.Speech.tell(characters.Nick, text.Mira.T0000);
    }       
}