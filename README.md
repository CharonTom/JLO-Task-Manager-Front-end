# Réalisation d'un gestionnaire de tâche (Front part)
Le back se trouve ici : [JLO-Task-Manager-Back-end](https://github.com/CharonTom/JLO-Task-Manager-Back-end)

Vous pouvez directement tester l'application : [ ici](https://ubiquitous-meringue-e3582c.netlify.app/)

<p align="center">
<img src="https://github.com/CharonTom/my-website/blob/main/src/assets/img/task.png" alt="application sur pc et mobile" width="400"/>
</p>

Ce gestionnaire démarre par l’affichage d’une liste de tâches, avec un champ permettant d’ajouter de nouvelles tâches. D’autres fonctionnalités viennent ensuite compléter l’application afin de la rendre plus aboutie.

### Critères de l'application :

1. Les tâches sont affichées sous forme de liste, les unes sous les autres.
2. Les tâches sont divisées en deux pages : sur la première, la liste des tâches en cours et
   sur la deuxième, la liste des tâches terminées. Chaque page peut être accédée
   directement depuis l’URL et une navigation est aussi disponible dans l’application.
3. Un champ texte permet d’ajouter une nouvelle tâche en cours et d'y attribuer un groupe (tag).
4. Il est possible de marquer une tâche comme terminée.
5. Un bouton permet de supprimer toutes les tâches terminées.
6. La liste de tâches est récupérée depuis l’API externe développé dans le back
7. Lorsqu’une tâche est ajoutée, terminée ou supprimée, une notification temporaire
   apparaît puis disparaît après un court instant, elle peut être fermée à tout instant par l’utilisateur.
8. Une troisième page de paramètres est disponible. Elle permet de sélectionner une couleur de thème qui est utilisée à travers toute l’application.

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
- Entrer 'yarn dev' pour lancer le server
- Rendez-vous sur http://localhost:5173/

Rendez-vous sur mon repo [JLO-Task-Manager-Back-end](https://github.com/CharonTom/JLO-Task-Manager-Back-end) pour voir la partie back.
