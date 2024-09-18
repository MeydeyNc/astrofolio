export async function getStaticPaths() {
    const allPosts = await Astro.glob('../posts/*.md');

    return [
        {params: {tag: "rapport"}, props: {posts: allPosts} },
        {params: {tag: "stage"}, props: {posts: allPosts} },
        {params: {tag: "association"}, props: {posts: allPosts} },
        {params: {tag: "nouvelle voix"}, props: {posts: allPosts} }
    ];
}

const {tag} = Astro.params;
const {posts} = Astro.props;

function filteredTag(tag) {
    return tag.toLowerCase()
}

const filteredPosts = posts.filter((post) => post.frontmatter.tags?.includes(filteredTag));