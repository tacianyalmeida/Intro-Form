import Texto from '../Texto/Texto'
import Aviso from '../ConteinerAviso/Aviso';
import Formulario from '../Formulario/Formulario';
import Button from '../Button/Button';
import './App.css'

const App = ()=>{
    return(<> 
    <div className='titulo'> 
<Texto
titulo={"Learn to code by watching others"}
   
/></div>
<div className='subTitulo' >
<Texto 
subTitulo={"See how experience developers solve problems in real-time.   Watching scripted tutorials is grat. But understandins how  Developers think is invaluable " } /></div>

<div className='aviso'>
    <h1>
<Aviso 
Texto={"Try it free & days then $20/mo. thereafter"}/> </h1>
 </div>

<div className=' ConteinerBranco'> 
<Formulario
             />
</div>

<button className='button'>
    <Button />
</button>


</>)}
export default App;