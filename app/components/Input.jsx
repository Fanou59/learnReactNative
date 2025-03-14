import { TextInput } from "react-native";

export default function Input({
  placeholder,
  onChange,
  value,
  dataType = "none",
  inputMode = "text",
  selectTextOnFocus = true,
  autoComplete = "off",
}) {
  const handleTextChange = (text) => {
    if (dataType === "text") {
      onChange({ nativeEvent: { text } });
    } else {
      onChange({ nativeEvent: { text: text } });
    }
  };

  return (
    <TextInput
      className="w-full px-4 h-12 border border-gray-300 rounded-lg shadow-md text-base
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-300 font-nunito leading-5 text-gray-800"
      placeholder={placeholder}
      secureTextEntry={placeholder === "Password" ? true : false}
      autoCapitalize={placeholder === "Email" ? "none" : "sentences"}
      autoCorrect={false}
      onChangeText={handleTextChange}
      value={dataType === "decimal" ? String(value).replace(".", ",") : value}
      inputMode={inputMode}
      selectTextOnFocus={selectTextOnFocus}
      autoComplete={autoComplete}
    />
  );
}
