$(document).ready(function() {
  let words = [];
  
  let wordsF = {};
  const re = /[a-zA-Z]+/g;
  const reDirty = /\b(zoinks|muppeteer|biffaroni|loopdaloop)\b/g;

  $("#formOne").submit(function(event) {
    event.preventDefault();

    const sentence = $("input#word").val().trim();
    words = sentence.match(re);
    
    words.forEach(element => {
      let s = element.toLowerCase();
      let dirtyWord = s.match(reDirty);
      if(!dirtyWord) {
        let a = wordsF[s];
        if(a) {
          wordsF[s]++;
        }else{
          wordsF[s] = 1;
        }
      }
    });

    let wordFrequncy = Object.entries(wordsF);
    wordFrequncy.sort((a, b) => b[1] - a[1]);


    $("#formOne").hide();
    $("#story").show();
    $("p#s1").text(sentence);

    for(let i=0; i < 3 && i < wordFrequncy.length; i++) {
      $("ul#s2").append("<li>" + wordFrequncy[i][0] + " " + wordFrequncy[i][1].toString() +"</li>");
    }  
    
  });
});