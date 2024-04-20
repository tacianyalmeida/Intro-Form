
import Button from "../Button/Button";
import Input from "../Input/input";
import "./Form.css"
const Form = ()=>{
return(
    <form>
        <Input type="text" placeholder="First Name "/>
        <Input type="text" placeholder="Last Name "/>
        <Input type="text" placeholder="Email Adress "/>
        <Input type="text" placeholder="Password "/>
        <Button nameButton='CLAIM YOUR FREE'/>
    </form>
)
}
export default Form; 