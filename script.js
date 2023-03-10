//  text ASCII art from https://patorjk.com/software/taag
//  heart ASCII art from http://loveascii.com/hearts.html
//  panda ASCII art from https://ascii.co.uk/art/bears

const asciiText = document.querySelector('pre')
const replayButton = document.getElementById('replay')
replayButton.addEventListener('click', replay)

const messages = [
	`          
8 8888           8 8888         ,o888888o.  \`8.\`888b           ,8' 8 8888888888             \`8.\`8888.      ,8'  ,o888888o.     8 8888      88 
8 8888           8 8888      . 8888     \`88. \`8.\`888b         ,8'  8 8888                    \`8.\`8888.    ,8'. 8888     \`88.   8 8888      88 
8 8888           8 8888     ,8 8888       \`8b \`8.\`888b       ,8'   8 8888                     \`8.\`8888.  ,8',8 8888       \`8b  8 8888      88 
8 8888           8 8888     88 8888        \`8b \`8.\`888b     ,8'    8 8888                      \`8.\`8888.,8' 88 8888        \`8b 8 8888      88 
8 8888           8 8888     88 8888         88  \`8.\`888b   ,8'     8 888888888888               \`8.\`88888'  88 8888         88 8 8888      88 
8 8888           8 8888     88 8888         88   \`8.\`888b ,8'      8 8888                        \`8. 8888   88 8888         88 8 8888      88 
8 8888           8 8888     88 8888        ,8P    \`8.\`888b8'       8 8888                         \`8 8888   88 8888        ,8P 8 8888      88 
8 8888           8 8888     \`8 8888       ,8P      \`8.\`888'        8 8888                          8 8888   \`8 8888       ,8P  \` 8888     ,8P 
8 8888           8 8888      \` 8888     ,88'        \`8.\`8'         8 8888                          8 8888    \` 8888     ,88'     8888   ,d8P  
8 8888           8 888888888888 \`8888888P'           \`8.\`          8 888888888888                  8 8888       \`8888888P'        \`Y88888P'   
                                                                                       



                      d888888o.   b.             8 8 8888888888   8 8888        8          .8.            .!!!!!!!!!!.                         
                    .\`8888:' \`88. 888o.          8 8 8888         8 8888        8         .888.            .!!!!!!!!.                          
                    8.\`8888.   Y8 Y88888o.       8 8 8888         8 8888        8        :88888.            .!!!!!!.                            
                    \`8.\`8888.     .\`Y888888o.    8 8 8888         8 8888        8       . \`88888.            .!!!!.                         
                     \`8.\`8888.    8o. \`Y888888o. 8 8 888888888888 8 8888        8      .8. \`88888.            .!!.                          
                      \`8.\`8888.   8\`Y8o. \`Y88888o8 8 8888         8 8888        8     .8\`8. \`88888.            !!                           
                       \`8.\`8888.  8   \`Y8o. \`Y8888 8 8888         8 8888888888888    .8' \`8. \`88888.                                          
                   8b   \`8.\`8888. 8      \`Y8o. \`Y8 8 8888         8 8888        8   .8'   \`8. \`88888.          oo                             
                   \`8b.  ;8.\`8888 8         \`Y8o.\` 8 8888         8 8888        8  .888888888. \`88888.        o88o                          
                    \`Y8888P ,88P' 8            \`Yo 8 888888888888 8 8888        8 .8'       \`8. \`88888.        oo`,
	`          |
          ||
      --\\ \\||
       --\\ \\||
        --\\ \\||
         --\\ \\|
          --\\ \\
             \\ \\
              \\ \\
               \\ \\
              MMMMMMMMM                         MMMMMMMMM
          MMMMMMMMMMMMMMMMMM               MMMMMMMMMMMMMMMMMM
       MMMMMMMXXXXXXXXXXMMMMMMM         MMMMMMMXXXXXXXXXXMMMMMMM
    MMMMMMXXXXXXXXXXXXXXXXXMMMMMM     MMMMMMXXXXXX:::::XXXXXXMMMMMM
   MMMMMXXXXXXXX::::::::XXXXXXMMMM   MMMMXXXXXX:::::::::::XXXXXMMMMM
  MMMMXXXXXXX:::::::::::::::XXXXMMM MMMXXXX::::::::::::::::::XXXXMMMM
 MMMMXXXXXX::::::::::::::::::::XXXMMMXXX:::::::::::.....:::::::XXXMMMM
 MMMXXXXX::::::::::::::::::::::::XXXXX:::::::::...........::::::XXXMMM
MMMXXXXX:::::::::::.......:::::::::X::::::::......    ......::::XXXXMMM
MMMXXXX:::::::::..............:::::::::::.......         ....::::XXXMMM
MMMXXXX::::::::..................:::::.......             ...::::XXXMMM
MMMXXXX:::::::.....................:............         ....::::XXXMMM
MMMXXXX:::::::....................................       ....::::XXXMMM
MMMXXXX:::::::......................................    .....::::XXXMMM
MMMXXXXX::::::....................................... ......::::XXXXMMM
MMMMXXXX:::::::.............................................::::XXXMMMM
 MMMXXXX::::::::............................................::::XXXMMM
 MMMMXXXX::::::::..........................................::::XXXMMMM
  MMMXXXX::::::::::.......................................:::::XXXMMM
  MMMMXXXX:::::::::::...................................::::::XXXMMMM
   MMMXXXXX::::::::::::..............................::::::::XXXXMMM
   MMMMXXXXX:::::::::::::.........................::::::::::XXXXMMMM
    MMMMXXXXX:::::::::::::::...................::::::::::::XXXXMMMM
     MMMMXXXXX:::::::::::::::::.............::::::::::::::XXXXMMMM
      MMMMXXXXXX::::::::::::::::::.......::::::::::::::XXXXXXMMMM
       MMMMXXXXXXXX::::::::::::::::...::::::::::::::XXXXXXXXMMMM
         MMMMXXXXXXXXX::::::::::::::::::::::\\::::XXXXXXXXXMMMM
           MMMMMXXXXXXXXXX:::::::::::::::::\\ \\XXXXXXXXXMMMMM
              MMMMMMXXXXXXXXXXX:::::::::XXXX\\ \\XXXXMMMMMM
                  MMMMMMXXXXXXXXXXX:XXXXXXXXX\\ \\MMMMM
                      MMMMMMXXXXXXXXXXXXXXXMMM\\ \\
                          MMMMMMXXXXXXXMMMMMM  \\ \\
                              MMMMMXMMMMM       \\ \\
                                 MMMMM           \\ \\   \\
                                  MMM             \\ \\ \\\\
                                   M             \\\\\\\\\\\\\\
                                                   \\\\\\\\\\
                                                     \\\\\\
                                                       \\`,
	`,ggg,      gg      ,gg                                                                                                                   
dP\"\"Y8a     88     ,8P       ,dPYb, ,dPYb,                                             ,dPYb,                                     
Yb, \`88     88     d8'       IP'\`Yb IP'\`Yb                                             IP'\`Yb                                    
 \`\"  88     88     88   gg   I8  8I I8  8I                                             I8  8I                                    
     88     88     88   \"\"   I8  8' I8  8'                                             I8  8'                                    
     88     88     88   gg   I8 dP  I8 dP      gg     gg    ,ggggg,    gg      gg      I8 dP        ,ggg,                         
     88     88     88   88   I8dP   I8dP       I8     8I   dP\"  \"Y8ggg I8      8I      I8dP   88gg i8\" \"8i                          
     Y8    ,88,    8P   88   I8P    I8P        I8,   ,8I  i8'    ,8I   I8,    ,8I      I8P    8I   I8, ,8I                          
      Yb,,d8\"\"8b,,dP  _,88,_,d8b,_ ,d8b,_     ,d8b, ,d8I ,d8,   ,d8'  ,d8b,  ,d8b,    ,d8b,  ,8I   \`YbadP'                           
       \"88\"    \"88\"   8P\"\"Y88P'\"Y888P'\"Y88    P\"\"Y88P\"888P\"Y8888P\"    8P'\"Y88P\"\`Y8    8P'\"Y88P\"'  888P\"Y888                           
                                                    ,d8I'                                                                            
                                                  ,dP'8I                                                                              
                                                 ,8\"  8I                                                                            
                                                 I8   8I                                                                             
                                                 \`8, ,8I                                                                             
                                                  \`Y8P\"                                                                            
                                                                                                                              ad88888ba   
                                                              ,dPYb,                          I8                             d8\"     \"8b
                                                              IP'\`Yb                          I8                             \"\"      a8P
                                                              I8  8I                       88888888  gg                           ,a8P\"
                                                              I8  8'                          I8     \"\"                          d8\"
  ,ggg,,ggg,,ggg,   gg     gg         ggg    gg     ,gggg,gg  I8 dP   ,ggg,    ,ggg,,ggg,     I8     gg    ,ggg,,ggg,    ,ggg,   88 
 ,8\" \"8P\" \"8P\" \"8,  I8     8I        d8\"Yb   88bg  dP\"  \"Y8I  I8dP   i8\" \"8i  ,8\" \"8P\" \"8,    I8     88   ,8\" \"8P\" \"8,  i8\" \"8i  88  
 I8   8I   8I   8I  I8,   ,8I       dP  I8   8I   i8'    ,8I  I8P    I8, ,8I  I8   8I   8I   ,I8,    88   I8   8I   8I  I8, ,8I     
,dP   8I   8I   Yb,,d8b, ,d8I     ,dP   I8, ,8I  ,d8,   ,d8b,,d8b,_  \`YbadP' ,dP   8I   Yb, ,d88b, _,88,_,dP   8I   Yb, \`YbadP'  aa 
8P'   8I   8I   \`Y8P\"\"Y88P\"888    8\"     \"Y8P\"   P\"Y8888P\"\`Y88P'\"Y88888P\"Y8888P'   8I   \`Y888P\"\"Y888P\"\"Y88P'   8I   \`Y8888P\"Y888 88  
                         ,d8I'                                                                                                    
                       ,dP'8I                                                                                                      
                      ,8\"  8I                                                                                                       
                      I8   8I                                                                                                      
                      \`8, ,8I                                                                                                      
                       \`Y8P\"       
                                        
                    
                    
                    
                                                       ...
                                                       .::::::          .:::::.             ...
                                                      ::::::@@@@@@@@@:.::::::::d@@@@@@@b. .::::::.
                                                       \"\":@@@@@@@@@@@@@:::::d@@@@@@@@@@@@:::::::::
                                                        :@@@@@@@@@@@@@@@@:d@@@@@@@@@@@@@@@@:::::::
                                                      .@P;:;@@@@@@@@@@@@@d@@@@@@@@@@@@@@@@@@\":::\"
                                                    .@@P:  :d@@@P::;@@@o @P^:@@@@@@@@@@@@@@@@\":
                                                    :@@@od@@@@@::  ::@o@ :\" :@@@@@P:::;@@@@@@@
                                                    \`@@@@(   )@@b:::d@@o \`::/\"@@@@:.  :)@@@@@@:
                                                ..::::@@@@..d@@@@@@@@@@@ ,@(  )@@@@@:::@@@@@@P
                                              .:::::.\::@@@@@@@@P.::::.. :.@oo@@@/@@@@@P\"::::
                                            .::::::::\"::::::::::::::::: :::.:..@@@@@@@@@@@@\":::
                                            :::::::::.:::::::::::::::::.:::::::.@@@@@@@@@@@@@::::
                                            ::::::::.::::::::::::::::: ::::::::::.@@@@\"..::::::::.
                                           .::::::::.::::::::::::::::: :::::::::::::. ;:::::::::::
                                        .:::::.\`::::'@@@@@@@@@@\`:::\"'  ::::::::::::::.\":::::::::\"'_
                                      ..:::::::@@@@@@@@@@@@@@@@@@@@@@@@  \"::::::::::::::.\`:::::'@@@@@::.    ...
                                      ::::::::@@@@@@@@@@@@@@@@@@@@@@@@:  @@@\"::::::::::::@@@@@@@@@@@:::::.:::::
                                      ::::::::.@@@@@@@@@@@@@@@P;:::::::   @@@@@b\"\"\"\"\"\"\":\"@@@@@@@@@@:::::::::::'
                                       ::::::::@@P.::::::::::::::::::::.  @@.:::::::::.@@@@@P.:::.@::::::::::
                                        :::::::,.::::::::::::::::::::::: .:::::::::::::::::::::::::.::::::::\"
                                        .:::::::.:::::::::::::::::::::::X::::::::::::::::::::::::::::\`:::::
                                       ::::::::.:::::::::::::::::::::::: :::::::::::::::::::::::::::::\`\"'
                                      :::::::: ::::::::::::::::::::::::'    \`::::::::::::::::::::::::::::
                                      \`::::\"' ::::::::\"\"\"::::::\"\"\"'           \`:::::::::::::::::\"\":::::'
                                               :::::'                              \`\"\"\":::::\"'
                                           
                                           `,
].map((msg) => groupWhiteSpaces(msg))

let currMsg = 0
let currLetter = 0

function groupWhiteSpaces(msg) {
	const splitMsg = msg.split('')

	for (let i = 0; i < splitMsg.length; i++) {
		if (splitMsg[i] === ' ' && /\s+/.test(splitMsg[i - 1])) {
			splitMsg[i - 1] += ' '
			splitMsg.splice(i, 1)
			i--
		}
	}

	return splitMsg
}

function typeMsg(chunkedMsg) {
	if (currLetter < chunkedMsg.length) {
		asciiText.innerText += chunkedMsg[currLetter]
		currLetter++
		return requestAnimationFrame(() => typeMsg(chunkedMsg))
	}
	currLetter = 0
	currMsg++
	if (currMsg < messages.length) {
		return setTimeout(deleteMsg, 1000)
	}
	revealReplay()
}

function deleteMsg() {
	if (asciiText.innerText) {
		asciiText.innerText = asciiText.innerText.slice(0, -50)
		return requestAnimationFrame(deleteMsg)
	}
	if (currMsg < messages.length) {
		return typeMsg(messages[currMsg])
	}
}

function revealReplay() {
	requestAnimationFrame(() => {
		replayButton.style.pointerEvents = 'auto'
		replayButton.style.opacity = '1'
	})
}

function hideReplay() {
	requestAnimationFrame(() => {
		replayButton.style.pointerEvents = 'none'
		replayButton.style.opacity = '0'
	})
}

function replay() {
	currMsg = 0
	currLetter = 0
	hideReplay()
	deleteMsg()
}

typeMsg(messages[currMsg])
