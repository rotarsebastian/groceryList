  document.getElementById("myInput")
      .addEventListener("keyup", function (event) {
          event.preventDefault();
          if (event.keyCode == 13) {
              document.getElementById("but").click();
          }
      });

  function newElement() {
      
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
          alert("You must write something!");
          return;
          
      } else {
          document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("myInput").value = "";

      li.setAttribute("id", inputValue);

      text = document.createTextNode(inputValue);

      console.log(li);

      li.onclick =
          function (elem) {

              var lii = document.createElement("li");
              var id = elem.id;

              lii.appendChild(text);
              document.getElementById("done").appendChild(lii);

              document.getElementById("myUL").removeChild(li);
          };


  }




  function addToDone(elem) {
      var li = document.createElement("li");
      var id = elem.id;
      var value = document.getElementById(id).innerHTML;
      var t = document.createTextNode(value);
      li.appendChild(t);
      document.getElementById("done").appendChild(li);
      document.getElementById("myUL").removeChild(document.getElementById(id));

  }
