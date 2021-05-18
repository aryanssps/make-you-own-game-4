class Security {

    constructor(){

        this.access1 = createInput("ANS")
        this.access1.position(50,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(50,120);
        this.button1.style('background', 'silver');    

        this.access2 = createInput("ANS")
        this.access2.position(720,390);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(720,420);
        this.button2.style('background', 'silver');

        this.access3 = createInput("ANS")
        this.access3.position(370,270);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(370,300);
        this.button3.style('background', 'silver'); 

        this.access4 = createInput("ANS")
        this.access4.position(70,400);
        this.access4.style('background', 'white'); 

        this.button4 = createButton('Check');
        this.button4.position(70,430);
        this.button4.style('background', 'silver'); 

        this.access5 = createInput("ANS")
        this.access5.position(710,100);
        this.access5.style('background', 'white'); 

        this.button5 = createButton('Check');
        this.button5.position(710,130);
        this.button5.style('background', 'silver'); 
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        });

        this.button5.mousePressed(() => {
            if(system.authenticate(accessCode5,this.access5.value())){
                this.button5.hide();
                this.access5.hide();
                score++;
            }
        });
    }
}
