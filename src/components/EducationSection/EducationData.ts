import Education from './Education';
import InacapLogo from '../../../assets/inacap_logo.jpg'
import TalentoDigitalLogo from '../../../assets/talento_digital_logo.png'
import AcademiaHolaMundoLogo from '../../../assets/hola_mundo_academia.jpg'

const EducationData: Education[] = [
    {
        id: '1',
        school: 'Inacap',
        yearStart: '2018',
        yearEnd: '2020',
        degree: 'Analista Programador',
        certification: '',
        image: InacapLogo,
        description: 'Estudié en Inacap la carrera de Analista Programador, donde aprendí a programar en lenguajes como Java, C#, HTML, CSS, JavaScript, entre otros. Además, aprendí a trabajar en equipo y a desarrollar proyectos de software.'
    },
    {
        id: '2',
        school: 'Talento Digital',
        degree: ['Desarrollo de Aplicaciones Android', 'Diseño de Experiencia de Usuario (UX)'],
        certification: '',
        yearStart: '2018',
        yearEnd: '2020',
        image: TalentoDigitalLogo,
        description: 'En Talento Digital realicé un curso de Desarrollo de Aplicaciones Android, donde aprendí a programar en Java y a desarrollar aplicaciones para dispositivos móviles. Además, realicé un curso de Diseño de Experiencia de Usuario (UX), donde aprendí a diseñar interfaces de usuario y a realizar pruebas de usabilidad.'
    },
    {
        id: '2',
        school: 'Academia Hola Mundo',
        degree: ['TypeScript: Sin Fronteras', 'SQL: Sin Fronteras'],
        certification: '',
        yearStart: '2023',
        yearEnd: '2024',
        image: AcademiaHolaMundoLogo,
        description: 'En Academia Hola Mundo realicé un curso de TypeScript: Sin Fronteras, donde aprendí a programar en TypeScript y a desarrollar aplicaciones web. Además, realicé un curso de SQL: Sin Fronteras, donde aprendí a trabajar con bases de datos relacionales y a realizar consultas SQL.'
    },

];

export default EducationData;