# Hackathon IPSSI 2024 - Équipe 9

## Membre
* Fabien Colard
* Mamoudou NDONGO
* Jemimadoria KOUMBA
* Omar MUFTI
* Loris HASLAY
* Chaymae Houbbadi

## Instalation du projet

Ce projet utilise docker principalement.

Nous avons 4 services principaux : 
* db : Une base de données mariadb qui héberge nos données
* phpmyadmin : Un site disponible sur le port 25566 qui permet de visualisé la base de données
* front : Une image basé sur node permettant gérér l'hébergement de l'applicaton ReactJS
* back : Une image basé sur python permettant de gérér l'hébergement de l'application Flask (API)

Pour lancer le docker

```bash
docker compose up -d
```

On peux ensuite accéder aux différentes ressources avec les sites suivants : 
* Front : http://localhost:3000
* Back : http://localhost:3001
* phpMyAdmin : http://localhost:25566

Si on souhaite ajouter un dump de la base, il suffit de remplacer le fichier hackathon.sql présent dans le dossier docker/db.

## Arborescence

* back : Contenant l'API Flask
* hackathon_front : Contenant l'application ReactJS
* notebook
  * data : un dossier contenant les quatres datasets d'origine 
    * (dossier à créer lors de l'installation du projet pour utiliser les notebooks)
  * notebook.ipynb : Utilisé pour l'exploration & le traitement des données
  * bd.ipynb : Utilisé pour le remplissage de la base de données 
  * spark : Contenant l'image docker et le traitement utilisé avec spark
