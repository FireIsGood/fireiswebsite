<script lang="ts">
    export let searchList: any[];

    import BlogPosts from "./BlogPosts.svelte";

    import type { Post } from "../ts/utils.ts";
    import Fuse from "fuse.js";

    // Search component
    const options = {
        keys: ["frontmatter.title"],
        threshold: 0.5,
    };

    const fuse = new Fuse(searchList, options);

    interface Result {
        item: Post;
    }

    // Text input handling
    let query = "";
    let matches: Result[] = [];
    function handleQuery() {
        matches = fuse.search(query).slice(0, 5);
    }
</script>

<label for="search" class="search card-shadow">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-search"
        ><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg
    >
    <input
        id="search"
        type="text"
        autocomplete="off"
        bind:value={query}
        on:input={handleQuery}
        placeholder="Search articles..."
    />
</label>

{#if query !== ""}
    <p>
        Found {matches.length}
        {matches.length === 1 ? "match" : "matches"} for '{query}'
    </p>
    <BlogPosts posts={matches.map((m) => m.item)} />
{/if}

<style>
    /* Search box style */
    .search {
        display: flex;
        gap: 0.5rem;
        background-color: white;
        padding: 4px 8px;
        border-radius: 8px;
        margin-inline: 1ch;
        cursor: text;
    }
    input {
        width: 100%;
        border: none;
        outline: none;
    }
</style>
