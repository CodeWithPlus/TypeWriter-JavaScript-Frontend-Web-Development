# TypeWriter-JavaScript-Frontend-Web-Development

## Preview: https://codewithplus.github.io/TypeWriter-JavaScript-Frontend-Web-Development/

This is the JavaScript class which help to animate the typewriter text. It provide ease to animate multiple text at the same time.

## Usage:

### To animate one text:
```
let nameTypeWriter = new TypeWriter("element", "blinker", "CodeWithPlus");
nameTypeWriter.StartAnimation();
```

## To animate multiple texts:
```
 let typeWriter = new TypeWriter("element", "blinker", ["C Programming", "C++ Programming", "Python", "Java"]);
  anim1TypeWriter.StartAnimation();
```

## To change how much times the blinker will show and hide:
```
let anim2TypeWriter = new TypeWriter("#anim2", "#anim2-b", ["C Programming", "C++ Programming", "Python", "Java"], 5);
anim2TypeWriter.StartAnimation();    
```
