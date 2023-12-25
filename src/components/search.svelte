<script lang="ts">
    export let searchList: any[];
    import Fuse from "fuse.js";

    // Search component
    const options = {
        keys: ["frontmatter.title"],
        includeMatches: true,
        minMatchCharLength: 2,
        threshold: 0.5,
    };
    const fuse = new Fuse(searchList, options);

    interface Post {
        file: string;
        url: string;
        frontmatter: any;
    }

    interface Result {
        item: Post;
    }

    // Text input handling
    let query = "";
    let matches: Result[] = [];
    function handleQuery() {
        matches = fuse.search(query).slice(0, 5);
        console.log(matches);
    }
</script>

<input
    type="text"
    bind:value={query}
    on:input={handleQuery}
    placeholder="Search articles..."
/>

{#if matches.length > 0}
    {#each matches as { item }}
        <ul>
            <li>
                <p>
                    <a href={item.url}>{item.frontmatter.title}</a>
                </p>
                <p>
                    {item.frontmatter.description ?? "No description"}
                </p>
            </li>
        </ul>
    {/each}
{/if}

<style>
    /* Semantic list stuff */
    ul {
        display: contents;
    }
    li {
        list-style: none;
        margin-block: 1rem;
    }
    li > p {
        margin: 0;
    }
</style>
