const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId:"wl2bvo07" , // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2021-12-28',
  ignoreBrowserTokenWarning: true
})