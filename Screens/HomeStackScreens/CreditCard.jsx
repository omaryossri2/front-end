import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useContext, useState } from "react";
import { API_URL } from "@env";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const CreditCard = () => {
  const { navigate } = useNavigation();
  const { user } = useContext(AuthContext);
  const [cardNumber, setCardNumber] = useState();
  const [cardHolderName, setCardHolderName] = useState();
  const [expiryDate, setExpiryDate] = useState();
  const [CVV, setCVV] = useState();
  const [amount, setAmount] = useState(0);

  // console.log(typeof amount);
  const addMoney = async () => {
    const res = await fetch(`${API_URL}/api/balance/${user.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: Number(amount),
      }),
    });

    const data = await res.json();
    if (res.ok) {
      Alert.alert("Succeed", data.message);
      navigate("Home");
    } else {
      Alert.alert("Failed", data.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.visaContainer}>
        <Text style={styles.visa}>VISA</Text>

        <View style={styles.cardnumberContainer}>
          <Text style={styles.header}>Card Number</Text>
          <View style={styles.cardnumber}>
            {cardNumber ? (
              <View style={styles.cardnumber}>
                <Text>{cardNumber.substring(0, 4)}</Text>
                <Text>{cardNumber.substring(4, 8)}</Text>
                <Text>{cardNumber.substring(8, 12)}</Text>
                <Text>{cardNumber.substring(12, 16)}</Text>
              </View>
            ) : (
              <View style={styles.cardnumber}>
                <Text>_ _ _ _ </Text>
                <Text>_ _ _ _ </Text>
                <Text>_ _ _ _ </Text>
                <Text>_ _ _ _ </Text>
                <Text>_ _ _ _ </Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.cardnameContainet}>
          <Text style={styles.header}>Card Holder Name</Text>
          {cardHolderName ? (
            <Text>{cardHolderName}</Text>
          ) : (
            <Text>__________</Text>
          )}
        </View>

        <View style={styles.expirycv}>
          <View style={styles.exdate}>
            <Text style={styles.header}>Expiry Date</Text>
            {expiryDate ? <Text>{expiryDate}</Text> : <Text>__ /__</Text>}
          </View>
          <View style={styles.exdate}>
            <Text style={styles.header}>CVV</Text>
            {CVV ? <Text>{CVV}</Text> : <Text>___</Text>}
          </View>
        </View>
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.edit}>
          <Text style={styles.inputLabel}>Card Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Card Number"
            keyboardType="numeric"
            maxLength={16}
            onChangeText={(text) => setCardNumber(text)}
          />
        </View>

        <View style={styles.edit}>
          <Text style={styles.inputLabel}>Card Holder Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Card Holder Name"
            onChangeText={(text) => setCardHolderName(text)}
          />
        </View>

        <View style={styles.expiryCVV}>
          <View style={styles.edit}>
            <Text style={styles.inputLabel}>Expiry Date</Text>
            <TextInput
              style={styles.textInput}
              placeholder="MM/YY"
              onChangeText={(text) => setExpiryDate(text)}
            />
          </View>

          <View style={styles.edit}>
            <Text style={styles.inputLabel}>CVV</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter CVV"
              keyboardType="numeric"
              maxLength={3}
              onChangeText={(text) => setCVV(text)}
            />
          </View>
        </View>
        {/* add another view for adding amount */}

        <View style={styles.edit}>
          <Text style={styles.inputLabel}>Amount</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Amount"
            keyboardType="numeric"
            onChangeText={(text) => setAmount(text)}
          />
        </View>

        <Pressable style={styles.btn} onPress={addMoney}>
          <Text style={styles.btntxt}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingHorizontal: 25,
    paddingTop: 50,
    justifyContent: "space-between",
    marginBottom: 40,
  },
  inputsContainer: {
    gap: 25,
  },
  edit: {
    gap: 5,
  },
  textInput: {
    backgroundColor: "#c2c3c5",
    // backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "#0961f5",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btntxt: {
    color: "white",
    fontSize: 16,
  },
  expiryCVV: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  visaContainer: {
    marginTop: 40,
    backgroundColor: "#002fff",
    flex: 0.8,
    borderRadius: 30,
    padding: 10,
  },
  visa: {
    paddingTop: 20,
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 20,
    marginBottom: 10,
  },
  expirycv: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  cardnumber: {
    flexDirection: "row",
    gap: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  cardnumberContainer: {
    paddingHorizontal: 20,
  },
  cardnameContainet: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  exdate: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
  },
});
