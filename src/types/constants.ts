export interface INavbarItemProps {
    label: string,
    linkTo: string,
    key: number
}

export interface IIconProps {
    width?: number,
    height?: number,
    fill1?: string,
    fill2?: string,
}

export interface IHighlightedAchieverProps {
    bgColor?:string,
    rank: number| string,
    id: number,
    name: string,
    image: string,
    altImage: string,
    description: string,
    isReversed: boolean,
    color:string,
}

export interface IourFacultyDataProps{
    name: string;
    details: string;
    image:string;
}
