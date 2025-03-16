import { Card, Text, Button } from 'react-native-paper';
import { View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Info({ title, info1, info2, info3 }) {
  const router = useRouter();
  const handleModifyPress = () => {
    router.push('/screens/lensSettings');
  };
  return (
    <Card>
      <Card.Content className="bg-white border-2 border-blue-500 rounded-lg">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="mb-2 text-3xl" variant="titleMedium">
              {title}
            </Text>
            <Text className="text-sm" variant="bodyMedium">
              {info1}
            </Text>
            <Text variant="bodyMedium">{info2}</Text>
            <Text variant="bodyMedium">{info3}</Text>
          </View>

          <Button
            className="self-end"
            buttonColor="#3b82f6"
            icon="pencil"
            mode="contained"
            onPress={handleModifyPress}
          >
            Modify
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
}
