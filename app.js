//--Chap-1 (Alert)

//--Task-1 

function JavaScriptAlert() {
    alert("Hello World");
}
//--Task-2
function JavaScriptAlert2() {
    alert("Error! Please enter a valid Password.");
}
//--Task-3
function JavaScriptAlert3() {
    alert("Welcome to JavaScript Land... \n Happy Coding!");
}
//--Task-4
function JavaScriptAlert4() {
    alert("Welcome to JS Land..");
    alert("Happy Coding!\n Prevent this page from creating additional dialogs");
}
//--Task-5
function JavaScriptAlert5() {
    var txt;
    var person = prompt("Please enter your name:", "Hey man");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = txt;
}

//--Chap-2 (Variable For Strings)
//--Task-1
function JavaScriptAlert6() {

    Username = 'azam_mustafa';
    myname = 'Muhammad Azam Mustafa';
    age = '17 year old';
    qualification = 'Java Script Developer';


    alert(Username);
    alert(myname);
    alert(age);
    alert(qualification);
}
//--Task-2
function JavaScriptAlert7() {
    alert("PIZZA \n PIZZ \n PIZ \n PI \n P");
}
//--Task-3
function JavaScriptAlert8() {
    var x = "My email adress is mustafaazam56@gmail.com";
    alert(x);
}
//--Task-4
function JavaScriptAlert9() {
    var x = "I am trying to learn from the book A smarter vay to learn javascript";
    alert(x);
}
//--Task-5

function JavaScriptAlert11() {
    var txt;
    var a = ("Yah! I can write HTML content through JavaScript");

    document.getElementById("demo1").innerHTML = a;
}
//--Task-6

function JavaScriptAlert12() {
    var txt;
    var a = ("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");

    alert(a);
}

//--Chap-3 (Variable For Numbers)
//--Task-1
function JavaScriptAlert13() {
    var txt;
    var age = "21";
    var a = ("I am " + 17 + " year old");
    alert(a);
}

//--Task-2
function JavaScriptAlert14() {
    var txt;
    var visits;
    for (visits = 0; visits < 5; visits++) {
        var b = ("You Have visited this site " + visits + " times");
    }
    document.getElementById("demo").innerHTML = b;

    alert(b);
}

//--Task-3
function JavaScriptAlert15() {
    var a;
    var person = prompt("Please enter your Birth year:", "2002");

    a = "My birth  year is " + person + "." + " \n Data type of my ddeclared variable is number ";
    document.write(a)
}

//--Task-4
function JavaScriptAlert16() {
    var a;
    var web = ("Welcome to www.alistore.com.");
    var name = prompt("Enter your name. :", "AZAM");
    var productname = prompt("Product name :", "NIKE");
    var tshirts = prompt("Place your shirt quantity. :", "5");

    a = "<b>" + name + " Ordered " + tshirts + " T-Shirts(s) " + " Brand " + productname + " on   " + web;
    document.getElementById("sa1").innerHTML = a;
}


//--Chap-4 (Variable Names:Leagal & ILLegal)
//--Task-1
function JavaScriptAlert17() {
    var [name, age, bloodgroup] =
        ["Azam Mustafa", "17", "O+"];

    b = "My name is " + name + ". & My Age " + age + " Year Old" + ". & My blood Group  is " + bloodgroup;
    document.getElementById("sal1").innerHTML = b;
}

//--Task-2
function JavaScriptAlert18() {
    var [name, age, bloodgroup] =
        ["Salman Ghouri", "21", "B+"];

    a = "a) A heading stating “Rules for naming JS variables”";
    b = "b) Variable names can only contain ______, ______,______ and ______.For example $my_1stVar";
    c = "c) Variables must begin with a ______, ______ or_____. For example $name, _name or name";
    d = "d) Variable names are case ________";
    e = "e) Variable names should not be JS _________";

    document.getElementById("sal12").innerHTML = a;
    document.getElementById("sal2").innerHTML = b;
    document.getElementById("sal3").innerHTML = c;
    document.getElementById("sal4").innerHTML = d;
    document.getElementById("sal5").innerHTML = e;
}


//--Chap-5 (Maths Expression)
//--Task-1
function JavaScriptAlert19() {
    var a = 3;
    var b = 5;
    var c = a + b;
    d = "Sum of " + a + " & " + b + " is " + c;
    document.getElementById("ma1").innerHTML = d;
}

//--Task-2
function JavaScriptAlert20() {
    var a = 3;
    var b = 5;
    var c = a + b;
    var j = a / b;
    var k = a * b;
    var l = a - b;
    d = "Sum of " + a + " + " + b + " is equal to " + c;
    e = "Sum of " + a + " / " + b + " is equal to " + j;
    f = "Sum of " + a + " * " + b + " is equal to " + k;
    g = "Sum of " + a + " - " + b + " is equal to " + l;
    document.getElementById("ma2").innerHTML = d;
    document.getElementById("ma3").innerHTML = e;
    document.getElementById("ma4").innerHTML = f;
    document.getElementById("ma5").innerHTML = g;
}

//--Task-3
function JavaScriptAlert21() {
    var a = prompt("Enter a value : ", "5");
    var i = a++;
    var f = i++;
    var c = f + 7;
    var v = c++;
    var z = v % 3;

    d = a;
    o = f;
    k = c;
    l = v;
    p = z;
    document.getElementById("ma15").innerHTML = d;
    document.getElementById("ma18").innerHTML = o;
    document.getElementById("ma16").innerHTML = k;
    document.getElementById("ma17").innerHTML = l;
    document.getElementById("ma19").innerHTML = p;
}
//--Task-4
function JavaScriptAlert22() {
    var a = prompt("Enter a tickets : ", "5");
    var b = 600;
    c = a * b;
    d = "Total Cost to Buy " + a + " tickets to a movie is " + c + "PKR";
    document.getElementById("ma20").innerHTML = d;
}

//--Task-5
function JavaScriptAlert23() {
    var a = +prompt("Enter a table number", "3");
    var b = a * 1;
    var c = a * 2;
    var d = a * 3;
    var e = a * 4;
    var f = a * 5;
    var g = a * 6;
    var h = a * 7;
    var i = a * 8;
    var j = a * 9;
    var k = a * 10;


    l = a + " * " + " 1 " + " = " + b;
    m = a + " * " + " 2 " + " = " + c;
    n = a + " * " + " 3 " + " = " + d;
    o = a + " * " + " 4 " + " = " + e;
    p = a + " * " + " 5 " + " = " + f;
    q = a + " * " + " 6 " + " = " + g;
    r = a + " * " + " 7 " + " = " + h;
    s = a + " * " + " 8 " + " = " + i;
    t = a + " * " + " 9 " + " = " + j;
    u = a + " * " + " 10 " + " = " + k;
    document.getElementById("ma21").innerHTML = l;
    document.getElementById("ma22").innerHTML = m;
    document.getElementById("ma23").innerHTML = n;
    document.getElementById("ma24").innerHTML = o;
    document.getElementById("ma25").innerHTML = p;
    document.getElementById("ma26").innerHTML = q;
    document.getElementById("ma27").innerHTML = r;
    document.getElementById("ma28").innerHTML = s;
    document.getElementById("ma29").innerHTML = t;
    document.getElementById("ma30").innerHTML = u;
}
//--Chap-6 (Maths Expression)
//--Task-6
function JavaScriptAlert24() {

    var a = prompt("Enter Temprature in Celcius (C)  : ", "25");
    var b = prompt("Enter Temprature in Fehriheit (F)  : ", "70");
    //celcious
    c = b - 32;
    z = 5 / 9;
    k = c * z;

    //fehrinheit

    f = a * (9 / 5);
    i = f + 32;

    s = a + "°C to " + i + "ºF";
    h = b + "°C to " + k + "ºF";
    document.getElementById("ma31").innerHTML = s;
    document.getElementById("ma32").innerHTML = h;


}

//--Task-7
function JavaScriptAlert25() {
    var price1 = 650;
    var price2 = 100;
    var a = prompt("Enter a Quantity of Item 1 : ", "3");
    var b = prompt("Enter a Quantity of Item 2 : ", "7");

    var i = price1 * a;
    var j = price2 * b;
    var p = 100;
    var z = i + j + p;


    q = "Price of item 1 is " + price1;
    w = "Quantity of Item 1 is " + a;
    e = "Price of item 2 is " + price2;
    r = "Quantity of Item 2 is " + b;
    t = "Shipping Charges is " + p;



    f = "Total Cost Of your Order is " + z;
    document.getElementById("ma33").innerHTML = q;
    document.getElementById("ma34").innerHTML = w;
    document.getElementById("ma35").innerHTML = e;
    document.getElementById("ma36").innerHTML = r;
    document.getElementById("ma37").innerHTML = t;
    document.getElementById("ma38").innerHTML = f;


}


//--Chap-9-11 (User Input)
//--Task-8
function JavaScriptAlert26() {
    var a = prompt("Toatal marks : ", "980");
    var b = prompt("Mark Obtained : ", "804");


    var z = b * 100 / a;


    q = "Total marks " + a;
    w = "Mark Obtained " + b;
    e = "Percentage " + z + "%";

    document.getElementById("ma39").innerHTML = q;
    document.getElementById("ma40").innerHTML = w;
    document.getElementById("ma41").innerHTML = e;


}
//--Task-9
function JavaScriptAlert27() {
    var a = prompt("Enter a value 1 : ", "3");
    var v = a + 5;
    var d = v * 10;
    var f = d / 2;





    q = "Total is " + f;

    document.getElementById("ma42").innerHTML = q;


}
//--Task-9
function calcNumbers(result) {
    form.displayResult.value = form.displayResult.value + result;

}


//chap#6
function JavaScriptAlertc1() {
    var a = 10;
    document.write("Result <br> The value of a is :" + a)
    document.write("<br>.............................................")
    var b = ++a;
    document.write("<br> The value of ++a is :" + b)
    document.write("<br> Now The value of a is :" + b)
    document.write("<br> <br>The value of a++ is :" + b)

    var c = ++b;
    document.write("<br> Now The value of a is :" + c)
    var d = --c
    document.write("<br> <br>The value of --a is :" + d)
    document.write("<br> Now The value of a is :" + d)

    document.write("<br> <br>The value of a-- is :" + d)
    var e = --d;
    document.write("<br>The value of a-- is :" + e)
}
//task# 2
function Task2() {
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    document.write("A is: " + a + "<br>");
    document.write("B is: " + b + "<br>");
    document.write("Result:  " + result);
};

//task3
function Task3() {
    var name = prompt("Enter your name: ");
    document.write("Welcome to our site " + name);
};

//task4
function Task4() {
    var num = prompt("Enter your number: ");
    if (num.length == 0) {
        document.write("Table of 5")
        for (var i = 0; i < 10; i++) {
            document.write(5 * i + "<br>");
        }
    }
    else {
        document.write("Table of " + num + "<br>");
        for (var i = 0; i < 10; i++) {
            document.write(num + " X " + i + " = " + num * i + "<br>");
        }
    }
}

//task 5
function Task5() {

    var subjects = [];
    subjects[0] = prompt("Enter your first subject: ");
    subjects[1] = prompt("Enter your second subject: ");
    subjects[2] = prompt("Enter your third subject: ");

    var obtained_marks = [];
    obtained_marks[0] = prompt(subjects[0] + "Enter the marks of this subject:  ");
    obtained_marks[1] = prompt(subjects[1] + "Enter the marks of this subject:  ");
    obtained_marks[2] = prompt(subjects[2] + "Enter the marks of this subject:  ");

    var total_marks = 100;
    document.write(" <b>Subjects</b> " + " <b>Obtained Marks</b> " + " <b>Percentage</b>" + "<br>");
    document.write(subjects[0] + "    " + total_marks + " " + obtained_marks[0] + " " + 100 * (obtained_marks[0] / total_marks) + "<br>");
    document.write(subjects[1] + "    " + total_marks + " " + obtained_marks[1] + " " + 100 * (obtained_marks[1] / total_marks) + "<br>");
    document.write(subjects[2] + "   " + total_marks + " " + obtained_marks[2] + " " + 100 * (obtained_marks[2] / total_marks));
}


//chap#12
//Task#1
function JavaScriptAlertc2() {
    var input = prompt("Enter a Character", "your character is")
    if (input >= 65 && input <= 90)
        alert("Character is a capital letter");
    else if (input >= 97 && input <= 122)
        alert("Character is a small letter");
    else if (input >= 48 && input <= 57)
        alert("Character is a digit");
    else if ((input > 0 && input <= 47) || (input >= 58 && input <= 64) ||
        (input >= 91 && input <= 96) || (input >= 123 && input <= 127))
        alert("Character is a special symbol");
}
//Task#2
function JavaScriptAlertc3() {
    var input = +prompt("Enter your first Integar", 'your integar is')
    var input1 = +prompt("Enter your Second Integar", 'your integar is')
    if (input > input1) {
        alert(input + " is greater then " + input1)
    }
    else if (input1 > input) {
        alert(input1 + " is greater then " + input)
    }
    else {
        alert(input + " is equal to " + input1)
    }
}
//Task#3
function JavaScriptAlertc4() {
    var Number = +prompt("Enter a Number")
    if (Number > 0) {
        alert("Number is Positive")
    }
    else if (Number < 0) {
        alert("Number is Negative")
    }
    else {
        alert("Number is zero")
    }
}
//task#4
function JavaScriptAlertc5() {
    function isVowel(argument) {
        var argument = argument.toLowerCase();

        var vowels = (['a', 'e', 'i', 'o', 'u']);

        for (var i = 0; i <= vowels.length; i++) {
            if (argument != vowels[i]) {
                continue;
            }
            return true;
        }
        return false;
    }
    var char = prompt("Enter a character")

    if (isVowel(char)) {
        alert(char + " is a vowel");
    }
    else {
        alert(char + " is not a vowel");
    }
}
//task#5
function JavaScriptAlertc6() {
    var input = prompt("Enter your Password");
    var password = "azam1235";

    if (input == password) {
        alert("Correct! The password you entered matches the original password");
    }
    else if (input == "") {
        alert(" Please enter your password")
    }
    else {
        alert("Incorrect password")
    }

}
//Task#6
function JavaScriptAlertc7() {
    var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
        alert(greeting)
    }
    else {
        greeting = "Good evening";
    }
}
//Task#7
function JavaScriptAlertc8() {
    var time = prompt("Enter a time");

    if (time >= 0000 && time < 1200) {
        alert("Good morning");
    }
    else if (time >= 1200 && time < 1700) {
        alert("Good afternoon");
    }
    else if (time >= 1700 && time < 2100) {
        alert("Good evening");
    }
    else if (time >= 2100 && time <= 2359) {
        alert("Good night");
    }
    else {
        alert("Enter a correct time");
    }

}
//chap14

//Task10
function JavaScriptAlertc9() {
    var score = [320, 230, 480, 120];
    document.write("Scores of student : " + score + "<br>")
    score.sort(function (a, b) { return a - b });
    document.write("Ordered scores of student : " + score);

}
//task 1
function Task() {
    var students = []; // empty array
    var students = [1, 2, 3]; // Integer array
    var students = ["Azam", "Muhammad", "Ali"]; // string array
    var students = [true, false, false, true];

    var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

    for (var i = 0; i < qualifications.length; i++) {
        document.write(+i + 1 + ") " + qualifications[i] + "<br>");
    }
}
//task 8
function Task8() {
    var students = ["<b>Azam</b>", "<b>Muhammad</b>", "<b>Ali</b>"];
    var score = [300, 230, 430];
    var total = 500;


    document.write("Score of " + students[0] + " is " + score[0] + " " + "<b>Percentage</b> " + 100 * (score[0] / total) + "%" + "<br>");
    document.write("Score of " + students[1] + " is " + score[1] + " " + "<b>Percentage</b> " + 100 * (score[1] / total) + "%" + "<br>");
    document.write("Score of " + students[2] + " is " + score[2] + " " + "<b>Percentage</b> " + 100 * (score[2] / total) + "%" + "<br>");
}
//task 11
function Task11() {
    var cities = ["Karachi", "Islamabad", "Peshawar"];
    var selected_cities = [cities[0], cities[2]];

    document.write("<b>Cities List</b> " + cities + "<br>");
    document.write("<b>Selected Cities</b> " + selected_cities);
}

//task 12

function Task12() {
    var string = ["This", " is ", " my ", " cat"];

    document.write("<b>Array: </b> " + "<br>" + string + "<br>");

    document.write("<b>String: </b>" + "<br>")
    document.write(string[0] + string[1] + string[2] + string[3]);
}
// task 13

function Task13() {
    var phones = ["Apple", "Nokia", "HTC", "Sony", "Samsung"];

    for (var i = 0; i < phones.length; i++) {
        document.write(phones[i] + "<br>");// dropdown bana hai ye tu mene b kia tha
    }
}



//chap17to20
//task1
function JavaScriptAlertc10() {

    var array = [
        [0, 1, 2, 3],
        [1, 0, 1, 2],
        [2, 1, 0, 1]

    ];
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 4; y++) {
            document.write(array[x][y] + " ");
        }

        document.write("<br>");
    }
}

//Task2
function JavaScriptAlertc11() {

    for (var i = 1; i <= 10; i++) {
        document.write(i + "<br>")
    }
}
//task3
function JavaScriptAlertc12() {

    var table = prompt("Enter a number to show its multiplication table");
    var lenght = prompt("Enter a lenght multiplication table");
    for (var i = 1; i <= lenght; i++) {
        document.write(table + " x " + i + " = " + table * i + "<br>")
    }
}
//task4
function JavaScriptAlertc13() {

    var friut = ["apple", "banana", "mango", "orange", "strawberry"]
    for (var i = 0; i < friut.length; i++) {
        document.write(friut[i] + "<br>")
    }
    document.write("<br>")
    for (var i = 0; i < friut.length; i++) {
        document.write("Element at index " + i + " is " + friut[i] + "<br>")
    }
}
//task5
function JavaScriptAlertc14() {
    document.write("Counting: <br>")
    for (var i = 1; i <= 15; i++) {
        document.write(i + " , ")
    }
    document.write("<br> <br>")
    document.write("Reverse Counting: <br>")
    for (var i = 10; i >= 1; i--) {
        document.write(i + " , ")
    }

    document.write("<br> <br>")
    document.write("Even: <br>")
    for (var i = 0; i <= 20; i++) {
        if (i % 2 == 0) {
            document.write(i + " , ")
        }
    }

    document.write("<br> <br>")
    document.write("Odd: <br>")
    for (var i = 0; i <= 20; i++) {
        if (i % 2 != 0) {
            document.write(i + " , ")
        }
    }

    document.write("<br> <br>")
    document.write("Series: <br>")
    for (var i = 2; i <= 20; i = i + 2) {
        document.write(i + "k , ")
    }
}
//task6
function JavaScriptAlertc15() {

    var input = prompt("Enter your Item");
    input = input.toLowerCase();
    var item = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
    //            0        1           2         3        4

    for (var i = 0; i <= item.length; i++) {
        if (item[i] == input) {

            document.write(input + " is available at index " + i + " in our bakery");
            break;

        }
        else if (i == item.length) {
            document.write("We are sorry. " + input + " is not available in our bakery ");
        }
    }
}
//task7

function JavaScriptAlertc16() {

    var largest = "";
    var item = [24, 53, 78, 91, 12];
    largest = item[0];
    for (var i = 1; i <= 4; i++) {
        if (item[i] > largest) {
            largest = item[i];
        }
    }
    document.write("The largesr number is : " + largest);
}
//task8
function JavaScriptAlertc17() {

    var smallest = "";
    var item = [24, 53, 78, 91, 12];
    smallest = item[0];
    for (var i = 1; i <= 4; i++) {
        if (item[i] < smallest) {
            smallest = item[i];
        }
    }
    document.write("The smallest number is : " + smallest);
}
//task9
function JavaScriptAlertc18() {

    for (var i = 5; i <= 100; i = i + 5) {
        document.write(i + " , ");
    }

}

//chaper 21-25
//task1
function task1() {
    var first = prompt("Enter your first name", "Azam");
    var last = prompt("Enter your last name", "Mustafa");
    var fullname = first + " " + last;
    alert("Hello " + fullname);
}

//task2
function task2() {
    var input = prompt("Enter your favorite mobile phone model ", " Samsung Galaxy S6 Edge Plus");
    display = "<b>My favotite phone is </b>:" + input;
    document.getElementById("phone").innerHTML = display;
    display1 = "<b>Lenght of string: </b>" + input.length;
    document.getElementById("lenght").innerHTML = display1;
}

//task3
function task3() {
    var variable = "Pakistani";
    for (var i = 0; i < variable.length; i++) {
        if (variable[i] == "n") {
            index = "Index of 'n' :" + i;
            document.getElementById("country").innerHTML = index;
        }
    }
}

//task4 
function task4() {
    var word = "Hello World";
    for (var i = 8; i < word.length; i++) {
        if (word[i] == "l") {
            on = "<b>String: </b> Hello World <br> <b>Index of last 'l' is :</b> " + i;
            document.getElementById("last").innerHTML = on;

        }
    }
}

//task5
function task5() {
    var character = "Pakistani";
    a = "<b>String: </b>" + character + "<br> <b>Character at index 3 : </b>" + character[3];
    document.getElementById("string").innerHTML = a;
}

//task6
function task6() {
    var string = "Hello"
    var first = prompt("Enter your first name", " Azam");
    var last = prompt("Enter your last name", " Mustafa");
    var fullname = string.concat(first, last);
    alert(fullname);
}

//task 7
function task7() {
    var a = "Hyder";
    var b = "abad";
    var c = "<b>City : </b>" + a + b;
    document.getElementById("city").innerHTML = c;
    var a = "Islam"
    var c = "<b>After replacement :</b> " + a + b;
    document.getElementById("after").innerHTML = c;
}

//task 8 
function task8() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var a = message.replace(/and/g, "&")
    document.getElementById("replace").innerHTML = a;
}

//task 9

function task9() {
    var string = "427";
    var value = parseInt(string);
    screen = "<b>Value: </b>" + string + "<br><b>Type: </b>" + typeof string +
        "<br><b>Value: </b>" + value + "<br><b>Type: </b>" + typeof value;
    document.getElementById("value").innerHTML = screen;
}

//task10
function task10() {
    var input = prompt("Enter any word", "peanuts")
    var input1 = "<b>User input: </b>" + input + "<br><b>Upper case: </b>" + input.toUpperCase();
    document.getElementById("case").innerHTML = input1;
}

//task11
function task11() {
    var input = prompt("Enter your input", "javascript");
    var firstletter = input.slice(0, 1);
    firstletter = firstletter.toUpperCase();
    var otherletter = input.slice(1);
    otherletter = otherletter.toLowerCase();
    var word = "<b>User input: </b>" + input + "<br><b>Tittle case: </b>" + firstletter + otherletter;
    document.getElementById("word").innerHTML = word;
}

//task12
function task12() {
    var num = 35.36; // 35.36
    var n = num.toString();
    var n = n.split(".");// ["35", "36"]
    var result = "<b>Number:  </b>" + num + "<br><b>Result:  </b>" + n[0] + n[1]; // "35" + "36" = "3536"
    document.getElementById("result").innerHTML = result; // result
}

//task13
function task13() {
    var input = prompt("Enter your username", "Azammustafa");
    for (var i = 0; i < input.length; i++) {
        if (input[i] === "@" || input[i] === "." || input[i] === "!" || input[i] === ",") {
            alert("Enter enter a valid username.");
            break;
        }
        else {
            alert("your username is " + input);
        }
        break;
    }

}

//task14
function task14() {
    var input = prompt("Welcome to ABC bakery.What do you wantto order sir/ma'am? ");
    input = input.toLowerCase();
    var item = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
    //            0        1           2         3        4

    for (var i = 0; i <= item.length; i++) {
        if (item[i] == input) {
            var a = input + " is available at index " + i + " in our bakery";
            document.getElementById("seacrh").innerHTML = a;
            break;
        }
        else if (i == item.length) {
            var a = "We are sorry. " + input + " is not available in our bakery "
            document.getElementById("seacrh").innerHTML = a;
        }
    }
}

//task15
function task15() {
    var password = prompt("Enter your password");
    for (var i = 0; i < password.length; i++) {
        if (password.length < 6) {
            alert("password is to short")
            break;
        }
        else if (password[0] === "0" || password[0] === "1" || password[0] === "2" || password[0] === "3" || password[0] === "4" ||
            password[0] === "5" || password[0] === "6" || password[0] === "7" || password[0] === "8" || password[0] === "9") {
            alert("Password can not begin with a number \nPlease enter a valid password")
            break;
        }
        else if (password[i] != 0 || password[i] != 1 || password[i] != 2 || password[i] != 3 || password[i] != 4 || password[i] != 5 ||
            password[i] != 6 || password[i] != 7 || password[i] != 8 || password[i] != 9) {
            alert("Enter same number with password")
            break;
        }
        else if (password[i] === "a" || password[i] === "b" || password[i] === "c" || password[i] === "d" || password[i] === "e" ||
            password[i] === "f" || password[i] === "g" || password[i] === "h" || password[i] === "i" || password[i] === "j" || password[i] === "k" ||
            password[i] === "l" || password[i] === "m" || password[i] === "n" || password[i] === "o" || password[i] === "p" || password[i] === "q" ||
            password[i] === "r" || password[i] === "s" || password[i] === "t" || password[i] === "u" || password[i] === "v" || password[i] === "w" ||
            password[i] === "x" || password[i] === "y" || password[i] === "z" || password[i] === "A" || password[i] === "B" || password[i] === "C" ||
            password[i] === "D" || password[i] === "E" || password[i] === "F" || password[i] === "G" || password[i] === "H" || password[i] === "I" ||
            password[i] === "J" || password[i] === "K" || password[i] === "L" || password[i] === "M" || password[i] === "N" || password[i] === "O" ||
            password[i] === "P" || password[i] === "Q" || password[i] === "R" || password[i] === "S" || password[i] === "T" || password[i] === "U" ||
            password[i] === "V" || password[i] === "W" || password[i] === "X" || password[i] === "Y" || password[i] === "Z" || password[i] === "0" ||
            password[i] === "1" || password[i] === "2" || password[i] === "3" || password[i] === "4" || password[i] === "5" || password[i] === "6" ||
            password[i] === "7" || password[i] === "8" || password[i] === "9") {
            alert(password);
            break;
        }
    }
}

//task16
function task16() {
    var string = "University of karachi";
    var sting = string.split("");
    //var a = string.split(",") + "\n";
    for (var i = 0; i < sting.length; i++) {
        b = sting[i] + "<br>";
        document.write(b);
    }
}

//task17
function task17() {
    var input = prompt("Enter any Word", "Pakistan")
    var last = "<b>User input: </b>" + input + "<br><b>Last character of input: </b>" + input.charAt(input.length - 1);
    document.getElementById("user").innerHTML = last;
}

//task18
function task18() {
    var string = "The quick brown fox jumps over the lazy dog";
    var string = string.toLowerCase();
    var string1 = string.split(" ");
    var the = "";
    for (var i = 0; i < string1.length; i++) {
        if (string1[i] === "the") {
            the++;
        }
    }
    var occurrences = "<b>Text: </b>" + string + "<br>There are " + the++ + " occurrences(s) of word 'the'";
    document.getElementById("count").innerHTML = occurrences;
}


// Chapter # (26-30)
// 1
function mk1() {
    var num = +prompt("Enter a number");
    document.write("<br><br>Number: " + num);
    document.write("<br>round off value: " + Math.round(num));
    document.write("<br>floor value: " + Math.floor(num));
    document.write("<br>ceil value: " + Math.ceil(num));
}

// 2
function mk3() {
    var num = +prompt("Enter a floating point number");
    document.write("<br><br>Number: " + num);
    document.write("<br>round off value: " + Math.round(num));
    document.write("<br>floor value: " + Math.floor(num));
    document.write("<br>ceil value: " + Math.ceil(num));
}
// 3
function mk4() {
    var num = +prompt("Enter a number to display it in absolute");
    document.write("<br><br>The absolute value of " + num + " is " + Math.abs(num));
}
// 4
function mk5() {
    var rand1 = Math.floor(Math.random() * 6 + 1);
    document.write("<br><br><strong>random dice value: </strong>" + rand1);
    var rand1 = Math.floor(Math.random() * 6 + 1);
    document.write("<br><strong>random dice value: </strong>" + rand1);
}
// 5
function mk6() {

    var rand1 = Math.floor(Math.random() * 2 + 1);
    if (rand1 == 1) {
        document.write("<br><br><strong>1<br>random coin value: Tails</strong>");
    } else if (rand1 == 2) {
        document.write("<br><br><strong>2<br>random coin value: Heads</strong>");
    }
}

// 6

function mk7() {
    var rand1 = Math.floor(Math.random() * 100 + 1);
    document.write("<br><br><strong>2<br>random Number between 1 and 100: </strong>" + rand1);
}
// 7
function mk8() {
    var weight = prompt("Enter your weight in kilograms");
    var num = '';
    for (var i = 0; i < weight.length; i++) {
        if (weight.charCodeAt(i) >= 48 && weight.charCodeAt(i) <= 57) {
            num = num + weight[i];
        } else if (weight.charCodeAt(i) == 46) {
            num = num + weight[i];
        } else {
            break;
        }
    }
    document.write("<br><br><strong>The weight of user is " + num + " kilograms</strong>");
}
// 8
function mk9() {
    var rand1 = Math.floor(Math.round() * 10 + 1);
    var userRand = +prompt("Enter a number between 1 and 10");
    if (rand1 == userRand) {
        alert("Congrates you are lucky");
    } else {
        alert("Try again");
    }
}
// Chapter # (31-34)
// 1
function mk10() {
    var currentDate = new Date();
    document.write("<br><br><h3>" + currentDate + "</h3>");
}
// 2
function mk11() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    alert("Current month: " + months[currentMonth]);
}
// 3
function mk12() {
    var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var currentDate = new Date();
    var currentWeekDay = currentDate.getDay();
    document.write("<h3>Today is " + weekDays[currentWeekDay] + "</h3>");
}
// 4
function mk13() {
    var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var currentDate = new Date();
    var currentWeekDay = currentDate.getDay();
    if ((weekDays[currentWeekDay] == 'Sun') || (weekDays[currentWeekDay] == 'Sat')) {
        document.write("<h3>It's Fun day</h3>");
    }
}
// 5
function mk14() {
    var currentDate = new Date();
    if (currentDate.getDate() < 16) {
        document.write("<h3>First fifteen days of the month</h3>");
    } else {
        document.write("<h3>Last days of the month</h3>")
    }
}
// 6
function mk15() {
    var currentDate = new Date();
    var miliSeconds = currentDate.getTime();
    var minutes = miliSeconds / (1000 * 60)
    document.write("<h3>Current date: " + currentDate + "</h3>");
    document.write("<h3>Elapsed seconds since January 1, 1970: " + miliSeconds + "</h3>");
    document.write("<h3>Elapsed minutes since January 1, 1970: " + minutes + "</h3>");
}
// 7
function mk16() {
    var currentDate = new Date();
    var hour = currentDate.getHours();
    if (hour < 11) {
        document.write("<h3>It's AM</h3>");
    } else {
        document.write("<h3>It's PM</h3>");
    }
}
// 8
function mk17() {
    var lastDayOfYear = new Date('Dec 31, 2020');
    document.write("<h3>" + lastDayOfYear + "</h3>");
}
// 9
function mk18() {
    var firstDayOfRamadan = new Date('Apr 24, 2020');
    var currentDate = new Date();
    firstDayOfRamadan = firstDayOfRamadan.getTime();
    currentDate = currentDate.getTime();
    var diff = currentDate - firstDayOfRamadan;
    diff = diff / (1000 * 60 * 60 * 24);
    document.write("<h3>" + Math.floor(diff) + " days have passed since 1st Ramadan, 2020</h3>");
}
// 10
function mk19() {
    var refDate = prompt("Enter Reference Date", "Fri 20, 2020");
    alert(refDate + "<br> " + typeof (refDate));
    var refDate = new Date(refDate);
    var bigOf2015 = new Date('Jan 1, 2015');
    refDate = refDate.getTime();
    bigOf2015 = bigOf2015.getTime();
    var diff = refDate - bigOf2015;
    diff = diff / (1000 * 60);
    document.write("<h3>" + diff + " seconds had passed since beginning of 2015</h3>");
}
// 11
function mk20() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    currentDate.setHours(currentDate.getHours() + 1)
    document.write("<h3>current date: " + currentDate + "</h3>");
    document.write("<h3>1 hour ago it was " + new Date() + "</h3>");
}
// 12
function mk21() {
    var currentDate = new Date();
    document.write("<h3>current date: " + currentDate + "</h3>");
    currentDate.setFullYear(currentDate.getFullYear() - 100);
    document.write("<h3>100 years back, it was " + currentDate + "</h3>");
}
// 13
function mk23() {
    var age = +prompt("Enter your Age");
    var currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - age);
    document.write("<br><h3>Your age is " + age + "</h3>");
    document.write("<h3>Your birth year is " + currentDate.getFullYear() + "</h3>");
}
// 14
function mk24() {
    var customerName = 'ABC Customer';
    var currentDate = new Date();
    var currentMonth = months[currentDate.getMonth()];
    var numberOfUnits = 410;
    var chargesPerUnit = 16;
    var netAmountPayable = numberOfUnits * chargesPerUnit;
    var latePayable = 350;
    var grossAmount = netAmountPayable + latePayable;

    document.write("<br><h1>K-Electric Bill</h1><br>");
    document.write("<br>Customer Name: <strong>" + customerName + "</strong>");
    document.write("<br>Month: <strong>" + customerName + "</strong>");
    document.write("<br>Number of units: <strong>" + numberOfUnits + "</strong>");
    document.write("<br>Charges per unit: <strong>" + chargesPerUnit + "</strong>");
    document.write("<br><br>Net Amount payable (within Due Date): <strong>" + netAmountPayable + "</strong>");
    document.write("<br>Late Payment Surcharge: <strong>" + latePayable + "</strong>");
    document.write("<br>Gross amount payable (within due date): <strong>" + grossAmount + "</strong>");

}

//chapter 35-38
//task19
function task19() {
    var a = new Date();
    document.getElementById("date").innerHTML = a;
}

//task20
function task20() {
    var first = prompt("Enter your first name", "Azam");
    var last = prompt("Enter your second", " Mustafa");
    var fullname = first + last;
    alert("Hello " + fullname);
}

//task21
function task21() {
    number = +prompt("Add your first number: ", "5");
    number2 = +prompt("Add your second number: ", "9");
    document.getElementById("sum").innerHTML = ("Sum of to integar: " + Task21A(number, number2));
    function Task21A(num1, num2) {
        var sum = num1 + num2;
        return sum;
    }
}

//task22
// function task22(){

// }

//task23
function task23() {
    var num1 = +prompt("Enter first number: ", "6");
    var opr = prompt("Enter your operator sign: ", "+");
    var num2 = +prompt("Enter second number: ", "3");
    alert(task23A(num1, opr, num2));
    function task23A(num1, opr, num2) {
        if (opr === "+") {
            var a = num1 + num2;
        }
        else if (opr === "-") {
            var a = num1 - num2;
        }
        else if (opr === "*") {
            var a = num1 * num2;
        }
        else if (opr === "/") {
            var a = num1 / num2;
        }
        var b = "Your answer is: " + a;
        alert(b);
        return b;
    }
}

//task24
function task24(number) {
    var number = prompt("Enter any number", "2");
    var a = "Your square team is: " + number * number;
    alert(a);
}

//task25
function task25(n) {
    var n = prompt("Enter any number: ", "6")
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    }
    else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
    }
    alert("Factorail of " + n + " is: " + answer);
}

//task26
function task26A(startNumber, endNumber) {
    for (var i = startNumber; i <= endNumber; i++) {
        document.write(i + " <br> ");
    }
}
function task26() {
    var number = prompt("Enter your first number: ");
    var number2 = prompt("Enter your second number: ");
    task26A(number, number2);
}

//task27
function task27() {
    function calculateHypotenuse(base, perpendicular) {
        function calculateSquare(num) {
            return num * num;
        }
        var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
        return hypotenuse;
    }
    var base = +prompt("Enter base of Triangle");
    var perpendicular = +prompt("Enter perpendicular of Triangle");
    document.write("<h3>Hypotenuse: " + calculateHypotenuse(base, perpendicular) + "</h3>");
}

//task28
function task28() {
    function areaOfRect(num1, num2) {
        document.write("<br><strong>Area of Rectangle: " + num1 * num2 + "</strong>");
    }
    areaOfRect(2, 2)
    var a = 2, b = 3;
    areaOfRect(a, b);
}

//task29
function task29() {
    var input = prompt("Enter any word", "MOM")
    var checking = "";
    for (var i = input.length - 1; i >= 0; i--) {
        checking += input[i];
    }
    if (input === checking) {
        alert(input + " is palindrome word")
    }
    else {
        alert(input + "is not a palindrome word")
    }
}

//task30
function task30() {
    function firstCapital123(str1) {
        str1 = str1[0].toUpperCase() + str1.slice(1);
        for (var i = 1; i < str1.length; i++) {
            if (str1[i] == ' ') {
                str1 = str1.slice(0, i + 1) + str1[i + 1].toUpperCase() + str1.slice(i + 2);
            }
        }
        document.write("<br><br><strong>" + str1 + "</strong>");
    }
    firstCapital123('the quick brown fox');
}

//task31
function task31() {
    function maxLength(str1) {
        str1 = str1.split(' ');
        var maxl = str1[0];
        for (var i = 1; i < str1.length - 1; i++) {
            if (maxl.length < str1[i].length) {
                maxl = str1[i];
            }
        }
        document.write("<br><br><strong>Max Length Word Is: " + maxl + "</strong>");
    }
    maxLength('Web Development Tutorial');
}

//task32
function task32() {
    function occurrence(str1, alpha) {
        var count = 0;
        for (var i = 0; i < str1.length; i++) {
            if (alpha == str1[i]) {
                count++;
            }
        }
        document.write("<br><br><strong>Occurences of " + alpha + " in " + str1 + " is: " + count + "</strong>");
    }
    occurrence('JSResourceS.com', 'o');
}
//task33
function task33() {
    function calcCircumference(radius) {
        document.write("<br><br><strong>The Circumference Is: " + 2 * 3.14 * radius + "</strong>");
    }
    calcCircumference(2);
    function calcArea(radius) {
        document.write("<br><br><strong>The Area Is: " + 3.14 * radius * radius + "</strong>");
    }
    calcArea(2);
}












/* Events Assignment 49-52 */

/* ]
1) Create a signup form and display form data in your web
page on submission.
*/


/*
		2) Suppose in your webpage there is content area in which
			you have entered your item details, but user can only see
			some details on first look. When user clicks on “Read
			more” button, full detail of that particular item will be
			displayed. 
*/

/* 
	3) In previous assignment you have created a tabular data
	using javascript. Let’s modify that. Create a form which
	takes student’s details and show each student detail in
	table. Each row of table must contain a delete button and
	an edit button. On click on delete button entire row should
	be deleted. On click on edit button, a hidden form will
	appear with the values of that row.
*/


