# Soundboard Template HTML5
A simple template you can use to make a soundboard!

##How to Use
1. Download or clone these files into a folder
2. Add the sound files you want to play in the `sounds` folder - make sure they are either .mp3, .ogg, or .wav (compatibility with HTML <audio>)
3. Edit index.html: For each sound you want to play, add
```html
<audio title="[Write title here]">
  <source src="sounds/[file name].[file extension]">
</audio>
```
under body. The title is a name/discription of the sound you want to show on the web page and the source is the path of the file.
4. Edit the buttonsPerRow variable in index.js to manipulate how many sounds show up in each row. A factor of the number of sounds would be optimal so the buttons line up (but isn't needed). 
5. Open up the index.html file on your browser to view the soundboard. Click on buttons to play the sound clips! 

##Behind the project: 
"I need like a Sykkuno soundboard" - Corpse. 
"that's good enough for me" - me
And so I made this template. Feel free to use it for whatever (compiling funny jokes from a friend, funny/relaxing sounds, clippable lines from content-creators, etc).

