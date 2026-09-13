# foundations

Hamidi Mariam 
mail ul:mariam.hamidi5@etu.univ-lorraine.fr

Questions observation exercice 2:

1.Avec filter, on decrit la propriété du résultat attendu, c'est une approche declarative en ecrivant la condition requise (fonction c=>....).

2.Elle permet de selectionner les elements qu'on garde dans le tableau, selon si elle renvoie vrai ou faux, le filter regroupe alors tous les elements dont le boolean renvoie vrai et le met dans le tableau.

3.Elles ne modifient pas leurs arguments, ellles produisent chacune une nouvelle valeur (un string ou un boolean selon la fonction) sans jamais alterer les données passées en parametres.

Questions observation exrcice 3:

1.Les fonctions findTeamById, getTeamName, createCrewCards calculent toutes une valeur (elles prennent des parametres en entrée et retourne des nouvelles données sans modifier les entrées).

2.Les instructions console.log et console.table permettent d'observer ce qui se passe apres le calcul, les fonctions en elles memes ne font les calculs que en memoire.

3.Oui, on utilise les données des tableaux seulement, si ils ne sont pas modifiés, les resultats sont toujours les memes.


Questions observation exercice 4:

1.Parceque auroreTeam et updatedAurore sont deux objets differents en mémoire avec deux adresses differentes, === verifie que la reference memoire de l'objet (adresse) est la meme, et non pas le contenu de l'objet en lui meme, ici ce n'est pas le cas, donc on a bien auroreTeam!==updatedAurore, grace a la fonction update qui utilise le spread ...

2.Les seuls elements du tableau qui change de référence sont ceux dont l'id (teamId) correspond à l'id recherché, tous les autres elements restent ceux d'origine et concervent donc leur reference.

3.C'est plus simple de verifier les changements apportés, en utilisant !== , on peut savoir directement si des données ont ete modifiées entre les deux versions.

4.Si l'objet vient à etre directement modifié par une partie, ça peut creer des bugs ou des erreurs imprévus.


Questions observation exercice 5:

1.Elle décrit seulement le résultat à produire, on n'utilise que un switch qui retourne une chaine de caractere selon l'état.

2.Parceque ça garanti une vérification securisée du statut, afin d'acceder aux données (data), si on utilise le boolean, on pourrait se retrouver avec des données, meme si le statut n'est pas en success par exemple.

3.C'est impossible de presenter les etats "loading" avec des données (data) et un message d'erreur, "success" en n'ayant pas de données (data), et "error" avec des données (data) vraies et sans message d'eereur.

Questions observation exercice 6:

1.T represente n'importe quel type d'objet qui possede un id, puisqu'il herite d'un objet dont au moins un des attributs et un id.

2.extends {id:number} garanti que l'objet T possede au moins un attribut id qui est de type number.

3.Si aucun element n'est trouvé (aucun element du tableau ne possede l'id recherché), la fonction retourne un un undefined.


les deux fonctions:

findTeamById, elle prend en entrée un type numérique number (teamId) et renvoie un objet de type Team (celle dont l'id correspond à teamId) ou undefined si aucune Team n'a été trouvé (aucun id correspodant), elle ne modifie pas ses arguments et ne produit pas d'effet observable.Elle ne renvoie pas toujours le meme résultat, elle depend dun element importé (ici le tableau teams sur lequel elle s'applique), si l'element est modifié, le résultat n'est pas le meme.

replacedById, elle prend en entrée un tableau d'elements (items) de type Array<T> et un objet (remplacement) de type T et renvoie un nouveau tableau de type Array<T>, elle ne modifie pas ses arguments, elle renvoie un nouveau tableau grace à .map() et elle ne produit pas deffet observable.Elle renvoie toujours le meme résultat, tout les elements dont elle dépend lui sont fournis en parametres, donc si les memes arguments lui sont donnés, elle renverra toujours le meme résultat.



J'ai utiliser la documentation typescript et l'IA pour comprendre les erreurs de syntaxe quand j'utilise map() et le spread.