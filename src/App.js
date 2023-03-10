import './App.css';
import Item from './components/Item';
import NavbarHeader from './components/NavbarHeader';
import ItemsWrapper from './components/ItemsWrapper';

const items = [
  {
    img: 'https://www.sony.co.il/image/637d137372ac2a6d0e07784d314fa4de?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320',
    name: 'TV',
    description: 'hd++ 1080+++',
    price: 700,
    date: '10/10/2022'
  },
  {
    img: 'https://marvel-b1-cdn.bc0a.com/f00000000289278/cdn.shopify.com/s/files/1/1960/2909/products/9800_2_STUDIO_1600x1600_SO_Open.png?v=1620051548',
    name: 'Grill',
    description: 'Some ninja samurai grill',
    price: 200
  },
  {
    img: 'https://cdn-images.article.com/products/SKU379A/2890x1500/image81730.jpg',
    name: 'Table',
    description: 'Best table evar!',
    price: 100,
    date: '01/10/2021'
  }
];

function App() {
  return (
    <div>
      <NavbarHeader />

      <ItemsWrapper >

        <Item image={items[0].img}
          title={items[0].name}
          description={items[0].description}
          price={items[0].price}
          date={items[0].date}
        >
        </Item>       
        <Item image={items[1].img} title={items[1].name} description={items[1].description} price={items[1].price} date={items[1].date} />
        <Item image={items[2].img} title={items[2].name} description={items[2].description} price={items[2].price} date={items[2].date} />


      </ItemsWrapper>


    </div >
  );
}

export default App;
