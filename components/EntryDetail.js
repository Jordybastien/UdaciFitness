import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { addEntry } from '../actions';
import { removeEntry } from '../utils/api';
import { white } from '../utils/colors';
import { getDailyReminderValue, timeToString } from '../utils/helpers';
import MetricCard from './MetricCard';
import TextButton from './TextButton';

class EntryDetails extends Component {
  reset = () => {
    const { remove, goBack, entryId } = this.props;
    remove();
    removeEntry(entryId);
    goBack();
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.metrics !== null && !nextProps.metrics.today;
  }

  render() {
    const { metrics, entryId } = this.props;
    
    return (
      <View style={styles.container}>
        <MetricCard metrics={metrics} date={entryId} />
        <TextButton onPress={this.reset} style={{ margin: 20 }}>
          Reset
        </TextButton>
      </View>
    );
  }
}

const mapStateToProps = (state, { route }) => {
  const { entryId } = route.params;
  return {
    entryId,
    metrics: state[entryId],
  };
};

const mapDispatchToProps = (dispatch, { route, navigation }) => {
  const { entryId } = route.params;
  return {
    remove: () =>
      dispatch(
        addEntry({
          [entryId]:
            timeToString() === entryId ? getDailyReminderValue() : null,
        })
      ),
    goBack: () => navigation.goBack(),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryDetails);
