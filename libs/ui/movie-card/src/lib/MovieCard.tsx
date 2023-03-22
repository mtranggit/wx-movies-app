import React from "react";
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { useMovieStore } from "@wx-movies-app/movie-store";

export const MovieCard: React.FunctionComponent<{
  title: string;
  image: string;
  showAddButton?: boolean;
}> = ({ title, image, showAddButton }) => {
  const theme = useMantineTheme();
  const { addMovie } = useMovieStore();

  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image src={image} height={320} alt={title} />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>{title}</Text>
      </Group>

      {showAddButton && (
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={() => addMovie({ title, image })}
        >
          Add To List
        </Button>
      )}
    </Card>
  );
};
