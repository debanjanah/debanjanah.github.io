var me = (function() {
  var itme = ["I'm on a quest to find the sweet spot at the intersection of design, technology and film","I believe that the best lessons of life can be learnt in antique shops","I experiment with motion design when I'm not creating montage artwork"];
  var count = -1;
  return function() {
    return itme[++count % itme.length];
  }
}());
//,"I'm obsessed with everything in motion, go figure"
//,"I play connect the dots on a starry night sky"
