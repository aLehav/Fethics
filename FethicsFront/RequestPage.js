import React from "react";
import { SafeAreaView, Text, StyleSheet, TextInput } from "react-native";

const RequestPage = () => {
  const [subject_text, onChangeSubject] = React.useState(null); //enter default text as argument if you'd like
  const [topic_text, onChangeTopic] = React.useState(null);
  const [times_text, onChangeTimes] = React.useState(null);
  const [location_text, onChangeLocation] = React.useState(null);
  const [extra_text, onChangeExtra] = React.useState(null);

  return (
    <SafeAreaView>
      <Text style={styles.subject_text}>Filter Subjects</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeSubject}
        placeholder=""
        value={subject_text}
      />
      <Text style={styles.other_text}>Topic</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTopic}
        value={topic_text}
      />
      <Text style={styles.other_text}>Due Date</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTimes}
        value={times_text}
      />
      <Text style={styles.other_text}>Rate</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeLocation}
        value={location_text}
      />
      <Text style={styles.other_text}>Assignment Details</Text>
      <TextInput
        style={styles.final_input}
        onChangeText={onChangeExtra}
        value={extra_text}
        // placeholder="useless placeholder"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 12,
    marginBottom: 20,
    marginRight: 12,
    marginLeft: 12,
    borderWidth: 1,
    paddingTop: 0,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#eaeaea"
  },
  final_input: {
    height: 120,
    marginTop: 12,
    marginBottom: 20,
    marginRight: 12,
    marginLeft: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    backgroundColor: "#eaeaea"
  },
  subject_text: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 0,
  },
  other_text: {
    paddingLeft: 20,
    paddingBottom: 0,
  }
});

export default RequestPage;