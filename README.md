# TypeWriter-JavaScript-Frontend-Web-Development

## Preview: https://codewithplus.github.io/TypeWriter-JavaScript-Frontend-Web-Development/

This is the JavaScript class which help to animate the typewriter text. It provide ease to animate multiple text at the same time.

## Download:
[Download the TypeWriter.js](https://github.com/Schecher1/Minecraft-Server-Creator/blob/master/README.md)


## Usage:

### Caution:
before using use the script tag to load the typewriter.js to your document.
```
<script src="typewriter.js"></script>
```

### To animate one text:
```
let typeWriter = new TypeWriter("element", "blinker", "CodeWithPlus");
typeWriter.StartAnimation();
```

## To animate multiple texts:
```
let typeWriter = new TypeWriter("element", "blinker", ["C Programming", "C++ Programming", "Python", "Java"]);
typeWriter.StartAnimation();
```

## To change how much times the blinker will show and hide:
```
let typeWriter = new TypeWriter("element", "blinker", ["C Programming", "C++ Programming", "Python", "Java"], 5);
typeWriter.StartAnimation();    
```

## To hide the blinker from the one text after writing done:
```
let typeWriter = new TypeWriter("element", "blinker", "CodeWithPlus", 0);
typeWriter.StartAnimation();
```

## To change the duration of text to write and the duration of hiding and showing of blinker:
```
let typeWriter = new TypeWriter("element", "blinker", ["C Programming", "C++ Programming", "Python", "Java"], 5, 500, 100);
typeWriter.StartAnimation();  
```
