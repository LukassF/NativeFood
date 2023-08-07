import { TouchableOpacity, Image,Text } from "react-native"
import styles from "./header_btn_styles"

const HeaderBtn = ({iconUrl}) => {
    return (
    <TouchableOpacity style={styles.btnContainer}>
        <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImage}
        />
    </TouchableOpacity>
    )
}

export default HeaderBtn