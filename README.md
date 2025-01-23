# KainForgeCalculator
Calculatrice de la forge de Kain.  
Cette calculatrice permet de calculer le coût de modification d'un objet *épique* de l'univers du jeu [BW](https://fr.bloodwars.net/) sur un serveur de type **Ultima Thule** / **Nercopolis**.\
[Essayer](https://deepsideeffect.github.io/KainForgeCalculator)

## Description
Ce projet a pour objectif de modéliser les données de la page "[source des données](https://wiki.fr.bloodwars.net/index.php?title=La_Forge_de_Kain_sur_UT)" liée afin de réaliser une calculatrice des coûts de modification d'un item *épique* de l'univers du jeu [BW](https://fr.bloodwars.net/) d'un état donné à un autre état.  
Cette calculatrice vise à faciliter les décisions des joueurs en leur fournissant des informations précises et directes, très rapidement, sur les coûts associés aux différentes combinaisons de modification des items.

## Technologies Open Source utilisées
Ce projet est développé en utilisant uniquement des technologies de base ("*full vanilla*") sans frameworks ou bibliothèques supplémentaires.\
Cela permet de garantir une compréhension claire et directe du code source et de ses fonctionnalités.\
Les langages utilisés incluent **HTML**, **CSS**, **JavaScript** et **Batch Script**.
De plus, **Git** est utilisé pour le contrôle de version et la gestion des contributions, **GIMP** a été utilisé pour créer une image ainsi que le favicon et **SonarQube** (*édition communautaire*) est utilisé pour l'analyse de code et l'amélioration de la qualité.

## Fonctionnalités
- Modélisation des données de la page "[source des données](https://wiki.fr.bloodwars.net/index.php?title=La_Forge_de_Kain_sur_UT)".
- Prise en charge des différents états et items de l'univers du jeu BW.
- Calcul des coûts de modification d'un item d'un état à un autre.
- Prise en charge de l'amélioration aussi bien que de la diminution d'un item.
- Possibilité de copier le résultat dans le presse-papiers selon l'un des deux formats disponibles.
- Possibilité de traduire la page en plusieurs langues (Français et Anglais implémentés).
- Possibilité de lancer la page directement dans la langue demandée.
- Interface utilisateur intuitive et ludique pour faciliter l'utilisation de la calculatrice.
- Affichage entièrement *responsive* et animé.
- Utilisation d'effets sonores réglables.
- Conservation des préférences de l'utilisateur pour la prochaine utilisation.

## Installation
Pour installer et exécuter ce projet localement, suivez les étapes ci-dessous :

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/DeepSideEffect/KainForgeCalculator.git
	 ```
2. Ouvrez la page ***index.html*** sur votre navigateur.
>📝<sup>1</sup> Depuis la **v1.4.0** avec la fonctionnalité d'internationalisation, la page pourrait ne plus s'afficher correctement en local, par défaut.  
Des méthodes possibles pour éviter les problèmes de [CORS](https://fr.wikipedia.org/wiki/Cross-origin_resource_sharing) lors du développement local sont détaillées dans ce [fichier](src/docs/ServeurLocal.md).

>📝<sup>2</sup> Vous pouvez aussi ajouter le choix de la langue en paramètre queryString pour traduire directement à l'affichage, ex : `http://localhost:5500/index.html?lang=en`.

## Utilisation
Sélectionnez un item avec ses caractéristiques de départ et d'arrivée.  
La calculatrice affichera les coûts associés à la modification de l'item après avoir cliqué sur le bouton **Calculer**.

## Exemples d'utilisation
Calculer le coût de modification d'une ***Epique Casquette Chic De La Miss*** vers un ***Epique Bandana Cornu De La Précognition***.  
Dans la partie *Caractéristiques Souhaitées* (= état d'arrivée) :
- Sélectionnez "*Bandana*" dans le menu déroulant du **Support voulu**.
- Sélectionnez "*Cornu*" dans le menu déroulant du **Préfixe voulu**.
- Sélectionnez "*De La Précognition*" dans le menu déroulant du **Suffixe voulu**.
- Cliquez sur "**Calculer**" pour obtenir le coût.
- La copie du résultat formaté, via le bouton **Copier** donnera ce récapitulatif :
```Text
Epique Casquette Chic De La Miss
==>
Epique Bandana Cornu De La Précognition 

Coût total :
1155 points d'évolution
465 pièces épiques
31 runes Verte Niveau 2
```

## Contribuer
Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez suivre les étapes ci-dessous :
- Forkez le dépôt.
- Créez une branche pour votre fonctionnalité (`git checkout -b fonctionnalite/ma-fonctionnalite`).
- Commitez vos modifications (`git commit -m 'Ajout de ma fonctionnalité'`).
- Poussez votre branche (`git push origin fonctionnalite/ma-fonctionnalite`).
- Ouvrez une Pull Request.

## Licence
Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Rejoindre la partie sur Bloodwars
- sur le server créé le *12.09.**2007*** : [Ultima Thule](https://r1.fr.bloodwars.net/r.php?r=16320)
- sur le server créé le *31.03.**2008*** : [Ultima Thule II](https://r2.fr.bloodwars.net/r.php?r=1504)
- sur le server créé le *18.01.**2010*** : [Ultima Thule III](https://r4.fr.bloodwars.net/r.php?r=7244)

## Remerciements
- Merci à la communauté BW pour leur soutien et leurs retours.
- Merci à tous ceux qui ont contribué à ce projet tels que [VashTheStampede](https://r1.fr.bloodwars.net/showmsg.php?a=profile&uid=67380), [Burns](https://r2.fr.bloodwars.net/showmsg.php?a=profile&uid=280) et [Minuit](https://r4.fr.bloodwars.net/?a=profile&uid=5017).

## Auteurs
[Deep](https://r2.fr.bloodwars.net/showmsg.php?a=profile&uid=1504) - Développeur principal - [GitHub profil](https://github.com/DeepSideEffect)

## Autres langues du fichier README
- [Fichier README anglais](README_EN.md)

## Problèmes connus

### Problème avec la propriété `.lang` de `SpeechSynthesisUtterance` sous Opera

La propriété `.lang` de `SpeechSynthesisUtterance` ne fonctionne pas correctement sous *Opera*, ce qui entraîne une mauvaise prononciation des textes en anglais avec un accent français.  
Ce problème n'est pas présent sous *Chrome*, *Edge* et *Firefox*.

#### Suggestions

- Contacter le support d'*Opera* pour signaler le problème.
- Vérifier les forums pour des solutions ou des mises à jour.

Pour plus d'informations sur la compatibilité des navigateurs, consultez la [documentation MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/lang#browser_compatibility).  
Vous pouvez également suivre l'évolution de ce problème sur [notre issue GitHub](https://github.com/mdn/browser-compat-data/issues/25625).

Nous espérons qu'une mise à jour future d'*Opera* corrigera ce problème.
