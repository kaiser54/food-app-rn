import {View, Text, Button} from 'react-native'
import {router} from "expo-router";

export default function SignIn() {
    return (
        <View>
            <Text>Sign in</Text>
            <Button title={'Sign Up?'} onPress={() => router.push('/sign-up')} />
        </View>
    )
}
