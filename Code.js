function onOpen() {
    var ui = DocumentApp.getUi();
    // Or DocumentApp or FormApp.
    ui.createMenu('Custom Paragraphing')
        .addItem('Title case', 'menuItem1')
        .addSeparator()
        .addItem('Lower case', 'menuItem2')
        .addSeparator()
        .addItem("Sentense case", "menuItem3")
        .addToUi();
  }
  
  function menuItem1() {
    DocumentApp.getUi() // Or DocumentApp or FormApp.
       .alert('You have selected all uper case!');
       const regex = /(\b[a-z](?!\s))/g;
       //this gets every first letter of every word and a few that come after symbols like ,- etc
       //https://stackoverflow.com/questions/6251463/regex-capitalize-first-letter-every-word-also-after-a-special-character-like-a
       const oldtext = DocumentApp.getActiveDocument().getBody().getText();
       const newText = oldtext.replace(regex, function(x){return x.toUpperCase();});
       DocumentApp.getActiveDocument().getBody().setText(newText);
  }
  
  function menuItem2() {
    DocumentApp.getUi() // Or DocumentApp or FormApp.
       .alert('You have selected all lower case!');
       const regex = /\b(\w)/g;
       //this gets every first letter of every word
       const oldtext = DocumentApp.getActiveDocument().getBody().getText();
       const newText = oldtext.replace(regex, function(x){return x.toLowerCase();});
       DocumentApp.getActiveDocument().getBody().setText(newText);
  }


  function menuItem3() {
    DocumentApp.getUi() // Or DocumentApp or FormApp.
       .alert('You have selected sentense case!');
       const regex = /(^\s*\w{1}|\.\s*\w{1})/gi;
       //this gets every letter that qualifies for capitalization in a paragraph >>
       //https://stackoverflow.com/questions/19089442/convert-string-to-sentence-case-in-javascript
       const oldtext = DocumentApp.getActiveDocument().getBody().getText();
       const newText = oldtext.replace(regex, function(x){return x.toUpperCase();});
       DocumentApp.getActiveDocument().getBody().setText(newText);
  }