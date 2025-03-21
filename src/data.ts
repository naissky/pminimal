type HeaderData = {
    title: string;
    subtitle: string;
    description: string;
}

type ProjectData = {
    title: string;
    description: string;
    image: string;
}

type ExperienceData = {
    title: string;
    description: string;
    image: string;
}

export const headerData: HeaderData = {
    title: "Naissky",
    subtitle: "Diseñador y Desarrollador web",
    description: "Soy un diseñador Grafico enfocado en la creacion y desarollo de interfaces y experiencias de usuario increibles."
}

export const projectData: ProjectData[] = [
    {
        title: "Crave Bakery",
        description: "Crave Bakery es una panaderia enfocada al toque orgánico y familiar.",
        image: "/crave-bakery.jpg"
    },
    {
        title: "Nido Creativo",
        description: "El nido es una agencia de diseño ubicada en Buenos Aires, Argentina.",
        image: "https://marcalima.pe/wp-content/uploads/2023/10/agencia_creativa.png"
    },
    {
        title: "Proyecto 3",
        description: "Descripción del proyecto 3",
        image: "https://sufio.com/content/media/images/what-is-a-font.width-1440.jpg"
    }
]

export const experienceData: ExperienceData[] = [
    {
        title: "Diseñador Grafico",
        description: "El corral.",
        image: "https://sufio.com/content/media/images/what-is-a-font.width-1440.jpg"
    },
    {
        title: "SEO & Marketing",
        description: "Nido Creativo.",
        image: "https://sufio.com/content/media/images/what-is-a-font.width-1440.jpg"
    },
    {
        title: "Freelance",
        description: "Desarrollo Web",
        image: "https://sufio.com/content/media/images/what-is-a-font.width-1440.jpg"
    }
]