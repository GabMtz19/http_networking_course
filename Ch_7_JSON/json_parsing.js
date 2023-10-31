async function getLocations(apiKey) {
    const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations'
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      }
    })
    
    return response.json();
}
  
  // Don't touch below this line
  
async function main() {
    const apiKey = generateKey()
  
    const locations = await getLocations(apiKey)
    console.log('Got some locations from the server.')
    for (const location of locations) {
      console.log(`- name: ${location.name}, recommendedLevel: ${location.recommendedLevel}`)
    }
}
  
function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

main();