import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend ,
  CategoryScale,
  LinearScale,
  BarElement,
  Title} from 'chart.js';
import { Pie, Bar , Doughnut} from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { Base1 } from '@layouts/Baseof';

ChartJS.register(ArcElement, CategoryScale,
  LinearScale,
  BarElement,
  Title, Tooltip, Legend);
/*
export const data = {
  labels: [ 'Yellow','Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [ 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1,
    },
  ],
};
 */

export const options = {
  
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  elements: {
    bar: {
      borderRadius: 5, // Ajustar el radio de las esquinas de las barras
      borderSkipped: false, // Desactivar el recorte de bordes para barras más anchas
    },
  },
  
};

const labels = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

const data = {
  labels: ['Aciertos', 'Errores'],
  datasets: [
    {
      data: [400, 300],
      backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
      hoverBackgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
    },
  ],
};

export const data1 = {
  labels,
  datasets: [
    {
      label: 'Errores',
      data: labels.map(() => faker.number.int({ min: -1000, max: 0 })),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Aciertos',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
  ],
};

const data2 = {
  labels: ['Aciertos', 'Errores'],
  datasets: [
    {
      data: [500, 300],
      backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
      hoverBackgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
    },
  ],
};

export const data22 = {
  labels,
  datasets: [
    {
      label: 'Errores',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Aciertos',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
  ],
};


const data3 = {
  labels: ['Aciertos', 'Errores'],
  datasets: [
    {
      data: [300, 300],
      backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
      hoverBackgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
    },
  ],
};

export const data33 = {
  labels,
  datasets: [
    {
      label: 'Errores',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Aciertos',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
  ],
};

const data4 = {
  labels: ['Aciertos', 'Errores'],
  datasets: [
    {
      data: [200, 300],
      backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
      hoverBackgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
    },
  ],
};

export const data44 = {
  labels,
  datasets: [
    {
      label: 'Errores',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Aciertos',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
  ],
};

const data5 = {
  labels: ['Aciertos', 'Errores'],
  datasets: [
    {
      data: [500, 400],
      backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
      hoverBackgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
    },
  ],
};

export const data55 = {
  labels,
  datasets: [
    {
      label: 'Errores',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Aciertos',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
  ],
};

const data6 = {
  labels: ['Aciertos', 'Errores'],
  datasets: [
    {
      data: [450, 300],
      backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
      hoverBackgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
    },
  ],
};

export const data66 = {
  labels,
  datasets: [
    {
      label: 'Errores',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Aciertos',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
  ],
};
  
const tabsStyle = 
{
  
  padding: '15px',
  textAlign: 'center',
  width: '50%',
  background: '#E0F2F1',
  cursor: 'pointer',
  borderBottom: '1px solid #1DE9B6',
  boxSizing: 'content-box',
  position: 'relative',
  outline: 'none'
};
const styleAct = {
  background: 'white',
  borderBottom: '1px solid transparent',
  textAlign: 'center',
  width: '50%',
  
};

const contStyle = 
{
 
  background: 'white',
  borderBottom: '1px solid transparent',
  position:'absolute',
  width: '60%',
  height: '40%',
  outline: 'none',
  pointerEvents: 'none',
  opacity: 0,
  display: 'flex', justifyContent: 'space-between'

};
const styleContA = {
  background: 'white',
  borderBottom: '1px solid transparent',
  position:'absolute',
  width: '60%',
  height: '40%',
  outline: 'none',
  display: 'flex', justifyContent: 'space-between'

  
};

const imageStyles = {
  width: '100px',
  height: '100px',
  borderRadius: '80%',
  objectFit: 'cover',
  margin: '0 auto',
  marginLeft: '-1010px',
  marginTop: '150px'
};

const Estadisticas = () => {
 /* const data = [
    { label: 'Categoría A', value: 10 },
    { label: 'Categoría B', value: 20 },
    { label: 'Categoría C', value: 15 },
    { label: 'Categoría D', value: 5 },
  ];*/

 // new Chart('modelsChart',  data);
 const [toggleState, setToggleState] = useState(1);

 const toggleTab = (index) => {
   setToggleState(index);
 };


  return (
    <Base1>
    <div className="container" 
    style={{
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      width: '2000px',
      height: '1000px',
      background: '#E0F2F1',
      margin: '30px auto 0',
      wordBreak: 'break-all',
      border: '1px solid #1DE9B6'
    }}
  >
    
    <div className="bloc-tabs" style={{display: 'flex'}}>
      <button
        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        style={toggleState === 1 ? styleAct: tabsStyle}
        onClick={() => toggleTab(1)
        }
      >
        General
      </button>
      <button
        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        style={toggleState === 2 ? styleAct: tabsStyle}
        onClick={() => toggleTab(2)}
      >
        Jerarquia
      </button>
      <button
        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
        style={toggleState === 3 ? styleAct: tabsStyle}
        onClick={() => toggleTab(3)}
      >
        Religion
      </button>
      <button
        className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
        style={toggleState === 4 ? styleAct: tabsStyle}
        onClick={() => toggleTab(4)}
      >
        Economia
      </button>
      <button
        className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
        style={toggleState === 5 ? styleAct: tabsStyle}
        onClick={() => toggleTab(5)}
      >
        Arte
      </button>
      <button
        className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
        style={toggleState === 6 ? styleAct: tabsStyle}
        onClick={() => toggleTab(6)}
      >
        Aquitectura
      </button>
    </div>
    
    <div className="content-tabs" style={{ backgroundColor: 'white'}}>
      
      <div
        className={toggleState === 1 ? "content  active-content" : "content"}
        style={toggleState === 1 ? styleContA: contStyle}
        
      >
      
        <Doughnut
        data={data}
        width={1}
        height={1}
        options={{
          cutoutPercentage: 10, // Porcentaje del hueco en el centro
          tooltips: {
            enabled: false
        }
        }}
        
        
      />
        <Bar
        width={410}
        height={210}
        options={options} data={data1}  />
        <img 
        src='https://www.cuadernosdeperiodistas.com/wp-content/uploads/sites/2/2014/05/porcentaje.jpg'
        alt="Imagen" style={imageStyles}
        />
       
      </div>

      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
        style={toggleState === 2 ? styleContA: contStyle}
      >
       <Doughnut
        data={data2}
        width={1}
        height={1}
        options={{
          cutoutPercentage: 10, // Porcentaje del hueco en el centro
          tooltips: {
            enabled: false
        }
        }}
        
        
      />
        <Bar
        width={410}
        height={210}
        options={options} data={data22}  />
      </div>

      <div
        className={toggleState === 3 ? "content  active-content" : "content"}
        style={toggleState === 3 ? styleContA: contStyle}
      >
        <Doughnut
        data={data3}
        width={1}
        height={1}
        options={{
          cutoutPercentage: 10, // Porcentaje del hueco en el centro
          tooltips: {
            enabled: false
        }
        }}
        
        
      />
        <Bar
        width={410}
        height={210}
        options={options} data={data33}  />

      </div>
      <div
        className={toggleState === 4 ? "content  active-content" : "content"}
        style={toggleState === 4 ? styleContA: contStyle}
      >
        <Doughnut
        data={data4}
        width={1}
        height={1}
        options={{
          cutoutPercentage: 10, // Porcentaje del hueco en el centro
          tooltips: {
            enabled: false
        }
        }}
        
        
      />
        <Bar
        width={410}
        height={210}
        options={options} data={data44}  />
      </div>
      <div
        className={toggleState === 5 ? "content  active-content" : "content"}
        style={toggleState === 5 ? styleContA: contStyle}
      >

        <Doughnut
          data={data5}
          width={1}
          height={1}
          options={{
            cutoutPercentage: 10, // Porcentaje del hueco en el centro
            tooltips: {
              enabled: false
          }
          }}
        />

        <Bar
        width={410}
        height={210}
        options={options} data={data55}  />
      </div>
      <div
        className={toggleState === 6 ? "content  active-content" : "content"}
        style={toggleState === 6 ? styleContA: contStyle}
      >
        <Doughnut
        data={data6}
        width={1}
        height={1}
        options={{
          cutoutPercentage: 10, // Porcentaje del hueco en el centro
          tooltips: {
            enabled: false
        }
        }}
        
        
      />
        <Bar
        width={410}
        height={210}
        options={options} data={data66}  />
      </div>
      <div
        className={toggleState === 7 ? "content  active-content" : "content"}
       
      ></div>
    </div>
  </div>

 </Base1>
  );
};

export default Estadisticas;
