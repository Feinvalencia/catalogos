import { useRef, forwardRef, ReactNode, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { FaCartPlus } from 'react-icons/fa';
import { BiXCircle } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';
import './App.css';
/* import * as images from './exports/images'; */
import { useCallback } from 'react';
import image1 from './assets/1.jpeg';
import image2 from './assets/2.jpeg';
import image3 from './assets/3.jpeg';
import image4 from './assets/4.jpeg';

const imagen = [image1, image2, image3, image4];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: true,
  autoplay: true,
};
const buttoms = [
  {
    name: 'SEGURIDAD',
    page: 1,
  },
  {
    name: 'TECNOLITE',
    page: 2,
  },
  {
    name: 'LAMPARAS',
    page: 3,
  },
  {
    name: 'CONSTRULITA',
    page: 4,
  },
  {
    name: 'CONNECT',
    page: 4,
  },
];
const pages = [
  {
    image:
      /*   'https://catalogodigitalassets.somosbelcorp.com/PE/202307/L/paginas/PE_L_202307_006-007.jpg', */
      '../public/Tecnolite2022v2-19.jpg',
    left: [
      {
        x: 210,
        y: 130,
        item: {
          img: 'https://tecnolite.mx/cdn-cgi/image/width=515,f=auto/medias/KITDOBATCW-NVO-PT01.jpg?context=bWFzdGVyfGltYWdlc3w4NjY4NHxpbWFnZS9qcGVnfGg1ZC9oZjkvOTEzMjM1MTUyMDc5OC9LSVRET0JBVENXLU5WT19QVDAxLmpwZ3w5ZTk5NzEyZjQ1NmNlZDVmMzNiOTQwZWUzZjExNTA4MDRiMTcyM2UxZmJmZTQwMjliYWFlNmQxMDY2ZDcxYTZm',
          nombre: 'Kit Control Basico',
          detail:
            'https://tecnolite.mx/tienda/p/kit-de-monitoreo-inteligente-wifi-2-camaras-1-sensor-de-apertura-1-sensor-de-movimiento-compatible-con-app-movil-y-asistentes-de-voz/KITASEGTCW',
          precio: '$1,048.00 IVA Incluido',
          sku: 'SKU: KITASEGTCW',
        },
      },
      {
        x: 210,
        y: 290,
        item: {
          nombre: 'Cámara de Monitoreo 360°',
          precio: '$2,163.00 IVA Incluido',
          sku: 'SKU: CAMS6SVCDTCW',
          detail:
            'https://tecnolite.mx/c/p/camara-de-monitoreo-360-inteligente-wifi-interiores-altavoz-y-microfono-vision-nocturna-compatible-con-app-movil-y-asistentes-de-voz/CAMS6SVCDTCW',
          img: 'https://tecnolite.mx/cdn-cgi/image/width=1200,f=auto/medias/CAMS6SVCDTCW-PT01.jpg?context=bWFzdGVyfGltYWdlc3w1NDEwN3xpbWFnZS9qcGVnfGg0Yi9oNzMvOTIwODk3ODQ3Mjk5MC9DQU1TNlNWQ0RUQ1dfUFQwMS5qcGd8ZTRiYTkwZDdjNTUxOGJkMDNiOGY1YjQ2YTQ1NWUxMzRlYzgzYWExYjJhMTVhZWUyZjgzZTRkNmZiNDQyM2E1NA',
        },
      },
      {
        x: 210,
        y: 630,
        item: {
          nombre: 'Kit NVR 4 Cámaras de Seguridad°',
          precio: '$1,048.00 IVA Incluido',
          sku: 'SKU: NVR4CVCDTCW',
          detail:
            'https://tecnolite.mx/c/p/kit-nvr-4-camaras-de-seguridad-inteligentes-wifi-sistema-cctv-inalambrico-ip65-compatible-con-app-movil-y-asistentes-de-voz/NVR4CVCDTCW',
          img: 'https://tecnolite.mx/cdn-cgi/image/width=1200,f=auto/medias/NVR4CVCDTCW-MAIN.jpg?context=bWFzdGVyfGltYWdlc3wxNTgyNTd8aW1hZ2UvanBlZ3xoZTMvaDZmLzkyMjEyOTIzMjY5NDIvTlZSNENWQ0RUQ1dfTUFJTi5qcGd8ZmRjYWQzM2MyNmNhZDFlMzhmMDJhYWE5NTY4NzMxMjBkZmYwMmEzOGY3NWUxODZhMDUwYTQ4ZjQxMTBlZTYyZQ',
        },
      },
    ],
    right: [
      { x: 100, y: 100, item: { name: 'Nombre 3' } },
      { x: 100, y: 150, item: { name: 'Nombre 4' } },
      { x: 200, y: 200, item: { name: 'Nombre 5' } },
    ],
  },

  {
    image: '../public/Tecnolite2022v2-20.jpg',
    left: [],
    right: [],
  },
  {
    image: '../public/Tecnolite2022v2-21.jpg',
    left: [],
    right: [],
  },
  {
    image: '../public/Tecnolite2022v2-21.jpg',
    left: [],
    right: [],
  },
];

const PageCover = forwardRef<any, PageProps>((props, ref) => {
  return (
    <div
      className='page page-cover'
      ref={ref}
      onMouseDownCapture={() => {
        // props.setSelected(undefined);
        return;
      }}
    >
      <div className='page-content'>
        {/*         <h2>{props.children}</h2> */}
        <div className='image-wrap'>
          <img className={`image`} src={props.src} />
        </div>
      </div>
    </div>
  );
});

type Point = {
  x: number;
  y: number;
  item: any;
};

type PageProps = {
  src: string;
  number: number;
  points: Array<Point>;
  setSelected: (item: any) => void;
  children?: ReactNode;
};

const PageLeft = forwardRef<any, PageProps>((props, ref) => {
  // console.log('props', props);

  return (
    <div
      className='page'
      ref={ref}
      onMouseDownCapture={() => {
        /*           event.stopPropagation();
      event.preventDefault();
      event.nativeEvent.stopImmediatePropagation(); */
        props.setSelected(undefined);
        return;
      }}
    >
      <div className='image-wrap image-wrap-left'>
        {props.points.map((point) => {
          return (
            <div
              style={{ top: point.y, left: point.x }}
              key={point.x + point.y}
              tabIndex={1}
              className='point'
              onMouseDownCapture={(event) => {
                event.nativeEvent.stopImmediatePropagation();
                event.stopPropagation();
                event.preventDefault();
                props.setSelected(point.item);
              }}
            >
              <FaCartPlus color={'white'} size={30} />
            </div>
          );
        })}
        <img className={`image `} src={props.src} />
      </div>
    </div>
  );
});

/* const PageRight = forwardRef<any, PageProps>((props, ref) => {
  return (
    <div
      className='page'
      ref={ref}
      onMouseDownCapture={(event) => {
        props.setSelected(undefined);
        return;
      }}
    >
      <div className='image-wrap image-wrap-right'>
        {props.points.map((point) => {
          return (
            <div
              className='point'
              style={{ top: point.y, left: point.x }}
              tabIndex={1}
              onMouseDownCapture={(event) => {
                props.setSelected(point.item);
                event.nativeEvent.stopImmediatePropagation();
                event.stopPropagation();
                event.preventDefault();
                return;
              }}
            ></div>
          );
        })}
        <img className={`image`} src={props.src} />
      </div>
    </div>
  );
}); */
/* const BlockColor = (color: any) => {
  return (
    <div
      style={{
        width: 200,
        height: '100px',
        background: color,
        zIndex: 100,
        display: 'block',
      }}
    ></div>
  );
}; */
function App() {
  const book = useRef(null);
  // const [book, setBook] = useState(null);
  const [selected, setSelected] = useState<any>(undefined);
  // console.log('selected', selected);
  // console.log('book', book);
  const buttonPage = (page: number) => {
    book.current.pageFlip().turnToPage(page);
    // console.log(book.current, "book")
  };
  const [currentPage, setCurrentPage] = useState(0);
  const onFlip = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

  // useEffect(() => {console.log(book, "bookus")}, [book])
  return (
    <div className='container'>
      <div className='book-container'>
        <div className='controls'>
          {buttoms.map((button) => {
            return (
              <button
                className='buttonNavigation'
                key={button.name}
                onClick={() => {
                  buttonPage(button.page + 1);
                }}
              >
                <span>{button.name}</span>
              </button>
            );
          })}
          {/*               {book.current !== null && (
                <button>
                  <span>{currentPage}</span>
                </button>
              )} */}
        </div>
      </div>
      <div className='wrapper'>
        {selected && (
          <div className='selected animate__animated animate__zoomIn animate__delay-0.1s'>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                cursor: 'pointer',
              }}
              onClick={() => setSelected(undefined)}
            >
              <BiXCircle size={30} />
            </div>
            <div
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                display: 'flex',
                marginBottom: 10,
              }}
            >
              {selected.img && (
                <img
                  src={selected.img}
                  style={{ width: 150, height: 150 }}
                  //src={selected.img}
                />
              )}
            </div>
            <div style={{ marginBottom: '1rem' }}>
              {/*                 <h2> Single Item</h2> */}
              <Slider {...settings}>
                {imagen.map((image) => {
                  return (
                    <div className='item'>
                      <img src={image} />
                    </div>
                  );
                })}
              </Slider>
            </div>
            <p style={{ margin: 0, fontSize: '0.8rem' }}>CATÁLOGO</p>

            <h3 style={{ margin: 0 }}>{selected.nombre}</h3>
            <h5 style={{ margin: 0, padding: 0 }}>{selected.sku}</h5>
            <p style={{ fontSize: '0.8rem', marginTop: '1rem' }}>PRECIO</p>
            <h3 style={{}}>{selected.precio}</h3>
            <div
              style={{ width: '100%', marginTop: '2rem', marginBottom: '1rem' }}
            >
              <button
                className='buttonModal'
                onClick={() => {
                  window.open(selected.detail, '_blank');
                }}
              >
                <span>VER DETALLE</span>
              </button>
            </div>
          </div>
        )}

        <HTMLFlipBook
          height={733}
          width={700}
          size='fixed'
          minWidth={615}
          maxWidth={1500}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className='demo-book'
          ref={book}
          onFlip={onFlip}
        >
          <PageCover src={'../public/Tecnolite2022v2-1.jpg'}></PageCover>
          <PageCover src={'../public/Tecnolite2022v2-2.jpg'}></PageCover>

          {pages.map((page, index) => (
            <PageLeft
              key={index + 1}
              number={index + 1}
              src={page.image}
              points={page.left}
              setSelected={setSelected}
            />
            /*               <PageRight
                key={(index + 1) * 2}
                number={(index + 1) * 2}
                src={page.image}
                points={page.right}
                setSelected={setSelected}
              />, */
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default App;
