namespace Template {
    export class SceneDesicionClass {
        public static chooseScene(_sceneDesicionPoints: number) {
            switch (_sceneDesicionPoints) {
                case 1:
                    return "scene_2_bad";
                case 2:
                    return "scene_3_bad";
                case 1001:
                    return "scene_2_neutral";
                case 2001:
                    return "scene_2_good";
                default:
                    return "no valid sceneDesicionPoint";
            }
        }
    }
}