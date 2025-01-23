# KainForgeCalculator
Kain's Forge Calculator.  
This calculator allows you to calculate the cost of modifying an epic item in the [BW](https://bloodwars.net/) game universe on a **Necropolis** like server.\
[Try it](https://deepsideeffect.github.io/KainForgeCalculator?lang=en)

## Description
This project aims to model the data from the "[data source](https://wiki.fr.bloodwars.net/index.php?title=La_Forge_de_Kain_sur_UT)" page to create a cost calculator for modifying an epic item in the [BW](https://bloodwars.net/) game universe from one state to another.  
This calculator aims to facilitate players' decisions by providing precise and direct information very quickly on the costs associated with different item modification combinations.

## Open Source technologies used
This project is developed using only basic technologies ("*full vanilla*") without any additional frameworks or libraries.\
This ensures a clear and direct understanding of the source code and its functionalities.\
The languages used include **HTML**, **CSS**, **JavaScript** and **Batch Script**.
Additionally, **Git** is used for version control and managing contributions, **GIMP** was used to create an image as well as the favicon and **SonarQube** (*Community Edition*) is used for code analysis and quality improvement.

## Features
- Modeling data from the "[data source](https://wiki.fr.bloodwars.net/index.php?title=La_Forge_de_Kain_sur_UT)" page.
- Support for different states and items in the BW game universe.
- Calculation of the cost of modifying an item from one state to another.
- Support for both upgrading and downgrading an item.
- Ability to copy the result to the clipboard in one of the two available formats.
- Ability to translate the page into multiple languages (French and English implemented).
- Ability to launch the page directly in the requested language.
- Intuitive and playful user interface to facilitate the use of the calculator.
- Fully *responsive* and animated display.
- Adjustable sound effects.
- Preservation of user preferences for the next use.

## Installation
To install and run this project locally, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/DeepSideEffect/KainForgeCalculator.git
	 ```
2. Open the ***index.html*** page in your browser.
>📝<sup>1</sup> Since **v1.4.0**, with the internationalization feature, the page may no longer display correctly locally, by default.  
Possible methods to avoid [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) issues during local development are detailed in this [file](src/docs/LocalServer.md).

>📝<sup>2</sup> You can also add the language choice as a queryString parameter to translate directly on display, e.g.: `http://localhost:5500/index.html?lang=en`.

## Usage
Select an item with its starting and ending characteristics.  
The calculator will display the costs associated with modifying the item after clicking the **Calculate** button.

## Examples of Use
Calculate the cost of modifying an ***Epic Decorative Cap of the Miss*** into an ***Epic Horned Bandana of Precognition***.  
In the *Desired Characteristics* section (= target state):
- Select "*Bandana*" from the **Desired type** dropdown menu.
- Select "*Horned*" from the **Desired prefix** dropdown menu.
- Select "*of Precognition*" from the **Desired suffix** dropdown menu.
- Click "**Calculate**" to get the cost.
- Copying the formatted result via the **Copy** button will give this summary:
```Text
Epic Decorative Cap of the Miss
==>
Epic Horned Bandanna of Precognition 

Total cost:
1155 evolution PTS
465 epic coins
31 Green Level 2 runes
```

## Contributing
Contributions are welcome! If you wish to contribute to this project, please follow the steps below:
- Fork the repository.
- Create a branch for your feature (`git checkout -b feature/my-feature`).
- Commit your changes (`git commit -m 'Add my feature'`).
- Push your branch (`git push origin feature/my-feature`).
- Open a Pull Request.

## Licence
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Join the Bloodwars game
- on server created the *02/17/**2009***: [Necropolis](https://r2.bloodwars.net/r.php?r=30202)

## Acknowledgements
- Thanks to the BW community for their support and feedback.  
- Thanks to everyone who contributed to this project, such as [VashTheStampede](https://r1.fr.bloodwars.net/showmsg.php?a=profile&uid=67380), [Burns](https://r2.fr.bloodwars.net/showmsg.php?a=profile&uid=280) & [Minuit](https://r4.fr.bloodwars.net/?a=profile&uid=5017).

## Authors
[Deep](https://r2.bloodwars.net/showmsg.php?a=profile&uid=30202) - Lead Developer - [GitHub profil](https://github.com/DeepSideEffect)

## Other README File Languages
- [French README file](README.md)

## Known Issues

### Issue with the `.lang` property of `SpeechSynthesisUtterance` in Opera

The `.lang` property of `SpeechSynthesisUtterance` does not work correctly in *Opera*, leading to incorrect pronunciation of English text with a French accent.  
This issue is not present in *Chrome*, *Edge*, and *Firefox*.

#### Suggestions

- Contact *Opera* support to report the issue.
- Check forums for solutions or updates.

For more information on browser compatibility, see the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/lang#browser_compatibility).  
You can also follow the progress of this issue on [our GitHub issue](https://github.com/mdn/browser-compat-data/issues/25625).

We hope that a future update of *Opera* will fix this issue.
