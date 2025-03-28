type HeaderData = {
    title: string;
    subtitle: string;
    description: string;
}

type ProjectData = {
    id: number;
    title: string;
    description: string;
    image: string;
}

type ExperienceData = {
    title: string;
    description: string;
}

export const headerData: HeaderData = {
    title: "Naissky",
    subtitle: "Diseñador y Desarrollador web",
    description: "Soy un diseñador Grafico enfocado en la creacion y desarollo de interfaces y experiencias de usuario increibles."
}

export const projectData: ProjectData[] = [
    {
        id: 1,
        title: "Crave Bakery",
        description: "Crave Bakery es una panaderia enfocada al toque orgánico y familiar.",
        image: "/crave-bakery.avif"
    },
    {
        id: 2,
        title: "Arabica",
        description: "Arabica es una cafeteria ubicada en la ciudad de Buenos Aires, Argentina.",
        image: "/arabica.avif"
    },
    {
        id: 3,
        title: "Proyecto 3",
        description: "Descripción del proyecto 3",
        image: "https://sufio.com/content/media/images/what-is-a-font.width-1440.jpg"
    }
]

export const experienceData: ExperienceData[] = [
    {
        title: "Diseñador Grafico",
        description: "El corral.",
    },
    {
        title: "SEO & Marketing",
        description: "Nido Creativo.",
    },
    {
        title: "Freelance",
        description: "Desarrollo Web",
    }
]