import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = SanityClient({
    projectId: 'hmq63z61',
    dataset: 'production',
    apiVersion: '2023-12-27',
    useCdn: true,
    token: 'skWgbJBhDtRwcW1MTTQQUsCJZKJ6JoeNyexqWXcR463aBYRI2XkLjkwS4daTIx0JfEjZDogsfU8ssc1ju4oqkQoeKkQVMnwJT0gzqYxjsFdwKnEusK2njYnaQDCKcDE9JHzjKTzPlsWySzXbjiKgqLVxRZekY6ZK2b2pspIwlqxNbujznmzj',
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);