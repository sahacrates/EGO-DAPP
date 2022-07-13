async function connect() {
    if(typeof window.ethereum !== "undefined"){
      try{
        await window.ethereum.request({method: "eth_requestAccounts"})
      } catch (error) {
        console.log(error)
      }  
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      const accountFirstFour = account.substring(0,5);
      const hashAccount = accountFirstFour.concat('...');
      const fullAccount = hashAccount.concat(account.substring(38,42))
      document.getElementById("connectButton").innerHTML = fullAccount
    } else {
      alert("Please install Metamask !")
    }
}  