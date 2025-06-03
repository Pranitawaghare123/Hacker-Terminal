let text =document.querySelector(".div")
const a = [
    "Initializing system breach...",
    "Bypassing firewall security...",
    "Decrypting data packets...",
    "Access granted. Welcome, Agent.",
    "Injecting payload... Please wait...",
    "Error 403: Forbidden Access. Retrying...",
    "Establishing secure connection...",
    "Tracking IP location...",
    "Encrypting backdoor access...",
    "Self-destruct protocol initiated. Abort?",
    "System compromised! Executing countermeasures...",
    "Downloading classified files...",
    "Intrusion detected! Evading trace...",
    "Uploading virus payload...",
    "Root access acquired. Full control enabled.",
    "Shutting down security protocols...",
    "Darknet connection established...",
    "Erasing digital footprints...",
    "Rewriting logs... Covering tracks...",
    "Mission accomplished. Disconnecting..."
];

let sleep = async (time) => {
   
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(true);

            }, time *1000);
        })
   
  
}

let showHack = async (massage)=>{
    await sleep(2);
    // console.log(massage)
    // let div=document.querySelector("div");
    text.innerHTML =text.innerHTML + massage+`<br>`; 

}
(async () => {
    for (let i = 0; i < a.length; i++) {
         await showHack(a[i])
        //  console.log(hackerMessages[i])
     }
  })();



