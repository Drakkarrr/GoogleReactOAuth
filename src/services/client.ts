import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';


export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-11-16',
    token: process.env.REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source).url.toString() as string | any;