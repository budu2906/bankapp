import { Toast } from "react-native-toast-message/lib/src/Toast";


export function showToast(type:string,text1:string,text2?:string) {
    
      Toast.show({
        type: type,
        text1,
        text2
      });
    
}