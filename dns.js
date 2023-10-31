async function fetchIPAddress(domain) {
    const resp = await fetch(`https://1.1.1.1/dns-query?name=${domain}`,{
        headers: {
            'accept': 'application/dns-json',
        }
    });
    const respObject = await resp.json();

    const result = respObject.Answer[0].data;
  
    return result;
  }
  
  // don't touch below this line
  
async function main() {
    const domain = 'api.boot.dev';
    const ipAddress = await fetchIPAddress(domain);
    if (!ipAddress) {
      console.log('something went wrong in fetchIPAddress');
    } else {
      console.log(`found IP address for domain ${domain}: ${ipAddress}`);
    }
}

main();