import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";
import { auth } from "../../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Dropdown } from "react-native-element-dropdown";
import { useAppDispatch } from "../../hooks";
import { OnboardingInfo, SET_USER_SUCCESS, setUser } from "../../actions/user";
import { useDispatch } from "react-redux";

const enum StepFlow {
  SIGNUP,
  ONBOARDING,
}

const Signup = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [onboardingActive, setOnboardingActive] = useState(false);
  const [pid, setPid] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");

  const handleContinue = () => {
    if (name && email && password) setOnboardingActive(true);
  };

  const handleSubmit = async () => {
    if (!pid || !major || !year) return;

    const newUser: OnboardingInfo = {
      name,
      email,
      password,
      pid,
      major,
      year: ["Freshman", "Sophomore", "Junior", "Senior"].indexOf(year),
    };

    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const token = await auth.currentUser?.getIdToken();
    fetch("https://api-eovzxfzvvq-uc.a.run.app/set-user", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
			method: 'POST',
      body: JSON.stringify(newUser),
    }).then((res) => {
      dispatch({ type: SET_USER_SUCCESS, payload: res.json() });
    }).catch(err => console.log(err));
  };

  const mode = onboardingActive ? StepFlow.ONBOARDING : StepFlow.SIGNUP;

  const Content = {
    [StepFlow.SIGNUP]: (
      <>
        <Text style={styles.header}>Sign Up</Text>
        <View style={styles.textBoxArea}>
          <TextInput
            value={name}
            onChangeText={(e) => setName(e)}
            placeholderTextColor={"black"}
            placeholder="Full Name"
            style={styles.textBox}
            autoCapitalize="none"
            autoCorrect={false}
            inputMode="text"
          />
          <TextInput
            value={email}
            onChangeText={(e) => setEmail(e)}
            placeholder="Email"
            placeholderTextColor={"black"}
            style={styles.textBox}
            autoCapitalize="none"
            autoCorrect={false}
            inputMode="email"
            keyboardType="email-address"
          />
          <TextInput
            value={password}
            onChangeText={(e) => setPassword(e)}
            placeholder="Password"
            placeholderTextColor={"black"}
            style={styles.textBox}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </>
    ),
    [StepFlow.ONBOARDING]: (
      <>
        <Text style={styles.header}>Personal</Text>
        <View style={styles.textBoxArea}>
          <TextInput
            value={pid}
            onChangeText={(e) => setPid(e)}
            placeholderTextColor={"black"}
            placeholder="PID"
            style={styles.textBox}
            autoCapitalize="none"
            autoCorrect={false}
            inputMode="text"
          />
          <Dropdown
            data={[{ label: "Computer Science", value: 0 }]}
            labelField="label"
            valueField="value"
            onChange={({ label }) => setMajor(label)}
            style={styles.dropDown}
            value={major}
            placeholder="Major"
          />
          <Dropdown
            data={[
              { label: "Freshman", value: 0 },
              { label: "Sophomore", value: 1 },
              { label: "Junior", value: 2 },
              { label: "Senior", value: 3 },
            ]}
            labelField="label"
            valueField="value"
            onChange={({ label }) => setYear(label)}
            style={styles.dropDown}
            value={year}
            placeholder="Grade"
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </>
    ),
  }[mode];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>goOHDARS</Text>
      <View style={styles.contentArea}>{Content}</View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    alignItems: "center",
  },
  contentArea: {
    display: "flex",
    height: "85%",
    width: "100%",
    alignItems: "center",
  },
  textBoxArea: {
    display: "flex",
    width: "80%",
  },
  textBox: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#039942",
    marginBottom: 20,
    borderRadius: 10,
    height: 50,
    fontSize: 20,
  },
  dropDown: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#039942",
    marginBottom: 20,
    borderRadius: 10,
    height: 50,
    fontSize: 20,
  },
  header: {
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 20,
    marginTop: "30%",
  },
  title: {
    fontSize: 50,
    fontWeight: "900",
    color: "#039942",
    marginTop: Platform.OS === "ios" ? 70 : 0,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#039942",
    height: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});
