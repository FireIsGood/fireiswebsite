<script lang="ts">
    import type { Post } from "../ts/utils";
    export let posts: Post[];
</script>

<ul>
    {#each posts as post}
        <li>
            <div class="post-preview card-shadow">
                <a class="post-link font-alt" href={post.url}
                    >{post.frontmatter.title}</a
                >
                <div class="post-body">
                    <p>{new Date(post.frontmatter.pubDate).toDateString()}</p>
                    <p>
                        {post.frontmatter.description ?? "No description"}
                    </p>
                </div>
            </div>
        </li>
    {/each}
</ul>

<style>
    /* Semantic list stuff */
    ul {
        display: contents;
    }
    li {
        list-style: none;
        margin-block: 1rem;
    }

    .post-preview {
        background-color: var(--bg0);
        padding: 4px 12px;
        border-radius: 8px;
    }
    .post-preview p {
        margin: 0;
    }

    .post-link {
        font-weight: bold;
        font-size: 1.2em;
    }

    .post-preview {
    }
</style>
