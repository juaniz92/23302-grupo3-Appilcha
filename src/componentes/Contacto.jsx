import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Contacto(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lwg1qfn', 'template_gnkjodp', form.current, 'ec7IpTn4RAbbxfKav')
        .then((result) => {
            console.log(result.text);
            Swal.fire({
              position: 'center-center',
              icon: 'success',
              title: 'Mensaje enviado!!',
              showConfirmButton: false,
              timer: 1500
            });
            resetForm();
          })
          .catch((error) => {
            console.log(error.text);
          });
      };
    
      const resetForm = () => {
        form.current.reset();
      };
    
      return (
        <div className='row g-0 p-3 py-4 bg-dark text-white'>
          <h2 className='h2 mb-4' id='Contacto'>
            Contacto
          </h2>
          <p>Si tienes alguna consulta puedes enviarnos un mensaje completando los siguientes datos:</p>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className='mb-3' controlId='nombre'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control type='text' name='user_name' placeholder='Escribe tu nombre' required />
            </Form.Group>
    
            <Form.Group className='mb-3' controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' name='user_email' placeholder='Escribe tu email' required />
            </Form.Group>
    
            <Form.Group className='mb-3' controlId='mensaje'>
              <Form.Label>Mensaje</Form.Label>
              <Form.Control name='message' as='textarea' rows={3} placeholder='Escribe tu mensaje' required />
            </Form.Group>
            <div className='row g-0'>
              <Button variant='dark' className='fs-4 col col-md-2 mx-auto' type='submit' value='Send'>
                Enviar
              </Button>
            </div>
          </Form>
        </div>
      );
    }
    
    export default Contacto;