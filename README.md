# Réaliser un gestionnaire de tâche

Ce gestionnaire démarre par l’affichage d’une liste de tâches, avec un champ permettant d’ajouter de nouvelles tâches. D’autres fonctionnalités viennent ensuite compléter l’application afin de la rendre plus aboutie et de couvrir différents aspects du développement.

### Critères d’acceptance par ordre de priorité :

1. Les tâches sont affichées sous forme de liste, les unes sous les autres.
2. Les tâches sont ordonnées en deux blocs : d’abord les tâches en cours, ensuite les tâches terminées. Chaque bloc est ordonné par date de création de la tâche.
3. Un champ texte permet d’ajouter une nouvelle tâche en cours.
4. Il est possible de marquer une tâche comme terminée.
5. Un bouton permet de supprimer toutes les tâches terminées.
6. La liste de tâches est récupérée depuis l’API externe développé dans l’exercice back
7. Les actions d’ajout, de marquage terminé et de suppression des tâches effectuent
   l’action sur l’API. La structure complète d’un objet task est la suivante :
8. Lorsqu’une tâche est ajoutée, terminée ou supprimée, une notification temporaire
   apparaît puis disparaît après un court instant.
9. L’application est divisée en deux pages : sur la première, la liste des tâches en cours et
   sur la deuxième, la liste des tâches terminées. Chaque page peut être accédée
   directement depuis l’URL et une navigation est aussi disponible dans l’application.
10. Une troisième page de paramètres est disponible. Elle permet de sélectionner une couleur de thème qui est utilisée à travers toute l’application.
11. La notification peut être fermée à tout instant par l’utilisateur.
12. La notification reste affichée tant que l’utilisateur maintient la souris dessus.
13. L’application est hébergée sur Internet, sur un service comme Netlify, now.sh ou GitHub pages. Il n’est pas nécessaire ni recommandé d’utiliser un service payant.

### Technologies utilisées:

- React
- React-router
- React-Tostify
- Graphql / Apollo client
- Typescript
- TailwindCSS

---

### Installation

- Cloner ou télécharger le repo
- Ouvrir le terminal de commande à la racine du dossier et entrer "yarn" pour installer les dépendances.
- Créer un fichier .env et compléter le comme ceci :
- Entrer 'yarn dev' pour lancer le server
- Rendez-vous sur http://localhost:5173/ pour tester l'API

Vous pouvez également visiter l'application directement sur ce lien : https://ubiquitous-meringue-e3582c.netlify.app/

L'application nécessite de lancer son back-end si vous voulez qu'elle fonctionne.
Rendez-vous sur mon repo [JLO-Task-Manager-Back-end](https://github.com/CharonTom/JLO-Task-Manager-Back-end) et suivre ses instructions d'installation.
