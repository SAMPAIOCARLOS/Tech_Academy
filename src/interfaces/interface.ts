export interface CardTechArea {
    id: number,
    path_imageIcon: string,
    title: string,
    description: string
}


export interface CardCourse {
    id: number,
    category: string,
    DataCards: Course[]
}
export interface Course {
    id: number;
    title: string;
    description: string;
    timeCourse: string;
    category: string;
    pathImageCourse: string;
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