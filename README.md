# Hackathon IPSSI 2024 - Équipe 9

## Membre
* Fabien Colard
* Mamoudou NDONGO
* Jemima-doria KOUMBA
* Omar MUFTI
* Loris HASLAY
* Chaymae Houbbadi

## Production

(Le site ne sera pas hébergé indéfiniment)
Si vous souhaitez le voir en production et qu'il est éteint (ou erreur 502)
Merci de contacter fabien5525 sur discord ou f.colard@ecole-ipssi.net

https://hackathon.5525.fr/
https://back.hackathon.5525.fr/

## Ressources

Trello : https://trello.com/invite/ipssihackatone9/ATTIdaf8b0a8e4a1158c5ed320d8b57359a5CD1127F7

## Installation du projet

Ce projet utilise docker principalement.

Nous avons 4 services principaux : 
* db : Une base de données mariadb qui héberge nos données
* phpmyadmin : Un site disponible qui permet de visualiser la base de données
* front : Une image basée sur node permettant gérer l'hébergement de l'application ReactJS
* back : Une image basée sur python permettant de gérer l'hébergement de l'application Flask (API)

Pour lancer le docker

```bash
docker compose up -d
```

On peut ensuite accéder aux différentes ressources avec les sites suivants : 
* Front : http://localhost:3000
* Back : http://localhost:3001
* phpMyAdmin : http://localhost:25566 (à décommenter dans le compose.yml)

Si on souhaite ajouter un dump de la base, il suffit de remplacer le fichier hackathon.sql présent dans le dossier docker/db.

## Arborescence

* back : *Contenant l'API Flask*
* hackathon_front : *Contenant l'application ReactJS*
* notebooks : *Contenant les notebooks utilisés durant le projet*
  * data : *un dossier contenant les 4 datasets d'origine* 
    * *(dossier à créer lors de l'installation du projet pour utiliser les notebooks)*
  * notebook.ipynb : *Utilisé pour l'exploration & le traitement des données*
  * bd.ipynb : *Utilisé pour le remplissage de la base de données* 
  * spark : *Contenant l'image docker et le traitement utilisé avec spark*
  * G.ColabModel.ipynb : *Utilisé pour l'entrainement du modèle avec tensorflow sur Google Colab*
  * tensorflow : *Contenant l'image docker et le traitement utilisé avec tensorflow*
