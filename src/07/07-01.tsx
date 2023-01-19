import React, {FC} from 'react';
export type LessonsType = {
    title: string
}
export type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
}

type DestructuringComponentPropsType = {
    title: string
    man: ManType
    car: {model: string}
}
const DestructuringComponent: FC<DestructuringComponentPropsType> = ({man,title, ...props}) => {


    return (
        <div>
            {title}
            {man.name}
            <div>
                {props.car.model}
            </div>

        </div>
    );
};

export default DestructuringComponent;