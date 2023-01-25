import React from 'react'
import "./Header.css";
import 'react-datepicker/dist/react-datepicker'
import 'react-dropdown/style.css';
import { RegisterForm } from './RegisterForm';




const Head = () => {




  return (
    <>

      <div className="home">
        <div class="msg_principal">
          <p class="LetMulCua"><span class="msg_a">Ahora puedes encontrar el servicio ideal para tu mascota.</span> <br />
            <span class="msg_b">¡Resérvalo cuándo y dónde quieras desde aquí!</span></p>
        </div>

        <div className='FormuHead'>
          <RegisterForm />
        </div>
      </div>

    </>
  )
}

export default Head;








