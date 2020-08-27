//All the variables

var gameState = "Home";
var canvas;
var form;
var valuer2;
var bg;
var back1 , back2 , back3 , back4 ;
var feedbackpic;
var explorepic;
var head ;
var logo;
var gb;
var button ;
var question1
var question2
question2;
var button2
var button3
var environment;
var Pollution
var equestion1;
var equestion2;
var explorepic;
var ebutton1
var ebutton2
var homepic
var displayname;
var next;
var command;
var database;
var displayname2;
var sound
var Tesla;
var greeting;
var greeting2;
var greeting3;
var greeting4;
var mail1;
var logo;
function preload(){
    bg = loadImage('image.jpg');
  feedbackpic = loadImage(' feedback.jpeg')
  //explorepic = loadImage()
  gb = loadImage('gb.jpg')
  environment = loadImage('unnamed.jpg');
  Pollution = loadImage('Pollution.jpg');
  explorepic = loadImage("Forestbeauty.jpg");
  homepic = loadImage("Fridge.jpg");
 Tesla = loadImage('TeslaModelS.jpg');
 logo =  loadImage('Untitled.png');
}
function setup (){
//    database = firebase.database();
 
    canvas = createCanvas(displayWidth,displayHeight);
    form  = new Form();
    back1   = new Button('Back',50,750,'back1');  
    back2  = new Button('Back',200,750,'back2');
    back3 = new Button('Back',650,750,'back3');
    head = createElement('h2');
    button =  createButton('>');
    question1 = createElement('h2');
    question2 = createElement('h2');
    question3 = createElement('h2');
    button2 = createButton('>');
    button3 = createButton('>');
    equestion1 = createElement('h2');
    ebutton1 = createButton('>');  
   // next = createButton('Next');
   // displayname = createInput('');
    //command = createElement('h4');
    equestion2 = createElement('h2');
    ebutton2 = createButton('>');
    greeting = createElement('h2');
    greeting2 = createElement('h2');
    greeting3  = createElement('h2');
    greeting4 = createElement('h2');
    mail1 = new Mail();
    back4 = createButton("Back");
}

function draw (){ 
    
    background("white");
   text('Go News!',0,0);
   textSize(24);
   
    image(bg,0,100,displayWidth,725);
    form.display(); 
   
    //if(gameState ==="form"){
     //   background(bg);
      //  fill("brown")
       // rect(545,displayHeight/2-50,220,160);
     // displayname.position(displayWidth/2-195,displayHeight/2);
     // form.hide();
      //command.html('Please enter your display name')
      //command.position(displayWidth/2-215,displayHeight/2-50);
      //next.positon(400,400);
      //next.position(700,500);
      //next.mousePressed(()=>{
       //   if(displayname.value() !== null  && displayname.value() !== ""){
        //       gameState = "Home";
         // }else{
          //    alert('Please make a display name to continue')
          //}
      //})
     // var rootRef = firebase.database().ref().child("Users");
     // var userID = firebase.auth().currentUser.uid;
      //var usersRef = rootRef.child(userID);
      
    //}else{
     //   displayname.hide();
      //  command.hide();
       // next.hide();
   // }
    if(gameState === "Home"){
    //    back1.hide();
        form.display();
        form.show();
        image(logo,0,-20,240,120);
      
    }
    if(gameState == "didyouknow"){
    back1.display();
    back1.show();
    


    }
    else{
        back1.hide();
    }   
    if(gameState === "back1"){
        
        form.greeting.show();
        form.greeting2.show();
        form.greeting3.show();
        form.didyouknow.show();
        form.feedback.show();
        form.Explore.show();
        form.more.show();
    }
   if(gameState === "Explore"){
       background(explorepic);
            back2.display();
            back2.show();
                 equestion1.html("How technology is helping in our home");
            equestion1.position(500,200);
            equestion1.show();
            equestion2.html("How electric cars are helping the environment");
            equestion2.position(500,400);
            equestion2.show();
            fill('white');
            ebutton1.position(500,250);
            ebutton1.show();
            ebutton2.position(500,450);
            ebutton2.show();
            rect(300,400,800,80);
            rect(300,200,800,80);
            image(homepic,350,200,140,80)
            image(Tesla,350,400,140,80);
            ebutton1.mousePressed(()=>{
                window.location.href = "eQuestion1.html";
            })
            ebutton2.mousePressed(()=>{
                window.location.href="eQuestion2.html";
            })
           
   }else{
       back2.hide();
       equestion1.hide();
       ebutton1.hide();
       equestion2.hide();
       ebutton2.hide();
   }
   if(gameState === "back2"){
       form.greeting.show();
       form.greeting2.show();
       form.greeting3.show();
       form.Explore.show();
       form.feedback.show();
       form.didyouknow.show();
       form.more.show();
     }
   if(gameState === "feedback"){
       back3.display();
       back3.show();
       form.didyouknow.show();
       form.Explore.show();
        form.more.show();
       greeting.html("Dear " + displayname2 + " " + "this page is about Feedback of our app  which is still in    ")
       greeting.position(315,0);
       greeting2.html(" development so we would love if you want to share any feedback with us ")
       greeting2.position(315,50);
       greeting3.html("regarding anything or any particular feature we would love if you  would also tell us");
       greeting3.position(315,100);
       greeting4.html(" regarding any bugs in the app we would try to fix your issue  within 24hours ");
       greeting4.position(315,150);  
       greeting.show();
       greeting2.show();
       greeting3.show();
       greeting4.show();
       
       mail1.from.show();
       mail1.myTextArea.show();
       mail1.button.show();
       mail1.sendMail();
       //
    }
   else{
       back3.hide();
       greeting.hide();
       greeting2.hide();
       greeting3.hide();
       greeting4.hide();
       mail1.from.hide();
       mail1.myTextArea.hide();
       mail1.button.hide();
    }
   if(gameState === "back3"){
       //rect(300,300,80,80)
       form.greeting.show();
       form.greeting2.show();
       form.greeting3.show();
       form.feedback.show();
       form.didyouknow.show();
       form.Explore.show();
   }
   if(gameState === "feedback"){
    background(feedbackpic)
    fill("White");
    rect(300,0,800,500);
   
}
   if(gameState === "Explore"){
   // background("white");
        head.html("Let's Explore how technology and  the case studies  that are  helping in making the environment clean");
        
        head.position(200,100);
    head.show();
   }else{
       head.hide();
   }
   if(gameState === "didyouknow"){
    // /background("white");
    fill("white") ;   
  
        question1.html("What is Global Warming ? and What are its causes ");
    question1.position(500,200);
    question1.show();
    
    form.Explore.show();
    question2.html("How  to make our environment clean and green");
    question2.position(500,400);
    question2.show();
    question3.html("What is Pollution and What are its  types");
    question3.position(500,600);
    question3.show();

    button.position(550,250);
    button.show();

    button2.position(550,450);
    button2.show();
    
    button3.position(550,650);
    button3.show();

    button.mousePressed(()=>{
        window.location.href = "Question1.html";
        
    })

    button2.mousePressed(()=>{
      window.location.href = "Question2.html";
    })
    button3.mousePressed(()=>{
        window.location.href = "Question3.html";
    })

    rect(300,200,800,80);  
    rect(300,400,800,80);
    rect(300,600,800,80);
    image(gb,350,200,140,80);
    image(environment,350,400,140,80);
    image(Pollution,350,600,140,80);
   }
   else{
      button.hide();
      question1.hide();
      button2.hide();
      question2.hide();
      button3.hide();
      question3.hide();
    }
     
    if(gameState === "More"){
       window.location.href= "More.html";
        back4.position(800,750);
        back4.show();
        back4.mousePressed(()=>{
            gameState = "back4";
            back4.hide();
            form.more.show();
            form.greeting.show();
            form.greeting2.show();
            form.greeting3.show();
        })
    }else{
        back4.hide();
    }
   if(gameState === "back4"){
       form.Explore.show();
       form.didyouknow.show();
       form.more.show();
      // form.feedback.mousePressed(()=>{
       //   gameState = "feedback";
       //})
   }
}  