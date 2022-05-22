import {useState} from "react";
import {StyleSheet, Button, TextInput, View, Modal, Image} from "react-native";

const GoalInput = ({onAddGoal, visible, onCancel}) => {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
      <Modal visible={visible} animationType='slide'>
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/splash.png')}/>
          <TextInput
              value={enteredGoalText}
              style={styles.textInput}
              placeholder='Your course Goal!'
              onChangeText={goalInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button onPress={onCancel} title='Cancel' color='#f31282'/>
            </View>
            <View style={styles.button}>
              <Button onPress={addGoalHandler} title='Add Goal' color='#b180f0'/>
            </View>
          </View>
        </View>
      </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100
  }
})