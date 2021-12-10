window.onload = function () {
    
    /* event listener */
    document.getElementById("school_name").addEventListener('change', updateSN);
    document.getElementById("program").addEventListener('change', updateProgram);
    document.getElementById("year").addEventListener('change', updateYear);
    document.getElementById("desc").addEventListener('change', updateDesc);



    document.getElementById("books").addEventListener('change', updateBooks);
    document.getElementById("assigns").addEventListener('change', updateAssigns);
    document.getElementById("tests").addEventListener('change', updateTests);
    document.getElementById("pres").addEventListener('change', updatePres);
    document.getElementById("coffees").addEventListener('change', updateCof);
    document.getElementById("nighters").addEventListener('change', updateNighters);


    document.getElementById("grd_a").addEventListener('change', updateA);
    document.getElementById("grd_b").addEventListener('change', updateB);
    document.getElementById("grd_c").addEventListener('change', updateC);
    document.getElementById("grd_d").addEventListener('change', updateD);

    document.getElementById("color1").addEventListener('change', updateColor);
    document.getElementById("color2").addEventListener('change', updateColor);
    document.getElementById("degree").addEventListener('change', updateColor);
    
    /* function */
    function updateSN(){
        document.getElementById("sn_txt").innerHTML = document.getElementById("school_name").value;
    }

    function updateProgram(){
        document.getElementById("program_txt").innerHTML = document.getElementById("program").value;
    }

    function updateYear(){
        document.getElementById("year_txt").innerHTML = document.getElementById("year").value;
    }
    
    function updateDesc(){
        document.getElementById("desc_txt").innerHTML = document.getElementById("desc").value;
    }



    function updateBooks(){
        document.getElementById("books_txt").innerHTML = document.getElementById("books").value;
    }

    function updateAssigns(){
        document.getElementById("assigns_txt").innerHTML = document.getElementById("assigns").value;
    }

    function updateTests(){
        document.getElementById("tests_txt").innerHTML = document.getElementById("tests").value;
    }
    
    function updatePres(){
        document.getElementById("present_txt").innerHTML = document.getElementById("pres").value;
    }

    function updateCof(){
        document.getElementById("cof_txt").innerHTML = document.getElementById("coffees").value;
    }
    
    function updateNighters(){
        document.getElementById("nighters_txt").innerHTML = document.getElementById("nighters").value;
    }
    



    function updateA(){
        document.getElementById("a_txt").innerHTML = document.getElementById("tests").value;
    }
    
    function updateB(){
        document.getElementById("b_txt").innerHTML = document.getElementById("pres").value;
    }

    function updateC(){
        document.getElementById("c_txt").innerHTML = document.getElementById("coffees").value;
    }
    
    function updateD(){
        document.getElementById("d_txt").innerHTML = document.getElementById("nighters").value;
    }






    function updateColor(){
        c1 = document.getElementById("color1").value;
        c2 = document.getElementById("color2").value;
        deg = document.getElementById("degree").value;
        document.getElementById("overviewInfo").style.backgroundImage = "linear-gradient(" + deg + "deg," + c1 + ", " + c2 + ")";
    }
};


var loadLogoImg = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);

};

