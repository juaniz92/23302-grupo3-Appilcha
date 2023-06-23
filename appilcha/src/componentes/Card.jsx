import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';

function GroupExample() {
  return (
    <CardGroup className='p-36'>
      <Card className="flex items-center justify-center m-auto border-none">
      <Link to='/Tienda'><Card.Img className="h-72 w-72" variant="top" src="./img1.jpg" /></Link>
        <Card.Body>
            <Card.Title><Link className="relative text-2xl p-2 hover:bg-black hover:text-white hover:rounded-md" to='/Tienda'>Ir a Tienda</Link></Card.Title>
        </Card.Body>
      </Card>
      <Card className="flex items-center justify-center m-auto border-none">
      <Link to='/Tienda'><Card.Img className="h-72 w-72" variant="top" src="./img2.jpg" /></Link>
        <Card.Body>
            <Card.Title><Link className="relative text-2xl p-2 hover:bg-black hover:text-white hover:rounded-md" to='/Tienda'>Ir a Tienda</Link></Card.Title>
        </Card.Body>
      </Card>
      <Card className="flex items-center justify-center m-auto border-none">
      <Link to='/Tienda'><Card.Img className="h-72 w-72" variant="top" src="./img3.jpg" /></Link>
        <Card.Body>
            <Card.Title><Link className="relative text-2xl p-2 hover:bg-black hover:text-white hover:rounded-md" to='/Tienda'>Ir a Tienda</Link></Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;