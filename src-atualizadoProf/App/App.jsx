
import Form from "../Form/Form";
import PromoBox from "../PromoBox/PromoBox"; 
import PrincipalInfo from "../PrincipalInfo/PrincipalInfo";
import "./App.css"
const App = ()=>{
return(<> 
<section className="container-main"> 
<PrincipalInfo/>

<div> 
<PromoBox  texto="Try i free 7 days then 20$/mo. "/> 
<Form/>
</div>
</section>

 </>)
}
export default App; 
