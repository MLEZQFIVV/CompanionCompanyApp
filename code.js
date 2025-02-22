var Username;
var Password;
var incorrectText ="";
var FeedText ="";
var Age;
var Gender;
var Bio;

//#1_CompanionCompany_Signin
//Username Password thing for Homescreen
onEvent("1_Signin_Button", "click", function( ) {
  //Assign Input to Variables
  Username = getText("1_Username_Dropdown");
  Password = getText("1_Password_Input");
  //Condition for password
  if (Username == "Edgar Fetcher" && Password == "Edgelord123" || (Username == "Alice Courtney" && Password == "FunkoPop234" || Username == "Elliot Carlson" && Password == "BookNerd345")) {
    setScreen("#2_CompanionCompany_Terms");
  } else if ((Username == "" && Password != "")) {
    incorrectText = "You have not selected a username, please select one.";
  } else if ((Username == "" && Password == "")) {
    incorrectText = "You neither have a username or password, please inut both.";
  } else if ((Username != "" && Password == "")) {
    incorrectText = "You have not typed in a password, please type one in.";
  } else if ((Username == "?" && Password == "?")) {
    setScreen("#2_CompanionCompany_Terms");
  } else {
    incorrectText = "Your password is incorrect, please try again.";
  }
  //Extra information
  setText("1_Password_Warningtext", incorrectText);
});

//#2_CompanionCompany_Terms
//Conditions for Terms & Conditions page
onEvent("2_Back_Button", "click", function( ) {
  Logout();
});
//Conditions for continuing after terms & conditions
onEvent("2_Continue_Button", "click", function( ) {
  //condition for radiobutton
  if (getChecked("2_Radio_Button") == true) {
    setScreen("#3_CompanionCompany_Home");
  } else {
    setText("2_I_agree_to_the_terms_&_conditions_above", "You have to agree to terms to continue");
  }
});

//#3_CompanionCompany_Home
//Accountbuttonthing
onEvent("3_Account_Button", "click", function( ) {
  //According to user chosen, what info will be set
  Userinfo();
  showElement("3_Account_Information");
  setText("3_Account_Information", "Username : " + (Username + ("\nAge : " + (Age + (" yrs old" + ("\nGender : " + (Gender + ("\n\nBio : " + Bio))))))));
  showElement("3_Logout_Button");
});
onEvent("3_Account_Information", "click", function( ) {
  //Hide again when clicked
  hideElement("3_Account_Information");
  hideElement("3_Logout_Button");
});
//Chatsendingcode
onEvent("3_Chat_Send_Button", "click", function( ) {
  //assign the variables
  FeedText = getText("3_Feed_Textarea");
  setText("3_Feed_Textarea", FeedText + (("\n@" + (Username + (" : " + getText("3_Chat_Input")+(" __________________________ "))))));
  setText("3_Chat_Input", "");
});
//3_Logout_Button
onEvent("3_Logout_Button", "click", function( ) {
  Logout();
});
//3_Chats_Section_Button
onEvent("3_Chats_Section_Button", "click", function( ) {
  setScreen("#5_Chats");
});
//3_Exit_Button
onEvent("3_Exit_Button", "click", function( ) {
  setScreen("#4_Phone_Screen");
  if (Username == "Edgar Fetcher") {
    setImageURL("4_Default_Wallpaper", "assets/applabedgarphonescreenbg.jpg");
  } else if ((Username == "Alice Courtney")) {
    setImageURL("4_Default_Wallpaper", "assets/111alicephoncescreenbg.jpg");
  } else if ((Username == "Elliot Carlson")) {
    setImageURL("4_Default_Wallpaper", "assets/317a54c187efa811491f1c161bd08840.jpg");
  } else if ((Username == "?")) {
    setImageURL("4_Default_Wallpaper", "assets/losjdvli.jpg");
  }
});

//Chats
onEvent("3_Chats_Section_Button", "click", function( ) {
  Userinfo();
});
onEvent("5_Edgarchat", "click", function( ) {
  showElement("5_Chatbox");
  if (Username == "Alice Courtney") {
    setText("5_Chatbox", getText("Edgar/Alice"));
  } else if ((Username == "Elliot Carlson")) {
    setText("5_Chatbox", getText("Edgar/Elliot"));
  } else if ((Username == "?")) {
    setText("5_Chatbox", getText("?/Edgar"));
  }
});
onEvent("5_Alicechat", "click", function( ) {
  showElement("5_Chatbox");
  if (Username == "Edgar Fetcher") {
    setText("5_Chatbox", getText("Edgar/Alice"));
  } else if ((Username == "Elliot Carlson")) {
    setText("5_Chatbox", getText("Alice/Elliot"));
  } else if ((Username == "?")) {
    setText("5_Chatbox", getText("?/Alice"));
  }
});
onEvent("5_Elliotchat", "click", function( ) {
  showElement("5_Chatbox");
  if (Username == "Edgar Fetcher") {
    setText("5_Chatbox", getText("Edgar/Elliot"));
  } else if ((Username == "Alice Courtney")) {
    setText("5_Chatbox", getText("Alice/Elliot"));
  } else if ((Username == "?")) {
    setText("5_Chatbox", getText("?/Elliot"));
  }
});
onEvent("5_?chat", "click", function( ) {
  showElement("5_Chatbox");
  if (Username == "Edgar Fetcher") {
    setText("5_Chatbox", getText("?/Edgar"));
  } else if ((Username == "Alice Courtney")) {
    setText("5_Chatbox", getText("?/Alice"));
  } else if ((Username == "Elliot Carlson")) {
    setText("5_Chatbox", getText("?/Elliot"));
  }
});
onEvent("5_Chatbox", "click", function( ) {
  hideElement("5_Chatbox");
});
//Backbutton
onEvent("5_Back_Button", "click", function( ) {
  hideElement("5_Chatbox");
  setScreen("#3_CompanionCompany_Home");
});

//phonescreen
onEvent("4_CompanionCompany_App", "click", function( ) {
  setScreen("#3_CompanionCompany_Home");
});

//Self-made functions
function Logout() {
  //reset page
  setScreen("#1_CompanionCompany_Signin");
  //reset variables
  setText("1_Username_Dropdown", "");
  setText("1_Password_Input", "");
  //reset texts
  setText("1_Password_Warningtext", "*make sure your password is correct, otherwise it would not work.");
  setText("2_I_agree_to_the_terms_&_conditions_above", "I agree to the terms & conditions above");
  //reset checkboxes or radiobuttons
  setChecked("2_Radio_Button", false);
  //hide supposed-to-be-hidden stuff
  hideElement("3_Account_Information");
  hideElement("3_Logout_Button");
  //show supposed-to-be-shown stuff
  showElement("5_Edgarchat");
  showElement("5_Alicechat");
  showElement("5_Elliotchat");
  showElement("5_?chat");
}
function Userinfo() {
  //Corresponding to who is signed in ends up being the one not in the chats
  if (Username == "Edgar Fetcher") {
    Age = "27";
    Gender = "Male";
    Bio = "Certified life critic. Like seriously, I've got a PhD so don't mess with me. However, talking about life is something I can mess with. DM me if you want to talk abt it.";
    hideElement("5_Edgarchat");
    setPosition("5_Alicechat", 10, 145, 240, 75);
    setPosition("5_Elliotchat", 10, 60, 240, 75);
    setPosition("5_?chat", 10, 230, 240, 75);
  } else if ((Username == "Alice Courtney")) {
    Age = "25";
    Gender = "Female";
    Bio = "An avid Funkpop collector ! Still missing Tamaki to complete the Ouran Highschool Hostclub set... DM me if you have it.";
    hideElement("5_Alicechat");
    setPosition("5_Edgarchat", 10, 60, 240, 75);
    setPosition("5_Elliotchat", 10, 145, 240, 75);
    setPosition("5_?chat", 10, 230, 240, 75);
  } else if ((Username == "Elliot Carlson")) {
    Age = "24";
    Gender = "N/A";
    Bio = "Elliot, 24, If you don't know my gender, me neither. I work in scripting personal ideas for the CEO, so I ain't just doing funny business. DM me for scripting prompts.";
    hideElement("5_Elliotchat");
    setPosition("5_Edgarchat", 10, 60, 240, 75);
    setPosition("5_Alicechat", 10, 145, 240, 75);
    setPosition("5_?chat", 10, 230, 240, 75);
  } else {
    Age = "N/A";
    Gender = "N/A";
    Bio = "Nothing to put here. DM if you wanna talk :P.";
    hideElement("5_?chat");
    setPosition("5_Edgarchat", 10, 60, 240, 75);
    setPosition("5_Alicechat", 10, 145, 240, 75);
    setPosition("5_Elliotchat", 10, 230, 240, 75);
  }
}

//Another app {
onEvent("4_Library_App", "click", function( ) {
  setScreen("#6_Library_1");
});
onEvent("4_CafeBakery_App", "click", function( ) {
  setScreen("#8_Cafe");
});

//go to the library
onEvent("6_Back_Button1", "click", function( ) {
	setScreen("#4_Phone_Screen");
});
onEvent("7_Back_Button1", "click", function( ) {
  setScreen("#4_Phone_Screen");
});
onEvent("6_Next_Section_Button", "click", function( ) {
	setScreen("#7_Library_2");
});
onEvent("7_Previous_Section_Button", "click", function( ) {
	setScreen("#6_Library_1");
});

//books in the library
function Section1() {
  showElement("6_Story");
  showElement("6_Back_Button2");
}
function Section2() {
  showElement("7_Story");
  showElement("7_Back_Button2");
}
//Book corresponding to Story
onEvent("6_Book_1", "click", function( ) {Section1();setText("6_Story", getText("Story1"));});
onEvent("6_Book_2", "click", function( ) {Section1();setText("6_Story", getText("Story2"));});
onEvent("6_Book_4", "click", function( ) {Section1();setText("6_Story", getText("Story4"));});
onEvent("6_Book_5", "click", function( ) {Section1();setText("6_Story", getText("Story5"));});
onEvent("6_Book_6", "click", function( ) {Section1();setText("6_Story", getText("Story6"));});
onEvent("7_Book_7", "click", function( ) {Section2();setText("7_Story", getText("Story7"));});
onEvent("7_Book_8", "click", function( ) {Section2();setText("7_Story", getText("Story8"));});
onEvent("7_Book_10", "click", function( ) {Section2();setText("7_Story", getText("Story10"));});
onEvent("7_Book_11", "click", function( ) {Section2();setText("7_Story", getText("Story11"));});
onEvent("7_Book_12", "click", function( ) {Section2();setText("7_Story", getText("Story12"));});
//Backbutton functions
onEvent("6_Back_Button2", "click", function( ) {
	hideElement("6_Story");
	hideElement("6_Back_Button2");
});
onEvent("7_Back_Button2", "click", function( ) {
	hideElement("7_Story");
	hideElement("7_Back_Button2");
});

//go to the cafe
onEvent("8_Back_Button1", "click", function( ) {
	setScreen("#4_Phone_Screen");
});

//order variables
var total = 0;
var hotchocolate = 0;
var coffee = 0;
var cake = 0;
var cookie = 0;

//hotchocolate
onEvent("8_Complete_Hot_Chocolate_Order", "click", function( ) {
	hotchocolate += 1;
	setScreen("#8_Cafe");
	total += 2.00;
});
onEvent("8_Hot_Chocolate_Order", "click", function( ) {
	setScreen("8_Cafe_Hot_Chocolate");
});
onEvent("8_Hot_Chocolate_Image1", "click", function( ) {
  setScreen("8_Cafe_Hot_Chocolate");
});
onEvent("8_Back_Button3", "click", function( ) {
	setScreen("#8_Cafe");
});
onEvent("subtracthotchocolate", "click", function( ) {
  if (hotchocolate>0) {
    hotchocolate-=1;
    total-=2.00;
    setText("TotalPrice", "Total Price : " + total + "$" );
    setText("product", (((("Hot chocolate : " + hotchocolate) +"\n\nCoffee  : ")+coffee+"\n\nCake : ")+cake+"\n\nChocolate cookies : ")+cookie);
  }
});

//coffee
onEvent("8_Complete_Coffee_Order", "click", function( ) {
	coffee += 1;
	setScreen("#8_Cafe");
	total += 3.99;
});
onEvent("8_Coffee_Order", "click", function( ) {
	setScreen("8_Cafe_Coffee");
});
onEvent("8_Coffee_Image1", "click", function( ) {
  setScreen("8_Cafe_Coffee");
});
onEvent("8_Back_Button4", "click", function( ) {
	setScreen("#8_Cafe");
});
onEvent("subtractcoffee", "click", function( ) {
  if (coffee>0) {
    coffee-=1;
    total-=3.99;
    setText("TotalPrice", "Total Price : " + total + "$" );
    setText("product", (((("Hot chocolate : " + hotchocolate) +"\n\nCoffee  : ")+coffee+"\n\nCake : ")+cake+"\n\nChocolate cookies : ")+cookie);
  }
});

//cake
onEvent("8_Complete_Cake_Order", "click", function( ) {
	cake += 1;
	setScreen("#8_Cafe");
	total += 4.50;
});
onEvent("8_Cake_Order", "click", function( ) {
	setScreen("8_Cafe_Cake");
});
onEvent("8_Cake_Image1", "click", function( ) {
  setScreen("8_Cafe_Cake");
});
onEvent("8_Back_Button5", "click", function( ) {
	setScreen("#8_Cafe");
});
onEvent("subtractcake", "click", function( ) {
  if (cake>0) {
    cake-=1;
    total-=4.50;
    setText("TotalPrice", "Total Price : " + total + "$" );
    setText("product", (((("Hot chocolate : " + hotchocolate) +"\n\nCoffee  : ")+coffee+"\n\nCake : ")+cake+"\n\nChocolate cookies : ")+cookie);
  }
});

//cookie
onEvent("8_Complete_Cookies_Order", "click", function( ) {
	cookie += 1;
	setScreen("#8_Cafe");
	total += 2.99;
});
onEvent("8_Cookies_Order", "click", function( ) {
	setScreen("8_Cafe_Cookies");
});
onEvent("8_Cookies_Image1", "click", function( ) {
  setScreen("8_Cafe_Cookies");
});
onEvent("8_Back_Button_6", "click", function( ) {
	setScreen("#8_Cafe");
});
onEvent("subtractcookie", "click", function( ) {
  if (cookie>0) {
    cookie-=1;
    total-=2.99;
    setText("TotalPrice", "Total Price : " + total + "$" );
    setText("product", (((("Hot chocolate : " + hotchocolate) +"\n\nCoffee  : ")+coffee+"\n\nCake : ")+cake+"\n\nChocolate cookies : ")+cookie);
  }
});

//check out
onEvent("8_Checkout", "click", function( ) {
	setScreen("8_Cafe_Checkout");
});
onEvent("8_Back_Button2", "click", function( ) {
	setScreen("#8_Cafe");
});
onEvent("8_Checkout", "click", function( ) {
	setText("TotalPrice", "Total Price : " + total + "$");
	setText("product", (((((("Hot chocolate : " + hotchocolate) +"\n\nCoffee : ")+coffee)+"\n\nCake : ")+cake)+"\n\nChocolate Cookies : ")+cookie);
});
onEvent("finishorders", "click", function( ) {
	setScreen("8_Cafe_Order_Completed");
	if (Username == "Edgar Fetcher" || Username == "Alice Courtney") {
	  setPosition("8_Bunny_Eating_Image", 0, 0, 320, 320);
	  setPosition("8_Enjoy_Food_!", 0, 330, 320, 30);
	} else {
	  setPosition("8_Bunny_Eating_Image", 40, 20, 240, 240);
	  setPosition("8_Enjoy_Food_!", 40, 260, 240, 30);
	}
	if (Username == "Edgar Fetcher") {
	  setImageURL("8_Bunny_Eating_Image", "assets/scene2.jpg");
	  setText("8_Enjoy_Food_!", "#Scene1 : Rory...");
	} else if ((Username == "Alice Courtney")) {
	  setImageURL("8_Bunny_Eating_Image", "assets/scene1.jpg");
	  setText("8_Enjoy_Food_!", "#Scene2 : Free food");
	} else {
	  setImageURL("8_Bunny_Eating_Image", "assets/bunnyeatgif.gif");
	  setText("8_Enjoy_Food_!", "ENJOY FOOD!");
	}
});

//orders all completed
onEvent("8_Order_Done", "click", function( ) {
	setScreen("#4_Phone_Screen");
	total = 0;
	hotchocolate = 0;
	coffee = 0;
	cake = 0;
	cookie = 0;
});

//Information
onEvent("4_Information_Button", "click", function( ) {
  setScreen("9_Information");
});
onEvent("9_Information", "click", function( ) {
  setScreen("#4_Phone_Screen");
});

//Shutdown
onEvent("4_Shutdown_Button", "click", function( ) {
  setScreen("#?_Shutdown");
  if (Username == "Edgar Fetcher" || (Username == "Alice Courtney" || Username == "Elliot Carlson")) {
    setText("?_Dialogue", "The next morning, something happened");
  }
});
onEvent("#?_Shutdown", "click", function( ) {
  if (Username == "Edgar Fetcher") {
    setText("?_Dialogue", "I heard sirens on my way to work. It didn't bother me, until it headed the same direction I was going.");
    onEvent("#?_Shutdown", "click", function( ) {
      setText("?_Dialogue", "When I got there, I couldnt believe what I saw. Cops and detectives scattering and chattering, and...");
      onEvent("#?_Shutdown", "click", function( ) {
        setImageURL("?_Wallpaper", "assets/photo_2025-02-17_17-37-41.jpg");
        setText("?_Dialogue", "...my work-crush lying lifeless on the ground, bleeding out pools of deep red, with a stab wound to the side of her stomach.");
        setPosition("?_Dialogue", 25, 275, 270, 100);
        onEvent("#?_Shutdown", "click", function( ) {
          setText("?_Dialogue", "I couldn't even think straight. It was all happening so quick that it felt like I was missing something.");
          onEvent("#?_Shutdown", "click", function( ) {
            setText("?_Dialogue", "One moment, it felt like my Rory was back, then the next, she was gone just as quickly, even if this wasn't Rory.");
            onEvent("#?_Shutdown", "click", function( ) {
            setText("?_Dialogue", "Ending 1 : Grief");
            setImageURL("?_Wallpaper", "assets/Ending1.jpg");
            setPosition("?_Dialogue", 25, 375, 270, 50);
            });
          });
        });
      });
    });
  } else if ((Username == "Alice Courtney")) {
    setText("?_Dialogue", "Sirens wailed, lights flashed, and hoards of people gathered at the sight of my lifeless body.");
    setImageURL("?_Wallpaper", "assets/Ending2.jpg");
    onEvent("#?_Shutdown", "click", function( ) {
      setText("?_Dialogue", "The criminal of the crime fled somewhere nearby, once again inevitably free.");
      onEvent("#?_Shutdown", "click", function( ) {
        setText("?_Dialogue", "The same criminal that took away the love of my life, the love that I will be joining very soon.");
        onEvent("#?_Shutdown", "click", function( ) {
          setText("?_Dialogue", "Delilah, my dear, is this the work of your cruelty once again?");
          onEvent("#?_Shutdown", "click", function( ) {
            setText("?_Dialogue", "If so, I bare the wounds of your doing, and I'll embrace you in our grandiose afterlife.");
            onEvent("#?_Shutdown", "click", function( ) {
            setText("?_Dialogue", "Ending 2 : Grandiose");
            setPosition("?_Dialogue", 25, 25, 270, 50);
            });
          });
        });
      });
    });
  } else if ((Username == "Elliot Carlson")) {
    setText("?_Dialogue", "The defeaning sound of the ambulance sirens muffled as I sat on the concrete corner, someplace hidden.");
    onEvent("#?_Shutdown", "click", function( ) {
      setText("?_Dialogue", "It was honestly all such a blur. One moment, she was fine, the next, she wasn't.");
      onEvent("#?_Shutdown", "click", function( ) {
        setText("?_Dialogue", "Neither doing it or not doing it would change how he'd think of me anyway.");
        onEvent("#?_Shutdown", "click", function( ) {
          setText("?_Dialogue", "I guess I reunited two lovers I hated and traumatized someone I loved.");
          onEvent("#?_Shutdown", "click", function( ) {
            setText("?_Dialogue", "Yes, Alice, I am* having fun wiping the blood off my hands.");
            setImageURL("?_Wallpaper", "assets/Ending3.jpg");
            onEvent("#?_Shutdown", "click", function( ) {
            setText("?_Dialogue", "Ending 3 : Guilt?");
            setPosition("?_Dialogue", 120, 10, 190, 50);
            });
          });
        });
      });
    });
  } else if ((Username == "?")) {
    setText("?_Dialogue", "Sadly, there's no going back. There aren't any back buttons like the other apps.");
    onEvent("#?_Shutdown", "click", function( ) {
      setText("?_Dialogue", "I would feel bad for you if you haven't explored this program to your hearts content.");
      onEvent("#?_Shutdown", "click", function( ) {
        setText("?_Dialogue", "But, if you have, then I guess I don't blame you for clicking on this last button. It IS intended to be the last after all.");
        onEvent("#?_Shutdown", "click", function( ) {
          setText("?_Dialogue", "...");
          setImageURL("?_Wallpaper", "assets/7f796d32f4965c16e4b393f8e45a3a40.jpg");
          onEvent("#?_Shutdown", "click", function( ) {
            setText("?_Dialogue", "I guess now you'll be here with me forever.");
            onEvent("#?_Shutdown", "click", function( ) {
              setText("?_Dialogue", "Ending 4 : Eternity");
              setPosition("?_Dialogue", 25, 375, 270, 50);
              onEvent("#?_Shutdown", "click", function( ) {
                write("It's sad what happened to Alice... Then again, it's sad what happened to all of them. However, as much grief and guilt was put into place, a grandiose end awaits my dear Alice and I. I just hope she's unaware of my part in all of this cruelty.");
              });
            });
          });
        });
      });
    });
  }
});
