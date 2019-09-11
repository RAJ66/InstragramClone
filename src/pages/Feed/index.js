import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";

import { Post, Header, Avatar, Name, PostImage, Description } from "./styles";

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);

  async function loadPage(pageNumber = page) {
    const response = await fetch(
      `http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`
    );
    const data = await response.json();
    setFeed([...feed, ...data]);
    setPage(pageNumber + 1);
  }

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <View>
      <FlatList
        data={feed}
        keyExtractor={post => String(post.id)}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => (
          <Post>
            <Header>
              <Avatar source={{ uri: item.author.avatar }} />
              <Name>{item.author.name}</Name>
            </Header>
            <PostImage ratio={item.aspectRatio} source={{ uri: item.image }} />
            <Description>
              <Name>{item.author.name}</Name> {item.description}
            </Description>
          </Post>
        )}
      />
    </View>
  );
}
