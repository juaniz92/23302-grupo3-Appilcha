import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  

  return (
    <Carousel className='m-auto h-96 my-4 invert'>
      <Carousel.Item className='invert'>
        <div className="flex items-center justify-center w-3/5 m-auto">
            <img
              className="relative h-96 w-96"
              src='./imagen1.jpg'
              alt="Primera imagen"
            />
            <div className="ml-4">
              <h3 className='text-black text-5xl'>DANVOUY Womens T Shirt Casual Cotton Short</h3>
              <p className='text-black text-2xl'>95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.</p>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='invert'>
      <div className="flex items-center justify-center w-3/5 m-auto">
            <img
              className="relativeh-96 w-96"
              src='./imagen2.jpg'
              alt="Primera imagen"
            />
            <div className="ml-4">
              <h3 className='text-black text-5xl'>Mens Cotton Jacket</h3>
              <p className='text-black text-2xl'>great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.</p>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='invert'>
      <div className="flex items-center justify-center w-3/5 m-auto">
            <img
              className="relative h-96 w-96"
              src='./imagen3.jpg'
              alt="Primera imagen"
            />
            <div className="ml-4">
              <h3 className='text-black text-5xl'>Rain Jacket Women Windbreaker Striped Climbing Raincoats</h3>
              <p className='text-black text-2xl'>Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.</p>
            </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;