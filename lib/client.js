import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
        projectId:'tlnbmqm9',
        dataSet:'production',
        apiVersion:'2023-01-17',
        useCdn:'true',
        token:'ske0XfLqA7PjBOBaedvCu5XwdPEIshLd0BkiELUBMegSD2SBIT4b51hB5nubXrDLz5MJE0iJoDktnmU88N6jsG3ArJsqgRwg0HG885nQztTCabTmZZWkuTbj3zEtaN1PPRP5zLPoXnZq01XhoXN9djjcqA6KMjc3xzvVD5XSq4Nt8pA52cA0'        
})

const builder = imageUrlBuilder(client);

export const urlFor =(source)=>builder.image(source);