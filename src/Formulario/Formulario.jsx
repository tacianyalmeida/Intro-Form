import 'Formulario.css'
const Formulario = (props)=>{
    return(
        <> 
        <input type={props.nome}/>
     <input type={props.sobrenome} /> 
      <input type= {props.Email}/>
      <input type={props.senha} />
     </>
    )
}

export default Formulario; 