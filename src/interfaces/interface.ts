export interface CardTechArea {
    id: number,
    path_imageIcon: string,
    title: string,
    description: string
}


export interface CardCourse {
    id: number,
    category: string,
    DataCards: dataCard[]
}
export interface dataCard {
    id_data: number,
    path_imgCourse: string,
    path_imgCourseDedicated: string,
    icon_imagCourse: string,
    titleCourse: string,
    descriptionCourse: string,
    textButton: string,
    timeCourse: string,
}


export interface Route {
    path: string,
    component: any,
    meta?: { requiresAuth: boolean }
}


export interface NavigationSideBar {
    id: number,
    name: string,
    icon: string,

}