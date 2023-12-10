import './Supportus.css'
import {useState,useId} from 'react'

function Supportus() {
const id = useId();
const [username, setUsername] = useState('');
const [usernameIsMissing, setUsernameIsMissing] = useState(false);
const [email, setEmail] = useState('');
const [comfirmemail,setComfirmemail] = useState('');
const [receivecopy,setreceivecopy] = useState(false);
const [sameaddress,setsameaddress] = useState(false);
sameaddress
const [shippingAddress,setshippingAddress] = useState('');
const [billingAddress,setbillingAddress] = useState('');
const [emailIsMissing, setemialIsMissing] = useState(false);
const [emailIsInvalid, setEmailIsInvalid] = useState(false);
const [comfirememailIsInvalid, setcomfirememailIsInvalid] = useState(false);
function validateUsername(username) {
    setUsernameIsMissing(username.length === 0);
}
function validateEmail(email){
    setemialIsMissing(email.length === 0);
    setEmailIsInvalid(!email.match(/.+@.+/));
}
function validateComfirmemail(comfirmemail){
    setcomfirememailIsInvalid(comfirmemail !== email);
}
  return (
    
    
  
     <main id="main" className='Supportus__page'>
        <h2 className='form__title'>Wanna receive our latest photos?</h2>
    <form className='register' onSubmit ={ (e) => {
        e.preventDefault();
        
        validateUsername(username);
        validateEmail(email);
        validateComfirmemail(comfirmemail)
        
    }}>
    <span className='register__hint'> <span className='register__emphasize'>*</span> = Required</span>
    <label htmlFor = {`${id}-username`}>Username<span className='register__emphasize'>*</span></label>
    {usernameIsMissing && <span className="register_error register_error--username">Username is required</span>}
      <input id={`${id}-username`} value={username} onInput={(e) => {
        setUsername(e.target.value);
        validateUsername(e.target.value);
      }}/>
      <label htmlFor={`${id}-email`}>Email<span className='register__emphasize'>*</span></label>
      {emailIsMissing && <span className="register_error register_error--email">Email is required</span>}
      {emailIsInvalid && <span className="register_error register_error--email-invalid">Email is invalid</span>}
      <input id={`${id}-email`} value={email} onInput={(e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
       
      }}/>
<label htmlFor={`${id}-confirm-email`}>Comfirm Email</label>
{comfirememailIsInvalid && <span className="register_error register_error--comfirmemail">Comfirm Email needs to be same</span>}
<input id={`${id}-confirm-email`} value={comfirmemail} onInput={(e) => {
        setComfirmemail(e.target.value);
        validateComfirmemail(e.target.value);
      }}/>
<label htmlFor={`${id}-check-receive`}>Recieve our physical photos copy?</label>
<input id={`${id}-check-receive`} type="checkbox" checked={receivecopy} onChange={() => {
setreceivecopy(!receivecopy);
      }}/>
{receivecopy && <label htmlFor={`${id}-shipping-Address`}>Shipping Address</label>}
{receivecopy && <input id={`${id}-shipping-Address`} value={shippingAddress} onInput={(e) => {
        setshippingAddress(e.target.value);
       {sameaddress && setbillingAddress(e.target.value)}
      }}/>}
      {receivecopy &&<label htmlFor={`${id}-check-address`}>Shipping Address the same as Billing Address?</label>}
      {receivecopy && <input id={`${id}-check-address`} type="checkbox" checked={sameaddress} onChange={() => {
setsameaddress(!sameaddress);
setbillingAddress(shippingAddress);
      }}/>}
      {receivecopy &&<label htmlFor={`${id}-billing-Address`}>Billing Address</label>}
{receivecopy && <input id={`${id}-billing-Address`} readOnly={sameaddress}value={billingAddress} onInput={(e) => {
        setbillingAddress(e.target.value);
       
      }}/>}
<button type="submit">Register</button>
     </form>
     

    </main>

    

  );
}

export default Supportus;