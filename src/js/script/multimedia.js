/** Définit l'état muet de tous les sons */
function setMuteStateAll(mute) {
	const medias = document.getElementsByTagName('audio');
	Array.from(medias).forEach(function (media) {
		media.muted = mute;
	});

	if (mute) speechSynthesis?.cancel();
}

/** Changer le volume de tous les audios. Le volume va de 0.0 à 1.0 */
function changerVolumeTous(volume) {
	const medias = document.getElementsByTagName('audio');
	Array.from(medias).forEach(function (media) {
		media.volume = volume;
	});
}

/**
 * Synthétiser un message prononcé (vocal)
 * @param {*} lang Langue de la voix (non prise en compte par Opera, bug rapporté chez eux)
 * @param {*} message Phrase à prononcer par la voix
 * @param {*} volume Régle le volume de la voix (0.0 à 1.0)
 * @param {*} rate Régle la vitesse du message (0.1 à 10)
 */
function speechSynthesizer(lang, message, volume, rate) {
	if ('speechSynthesis' in window) {
		const voiceMessage = new SpeechSynthesisUtterance(message);
		voiceMessage.lang = cultureLanguages[lang].code;
		voiceMessage.volume = volume
		voiceMessage.rate = rate;
		speechSynthesis.speak(voiceMessage);
	} else {
		console.error('API Web Speech non prise en charge par ce navigateur.');
	}
}
