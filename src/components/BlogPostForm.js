import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";

const BlogPostForm = ({
  onSubmit,
  initialValues,
  titleHint,
  contentHint,
  buttonText,
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>{titleHint}</Text>
      <TextInput
        style={styles.intput}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>{contentHint}</Text>
      <TextInput
        style={styles.intput}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title={buttonText} onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  intput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginHorizontal: 10,
  },
});

export default BlogPostForm;
