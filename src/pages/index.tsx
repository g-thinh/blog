import CardPostPreview from "components/CardPostPreview";
import { Section } from "components/Layout";
import MDXComponent from "components/MDXComponent";
import { Divider, Grid } from "components/Primitive";
import SEO from "components/SEO";
import { Heading } from "components/Typography";
import WidgetDevTo from "components/WidgetDevTo";
import { InferGetStaticPropsType } from "next";
import { getPosts, getSinglePost, LANDING_PATH } from "utils/mdxUtils";

export async function getStaticProps() {
  const { code, frontmatter } = await getSinglePost("home", LANDING_PATH);
  const posts = await getPosts({ limit: 5 });

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
      <Divider css={{ my: "$10" }} />
      <Grid type="basic" css={{ mb: "$10" }}>
        <CardPostPreview.CTA />
        {props.posts?.map((post) => {
          return <CardPostPreview key={post.frontmatter?.title} {...post} />;
        })}
      </Grid>
      <WidgetDevTo />
    </Section>
  );
}
