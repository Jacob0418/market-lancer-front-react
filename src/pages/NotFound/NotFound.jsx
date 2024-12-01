import React from "react";
import notfound from "../../assets/img/error-404.png";

const NotFound = () => {
    return (
        <>
        <div className="flex flex-col justify-center items-center my-10">
        <img src={notfound} alt="Not Found" className="h-[320px] w-[320px] my-10"  />
        <h1 className="flex text-6xl text-center font-bold mt-10">404</h1>
        <h2 className="flex text-4xl text-center font-bold mb-10">Página no encontrada</h2>
        </div>
        </>
    );
}

export default NotFound;