import useDevTo from "hooks/useDevTo";
import { FiBarChart, FiClock } from "react-icons/fi";
import Avatar from "./Avatar";
import Link from "./Link";
import { Box, Flex } from "./Primitive";
import { Heading, Text } from "./Typography";

export default function WidgetDevTo() {
  const { profile, articles } = useDevTo({ per_page: 3 });
  return (
    <>
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
          <Flex css={{ alignItems: "center", gap: "$8" }}>
            <Box>
              <Avatar src={profile?.profile_image} size={120} />
            </Box>
            <Flex stack="column">
              <Flex stack="column" css={{ gap: "$2" }}>
                <Heading as="h3" level="three" css={{ fontWeight: "$bold" }}>
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
      <Box
        as="ul"
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gridAutoRows: "1fr",
        }}
      >
        {articles?.map((article) => (
          <Box
            key={article.id}
            as="li"
            css={{
              listStyleType: "none",
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
              <Flex css={{ alignItems: "center", minWidth: "6rem" }}>
                <Text css={{ color: "$gray11", fontSize: "$sm" }}>
                  {article.readable_publish_date}
                </Text>
              </Flex>
              <Flex
                stack="column"
                css={{
                  justifyContent: "center",
                }}
              >
                {article.url && (
                  <Link href={article.url}>
                    <Text>{article.title}</Text>
                  </Link>
                )}
                <Flex css={{ gap: "$4" }}>
                  <Flex
                    css={{ alignItems: "center", gap: "$1", color: "$gray11" }}
                  >
                    <FiClock size={16} />
                    <Text css={{ fontSize: "$sm" }}>
                      {article.reading_time_minutes}m
                    </Text>
                  </Flex>
                  <Flex
                    css={{ alignItems: "center", gap: "$1", color: "$gray11" }}
                  >
                    <FiBarChart size={16} />
                    <Text css={{ fontSize: "$sm" }}>
                      {article.public_reactions_count}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Box>
    </>
  );
}
