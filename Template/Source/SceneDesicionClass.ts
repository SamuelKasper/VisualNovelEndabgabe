namespace Template {
    export class SceneDesicionClass {
        public static chooseScene(_sceneDesicionPoints: number) {
            switch (_sceneDesicionPoints) {
                //bad scenes
                case 1:
                    return "scene_2_bad";
                case 2:
                    return "scene_3_bad";

                //neutral scenes
                case 1001:
                    return "scene_2_neutral";
                case 1002:
                    return "scene_3_neutral";

                //good scenes
                case 2001:
                    return "scene_2_good";
                case 2002:
                    return "scene_3_good";

                //default
                default:
                    return "no valid sceneDesicionPoint";
            }
        }
    }
}