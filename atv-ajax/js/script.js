function carregdad() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
               var data = JSON.parse(xhr.responseText);
            var resultDiv = document.getElementById("saida");
            resultDiv.innerHTML = ""; 

            for (var i = 0; i < data.length; i++) {
                var post = data[i];
                var postElement = document.createElement("div");
                postElement.innerHTML = "<h3>" + post.title + "</h3><p>" + post.body + "</p>";
                resultDiv.appendChild(postElement);
            }
        }
    };

   
    xhr.send();
}
