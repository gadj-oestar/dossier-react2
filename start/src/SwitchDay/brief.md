# Brief

Vous devez réaliser un composant switch de mode jour/nuit avec React.
Celui-ci est composé d'un bouton switch permettant de choisir le mode visuel de l'interface ( claire ou sombre )

# Consignes

Le composant s'appellera SwitchDayMode et sera autonome.

# Props

## day

Si ce props existe, il désigne l'etat initial du Switch

# Exemple d'utilisation

    <SwitchDayMode day={true} />

# Comportements

## Initialisation

On affiche l'etat du switch.
La classe 'on' sur l'element ayant la classe 'switch' permet de représenter le jour.
L'absence de classe 'on' sur l'element ayant la classe 'switch' permet de représenter la nuit.

## Click

Au click sur le switch, le mode change et le mot approprié (Night, Day) est affiché à coté du switch
