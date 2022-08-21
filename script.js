var me = (function() {
  var itme = ["I'm on a quest to find the sweet spot at the intersection of design, technology and moving media","i like to play connect the dots on a starry night sky","I'm obsessed with everything in motion, go figure","I believe that the best lessons of life can be learnt in antique shops","I create montage artwork when I'm not experimenting with motion design","I want to help build tools that make the internet a better and safer place"];
  var count = -1;
  return function() {
    return itme[++count % itme.length];
  }
}());
