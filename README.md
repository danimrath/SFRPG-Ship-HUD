# SFRPG-Ship-HUD
Simple HUD element to display the HP and shield of the players ship with a UI image

## Features:
- Default ship image with labels for ship health and shields
- Change the image to whatever you want
- Change the facing to match your image so the values display correctly
- Make the image always be whatever the actor image is for the chosen ship

## Enabling the HUD

The HUD will be shown automatically for all players on any scene when a token for chosen ship actor is detected.

![Ship-HUD-1.png](screenshots%2FShip-HUD-1.PNG)

1) Enter the name of the ship actor you wish to be displayed by the HUD
2) If enabled this will automatically use the portrait of the identified actor
3) You can leave this as the default or revert to blank for the default image. Otherwise you can choose any image you like, this will get overwritten automatically though if you enable #2!
4) This setting will change the labels to show the shields in the appropriate position on the HUD relative to the direction chosen.
