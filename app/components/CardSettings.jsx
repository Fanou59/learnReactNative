import { Card, Text } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function CardSettings({ title, icone, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <Card.Content className="bg-white border-2 border-blue-500 rounded-lg">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <FontAwesome name={icone} size={24} color="#3b82f6" />
              <Text className="ml-3" variant="titleMedium">
                {title}
              </Text>
            </View>
            <View className="items-center justify-center">
              <FontAwesome name="chevron-right" size={24} color="#3b82f6" />
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}
