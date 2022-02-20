import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { FaLinkedin } from "react-icons/fa";
import { styled } from "styles/stitches.config";
import { Section } from "./Layout";
import Link from "./Link";
import { Box, Flex } from "./Primitive";
import { Text } from "./Typography";
import Wave from "./Wave";

const Icon = styled("svg", {
  size: 22,
});

export default function Footer() {
  return (
    <>
      <Wave
        css={{ transform: "rotate(180deg) scaleX(-1)", mt: "$10" }}
        fill="$gray3"
      />
      <Box css={{ backgroundColor: "$gray3", padding: "$10" }}>
        <Section>
          <Flex
            stack="column"
            css={{
              alignItems: "center",
              "@md": {
                alignItems: "start",
              },
            }}
          >
            <Flex css={{ alignItems: "center", gap: "$3" }}>
              <Text css={{ fontWeight: "$bold", color: "$gray12" }}>
                Contact
              </Text>
              <Link
                href="https://twitter.com/GThinhNguyen"
                aria-label="Follow me on Twitter"
                css={{
                  ":hover": {
                    color: "$gray11",
                  },
                }}
              >
                <Icon aria-hidden as={TwitterLogoIcon} />
              </Link>
              <Link
                href="https://github.com/g-thinh/"
                aria-label="Check out my projects on GitHub"
                css={{
                  ":hover": {
                    color: "$gray11",
                  },
                }}
              >
                <Icon as={GitHubLogoIcon} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/gthinh-nguyen"
                aria-label="Connect with me on LinkedIn"
                css={{
                  ":hover": {
                    color: "$gray11",
                  },
                }}
              >
                <Icon as={FaLinkedin} />
              </Link>
            </Flex>
            <Text
              css={{
                textAlign: "center",
                fontSize: "$sm",
                color: "$gray11",
                md: {
                  textAlign: "start",
                },
              }}
            >
              All rights probably deserved © Gia Thinh Nguyen 2022
            </Text>
          </Flex>
        </Section>
      </Box>
    </>
  );
}
