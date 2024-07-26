const TemplateExpressions = () => {
    const name = "Sandra";
    const data = {
        age: 50,
        jab: "Programadora"
    }


    return (
        <div>
            <h1 className="title_interpreta">Serve para interpreta
                 javascript e interpolar dados </h1>
            <h3>Olá {name},tudo bem?</h3>
            <p>Você atua como: {data.jab} </p>
            <p>{console.log("jsx React")}</p>
        </div>
    );
};

export default TemplateExpressions