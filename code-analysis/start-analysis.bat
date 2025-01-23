@ECHO OFF

SETLOCAL ENABLEEXTENSIONS

REM --------------------------------------------------------
REM LANCEMENT D'UNE ANALYSE SONARQUBE
REM --------------------------------------------------------
ECHO Lancement d'une analyse sonarqube sur les sources du projet courant...

REM --------------------------------------------------------
REM	RECUPERATION DES VARIABLES PROJET
REM --------------------------------------------------------

ECHO Verification de la presence du fichier de configuration
IF NOT EXIST local-sonar-config.env (
    ECHO Code analysis configuration error. Please create and fill in local-sonar-config.env file with your current project values.
    GOTO :END
)

ECHO Lecture du fichier de configuration
FOR /F "tokens=1* delims==" %%A IN (local-sonar-config.env) DO SET %%A=%%B

ECHO Valeurs des variables projet de la configuration :
ECHO * Project key = %PROJECTKEY%
ECHO * Project token = %PROJECTTOKEN%

ECHO Verification des valeurs du fichier de configuration
IF "%PROJECTKEY%"=="sonar.projectKey=My_SonarQube_Project_Key_ABCDEF_0123456789" (
    ECHO Code analysis configuration error. Please fill in local-sonar-config.env file with your current values.
    GOTO :END
)

IF "%PROJECTTOKEN%"=="sonar.token=sqp_0123456789abcdef1aa11bb22cc33dd44e55f660" (
    ECHO Code analysis configuration error. Please fill in local-sonar-config.env file with your current values.
    GOTO :END
)

REM --------------------------------------------------------
REM	SE PLACER SUR LE BON REPO
REM --------------------------------------------------------
ECHO Positionnement sur le repertoire racine du projet
CD ..

REM --------------------------------------------------------
REM DEMARRAGE
REM --------------------------------------------------------
ECHO Analyse des sources...
CALL sonar-scanner.bat -D"%PROJECTKEY%" -D"sonar.sources=./" -D"sonar.host.url=http://localhost:9000" -D"%PROJECTTOKEN%"
REM --------------------------------------------------------
REM	Fin de traitement
REM --------------------------------------------------------
ECHO -
ECHO - ANALYSE TERMINEE
ECHO -

:END
ENDLOCAL

PAUSE
