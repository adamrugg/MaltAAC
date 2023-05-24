import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

const Settings = () => {
  const [isMaleVoice, setIsMaleVoice] = useState(false);
  const [isVibrationEnabled, setIsVibrationEnabled] = useState(false);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text>Male Voice</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isMaleVoice ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setIsMaleVoice}
        value={isMaleVoice}
      />

      <Text>Enable Vibration</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isVibrationEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setIsVibrationEnabled}
        value={isVibrationEnabled}
      />

      <Text>Auto Play Sound</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isAutoPlay ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setIsAutoPlay}
        value={isAutoPlay}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default Settings;
