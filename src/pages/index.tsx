import { Section } from "components/Layout";
import Link from "components/Link";
import MDXComponent from "components/MDXComponent";
import { List, ListItem } from "components/Primitive";
import SEO from "components/SEO";
import Time from "components/Time";
import { Heading, Text } from "components/Typography";
import { InferGetStaticPropsType } from "next";
import { getAllPosts, getSinglePost, LANDING_PATH } from "utils/mdxUtils";

export async function getStaticProps() {
  const { code, frontmatter } = await getSinglePost("home", LANDING_PATH);
  const posts = await getAllPosts();

  return {
    props: {
      code,
      frontmatter,
      posts,
    },
  };
}

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Section>
      <SEO meta={{ ...props.frontmatter }} />
      <MDXComponent code={props.code} />
      <Heading as="h2" level="two" css={{ color: "$secondary", mb: "$3" }}>
        Latest Posts
      </Heading>
      <List css={{ gap: "$1" }}>
        {props.posts?.map((post) => (
          <ListItem key={post.frontmatter.title}>
            <Link
              href={post.full_slug}
              css={{
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <Text css={{ lineHeight: "$normal " }}>
                {post.frontmatter.title}
                {props.frontmatter.publishedDate && (
                  <Time
                    format="ll"
                    css={{
                      ml: "$1",
                      color: "$gray10",
                      fontStyle: "italic",
                      ":before": {
                        color: "$gray10",
                        content: " - ",
                      },
                    }}
                    date={post.frontmatter.publishedDate as Date}
                  />
                )}
              </Text>
            </Link>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}
