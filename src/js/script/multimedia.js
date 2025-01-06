/** Définit l'état muet de tous les sons */
function setMuteStateAll(mute) {
	var medias = document.getElementsByTagName('audio');
	Array.from(medias).forEach(function (media) {
		media.muted = mute;
	});
}

/** Changer le volume de tous les audios. Le volume va de 0.0 à 1.0 */
function changerVolumeTous(volume) {
	var medias = document.getElementsByTagName('audio');
	Array.from(medias).forEach(function (media) {
		media.volume = volume;
	});
}