class Form {
    constructor(){
    this.greeting = createElement('h2');
    this.greeting2 = createElement('h2');
    this.greeting3 = createElement('h2');
   
    this.didyouknow = createButton('Did you know');
    this.Explore = createButton('Explore');
    this.UploadPost = createButton('UploadPost');
    this.ViewPosts = createButton('ViewPosts'); 
   this.feedback = createButton('Feedback');
  this.more = createButton('More');
   //this.myDiv = createDiv('Welcome to Go News!');
 
     
    }
    hide(){
      this.greeting.hide();
      this.greeting2.hide();
      this.greeting3.hide();
      this.didyouknow.hide();
      this.Explore.hide();
      this.ViewPosts.hide();
      this.feedback.hide();
      this.UploadPost.hide();
      this.more.hide();
    }
    show(){
      this.greeting.show();
      this.greeting2.show();
      this.greeting3.show();
      this.didyouknow.show();
      this.Explore.show();
      this.ViewPosts.show();
      this.feedback.show();
      this.UploadPost.show();
      this.more.show();
    }
    display(){
      this.greeting.html('Hi' + " " +  displayname2);
      this.greeting.position(300,300);
      this.greeting.style('color',"yellow");
    
      this.greeting2.html('Dear'+ " "  + displayname2 + ' , this app is about our environment and  Global Warming and also about nearby Environmental updates  ');
      this.greeting2.position(50,400);
      this.greeting2.style('color',"yellow");
      this.greeting3.html(' so the user can also create thier own posts to tell others about the  environmental condition of thier area');
      this.greeting3.position(50,450);
      this.greeting3.style('color',"yellow");
         
      this.didyouknow.position(50,750);
      this.Explore.position(200,750);
      this.UploadPost.position(350,750);
      this.ViewPosts.position(500,750);
      this.feedback.position(650,750);
      this.more.position(800,750);
      fill('Black');
      rect(20,705,850,100);
     // this.myDiv.position(200, 200);
      
      
      //this.myDiv.style('font-size', mouseX + 'px'); 
            
      this.didyouknow.mousePressed(() =>{
        gameState = "didyouknow";
        this.didyouknow.hide();
        this.greeting.hide();
        this.greeting2.hide();
        this.greeting3.hide();
        

      })

      this.Explore.mousePressed(()=>{
        gameState = "Explore";
        
 
        this.Explore.hide();
        this.greeting.hide();
        this.greeting2.hide();
        this.greeting3.hide();
        

      })
      this.UploadPost.mousePressed(()=>{
        gameState = "UploadPost";
        window.location.href = 'Photo.html';
      })
      this.ViewPosts.mousePressed(()=>{
         gameState = "ViewPost";
         window.location.href = "ViewPost.html";

      })
      this.feedback.mousePressed(()=>{
        gameState  = "feedback";
        this.greeting.hide();
        this.greeting2.hide();
        this.greeting3.hide();
        this.feedback.hide();
      })
      this.more.mousePressed(()=>{
        gameState = "More";
        this.greeting.hide();
        this.greeting2.hide();
        this.greeting3.hide();
        this.more.hide();

      })
    }   
}








