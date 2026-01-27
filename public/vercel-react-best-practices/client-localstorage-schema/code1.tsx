// Version and Minimize localStorage Data
// ❌ Wrong: This approach has performance issues

// No version, stores everything, no error handling
localStorage.setItem('userConfig', JSON.stringify(fullUserObject))
const data = localStorage.getItem('userConfig')