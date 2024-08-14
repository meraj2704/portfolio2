

const page = ({params}:{
    params:{
        id:number
    }
}) => {

    return (
        <div>
            <h1>{params.id}</h1>
        </div>
    );
};

export default page;