import {useState} from "react";
import {StyleSheet, View, FlatList, Button} from 'react-native';
import {StatusBar} from 'expo-status-bar'

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  const addGoalHandler = (enteredGoalText) => {
    if (enteredGoalText.length !== 0) {
      setCourseGoals(prevState => ([...prevState, {text: enteredGoalText, id: Math.random().toString()}]))
    }
    endAddGoalHandler()
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(prevState => prevState.filter(goal => goal.id !== id))
  }

  return (
      <>
        <StatusBar style='light'/>
        <View style={styles.appContainer}>
          <Button
              onPress={startAddGoalHandler}
              title='Add New Goal'
              color='#a065ec'
          />
          <GoalInput
              onAddGoal={addGoalHandler}
              visible={modalIsVisible}
              onCancel={endAddGoalHandler}
          />
          <View style={styles.goalsContainer}>
            <FlatList
                data={courseGoals}
                renderItem={itemData => {
                  return (
                      <GoalItem
                          text={itemData.item.text}
                          id={itemData.item.id}
                          onDeleteItem={deleteGoalHandler}
                      />
                  )
                }}
                keyExtractor={(item, index) => item.id}
                alwaysBounceVertical={false}
            />
          </View>
        </View>
      </>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 40,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5
  },
});
