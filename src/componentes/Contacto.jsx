import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contacto(){
    
  return (

      <div className='row g-0 p-3 py-4 bg-dark text-white'>

            <h2 className='h2 mb-4'>Contacto</h2>

            <Form>

                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Escribe tu nombre" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="apellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Escribe tu apellido" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Escribe tu email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mensaje">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje" required />
                </Form.Group>

                <Button variant="dark" className='fs-4' type="submit">
                    Enviar
                </Button>

            </Form>
        </div>
  );
}
  
  export default Contacto;