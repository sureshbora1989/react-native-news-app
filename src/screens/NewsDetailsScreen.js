import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList
} from "react-native";

const NewsDetailsScreen = () => {
  const [isLoading, setLoading] = useState(false);
  const [newsData, setNewsData] = useState([]);

  const getNewSFeed = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      setNewsData(json.movies);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  //This is like Component on Mount called only once
  useEffect(() => {
    getNewSFeed();
  }, []);

  const getNewsItem = ({ item }) => {
    return <Text>{item.title} </Text>;
  };

  const GetNewsList = () => {
    return (
      <View>
        <FlatList data={newsData} renderItem={getNewsItem} />
      </View>
    );
  };

  return (
    <View styles={styles.container}>
      {isLoading ? <ActivityIndicator /> : <GetNewsList />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eaeaea"
  }
});

export default NewsDetailsScreen;
