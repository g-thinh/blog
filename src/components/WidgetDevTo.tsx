import useDevTo from "hooks/useDevTo";
import { FiBarChart, FiClock } from "react-icons/fi";
import { DevToArticle } from "utils/api";
import Avatar from "./Avatar";
import Link from "./Link";
import { Box, Flex, Grid } from "./Primitive";
import { readTime } from "./Time";
import { Heading, Text } from "./Typography";

function Profile() {
  const { profile } = useDevTo();
  return (
    <Box
      css={{
        px: "$4",
        py: "$6",
        backgroundColor: "$gray4",
        borderTopLeftRadius: "$xl",
        borderTopRightRadius: "$xl",
      }}
    >
      {profile && (
        <Flex
          css={{
            alignItems: "center",
            gap: "$8",
            flexDirection: "column",
            "@sm": {
              flexDirection: "row",
            },
          }}
        >
          <Box>
            <Avatar src={profile?.profile_image} size={120} />
          </Box>
          <Flex stack="column">
            <Flex
              stack="column"
              css={{
                gap: "$2",
                alignItems: "center",
                textAlign: "center",
                "@sm": {
                  alignItems: "flex-start",
                  textAlign: "start",
                },
              }}
            >
              <Heading as="p" level="three" css={{ fontWeight: "$bold" }}>
                {profile.name}
              </Heading>
              <Text css={{ lineHeight: "$base" }}>{profile.summary}</Text>
              <Box>
                <Link href="https://dev.to/gthinh" type="button">
                  View my profile
                </Link>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Box>
  );
}

function CardArticle(props: DevToArticle) {
  const screenReaderMessage =
    props.title +
    `, estimated read time ${props.reading_time_minutes} minutes` +
    `, article has ${props.public_reactions_count} reactions` +
    `, published on ${
      props?.published_timestamp && readTime(props.published_timestamp)
    }`;

  return (
    <Box
      as="article"
      css={{
        height: "$full",
        position: "relative",
        py: "$2",
        px: "$4",
        backgroundColor: "$gray3",
        "&:hover": {
          backgroundColor: "$gray4",
        },
      }}
    >
      <Flex css={{ gap: "$3", height: "$full" }}>
        <Flex css={{ alignItems: "center", minWidth: "5rem" }}>
          <Text as="h3" aria-hidden css={{ color: "$gray11", fontSize: "$sm" }}>
            {props.readable_publish_date}
          </Text>
        </Flex>
        <Flex
          stack="column"
          css={{
            justifyContent: "center",
          }}
        >
          {props.url && (
            <Box as="h3">
              <Link href={props.url} screenReaderMessage={screenReaderMessage}>
                <Text aria-hidden>{props.title}</Text>
              </Link>
            </Box>
          )}
          <Flex css={{ gap: "$4" }}>
            <Flex css={{ alignItems: "center", gap: "$1", color: "$gray11" }}>
              <FiClock aria-hidden size={16} />
              <Text aria-hidden css={{ fontSize: "$sm" }}>
                {props.reading_time_minutes}m
              </Text>
            </Flex>
            <Flex css={{ alignItems: "center", gap: "$1", color: "$gray11" }}>
              <FiBarChart aria-hidden size={16} />
              <Text aria-hidden css={{ fontSize: "$sm" }}>
                {props.public_reactions_count}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default function WidgetDevTo() {
  const { articles } = useDevTo({ per_page: 3 });
  return (
    <>
      <Profile />
      <Grid
        as="ul"
        css={{
          gridTemplateColumns: "repeat(1, 1fr)",
          gridAutoRows: "1fr",
        }}
      >
        {articles?.map((article) => (
          <Box as="li" key={article.id}>
            <CardArticle {...article} />
          </Box>
        ))}
      </Grid>
    </>
  );
}
