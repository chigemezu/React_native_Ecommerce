import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    marginTop:30
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 40,
    textAlign:"center",
    paddingTop:20
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 26
  },

  input: {
    flex: 1,
    height: 50,
    marginLeft: 10
  },

  forgot: {
    alignItems: "flex-end",
    marginBottom: 30,
    marginTop:-20
  },

  forgotText: {
    color: "#ff3b5c",
    fontSize: 13
  },
  forgotTitle:{
    marginTop:70
  },

  loginBtn: {
    backgroundColor: "#ff3b5c",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30
  },

  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  },

  orText: {
    textAlign: "center",
    color: "#999",
    marginBottom: 20
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    marginBottom: 30
  },

  socialBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center"
  },

  signupText: {
    textAlign: "center",
    color: "#666"
  },

  signupLink: {
    color: "#ff3b5c",
    fontWeight: "600"
  }
});

export default Styles;
