        var nrImg = 6; 
        var IntSeconds = 4;    

        function Load()
        {
            nrShown = 0;   
            Vect = new Array(nrImg + 10);
            Vect[0] = document.getElementById("Img1");
            Vect[0].style.visibility = "visible";

            document.getElementById("S" + 0).style.visibility = "visible";

            for (var i = 1; i < nrImg; i++)
            {
                Vect[i] = document.getElementById("Img" + (i + 1));
                document.getElementById("S" + i).style.visibility = "visible";
            }

            document.getElementById("S" + 0).style.backgroundColor = "rgba(200, 200, 200, 0.90)";
            document.getElementById("SP" + nrShown).style.visibility = "visible";

            mytime = setInterval(Timer, IntSeconds * 1000);
        }
        function Timer()
        {
            nrShown++;
            if (nrShown == nrImg)
                nrShown = 0;
            Effect();
        }
        function next()
        {
            nrShown++;
            if (nrShown == nrImg)
                nrShown = 0;
            Effect();

            clearInterval(mytime);
            mytime = setInterval(Timer, IntSeconds * 1000);
        }
        function prev()
        {
            nrShown--;
            if (nrShown == -1)
                nrShown = nrImg -1;
            Effect();

            clearInterval(mytime);
            mytime = setInterval(Timer, IntSeconds * 1000);
        }
        function Effect()
        {
            for (var i = 0; i < nrImg; i++)
            {
                Vect[i].style.opacity = "0";  
                Vect[i].style.visibility = "hidden";

                document.getElementById("S" + i).style.backgroundColor = "rgba(0, 0, 0, 0.70)";
                document.getElementById("SP" + i).style.visibility = "hidden";
            }
            Vect[nrShown].style.opacity = "1";
            Vect[nrShown].style.visibility = "visible";
            document.getElementById("S" + nrShown).style.backgroundColor = "rgba(200, 200, 200, 0.90)";
            document.getElementById("SP" + nrShown).style.visibility = "visible";
        }