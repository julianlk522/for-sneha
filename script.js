const msg = `,ggg,      gg      ,gg                                                                                                                   
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
                       \`Y8P\"       `

const msgLineByLine = msg.split('\n')

let line = 0

let textInterval = setInterval(() => {
	if (line < msgLineByLine.length) {
		document.querySelector('pre').innerText += '\n' + msgLineByLine[line]
		line++
	} else {
		clearInterval(textInterval)
	}
}, 100)
