document.getElementsByClassName('hamburger')[0].addEventListener('click', function(event) {
        var navArray = document.getElementsByClassName("topnav")[0].children;
        for (var i = 2; i < navArray.length; i++) {
            if (navArray[i].style.display == "none" || navArray[i].style.display == "") {
                navArray[i].style.display = "block";
            } else {
                navArray[i].style.display = "none";
            }
        }
    });
