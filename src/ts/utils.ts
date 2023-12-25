import type { MarkdownInstance } from "astro";

type Frontmatter = {
    title: string;
    description: string;
    pubDate: string;
    image?: {
        url: string;
        alt?: string;
    };
    tags?: string[];
};

export type Post = MarkdownInstance<Frontmatter>;

export function getUniqueTags(posts: Post[]) {
    return [
        ...new Set(
            posts
                .flatMap((post: Post) => post.frontmatter.tags)
                .filter((e: string | undefined) => e !== undefined),
        ),
    ] as string[];
}
