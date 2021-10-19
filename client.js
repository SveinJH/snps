import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'l6fya0im',
    dataset: 'production',
    apiVersion: '2021-10-14',
    useCdn: true,
})
