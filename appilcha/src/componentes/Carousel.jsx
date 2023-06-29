import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  
  return (
    <Carousel className='m-auto p-5 bg-black text-white rounded-3 mb-3'>
      <Carousel.Item className=''>
        <div className="row w-100">
            <img
              className="col-12 col-md-4"
              src='./imagen1.jpg'
              alt="Primera imagen"
              
            />
            <div className="col-12 col-md-8 align-self-center">
              <h3 className='h3 my-3'>DANVOUY Womens T Shirt Casual Cotton Short</h3>
              <p className='fs-5 d-none d-md-block'>95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.</p>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className=''>
        <div className="row w-100">
            <img
              className="col-12 col-md-4"
              src='./imagen2.jpg'
              alt="Segunda imagen"
              
            />
            <div className="col-12 col-md-8 align-self-center">
              <h3 className='h3'>Mens Cotton Jacket</h3>
              <p className='fs-5 d-none d-md-block'>great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.</p>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className=''>
        <div className="row w-100">
            <img
              className="col-12 col-md-4"
              src='./imagen3.jpg'
              alt="Segunda imagen"
              
            />
            <div className="col-12 col-md-8 align-self-center">
              <h3 className='h3'>Rain Jacket Women Windbreaker Striped Climbing Raincoats</h3>
              <p className='fs-5 d-none d-md-block'>Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.</p>
            </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;