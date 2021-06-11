namespace Template{
    export function muteAllMusic(): void {
        fS.Sound.fade(sound.overworldTheme, 0, 0, false);
        fS.Sound.fade(sound.pianoSongGoing, 0, 0, false);
        fS.Sound.fade(sound.pianoSongDontStand, 0, 0, false);
        fS.Sound.fade(sound.pianoSongFlowerfield, 0, 0, false);
    }
}