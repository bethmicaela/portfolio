// Habilidades tecnicas
import Python from "assets/devicon/python.svg?component"; 
import Pandas from "assets/devicon/pandas.svg?component"; 
import NumPy from "assets/devicon/numpy.svg?component"; 
import Matplotlib from "assets/devicon/matplotlib.svg?component"; 
import Tableau from "assets/devicon/tableau.svg?component"; 
import Excel from "assets/devicon/excel.svg?component"; 
import SQL from "assets/devicon/sql.svg?component"; 
import GoogleColab from "assets/devicon/google-colab.svg?component"; 
import Jupyter from "assets/devicon/jupyter.svg?component"; 
import PowerBi from "assets/devicon/power-bi.svg?component"; 

// Timeline
import Academy from "assets/icons/academy.svg?component";

const author = {
    author_image: "/profile.jpg",
    name: "Micaela Alarcón",
    position: "DATA ANALYST",
    email: "alarcondata@gmail.com",
    location: "Rosario, Argentina",
    github: "bethmicaela",
    socials: {
        linkedin: "https://www.linkedin.com/in/micaela-elizabeth-alarcon/",
    },
    expertises: {
        "Habilidades técnicas": [
            {
                name: "Python",
                icon: Python,
                description: "Python",
            },
            {
                name: "Pandas",
                icon: Pandas,
                description: "Pandas",
            },
            {
                name: "NumPy",
                icon: NumPy,
                description: "Numpy",
            },
            {
                name: "Matplotlib",
                icon: Matplotlib,
                description: "Matplotlib",
            },
            {
                name: "Tableau",
                icon: Tableau,
                description: "Tableau",
            },
            {
                name: "Excel",
                icon: Excel,
                description: "Excel",
            },
            {
                name: "SQL",
                icon: SQL,
                description: "SQL",
            },
            {
                name: "Google colab",
                icon: GoogleColab,
                description: "Google colab",
            },
            {
                name: "Jupyter Notebooks",
                icon: Jupyter,
                description: "Jupyter Notebooks",
            },
            {
                name: "Power Bi",
                icon: PowerBi,
                description: "Power Bi",
            },
        ]
    },
    timeline: [
        {
            icon: Academy,
            title: "Carrera de Ciencia de Datos",
            subtitle: "2023-presente",
            description: "Platzi",
            subcourses: [
                {
                    title: "Programación",
                    description: "Dominio de fundamentos de programación con JavaScript, HTML y algoritmos para desarrollar proyectos web desde cero.", 
                },
                {
                    title: "Git y GitHub",
                    description: "Gestion de repositorios, ramas y conflictos con Git, y GitHub para alojar proyectos, manejar issues y realizar pull requests.", 
                },
                {
                    title: "Análisis de Negocios para Ciencia de Datos",
                    description: "Aplicación de técnicas de análisis de negocios para interpretar datos, generar insights y tomar decisiones estratégicas en proyectos de ciencia de datos.",
                },
                {
                    title: "Business Intelligence: Utilidad y Áreas de Oportunidad",
                    description: "Exploración de herramientas y conceptos de Business Intelligence para identificar áreas de oportunidad y optimizar la toma de decisiones estratégicas.",
                },
                {
                    title: "Entorno de Trabajo para Ciencia de Datos con Jupyter Notebooks y Anaconda",
                    description: "Configuración y uso de Jupyter Notebooks y Anaconda para desarrollar proyectos de ciencia de datos, incluyendo análisis, visualización y gestión de entornos virtuales.",
                },
                {
                    title: "Fundamentos de Bases de Datos",
                    description: "Introducción a los conceptos esenciales de bases de datos, modelado relacional, consultas SQL y gestión eficiente de datos.",
                },
                {
                    title: "Manipulación y Análisis de Datos con Pandas y Python",
                    description: "Dominio de técnicas avanzadas de manipulación y análisis de datos utilizando Pandas y Python para limpiar, transformar y explorar conjuntos de datos de manera eficiente.",
                },
                {
                    title: "Ética y Manejo de Datos para Data Science e Inteligencia Artificial",
                    description: "Aplicación de principios éticos en el manejo de datos para crear modelos de machine learning responsables y transparentes.",
                },
            ],
        },
        {
            icon: Academy,
            title: "Bootcamp de Ciencia de Datos",
            subtitle: "2024",
            description: "Código Facilito",
            subcourses: [
                {
                    description: "Fundamentos de estadística, EDA, manipulación de datos con NumPy y Pandas, visualización avanzada, dashboards interactivos, machine learning y proyecto práctico de ciencia de datos. Uso ético de datos y Git.",
                },
            ],
        },
    ],
};

export default author;
